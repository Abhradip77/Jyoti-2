function startQuestions() {
    document.getElementById("landing").style.display = "none";
    document.getElementById("quiz").style.display = "block";
}

const questions = [
    "Do you like surprises?",
    "What's your favorite romantic movie?",
    "Would you watch it with me?",
    "If we could go anywhere for a date, where would it be?",
    "Are you more of a hugger or a hand-holder?",
    "Do you think these pointless questions are leading somewhere?",
    "On a scale of 1-10, how much do you like me?",
    "Now for the big question... Will you be my prom date? 💖"
];

let index = 0;
function nextQuestion() {
    index++;
    if (index < questions.length) {
        document.getElementById("question").innerText = questions[index];
    } else {
        document.getElementById("options").innerHTML = 
            '<button onclick="acceptProposal()">Yes</button> <button id="noBtn" onmouseover="moveNo()">No</button>';
    }
}

function acceptProposal() {
    document.getElementById("question").innerText = "Yay! Can't wait for prom with you! 💕";
    document.getElementById("options").innerHTML = '';
}

function moveNo() {
    let noBtn = document.getElementById("noBtn");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}
