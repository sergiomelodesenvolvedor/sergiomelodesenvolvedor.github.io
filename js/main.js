// Configuração inicial quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  // Simulação de carregamento
  setTimeout(function() {
    const loading = document.getElementById('loading-screen');
    if (loading) loading.classList.add('hidden');
    const main = document.getElementById('main-content');
    if (main) main.style.display = 'block';
    
    // Animação de entrada suave
    setTimeout(function() {
      if (main) main.style.opacity = '1';
    }, 120);
  }, 1400);

  // Menu móvel
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() { mobileMenu.classList.add('active'); });
  }
  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener('click', function() { mobileMenu.classList.remove('active'); });
  }

  // Fechar menu ao clicar em um link
  document.querySelectorAll('.mobile-nav a').forEach(function(link) {
    link.addEventListener('click', function() {
      if (mobileMenu) mobileMenu.classList.remove('active');
    });
  });

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });

  // Carregar projetos
  loadProjects();

  // Configurar formulário de contato
  setupContactForm();

  // Small UI effects
  initHeaderAutoHide();
  initRevealOnScroll();
  initTypewriter();
  initCTARipple();
  initFloatingLettersEffect();
});

// Dados dos projetos
const projectsData = {
  frontend: [
    {
      title: "Pixel Art Pro",
      description: "Um editor de pixel art simples, rápido e responsivo. Permite escolher cores, criar quadros personalizados, pintar arrastando e salvar automaticamente o desenho no navegador.",
      image: "./pixel-art-logo.png",
      link: "./pixel-arts/index.html",
      technologies: ["HTML5", "CSS", "JavaScript","Design Responsivo"]
    },
    {
      title: "Weather App",
      description: "Previsão do tempo simples e rápida. Busque cidades ou use sua localização para ver clima atual e temperatura por hora com visual limpo.",
      image: "./Weather_App.png",
      link: "./Weather_App/index.html",
      technologies: ["HTML5", "CSS", "JavaScript", "API","Design Responsivo"]
    },
    {
      title: "Habit Tracker",
      description: "HabitFlow é um rastreador de hábitos simples e intuitivo que ajuda você a criar disciplina, acompanhar progresso diário e transformar pequenas ações em conquistas duradouras.",
      image: "./Habit-Tracker.png",
      link: "./habit-tracker/index.html",
      technologies: ["HTML5", "JavaScript", "LocalStorage API", "UI/UX Básico", "Design Responsivo"]
    }
  ],
  backend: [
    {
      title: "DevShop",
      description: "E-commerce completo com API REST desenvolvida em Node.js e Express. Sistema de gerenciamento de produtos, categorias e pedidos com persistência em MySQL. Interface frontend moderna e responsiva para navegação de produtos e checkout.",
      image: "./loja-virtual/frontend/assets/images/logo.svg",
      link: "./loja-virtual-demo/index.html",
      technologies: ["Node.js", "Express", "MySQL", "REST API", "JavaScript", "HTML5", "CSS3"],
      imageClass: "devshop-logo"
    },
    {
      title: "Auth & Users API — Em construção",
      description: "Serviço de autenticação e gestão de usuários. Planejado com cadastro/login, recuperação de senha, refresh tokens, RBAC e auditoria. Endpoints REST padronizados e documentação OpenAPI.",
      image: "./assets/backend-under-construction.svg",
      link: "#",
      technologies: ["JWT", "OAuth", "PostgreSQL"],
      imageClass: "backend-uc",
      underConstruction: true
    },
    {
      title: "Orquestração de Microserviços — Em construção",
      description: "Arquitetura orientada a eventos com mensageria e cache. Foco em resiliência, idempotência e observabilidade (tracing, métricas e logs estruturados).",
      image: "./assets/backend-under-construction.svg",
      link: "#",
      technologies: ["Docker", "Redis", "RabbitMQ"],
      imageClass: "backend-uc",
      underConstruction: true
    }
  ],
  ai: [
    {
      title: "Chat Bot Financeiro",
      description: "Assistente financeiro que entende comandos em português, registra depósitos e saques, e informa seu saldo em tempo real. Backend em FastAPI com persistência SQLite, NLP híbrido (regras + Groq LLM) e frontend web simples para conversas.",
      image: "./chatbot-financeiro.png",
      link: "./DevChatBot/frontend/index.html",
      technologies: [],
      imageClass: "ai-chatbot",
      skills: [
        "Python",
        "FastAPI",
        "Uvicorn",
        "CORS",
        "Rotas REST",
        "NLP (Regex, Intent Detection)",
        "Groq LLM API",
        "Banco de Dados SQLite",
        "WAL Mode",
        "Modelagem de Transações",
        "Formatação BRL",
        "Frontend (HTML/CSS/JS)",
        "Fetch API",
        "Testes (pytest)"
      ],
    }
  ]
};

// Função para carregar projetos na página
function loadProjects() {
  const frontendGrid = document.getElementById('frontend-projects');
  const backendGrid = document.getElementById('backend-projects');
  const aiGrid = document.getElementById('ai-projects');
  
  // Carregar projetos frontend
  projectsData.frontend.forEach(project => {
    const projectCard = createProjectCard(project);
    frontendGrid.innerHTML += projectCard;
  });
  
  // Carregar projetos backend
  projectsData.backend.forEach(project => {
    const projectCard = createProjectCard(project);
    backendGrid.innerHTML += projectCard;
  });
  
  // Carregar projetos de IA
  projectsData.ai.forEach(project => {
    const projectCard = createProjectCard(project);
    aiGrid.innerHTML += projectCard;
  });
}

// Função para criar o card do projeto
function createProjectCard(project) {
  const techList = (project.skills && project.skills.length ? project.skills : project.technologies || []).map(item => 
    `<span class="tech-tag">${item}</span>`
  ).join('');
  
  const imageClass = project.imageClass ? `project-image ${project.imageClass}` : 'project-image';
  const underFlag = project.underConstruction ? 'under-construction' : '';
  const statusBadge = project.underConstruction ? '<span class="status-badge">Em construção</span>' : '';
  
  return `
    <div class="project-card reveal-on-scroll">
      <div class="project-media ${underFlag}">
        ${statusBadge}
        <img src="${project.image}" alt="${project.title}" class="${imageClass}">
      </div>
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        ${techList ? `<div class="technologies">${techList}</div>` : ''}
        <a href="${project.link}" target="_blank" class="project-link">Ver projeto</a>
      </div>
    </div>
  `;
}

// Configurar formulário de contato
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação básica
    const nome = document.getElementById('inputNome').value;
    const email = document.getElementById('inputEmail').value;
    const mensagem = document.getElementById('text-area-mensagem').value;
    
    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    
    // Simulação de envio
    const button = document.getElementById('buttonEnviarMensagem');
    const originalText = button.textContent;
    
    button.textContent = 'Enviando...';
    button.disabled = true;
    
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
      contactForm.reset();
      button.textContent = originalText;
      button.disabled = false;
    }, 2000);
  });
}

// Adicionar estilos para as tags de tecnologia
const style = document.createElement('style');
style.textContent = `
  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .tech-tag {
    background-color: var(--primary-color);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
  }
  
  .project-image.devshop-logo {
    object-fit: contain;
    object-position: center;
    padding: 0.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    height: 220px;
  }
  .project-image.backend-uc {
    object-fit: contain;
    object-position: center;
    padding: 0.5rem;
    background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%);
    height: 220px;
  }
  .project-image.ai-chatbot {
    object-position: center;
    padding: 0.5rem;
    background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
    height: 220px;
  }
  .project-media { position: relative; border-radius: 12px; overflow: hidden; }
  .project-media .status-badge {
    position: absolute; top: 10px; left: 10px;
    background: #f59e0b; color: #1f2937;
    font-weight: 800; text-transform: uppercase; letter-spacing: .04em;
    padding: 6px 10px; border-radius: 999px;
    box-shadow: 0 4px 10px rgba(0,0,0,.18);
    font-size: 12px;
  }
  .project-media.under-construction::after {
    content: ""; position: absolute; inset: 0; pointer-events:none;
    background:
      repeating-linear-gradient(-45deg,
        rgba(245,158,11,.22) 0 12px,
        rgba(245,158,11,.32) 12px 24px,
        rgba(0,0,0,0) 24px 36px);
    mix-blend-mode: normal;
  }
  .project-media.under-construction::before {
    content: "EM CONSTRUÇÃO"; position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%) rotate(-6deg);
    color: #fef3c7; text-shadow: 0 2px 12px rgba(0,0,0,.45);
    font-weight: 900; letter-spacing: .12em; pointer-events:none;
    font-size: clamp(16px, 2.8vw, 28px);
  }
`;
document.head.appendChild(style);

/* ------------------ Interactive helpers ------------------ */

function initHeaderAutoHide() {
  const header = document.querySelector('.main-header');
  if (!header) return;
  let lastY = window.scrollY;
  let ticking = false;
  const threshold = 8;

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const current = window.scrollY;
        if (current > lastY + threshold && current > 120) {
          header.classList.add('header-hidden');
        } else if (current < lastY - threshold) {
          header.classList.remove('header-hidden');
        }
        lastY = current;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function initRevealOnScroll() {
  const revealSelector = '.reveal-on-scroll';
  const items = Array.from(document.querySelectorAll(revealSelector));
  // ensure some hero elements are marked
  const heroItems = ['.profile-image', '.hero-title', '.hero-subtitle', '.hero-description'];
  heroItems.forEach(sel => {
    const el = document.querySelector(sel);
    if (el && !el.classList.contains('reveal-on-scroll')) el.classList.add('reveal-on-scroll');
  });

  if (!items.length && document.querySelectorAll(revealSelector).length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: unobserve so animation runs once
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(revealSelector).forEach(el => observer.observe(el));
}

function sleep(ms){ return new Promise(resolve => setTimeout(resolve, ms)); }

async function initTypewriter() {
  const el = document.querySelector('.hero-subtitle');
  if (!el) return;
  const phrases = ['Desenvolvedor Web Full Stack', 'Frontend • Backend', 'Criador de experiências digitais'];
  const cursor = document.createElement('span'); cursor.className = 'typed-cursor';
  el.parentNode && el.parentNode.appendChild(cursor);

  // Type each phrase once. Keep the last phrase visible and stop.
  for (let idx = 0; idx < phrases.length; idx++) {
    const phrase = phrases[idx];
    await typeText(el, phrase, 55);
    if (idx !== phrases.length - 1) {
      await sleep(900);
      await deleteText(el, 35);
      await sleep(400);
    }
  }

  // Finished typing sequence: remove blinking cursor after a short pause
  await sleep(700);
  if (cursor && cursor.parentNode) cursor.remove();

  async function typeText(node, text, speed) {
    node.textContent = '';
    for (let j = 0; j < text.length; j++) {
      node.textContent += text[j];
      await sleep(speed + Math.random()*40);
    }
  }

  async function deleteText(node, speed) {
    const txt = node.textContent;
    for (let j = txt.length; j >= 0; j--) {
      node.textContent = txt.slice(0, j);
      await sleep(speed + Math.random()*20);
    }
  }
}

function initCTARipple() {
  const cta = document.querySelector('.header-cta');
  if (!cta) return;
  cta.addEventListener('click', function(e) {
    const rect = cta.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size/2}px`;
    ripple.style.top = `${e.clientY - rect.top - size/2}px`;
    cta.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
}

function initFloatingLettersEffect(){
  const letters = Array.from(document.querySelectorAll('.floating-letter'));
  const projectsEl = document.getElementById('projects');
  if (!letters.length || !projectsEl) return;

  // store default opacity for each letter (fallback)
  letters.forEach(el => {
    const cur = parseFloat(getComputedStyle(el).opacity) || 0.22;
    el.dataset.defaultOpacity = String(cur);
  });

  function rectsIntersect(r1, r2) {
    return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
  }

  let ticking = false;
  function checkCollision() {
    const projRect = projectsEl.getBoundingClientRect();
    letters.forEach(el => {
      const rect = el.getBoundingClientRect();
      // If letter intersects projects, fade it
      if (rectsIntersect(rect, projRect)) {
        el.style.opacity = '0.04';
        el.dataset.faded = '1';
        return;
      }

      // If letter was faded but is now fully above the projects section, restore opacity
      if (el.dataset.faded === '1') {
        // letter is before projects if its bottom is above project's top
        if (rect.bottom < projRect.top) {
          el.style.opacity = el.dataset.defaultOpacity || '0.28';
          delete el.dataset.faded;
        }
      }
    });
    ticking = false;
  }

  function onScrollResize() {
    if (!ticking) {
      window.requestAnimationFrame(checkCollision);
      ticking = true;
    }
  }

  // initial check
  checkCollision();
  window.addEventListener('scroll', onScrollResize, { passive: true });
  window.addEventListener('resize', onScrollResize);
}