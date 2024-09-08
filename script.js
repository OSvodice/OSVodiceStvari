// --- Countdown to Winter Break ---
function countdown() {
    const breakDate = new Date('December 23, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = breakDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `Vrijeme do zimskih praznika: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Zimski praznici su ovdje!";
    }
}

setInterval(countdown, 1000);

// --- Voting System for Ronaldo vs Messi ---
document.addEventListener("DOMContentLoaded", function() {
    let ronaldoVotes = 0;
    let messiVotes = 0;

    const ronaldoButton = document.getElementById('voteRonaldo');
    const messiButton = document.getElementById('voteMessi');
    const resultRonaldo = document.getElementById('resultRonaldo');
    const resultMessi = document.getElementById('resultMessi');

    // Event listener for Ronaldo vote button
    ronaldoButton.addEventListener('click', function() {
        ronaldoVotes++;
        resultRonaldo.textContent = `Ronaldo: ${ronaldoVotes} glasova`;
    });

    // Event listener for Messi vote button
    messiButton.addEventListener('click', function() {
        messiVotes++;
        resultMessi.textContent = `Messi: ${messiVotes} glasova`;
    });
});
