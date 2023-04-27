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

    // define more questions here
];

const quizLevels = [
    { level: 1, numQuestions: 3 },
    { level: 2, numQuestions: 3 },
    { level: 3, numQuestions: 3 }
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
        questionTitle.textContent = `Question ${i + 1}`;
        questionDiv.appendChild(questionTitle);
        const questionText = document.createElement('p');
        questionText.textContent = question.text;
        questionDiv.appendChild(questionText);
        for (let j = 0; j < question.options.length; j++) {
            const option = question.options[j];
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${i + 1}`;
            input.value = option.letter;
            label.appendChild(input);
            label.appendChild(document.createTextNode(` ${option.text}`));
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        }
        document.getElementById(`level${level}`).appendChild(questionDiv);
    }

    // check quiz answers and update score
    let numCorrect = 0;
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const selectedOption = document.querySelector(`input[name="q${i + 1}"]:checked`);
        if (selectedOption && selectedOption.value === question.correctAnswer) {
            numCorrect++;
        }
    }
    const score = Math.round((numCorrect / questions.length) * 100);

    // display congratulatory message if user passes level
    if (score >= quizLevels[level - 1].passingScore) {
        const congratsDiv = document.createElement('div');
        congratsDiv.textContent = `Congratulations! You passed Level ${level} with a score of ${score}%.`;
        document.getElementById(`level${level}`).appendChild(congratsDiv);

        // ask user if they want to proceed to next level or tour Kenya
        const proceedDiv = document.createElement('div');
        proceedDiv.textContent = 'Do you want to proceed to the next level or take a tour of Kenya?';
        const nextLevelButton = document.createElement('button');
        nextLevelButton.textContent = 'Next Level';
        nextLevelButton.addEventListener('click', () => {
            startLevel(level + 1);
        });
        const tourButton = document.createElement('button');
        tourButton.textContent = 'Tour Kenya';


        // ...

        // process payment and send SMS message if user chooses to tour Kenya
        // ...

        // repeat failed level or quit game if user fails level
        // ...
    }

    function processPayment() {
        // get user data from local storage
        const user = JSON.parse(localStorage.getItem("user"));

        // get payment amount and phone number from payment form
        const amount = document.getElementById("amount").value;
        const phone = document.getElementById("phone").value;

        // validate payment inputs
        if (amount === "" || phone === "") {
            alert("Please enter payment amount and phone number.");
            return;
        }

        // make payment using Africa's Talking payment API
        // ...

        // send booking details to user's phone using Africa's Talking SMS API
        // ...
    }
