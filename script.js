const answers = [
  "No.",
  "Nope.",
  "No, gracias.",
  "No, ni lo pienses.",
  "No, eso es un reporte.",
  "No, eso es una tabla.",
  "No, es un dashboard.",
  "No, es un CSV con autoestima.",
  "No, es una query con marketing.",
  "No, es PowerPoint con KPIs.",
  "No, es una API con complejo de producto.",
  "No, es Excel con deploy.",
  "No, es una métrica con sombrero.",
  "No, es deuda técnica con landing.",
  "No, es un pipeline buscando cariño.",
  "No, es un modelo sin usuarios.",
  "No, es un backlog disfrazado.",
  "No, es una demo de viernes.",
  "No, es BI con presupuesto.",
  "No, pero suena caro.",
  "No, es discovery con ansiedad.",
  "No, es un backlog con logo.",
  "No, es una épica sin usuario.",
  "No, es governance con glitter.",
  "No, es linaje de datos con ego.",
  "No, es un experimento eterno.",
  "No, es una métrica huérfana.",
  "No, es una solución buscando problema."
];

const answer = document.querySelector("#answer");
const shell = document.querySelector(".answer-shell");
let lastIndex = -1;

function fitAnswer() {
  const shellStyle = getComputedStyle(shell);
  const horizontalPadding =
    parseFloat(shellStyle.paddingLeft) + parseFloat(shellStyle.paddingRight);
  const verticalPadding =
    parseFloat(shellStyle.paddingTop) + parseFloat(shellStyle.paddingBottom);
  const availableWidth = Math.max(0, shell.clientWidth - horizontalPadding);
  const availableHeight = Math.max(0, shell.clientHeight - verticalPadding);

  answer.style.inlineSize = `${availableWidth}px`;

  let smallest = 34;
  let largest = 224;
  let bestFit = smallest;

  while (smallest <= largest) {
    const candidate = Math.floor((smallest + largest) / 2);
    answer.style.fontSize = `${candidate}px`;

    const fits =
      answer.scrollWidth <= availableWidth + 1 &&
      answer.scrollHeight <= availableHeight + 1;

    if (fits) {
      bestFit = candidate;
      smallest = candidate + 1;
    } else {
      largest = candidate - 1;
    }
  }

  answer.style.fontSize = `${bestFit}px`;
}

function nextAnswer() {
  let index = Math.floor(Math.random() * answers.length);

  if (answers.length > 1) {
    while (index === lastIndex) {
      index = Math.floor(Math.random() * answers.length);
    }
  }

  lastIndex = index;
  answer.textContent = answers[index];
  fitAnswer();
  answer.classList.remove("changing");
  void answer.offsetWidth;
  answer.classList.add("changing");
}

window.addEventListener("click", nextAnswer);
window.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    nextAnswer();
  }
});
window.addEventListener("resize", fitAnswer);
window.visualViewport?.addEventListener("resize", fitAnswer);

if ("ResizeObserver" in window) {
  const resizeObserver = new ResizeObserver(fitAnswer);
  resizeObserver.observe(shell);
}

nextAnswer();
