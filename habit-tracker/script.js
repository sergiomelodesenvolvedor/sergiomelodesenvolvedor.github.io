const STORAGE_KEY = "habits_pro_v1";
let habits = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

/* helpers data/hora */
function iso(d){ // retorna YYYY-MM-DD
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,"0");
  const dd = String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-${dd}`;
}
function startOfWeek(date){ // semana começa no domingo
  const t = new Date(date);
  const day = t.getDay(); // 0..6, 0 = domingo
  t.setDate(t.getDate() - day);
  t.setHours(0,0,0,0);
  return t;
}
function todayIso(){ return iso(new Date()); }

/* util id simples */
function uid(){ return Math.random().toString(36).slice(2,9); }

/* persistência */
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(habits)); }

/* converte dados antigos (days) para history se necessário */
function migrateIfNeeded(){
  let changed=false;
  const weekStart = startOfWeek(new Date());
  habits.forEach(h=>{
    if(!h.history && h.days){
      const hist = h.history || [];
      for(let i=0;i<7;i++){
        if(h.days[i]){
          const d = new Date(weekStart);
          d.setDate(weekStart.getDate()+i);
          const isoD = iso(d);
          if(!hist.includes(isoD)) hist.push(isoD);
        }
      }
      h.history = hist;
      delete h.days;
      changed=true;
    }
    if(!h.id){ h.id = uid(); changed=true; }
    if(!h.history) h.history = [];
  });
  if(changed) save();
}

/* calcula streak atual: conta quantos dias consecutivos até hoje existiam em history */
function computeStreak(history){
  const s = new Set(history);
  let count=0;
  let d = new Date();
  while(true){
    const key = iso(d);
    if(s.has(key)){ count++; d.setDate(d.getDate()-1); }
    else break;
  }
  return count;
}

/* melhor streak (maior sequência contínua encontrada) */
function computeBestStreak(history){
  if(!history.length) return 0;
  const arr = Array.from(new Set(history)).sort(); // lexicographic works for ISO
  let best=0, cur=1;
  for(let i=1;i<arr.length;i++){
    const prev = new Date(arr[i-1]);
    const curr = new Date(arr[i]);
    const diff = (curr - prev) / (1000*60*60*24);
    if(diff===1) cur++;
    else { best = Math.max(best,cur); cur=1; }
  }
  best = Math.max(best,cur);
  return best;
}

/* calcula progresso da semana para o hábito (0..100) */
function weekProgress(history){
  const start = startOfWeek(new Date());
  const days = [];
  for(let i=0;i<7;i++){
    const d = new Date(start);
    d.setDate(start.getDate()+i);
    days.push(iso(d));
  }
  const s = new Set(history);
  const done = days.filter(x => s.has(x)).length;
  return Math.round((done/7)*100);
}

/* usado para mostrar dias da semana (S T Q Q S S D) começando no domingo */
const weekLabels = ["D","S","T","Q","Q","S","S"]; // Domingo, Segunda...

/* UI rendering */
function render(){
  migrateIfNeeded();
  const list = document.getElementById("habitList");
  list.innerHTML = "";

  // atualizar sidebar resumo
  const totalHabits = habits.length;
  const totalPercent = totalHabits ? Math.round(habits.reduce((acc,h)=>acc+weekProgress(h.history),0)/totalHabits) : 0;
  document.getElementById("totalHabits").textContent = totalHabits;
  document.getElementById("totalPercent").textContent = totalPercent + "%";

  if(!habits.length){
    list.innerHTML = `<div style="padding:18px;color:var(--muted)" class="no-habits">Nenhum hábito ainda — adicione usando o campo acima.</div>`;
    return;
  }

  const start = startOfWeek(new Date());
  habits.forEach((h, idx) => {
    const card = document.createElement("div");
    card.className = "habit";

    // header row
    const header = document.createElement("div");
    header.className = "habit-row";

    const left = document.createElement("div");
    left.className = "habit-left";

    const name = document.createElement("div");
    name.className = "habit-name";
    name.textContent = h.name;

    const meta = document.createElement("div");
    meta.className = "meta";
    const streak = computeStreak(h.history);
    const best = computeBestStreak(h.history);
    meta.textContent = `Streak: ${streak} • Best: ${best}`;

    left.appendChild(name);
    left.appendChild(meta);

    const actions = document.createElement("div");
    actions.className = "actions";

    // edit
    const editBtn = document.createElement("button");
    editBtn.className = "icon-btn";
    editBtn.title = "Editar hábito";
    editBtn.innerHTML = "✎";
    editBtn.onclick = () => {
      const nv = prompt("Editar nome do hábito:", h.name);
      if(nv!==null){
        const nameTrim = nv.trim();
        if(nameTrim){
          h.name = nameTrim;
          save(); render();
        } else alert("Nome não pode ficar vazio.");
      }
    };

    // delete
    const del = document.createElement("button");
    del.className = "icon-btn";
    del.title = "Excluir hábito";
    del.innerHTML = "🗑️";
    del.onclick = () => {
      if(confirm(`Excluir hábito "${h.name}"?`)){
        habits.splice(idx,1); save(); render();
      }
    };

    actions.appendChild(editBtn);
    actions.appendChild(del);

    header.appendChild(left);
    header.appendChild(actions);

    // days row
    const daysRow = document.createElement("div");
    daysRow.className = "days";

    for(let d=0; d<7; d++){
      const dayDate = new Date(start);
      dayDate.setDate(start.getDate()+d);
      const isoD = iso(dayDate);
      const isDone = h.history.includes(isoD);

      const b = document.createElement("div");
      b.className = "day" + (isDone ? " done" : "");
      b.textContent = weekLabels[d];
      b.title = `${dayDate.toLocaleDateString()} — ${isDone ? 'Desmarcar' : 'Marcar'}`;
      b.onclick = () => {
        // toggle in history
        if(isDone){
          // remove
          h.history = h.history.filter(x => x !== isoD);
        } else {
          h.history.push(isoD);
        }
        save(); render();
      };
      daysRow.appendChild(b);
    }

    // progress
    const progressWrap = document.createElement("div");
    progressWrap.className = "progress-wrap";
    const progress = document.createElement("div");
    progress.className = "progress";
    const bar = document.createElement("div");
    bar.className = "bar";
    const pct = weekProgress(h.history);
    bar.style.width = pct + "%";
    progress.appendChild(bar);

    const pctText = document.createElement("div");
    pctText.className = "meta";
    pctText.style.marginTop = "8px";
    pctText.textContent = `${pct}% da semana concluída`;

    card.appendChild(header);
    card.appendChild(daysRow);
    card.appendChild(progress);
    card.appendChild(pctText);

    list.appendChild(card);
  });
}

/* adicionar hábito */
function addHabit(){
  const input = document.getElementById("habitInput");
  const name = input.value.trim();
  if(!name) return;
  habits.push({ id: uid(), name, history: [] });
  input.value = "";
  save(); render();
  input.focus();
}

/* resetar semana (remove histórico das datas que pertencem à semana atual) */
function resetWeek(){
  if(!confirm("Resetar os registros desta semana para todos os hábitos?")) return;
  const start = startOfWeek(new Date());
  const weekDates = [];
  for(let i=0;i<7;i++){
    const d = new Date(start); d.setDate(start.getDate()+i);
    weekDates.push(iso(d));
  }
  habits.forEach(h=>{
    h.history = h.history.filter(x => !weekDates.includes(x));
  });
  save(); render();
}

/* ESTATÍSTICAS & modal */
function openStats(){
  const modal = document.getElementById("statsModal");
  const body = document.getElementById("statsBody");
  // geral
  const total = habits.length;
  const totalPct = total ? Math.round(habits.reduce((a,h)=>a+weekProgress(h.history),0)/total) : 0;
  const bestOverall = habits.reduce((mx,h)=>Math.max(mx,computeBestStreak(h.history)),0);

  let html = `
    <div style="display:flex;gap:10px;align-items:center;justify-content:space-between">
      <div>
        <div class="small">Hábitos</div><h3>${total}</h3>
      </div>
      <div>
        <div class="small">Progresso médio</div><h3>${totalPct}%</h3>
      </div>
      <div>
        <div class="small">Melhor streak</div><h3>${bestOverall} dias</h3>
      </div>
    </div>
    <div style="margin-top:12px">
      <h3>Detalhes por hábito</h3>
      <div style="margin-top:8px;display:flex;flex-direction:column;gap:8px">
  `;
  habits.forEach(h=>{
    const cur = computeStreak(h.history);
    const best = computeBestStreak(h.history);
    html += `<div style="display:flex;justify-content:space-between;gap:8px">
      <div><strong>${h.name}</strong><div class="small">${weekProgress(h.history)}% esta semana</div></div>
      <div style="text-align:right"><div>Atual: <strong>${cur}</strong></div><div class="small">Melhor: ${best}</div></div>
    </div>`;
  });

  html += `</div></div>`;

  body.innerHTML = html;
  modal.classList.add("open");
}
function closeStats(){ document.getElementById("statsModal").classList.remove("open"); }

/* EXPORT / IMPORT */
function exportBackup(){
  const blob = new Blob([JSON.stringify(habits, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `habits-backup-${(new Date()).toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast("Backup exportado.");
}
function importBackup(){
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json";
  input.onchange = e => {
    const f = e.target.files[0];
    if(!f) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try{
        const data = JSON.parse(ev.target.result);
        if(!Array.isArray(data)) throw new Error("Arquivo inválido");
        if(!confirm("Importar substituirá seus hábitos atuais. Deseja continuar?")) return;
        habits = data.map(h=>{
          return {
            id: h.id || uid(),
            name: h.name || "Sem nome",
            history: Array.isArray(h.history) ? Array.from(new Set(h.history)) : []
          };
        });
        save(); render();
        showToast("Importação concluída.");
      }catch(err){
        alert("Erro ao importar arquivo: " + err.message);
      }
    };
    reader.readAsText(f);
  };
  input.click();
}

/* Notificações simples */
let notifInterval = null;
function requestNotificationPermission(){
  if(!("Notification" in window)) { alert("Seu navegador não suporta Notifications API."); return; }
  Notification.requestPermission().then(p=>{
    showToast("Permissão: " + p);
  });
}

function showToast(msg, duration=2800){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(()=> t.classList.remove("show"), duration);
}

function scheduleNotifications(timeStr){
  if(notifInterval) { clearInterval(notifInterval); notifInterval = null; }

  const [hh,mm] = timeStr.split(":").map(Number);
  if(Notification && Notification.permission !== "granted"){
    Notification.requestPermission().then(p=>{
      if(p !== "granted"){
        showToast("Notificações bloqueadas — serão mostrados lembretes somente na aba.");
      } else showToast("Notificações ativadas.");
    });
  } else {
    showToast("Lembrete agendado às " + timeStr);
  }

  notifInterval = setInterval(()=>{
    const now = new Date();
    if(now.getHours()===hh && now.getMinutes()===mm && now.getSeconds()<30){
      const pending = habits.filter(h => computeStreak(h.history)===0).slice(0,3).map(x=>x.name);
      const body = pending.length ? `Ainda não marcou: ${pending.join(", ")}` : "Você já marcou seus hábitos hoje — bom trabalho!";
      if("Notification" in window && Notification.permission==="granted"){
        new Notification("Lembrete de hábitos", { body });
      } else {
        showToast(body, 5000);
      }
    }
  }, 30000);
}

/* Theme detection & toggle */
function applyTheme(){
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const stored = localStorage.getItem("theme_pref");
  const theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("themeToggle").textContent = theme === "dark" ? "☀️" : "🌙";
}
function toggleTheme(){
  const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = cur === "dark" ? "light" : "dark";
  localStorage.setItem("theme_pref", next);
  applyTheme();
}

/* eventos DOM ligação */
document.getElementById("addBtn").addEventListener("click", addHabit);
document.getElementById("habitInput").addEventListener("keydown", e => { if(e.key==="Enter") addHabit(); });

document.getElementById("resetWeek").addEventListener("click", resetWeek);
document.getElementById("openStats").addEventListener("click", openStats);
document.getElementById("closeStats").addEventListener("click", closeStats);
document.getElementById("backupBtn").addEventListener("click", exportBackup);
document.getElementById("importBtn").addEventListener("click", importBackup);
document.getElementById("enableNotif").addEventListener("click", ()=> {
  requestNotificationPermission();
  scheduleNotifications(document.getElementById("notifyTime").value || "20:00");
});
document.getElementById("themeToggle").addEventListener("click", toggleTheme);

/* orientação inicial: migrate & render */
migrateIfNeeded();
applyTheme();
render();

/* Accessibility: close modal on ESC */
document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeStats();
});

/* clean up on unload */
window.addEventListener("beforeunload", ()=>{ if(notifInterval) clearInterval(notifInterval); });
