const answers = [
  "No.",
  "Nope.",
  "No, gracias.",
  "No, basta.",
  "No, ni ahí.",
  "No, es BI.",
  "No, es Excel.",
  "No, es un CSV.",
  "No, es una API.",
  "No, es un KPI.",
  "No, es un chart.",
  "No, es un modelo.",
  "No, es un reporte.",
  "No, es una query.",
  "No, es un dashboard.",
  "No, falta producto.",
  "No, faltan usuarios.",
  "No, falta criterio.",
  "No, suena caro.",
  "No, hacelo simple.",
  "No, hoy no."
];

const answer = document.querySelector("#answer");
let lastIndex = -1;

function nextAnswer() {
  let index = Math.floor(Math.random() * answers.length);

  if (answers.length > 1) {
    while (index === lastIndex) {
      index = Math.floor(Math.random() * answers.length);
    }
  }

  lastIndex = index;
  answer.textContent = answers[index];
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

nextAnswer();
