function countdown() {
    // Set the date for the Christmas break (December 23rd, 2024)
    const breakDate = new Date('December 23, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = breakDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = `Vrijeme do zimskih praznika: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over
    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Zimski praznici su ovdje!";
    }
}

// Update the countdown every second
setInterval(countdown, 1000);
