const wrapper = document.getElementById("wrapper");
const question = document.getElementById("question");
const answer0 = document.getElementById("answer0");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const score = document.getElementById("score");

const questions = [
    {
        "question": "What planet is closest to the sun?",
        "answers":["Mars", "Mercury", "Jupiter", "Venus"], // Mercury
        "correct": 1
    },    
    {
        "question": "What planet is furthest to the sun?",
        "answers":["Pluto", "Mercury", "Moon", "Venus"], // Pluto
        "correct": 0
    },
    {
        "question": "What planet is the largest in the solar sytem?",
        "answers":["Mars", "Mercury", "Jupiter", "Venus"], // Jupiter
        "correct": 2
    },

]
let questionNumber = 0;
let scoreArea = 0;
let quizNumber = questions.length;

function renderQuestion() {
    question.innerText = questions[questionNumber].question;
}

function renderAnswers() {
    answer0.innerText = questions[questionNumber].answers[0];
    answer1.innerText = questions[questionNumber].answers[1];
    answer2.innerText = questions[questionNumber].answers[2];
    answer3.innerText = questions[questionNumber].answers[3];
}

function mainOperator() {
    if (questionNumber < quizNumber) {
        renderQuestion();
        renderAnswers();
    } else {
        wrapper.innerHTML = `<h2>Game Over! Your Score:</h2>`
    }
}

function checkAnswer(answerSelected) {
    console.log("Hey, you pressed: ", answerSelected);
    correctAnswer = questions[questionNumber].correct;
    if(answerSelected == correctAnswer){
        console.log("Good Job, You got the correct answer!");
        scoreArea++;
        score.innerText = scoreArea;
    }
    questionNumber++;
    mainOperator();
}
mainOperator();