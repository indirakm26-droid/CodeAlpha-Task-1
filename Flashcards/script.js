function showPopup(message, type) {

    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");

    popupMessage.textContent = message;

    popup.className = "popup show";

    if(type) {
        popup.classList.add(type);
    }

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2500);
}
const flashcards = [
    {
        question: "What is VR ?",
        answer: "Vr creates a completely virtual digital environment."
    },
    {
        question: "What is 6DoF ?",
        answer: "6DoF allows movement in all dirrections and rotations."
    },
    {
        question: "What is spatial mapping ?",
        answer: "Creating a 3D map of the physical environment ."
    }
];

let currentCard = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const answerBox = document.getElementById("answer-box");

const showBtn = document.getElementById("show-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const addBtn = document.getElementById("add-btn");
const editBtn = document.getElementById("edit-btn");
const deleteBtn = document.getElementById("delete-btn");

const questionInput = document.getElementById("question-input");
const answerInput = document.getElementById("answer-input");

function displayCard() {
    questionEl.textContent = flashcards[currentCard].question;
    answerEl.textContent = flashcards[currentCard].answer;

    answerBox.classList.add("hidden");

    questionInput.value = flashcards[currentCard].question;
    answerInput.value = flashcards[currentCard].answer;
}

showBtn.addEventListener("click", () => {
    answerBox.classList.toggle("hidden");
});

nextBtn.addEventListener("click", () => {
    currentCard++;

    if (currentCard >= flashcards.length) {
        currentCard = 0;
    }

    displayCard();
});

prevBtn.addEventListener("click", () => {
    currentCard--;

    if (currentCard < 0) {
        currentCard = flashcards.length - 1;
    }

    displayCard();
});

addBtn.addEventListener("click", () => {
    const question = questionInput.value;
    const answer = answerInput.value;

    if (question === "" || answer === "") {
        showPopup("Please fill all fields!", "delete");
        return;
    }

    flashcards.push({
        question,
        answer
    });

    currentCard = flashcards.length - 1;

    displayCard();

    showPopup("Flashcard Added Successfully!", "success");
});

editBtn.addEventListener("click", () => {
    flashcards[currentCard].question = questionInput.value;
    flashcards[currentCard].answer = answerInput.value;

    displayCard();

    showPopup("Flashcard Updated Successfully!", "edit");
});

deleteBtn.addEventListener("click", () => {

    if (flashcards.length === 1) {
        showPopup("The last Flascard cannot be deleted");
        return;
    }

    flashcards.splice(currentCard, 1);

    if (currentCard >= flashcards.length) {
        currentCard = flashcards.length - 1;
    }

    displayCard();

    showPopup("Flashcard Deleted Successfully!", "delete");
});

displayCard();