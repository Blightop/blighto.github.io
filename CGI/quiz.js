const questions =[
    {
        question: "Which of the following refers to a situation where a single dominant company has exclusive control over a particular market or industry?",
        answers: [
            {text: "Oligopoly", correct: false},
            {text: "Monopoly", correct: true},
            {text: "Competition", correct: false},
            {text: "Cartel", correct: false},
        ]
    },
    {
        question: "What is a common concern associated with big tech monopolies?",
        answers: [
            {text: "Limited consumer choice and reduced competition.", correct: true},
            {text: "Increased innovation and technological advancements.", correct: false},
            {text: "Lower prices and improved efficiency.", correct: false},
            {text: "Enhanced privacy protection and data security.", correct: false},
        ]
    },
    {
        question: "Which governmental body in the United States is responsible for enforcing antitrust laws related to big tech monopolies?",
        answers: [
            {text: "Department of Justice (DOJ)", correct: false},
            {text: "Federal Bureau of Investigation (FBI)", correct: false},
            {text: "Federal Trade Commission (FTC)", correct: true},
            {text: "Securities and Exchange Commission (SEC)", correct: false},
        ]
    },
    {
        question: "Which company has the most acquisition?",
        answers: [
            {text: "Apple", correct: false},
            {text: "Microsoft", correct: true},
            {text: "Google", correct: false},
            {text: "Amazon", correct: false},
        ]
    },
    {
        question: "Which company does not dominate the PC operating systems and productivity software market?",
        answers: [
            {text: "Google", correct: false},
            {text: "Apple", correct: false},
            {text: "Microsoft", correct: false},
            {text: "Tencent", correct: true},
        ]
    },
    {
        question: "Which company does Meta not own?",
        answers: [
            {text: "Oculus VR", correct: false},
            {text: "Whatsapp", correct: false},
            {text: "Instagram", correct: false},
            {text: "Pinterest", correct: true},
        ]
    },
    {
        question: "What alternative measures beyond breakup could be effective in ceasing monopolistic activity",
        answers: [
            {text: "Enhanced Antitrust Scrutiny of Mergers", correct: false},
            {text: "Interoperability and Data Portability Requirements", correct: false},
            {text: "Put restructions on companies products", correct: true},
            {text: "Non-Discrimination Rules for Platform Operators", correct: false},
        ]
    },
    {
        question: "Monopoly",
        answers: [
            {text: "Enhanced Antitrust Scrutiny of Mergers", correct: false},
            {text: "Interoperability and Data Portability Requirements", correct: false},
            {text: "Put restructions on companies products", correct: true},
            {text: "Non-Discrimination Rules for Platform Operators", correct: false},
        ]
    },
];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Score: ${score} / ${questions.length} , Wow!`;
    nextButton.innerHTML = "Play Again? :>"
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

function ReadyQuiz(){
    resetState();
    currentQuestionIndex = -1
    questionElement.innerHTML = `Welcome to the quiz mode! This is an opporunity to learn our research in a game! You do not need to do perpare any materials. Try and guess what happened!`;
    nextButton.innerHTML = "OK LETS GO!"
    nextButton.style.display = "block"
}

startQuiz();

ReadyQuiz();