const quizQuestions = [
    {
        question: "What is the tallest animal in the world?",
        options: ["Lion", "Elephant", "Giraffe", "Hippo"],
        answer: "Giraffe"
    },
    {
        question: "What is the national animal of Kenya?",
        options: ["Lion", "Elephant", "Giraffe", "Leopard"],
        answer: "Lion"
    },
    // define more questions here
];

const quizLevels = [
    { level: 1, numQuestions: 3 },
    { level: 2, numQuestions: 5 },
    { level: 3, numQuestions: 9 }
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
    // ...

    // check quiz answers and update score
    // ...

    // display congratulatory message if user passes level
    // ...

    // ask user if they want to proceed to next level or tour Kenya
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
