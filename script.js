document.addEventListener("DOMContentLoaded", function() {
    // Log message when the page loads successfully
    console.log("The page has loaded successfully!");
    
    // Display an alert message when the page loads
    alert("Welcome to the educational page about web applications!");

    // Select the button element by its ID
    const learnMoreBtn = document.getElementById("learnMoreBtn");

    // learn more botton
    if (learnMoreBtn) {
            learnMoreBtn.addEventListener("click", function() {
            // Log message when the button is clicked
            console.log("Learn More button clicked.");
            // Display an alert message when the button is clicked
            alert(" When a user takes action, like clicking a button or submitting a form, the front-end sends a request to the back-end server. The server processes this request, retrieves or updates data from the database, and sends a response back to the front-end. The front-end then updates the user interface based on the response. ");
        });
    } else {
        // Log error if the button is not found
        console.error("Learn More button not found.");
    }
});
