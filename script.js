console.log("Script loaded successfully!");
let
 currentQuestion = 0;
let score = 0;
const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Rome", correct: false }
        ]
    }
];

function startQuiz() {
    showQuestion(questions[currentQuestion]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    questionElement.textContent = question.question;
    const answersElement = document.getElementById('answers');
    answersElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('li');
        button.textContent = answer.text;
        button.onclick = selectAnswer;
        button.dataset.correct = answer.correct;
        answersElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct === "true") {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion(questions[currentQuestion]);
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').innerHTML = `
        <h1>Quiz Completed</h1>
        <p>Your score: ${score}/${questions.length}</p>
    `;
}

function nextQuestion() {
    currentQuestion++;
    showQuestion(questions[currentQuestion]);
}

document.addEventListener('DOMContentLoaded', startQuiz);
