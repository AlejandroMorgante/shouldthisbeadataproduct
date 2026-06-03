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
  const shellRect = shell.getBoundingClientRect();
  const availableWidth = shellRect.width - 32;
  const availableHeight = shellRect.height - 32;
  let size = 224;

  answer.style.fontSize = `${size}px`;

  while (
    size > 34 &&
    (answer.scrollWidth > availableWidth || answer.scrollHeight > availableHeight)
  ) {
    size -= 4;
    answer.style.fontSize = `${size}px`;
  }
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

nextAnswer();
