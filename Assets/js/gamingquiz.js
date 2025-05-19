const wrapper = document.getElementById("wrapper");
const question = document.getElementById("question");
const answer0 = document.getElementById("answer0");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const score = document.getElementById("score");

const questions = [

    {
        "question": "What plumber brothers star in Nintendo's hit Super Mario franchise?",
        "answers": ["Mario and Luigi", "Sam and Mark", "Ashley and Kim", "Maria and Louise"], // Mario and Luigi
        "correct": 0
    },
    {
        "question": "Which legendary skateboarder took gaming to new heights with a series bearing his name?",
        "answers":["Jake Anderson", "Tony Hawk", "Pedro Barros", "Jake Brown"], // Tony Hawk
        "correct": 1
    },
    {
        "question": "Which game publisher keeps us on the frontlines with the 'Call of Duty' series?",
        "answers": ["Microsoft", "Mojang", "Activision", "Zynga"], //Activision
        "correct": 2
    },
    {
        "question": "2016 'Tom Clancy's division' is set where?",
        "answers": ["Miami", "Los Angeles", "New York", "New Jersy"], // New York
        "correct":2
    },
    {
        "question": "Which Grand Theft Auto game was released in 2013?",
        "answer": ["V", "IV", "III", "San Andreas"], //V
        "correct": 0
    },
    {
        "question": "Minecraft was created by a developer from which country?",
        "answer": ["New Zeland", "Russia", "Sweden", "Germany"], // Sweden
        "correct": 2
    },
    {
        "question": "What does Pac-Man eat to clear the maze and keep the ghosts away?",
        "answer": ["Squares", "Trianges", "Dots", "Arrows"], // Dots
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

document.getElementById("question").style.fontSize = '300%';
document.getElementById("answer0").style.fontSize='150%';
document.getElementById("answer1").style.fontSize='150%';
document.getElementById("answer2").style.fontSize='150%';
document.getElementById("answer3").style.fontSize='150%';
mainOperator();
