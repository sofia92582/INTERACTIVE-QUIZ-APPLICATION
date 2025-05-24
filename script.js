const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "London", "Paris", "Rome"],
    correct: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Saturn", "Venus"],
    correct: "Mars"
  },
  {
    question: "Who wrote 'To be, or not to be'?",
    answers: ["Shakespeare", "Hemingway", "Frost", "Twain"],
    correct: "Shakespeare"
  }
];

let currentIndex = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentIndex];
  document.getElementById("question").textContent = q.question;
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn, index) => {
    btn.textContent = q.answers[index];
    btn.style.background = "#eee";
    btn.disabled = false;
  });
}

function selectAnswer(button) {
  const answer = button.textContent;
  const correct = questions[currentIndex].correct;

  if (answer === correct) {
    button.style.background = "lightgreen";
    score++;
  } else {
    button.style.background = "salmon";
  }

  document.querySelectorAll(".answer-btn").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `<h2>You scored ${score} out of ${questions.length}</h2>`;
  }
}

showQuestion();
