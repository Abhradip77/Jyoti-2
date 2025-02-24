document.addEventListener("DOMContentLoaded", function() {
    function startQuestions() {
        document.getElementById("landing").style.display = "none";
        document.getElementById("quiz").style.display = "block";
    }
    
    const questions = [
        "Do you like surprises?",
        "What's your favorite romantic movie?",
        "Would you watch it with me?",
        "If we could go any country for a date, where would it be?",
        "Are you more of a hugger or a hand-holder?",
        "Do you think these pointless questions are leading somewhere?",
        "On a scale of 1-10, how much do you like me?",
        "Now for the big question... Will you be my prom date? 💖"
    ];
    
    let index = 0;
    function nextQuestion() {
        let answer = document.getElementById("answer").value;
        if (answer.trim() === "") return;
        
        index++;
        if (index < questions.length) {
            document.getElementById("question").innerText = questions[index];
            document.getElementById("answer").value = "";
        } else {
            startCelebration();
        }
    }
    
    function startCelebration() {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("celebration").style.display = "block";
        startCountdown();
        generateHearts();
    }
    
    function startCountdown() {
        const eventDate = new Date("February 28, 2025 00:00:00").getTime();
        setInterval(() => {
            let now = new Date().getTime();
            let distance = eventDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }
    
    function generateHearts() {
        let heartContainer = document.querySelector(".hearts");
        setInterval(() => {
            let heart = document.createElement("div");
            heart.className = "heart";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            heart.innerHTML = "💖";
            heartContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, 300);
    }

    window.startQuestions = startQuestions;
    window.nextQuestion = nextQuestion;
});
