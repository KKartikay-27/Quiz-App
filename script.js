var currentQuestionIndex = 0;
var score = 0;

function nextQuestion() {
    currentQuestionIndex++;
    document.querySelector(".bar").style.width = (((currentQuestionIndex) / questions.length) * 100) + "%";
    
    if (currentQuestionIndex == questions.length) {
        setTimeout(() => {
            localStorage.setItem("score", score);
            localStorage.setItem("total", ((questions.length) * 10));
            window.location.href = "end.html";
        }, 1000);
        return;
    }
    
    setTimeout(() => {
        renderQuestion(questions[currentQuestionIndex]);
    }, 1000);
}

function renderQuestion(question) {
    document.querySelector(".question").innerText = question.question;
    
    document.querySelector(".opt:nth-child(1) .opt-txt").innerText = question.choice1;
    document.querySelector(".opt:nth-child(2) .opt-txt").innerText = question.choice2;
    document.querySelector(".opt:nth-child(3) .opt-txt").innerText = question.choice3;
    document.querySelector(".opt:nth-child(4) .opt-txt").innerText = question.choice4;

    document.querySelector(".opt:nth-child(1) .opt-txt").classList.remove("correct");
    document.querySelector(".opt:nth-child(1) .opt-txt").classList.remove("incorrect");

    document.querySelector(".opt:nth-child(2) .opt-txt").classList.remove("correct");
    document.querySelector(".opt:nth-child(2) .opt-txt").classList.remove("incorrect");

    document.querySelector(".opt:nth-child(3) .opt-txt").classList.remove("correct");
    document.querySelector(".opt:nth-child(3) .opt-txt").classList.remove("incorrect");

    document.querySelector(".opt:nth-child(4) .opt-txt").classList.remove("correct");
    document.querySelector(".opt:nth-child(4) .opt-txt").classList.remove("incorrect");
    
    document.querySelector(".options").classList.remove("answered");
}

function load() {
    currentQuestionIndex = 0;
    renderQuestion(questions[currentQuestionIndex]);
}

load();

document.querySelector(".opt:nth-child(1)").addEventListener("click", () => {
    if (document.querySelector(".options").classList.contains("answered")) {
        return;
    }

    document.querySelector(".options").classList.add("answered");
    
    if (questions[currentQuestionIndex].answer == 1) {
        score += 10;
        document.querySelector(".opt:nth-child(1) .opt-txt").classList.add("correct");
    } else {
        document.querySelector(".opt:nth-child(1) .opt-txt").classList.add("incorrect");
    }

    document.querySelector(".src-num").innerText = score;

    nextQuestion();
});

document.querySelector(".opt:nth-child(2)").addEventListener("click", () => {
    if (document.querySelector(".options").classList.contains("answered")) {
        return;
    }

    document.querySelector(".options").classList.add("answered");
    
    if (questions[currentQuestionIndex].answer == 2) {
        score += 10;
        document.querySelector(".opt:nth-child(2) .opt-txt").classList.add("correct");
    } else {
        document.querySelector(".opt:nth-child(2) .opt-txt").classList.add("incorrect");
    }

    document.querySelector(".src-num").innerText = score;

    nextQuestion();
});

document.querySelector(".opt:nth-child(3)").addEventListener("click", () => {
    if (document.querySelector(".options").classList.contains("answered")) {
        return;
    }

    document.querySelector(".options").classList.add("answered");
    
    if (questions[currentQuestionIndex].answer == 3) {
        score += 10;
        document.querySelector(".opt:nth-child(3) .opt-txt").classList.add("correct");
    } else {
        document.querySelector(".opt:nth-child(3) .opt-txt").classList.add("incorrect");
    }

    document.querySelector(".src-num").innerText = score;

    nextQuestion();
});

document.querySelector(".opt:nth-child(4)").addEventListener("click", () => {
    if (document.querySelector(".options").classList.contains("answered")) {
        return;
    }

    document.querySelector(".options").classList.add("answered");
    
    if (questions[currentQuestionIndex].answer == 4) {
        score += 10;
        document.querySelector(".opt:nth-child(4) .opt-txt").classList.add("correct");
    } else {
        document.querySelector(".opt:nth-child(4) .opt-txt").classList.add("incorrect");
    }

    document.querySelector(".src-num").innerText = score;

    nextQuestion();
});

