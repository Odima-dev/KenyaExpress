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
