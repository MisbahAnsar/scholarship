function checkEligibility() {
    const score = document.getElementById('scoreInput').value;
    const resultElement = document.getElementById('result');

    let message;
    
    if (score >= 90) {
        message = "Congratulations! You are eligible for a full scholarship.";
    } else if (score >= 75) {
        message = "Great! You are eligible for a partial scholarship.";
    } else if (score >= 60) {
        message = "You are eligible for a basic scholarship.";
    } else {
        message = "Sorry, you are not eligible for a scholarship.";
    }

    resultElement.innerText = message;
}
