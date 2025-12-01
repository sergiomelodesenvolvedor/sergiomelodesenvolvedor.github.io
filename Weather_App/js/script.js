const codes = {
  0: ["☀️", "Céu limpo"],
  1: ["☀️", "Principalmente limpo"],
  2: ["⛅", "Parcialmente nublado"],
  3: ["☁️", "Nublado"],
  45: ["🌫️", "Nevoeiro"],
  48: ["🌫️", "Nevoeiro gelado"],
  51: ["🌦️", "Garoa leve"],
  53: ["🌦️", "Garoa moderada"],
  55: ["🌦️", "Garoa forte"],
  61: ["🌧️", "Chuva leve"],
  63: ["🌧️", "Chuva moderada"],
  65: ["🌧️", "Chuva forte"],
  80: ["🌦️", "Pancadas leves"],
  81: ["🌦️", "Pancadas moderadas"],
  82: ["🌧️", "Pancadas fortes"],
};

function setBackground(code) {
  const sunny = "linear-gradient(135deg, #FFD36E, #FF9F1C)";
  const cloudy = "linear-gradient(135deg, #8e9eab, #eef2f3)";
  const rain = "linear-gradient(135deg, #5f72bd, #9b23ea)";

  let bg = sunny;
  // Clear / mainly clear -> sunny
  if (code === 0 || code === 1) bg = sunny;
  // Partly cloudy / overcast / fog -> cloudy background
  else if (code === 2 || code === 3 || code === 45 || code === 48) bg = cloudy;
  // Rain and showers (WMO codes 51-82) -> rain background
  else if (code >= 51 && code <= 82) bg = rain;

  document.body.style.background = bg;
}

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return;

  const geo = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
  ).then(r => r.json());

  if (!geo.length) {
    document.getElementById("weather").innerHTML = "Cidade não encontrada";
    return;
  }

  const lat = geo[0].lat;
  const lon = geo[0].lon;
  const cityName = geo[0].display_name.split(",")[0];

  loadWeather(lat, lon, cityName);
}

async function getLocationWeather() {
  navigator.geolocation.getCurrentPosition(async pos => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    // Consulta nome da cidade a partir da latitude e longitude
    const reverse = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    ).then(r => r.json());

    let cityName = reverse.address.city ||
                   reverse.address.town ||
                   reverse.address.village ||
                   reverse.address.suburb ||
                   "Localização desconhecida";

    loadWeather(lat, lon, cityName);
  });
}
async function loadWeather(lat, lon, cityName) {
  const api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,weathercode&timezone=auto`;

  const w = await fetch(api).then(r => r.json());
  // DEBUG: mostrar a resposta completa da API para inspeção
  console.log("[DEBUG] weather API response:", w);
  const c = w.current_weather;

  // Find the hourly entry closest to current_weather.time (handles timezone/format differences)
  const currentTime = c.time; // ISO time string from current_weather
  const currentMs = Date.parse(currentTime);

  const hourlyMs = w.hourly.time.map(t => Date.parse(t));
  let idx = 0;
  let minDiff = Infinity;
  for (let i = 0; i < hourlyMs.length; i++) {
    const d = Math.abs(hourlyMs[i] - currentMs);
    if (d < minDiff) {
      minDiff = d;
      idx = i;
    }
  }

  const currentCode = w.hourly.weathercode[idx];
  const currentTemp = w.hourly.temperature_2m[idx];
  // DEBUG: valores que usamos para o display atual
  console.log("[DEBUG] currentTime:", currentTime, "idx:", idx, "currentCode:", currentCode, "currentTemp:", currentTemp);
  const [icon, desc] = codes[currentCode] || ["❓", "Desconhecido"];

  setBackground(currentCode);

  document.getElementById("weather").innerHTML = `
    <div class="icon">${icon}</div>
    <div class="temp">${currentTemp}°C</div>
    <div class="condition">${desc}</div>
    <div>${cityName}</div>
  `;

  // Build hourly cards from the current hour until the end of the same day
  let hourlyHTML = "";
  const currentDate = w.hourly.time[idx].split("T")[0];
  for (let i = idx; i < w.hourly.time.length; i++) {
    const datePart = w.hourly.time[i].split("T")[0];
    if (datePart !== currentDate) break; // stop at end of day

    const time = w.hourly.time[i].split("T")[1].slice(0, 5);
    const temp = w.hourly.temperature_2m[i];
    const code = w.hourly.weathercode[i];
    const ic = codes[code]?.[0] || "❓";

    hourlyHTML += `
      <div class="hour-card">
        <div>${time}</div>
        <div style="font-size:24px;">${ic}</div>
        <div>${temp}°C</div>
      </div>
    `;
  }

  // If for some reason there were no entries for the rest of today (edge cases),
  // show the next 12 hours starting from idx as a fallback.
  if (!hourlyHTML) {
    for (let i = idx; i < Math.min(idx + 12, w.hourly.time.length); i++) {
      const time = w.hourly.time[i].split("T")[1].slice(0, 5);
      const temp = w.hourly.temperature_2m[i];
      const code = w.hourly.weathercode[i];
      const ic = codes[code]?.[0] || "❓";

      hourlyHTML += `
        <div class="hour-card">
          <div>${time}</div>
          <div style="font-size:24px;">${ic}</div>
          <div>${temp}°C</div>
        </div>
      `;
    }
  }

  document.getElementById("hourly").innerHTML = hourlyHTML;
}
