// Define quiz questions
const quizQuestions = [
    {
        id: 1,
        question: "What is the highest mountain in Kenya?",
        options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon"],
        answer: "Mount Kenya",
    },
    {
        id: 2,
        question: "What is the largest national park in Kenya?",
        options: ["Tsavo East", "Maasai Mara", "Amboseli"],
        answer: "Tsavo East",
    },
    {
        id: 3,
        question: "What is the name of the largest lake in Kenya?",
        options: ["Lake Malawi", "Lake Victoria", "Lake Tanganyika"],
        answer: "Lake Victoria",
    },
    {
        id: 4,
        question: "What is the capital city of Kenya?",
        options: ["Nairobi", "Mombasa", "Kisumu"],
        answer: "Nairobi",
    },
    {
        id: 5,
        question: "What is the most famous national park in Kenya?",
        options: ["Masai Mara", "Amboseli", "Tsavo"],
        answer: "Masai Mara",
    },
    {
        id: 6,
        question: "What is the highest mountain in Kenya?",
        options: ["Mount Elgon", "Mount Kenya", "Mount Kilimanjaro"],
        answer: "Mount Kenya",
    },
    {
        id: 7,
        question:
            "Which tribe is most associated with Kenya's Maasai Mara region?",
        options: ["Kikuyu", "Luo", "Maasai"],
        answer: "Maasai",
    },
    {
        id: 8,
        question: "What is the most popular beach destination in Kenya?",
        options: ["Diani Beach", "Malindi", "Lamu Island"],
        answer: "Diani Beach",
    },
    {
        id: 9,
        question:
            "Which national park in Kenya is known for its large herds of elephants?",
        options: [
            "Tsavo East National Park",
            "Aberdare National Park",
            "Samburu National Reserve",
        ],
        answer: "Tsavo East National Park",
    },
];

// Define quiz levels
const quizLevels = [
    { level: 1, numQuestions: 3, passingScore: 67 },
    { level: 2, numQuestions: 3, passingScore: 67 },
    { level: 3, numQuestions: 3, passingScore: 67 },
];

let currentLevel, currentScore, currentQuestionIndex, questions;

// Shuffle array helper function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



window.onload = function () {
    // Hide other sections
    document.getElementById("welcome-section").style.display = "none";
    document.getElementById("quiz-levels-section").style.display = "none";
    document.getElementById("quiz-section").style.display = "none";

    // Add event listener to login form submit button
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // prevent form submission
        startGame();
    });
}

function startGame() {
    // Get user inputs from login form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate user inputs
    if (username === "" || password === "") {
        alert("Please enter your username and password.");
        return;
    }

    // Display welcome message with username
    const welcomeMsg = document.getElementById("welcome-msg");
    welcomeMsg.textContent = `Welcome, ${username}!`;

    // Hide login section
    document.getElementById("login-section").style.display = "none";

    // Show quiz levels section
    document.getElementById("quiz-levels-section").style.display = "block";
}


function startLevel(level) {
    // get quiz questions for the specified level
    questions = quizQuestions.slice(0, quizLevels[level - 1].numQuestions);

    // check if questions are available for the level
    if (questions.length === 0) {
        console.log("No questions available for this level.");
        return;
    }

    // set current level and score to zero
    currentLevel = level;
    currentScore = 0;
    currentQuestionIndex = 0;

    // shuffle the questions randomly
    shuffleArray(questions);

    // display the first question
    displayQuestion(questions[0]);
}

function displayQuestion(question) {
    // update the question counter
    const questionCounter = document.querySelector(".question-counter");
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${quizLevels[currentLevel - 1].numQuestions}`;

    // update the question text
    const questionText = document.querySelector(".question-text");
    questionText.textContent = question.question;

    // update the answer options
    const answerOptions = document.querySelectorAll(".answer-option");
    answerOptions.forEach((option, index) => {
        option.textContent = question.options[index];
        option.classList.remove("wrong");
        option.classList.remove("correct");
        option.addEventListener("click", () => {
            // check if the selected answer is correct
            if (question.correctAnswerIndex === index) {
                // increase the score and display the next question
                currentScore++;
                displayNextQuestion();
            } else {
                // display the correct answer and end the game
                option.classList.add("wrong");
                answerOptions[question.correctAnswerIndex].classList.add("correct");
                endGame();
            }
        });
    });
}

const loginSection = document.getElementById("login-section");
const dashboardSection = document.getElementById("dashboard-section");

loginSection.style.display = "block";
dashboardSection.style.display = "none";

