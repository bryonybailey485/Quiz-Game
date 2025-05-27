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
    {
        "question": "How many time zones are there in the world?",
        "answers": ["23", "39", "100", "24"], // 24
        "correct": 3
    },
    {
        "question": "What is the 17th letter of the English alphabet?",
        "answers": ["R", "S", "Q", "P"], // Q
        "correct": 2
    },
    {
        "question": "If you have arachnophobia, what are you afraid of?",
        "answers": ["Heights", "Spiders", "Open spaces", "Cats"], // Spiders
        "correct": 1
    },
    {
        "question": "What color is a polar bears skin?",
        "answers": ["Pink", "Black", "Gray", "White"], // Black
        "correct": 1
    },
    {
        "question": "How many strings does a standard violin have?",
        "answers": ["3", "6", "5", "4"], // 4
        "correct": 3
    },
    {
        "question": "What year did TikTok launch?",
        "answers":["2017", "2019", "2016", "2015"], // 2017
        "correct": 0
    },
    {
        "question": "How many times did Ross get divorced in Friends?",
        "answers": ["1", "4", "0", "3"], //3
        "correct": 3
    },
    {
        "question": "The Baha Men sang a song wondering who let what out?",
        "answers": ["Cats", "Girls", "Dogs", "Goats"], //Dogs
        "correct": 2
    },
    {
        "question": "What is the name of a baby kangaroo?",
        "answers": ["Cub", "Calf", "Joey", "Colt"], // Joey
        "correct": 2
    },
    {
        "question": "What color shirt does Winnie the Pooh wear?",
        "answers": ["Orange", "Blue", "Red", "White"], // Red
        "correct": 2
    },

];
let questionNumber = 0;
let scoreArea = 0;
let quizNumber = questions.length;

/**
 * This function displays the questions on the webpage
 */
function renderQuestion() {
    question.innerText = questions[questionNumber].question;
}
/**
 * This function displays the question's answers on the webpage
 */


function renderAnswers() {
    answer0.innerText = questions[questionNumber].answers[0];
    answer1.innerText = questions[questionNumber].answers[1];
    answer2.innerText = questions[questionNumber].answers[2];
    answer3.innerText = questions[questionNumber].answers[3];
}
/**
 * This function starts the game and loads the questions and
 * the answers
 */

function mainOperator() {
    if (questionNumber < quizNumber) {
        renderQuestion();
        renderAnswers();
    } else {
        wrapper.innerHTML = `<h2>Game Over! Your Score:</h2>`
    }
}
/**
 * This function checks the answer from the parameter passed
 * from the quiz page - It also increments the question number 
 * and calls the main operator.
 */
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
/**
 * This function resets the page so the user can start the quiz from the beginning question.
 */
function reset(){
    window.location.reload();
}


document.getElementById("question").style.fontSize = '220%';
document.getElementById("answer0").style.fontSize='180%';
document.getElementById("answer1").style.fontSize='180%';
document.getElementById("answer2").style.fontSize='180%';
document.getElementById("answer3").style.fontSize='180%';
mainOperator();