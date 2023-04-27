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

// Start the game
function startGame() {
    // Get user inputs from registration form
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    // validate user inputs
    if (name === "" || phone === "") {
        alert("Please enter your name and phone number.");
        return;
    }

    // store user data in local storage
    const user = { name, phone };
    localStorage.setItem("user", JSON.stringify(user));

    // display welcome message with username
    const welcomeMsg = document.getElementById("welcome-msg");
    welcomeMsg.textContent = welcomeMsg.textContent = `Welcome, ${name}!`;


    // display button to start level 1
    const startBtn = document.getElementById("start-btn");
    startBtn.style.display = "block";

    // hide registration form
    const regForm = document.getElementById("reg-form");
    regForm.style.display = "none";
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
