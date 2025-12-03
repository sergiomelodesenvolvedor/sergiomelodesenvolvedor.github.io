// ==================== PALETA =====================
const palette = document.getElementById("color-palette");
const colorPicker = document.getElementById("colorPicker");
const addColorBtn = document.getElementById("addColor");
const clearBtn = document.getElementById("clear-board");
const board = document.getElementById("pixel-board");
const boardSizeInput = document.getElementById("board-size");
const generateBtn = document.getElementById("generate-board");
const themeBtn = document.getElementById("toggle-theme");

let selectedColor = "black";
let isDrawing = false;
let currentSize = 16;

const defaultColors = ["black", "green", "red", "blue", "purple"];

function createPalette() {
  palette.innerHTML = "";
  defaultColors.forEach((color) => {
    const d = document.createElement("div");
    d.className = "color";
    d.style.background = color;

    d.addEventListener("click", () => {
      document.querySelectorAll(".color").forEach(c => c.classList.remove("selected"));
      d.classList.add("selected");
      selectedColor = color;
    });

    palette.appendChild(d);
  });

  document.querySelector(".color").classList.add("selected");
}
createPalette();

// Adicionar nova cor
addColorBtn.addEventListener("click", () => {
  const newColor = colorPicker.value;
  defaultColors.push(newColor);
  createPalette();
});

// ==================== QUADRO =====================

function generateBoard(size = 16) {
  size = Math.max(1, Math.min(size, 100));
  currentSize = size;

  // calcula tamanho do board baseado na viewport
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  // usar quase a largura total da viewport para deixar o quadro maior em mobile
  const targetBoard = Math.min(Math.floor(vw * 0.985), 740); // limite superior

  // lê gap e padding do CSS (fallbacks se não disponíveis)
  const cs = getComputedStyle(board);
  const gap = parseInt(cs.gap) || parseInt(cs.rowGap) || 3;
  const padding = parseInt(cs.padding) || 12;

  // Comportamento MOBILE: força tamanho mínimo de pixel e reduz colunas se necessário
  if (vw <= 600) {
    // aumentei o tamanho mínimo do pixel para deixar o board mais 'usável' em telas pequenas
    const minPixelMobile = 20; // mínimo desejado em mobile (ajustável)
    const maxColsByMinPixel = Math.floor((targetBoard - padding * 2 + gap) / (minPixelMobile + gap));
    if (maxColsByMinPixel >= 1 && maxColsByMinPixel < size) {
      size = Math.max(1, maxColsByMinPixel);
    }

    // On mobile we let CSS define the board width (100% of container).
    // Compute pixel size from the actual rendered width to avoid overflow.
    board.style.width = '';
    board.style.height = '';
    // Force a reflow so clientWidth is accurate
    const boardWidth = Math.max(0, board.clientWidth || targetBoard);
    const pixelSize = Math.floor((boardWidth - padding * 2 - gap * (size - 1)) / size) || minPixelMobile;
    // Ensure pixelSize is at least the mobile minimum
    const finalPixel = Math.max(pixelSize, minPixelMobile);
    // set columns and rows using the computed pixel size
    board.style.gridTemplateColumns = `repeat(${size}, ${finalPixel}px)`;
    board.style.gridAutoRows = `${finalPixel}px`;
    // set height to match width (square board): compute desired total board height
    const totalHeight = finalPixel * size + padding * 2 + gap * (size - 1);
    board.style.height = `${totalHeight}px`;
  } else {
    // Comportamento DESKTOP: preserva layout fluido original (1fr)
    board.style.width = "";
    board.style.height = "";
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridAutoRows = "";
  }
  board.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";

    pixel.addEventListener("mousedown", () => {
      isDrawing = true;
      pixel.style.background = selectedColor;
      saveBoard();
    });

    pixel.addEventListener("mouseover", () => {
      if (isDrawing) {
        pixel.style.background = selectedColor;
        saveBoard();
      }
    });

    pixel.addEventListener("touchstart", (e) => {
      e.preventDefault();
      isDrawing = true;
      pixel.style.background = selectedColor;
      saveBoard();
    });

    pixel.addEventListener("touchmove", (e) => {
      e.preventDefault();
      const t = e.touches[0];
      const element = document.elementFromPoint(t.clientX, t.clientY);
      if (element && element.classList.contains("pixel")) {
        element.style.background = selectedColor;
        saveBoard();
      }
    });

    board.appendChild(pixel);
  }

  loadBoard();
}

// gera board inicial e reajusta quando a janela muda de tamanho
generateBoard(16);
window.addEventListener('resize', () => generateBoard(currentSize));

// Stop drawing
document.body.addEventListener("mouseup", () => (isDrawing = false));
document.body.addEventListener("mouseleave", () => (isDrawing = false));

// Gerar
generateBtn.addEventListener("click", () => {
  generateBoard(Number(boardSizeInput.value));
});

// Limpar
clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".pixel").forEach(p => p.style.background = "white");
  saveBoard();
});

// ==================== LOCAL STORAGE =====================
function saveBoard() {
  const pixels = [...document.querySelectorAll(".pixel")].map(p => p.style.background);
  localStorage.setItem("pixelBoard", JSON.stringify(pixels));
}

function loadBoard() {
  const saved = JSON.parse(localStorage.getItem("pixelBoard"));
  if (!saved) return;
  document.querySelectorAll(".pixel").forEach((p, i) => p.style.background = saved[i]);
}

// ==================== DARK MODE =====================
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
