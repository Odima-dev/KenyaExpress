const quizQuestions = [
    {
        question: "What is the highest mountain in Kenya?",
        options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon"],
        answer: "Mount Kenya"
    },
    {
        question: "What is the largest national park in Kenya?",
        options: ["Tsavo East", "Maasai Mara", "Amboseli"],
        answer: "Tsavo East"
    },
    {
        question: "What is the name of the largest lake in Kenya?",
        options: ["Lake Malawi", "Lake Victoria", "Lake Tanganyika"],
        answer: "Lake Victoria"
    },
    {
        question: "What is the capital city of Kenya?",
        options: ["Nairobi", "Mombasa", "Kisumu"],
        answer: "Nairobi"
    },
    {
        question: "What is the most famous national park in Kenya?",
        options: ["Masai Mara", "Amboseli", "Tsavo"],
        answer: "Masai Mara"
    },
    {
        question: "What is the highest mountain in Kenya?",
        options: ["Mount Elgon", "Mount Kenya", "Mount Kilimanjaro"],
        answer: "Mount Kenya"
    },
    {
        question: "Which tribe is most associated with Kenya's Maasai Mara region?",
        options: ["Kikuyu", "Luo", "Maasai"],
        answer: "Maasai"
    },
    {
        question: "What is the most popular beach destination in Kenya?",
        options: ["Diani Beach", "Malindi", "Lamu Island"],
        answer: "Diani Beach"
    },
    {
        question: "Which national park in Kenya is known for its large herds of elephants?",
        options: ["Tsavo East National Park", "Aberdare National Park", "Samburu National Reserve"],
        answer: "Tsavo East National Park"
    }
];

const quizLevels = [
    { level: 1, numQuestions: 3, passingScore: 67 },
    { level: 2, numQuestions: 3, passingScore: 67 },
    { level: 3, numQuestions: 3, passingScore: 67 }
];

function startGame() {
    // get user inputs from registration form
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
    welcomeMsg.textContent = `Welcome, ${name}!`;

    // display button to start level 1
    const startBtn = document.getElementById("start-btn");
    startBtn.style.display = "block";

    // hide registration form
    const regForm = document.getElementById("reg-form");
    regForm.style.display = "none";
}

function startLevel(level) {
    // get quiz questions for the specified level
    const questions = quizQuestions.slice(0, quizLevels[level - 1].numQuestions);

    // display quiz questions and options
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const questionDiv = document.createElement('div');
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = question.question;
        questionDiv.appendChild(questionTitle);
        const options = question.options;
        for (let j = 0; j < options.length; j++) {
            const option = options[j];
            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question_${i}`;
            optionInput.value = option;
            optionLabel.appendChild(optionInput);
            questionDiv.appendChild(optionLabel);
        }
        // add question to the DOM
        const quizForm = document.getElementById('quizForm');
        quizForm.appendChild(questionDiv);
    }
    // display the submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', function () {
        // calculate and display the quiz results
        const resultsDiv = document.getElementById('results');
        const correctAnswers = questions.filter(question => question.answer === document.querySelector(`input[name="question_${question.id}"]:checked`).value);
        resultsDiv.textContent = `You got ${correctAnswers.length} out of ${questions.length} questions correct!`;

        // display the next level button
        const nextLevelButton = document.createElement('button');
        nextLevelButton.textContent = 'Next Level';
        nextLevelButton.addEventListener('click', function () {
            // move to the next level or end the quiz if there are no more levels
            if (level < quizLevels.length) {
                startLevel(level + 1);
            } else {
                endQuiz();
            }
        });
        resultsDiv.appendChild(nextLevelButton);
    });

    const quizForm = document.getElementById('quizForm');
    quizForm.appendChild(submitButton);
}

function endQuiz() {
    const quizForm = document.getElementById('quizForm');
    quizForm.innerHTML = '<h3>Quiz Complete!</h3><p>Thank you for taking the quiz.</p>';
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
}

