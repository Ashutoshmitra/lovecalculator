document.getElementById("love-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the names
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    // Validate input
    if (!name1 || !name2) {
        document.getElementById("result").innerText = "Please enter both names!";
        return;
    }

    // Generate a random percentage between 1 and 100
    const lovePercentage = Math.floor(Math.random() * 21) + 80;

    // Generate a message based on the percentage
    let message = "";
    if (lovePercentage > 80) {
        message = "Wow, you're a match made in heaven! ❤️";
    } else if (lovePercentage > 50) {
        message = "You have a strong connection! 💕";
    } else if (lovePercentage > 30) {
        message = "There's potential! Work on your bond. 💖";
    } else {
        message = "Love needs more effort. Don't give up! 💔";
    }

    // Display the result
    document.getElementById("result").innerHTML = `
        ${name1} ❤️ ${name2}: <strong>${lovePercentage}%</strong><br>${message}
    `;
});
