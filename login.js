document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from submitting

    // Get the values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var messageElement = document.getElementById("message");

    // Example logic for checking credentials (replace with real authentication)
    if(username === "admin" && password === "admin123"){
        messageElement.style.color = "green";
        messageElement.textContent = "Login successful!";
        // Redirect to the spare parts inventory page
        window.location.href = "inventory.html";
    } else {
        messageElement.style.color = "red";
        messageElement.textContent = "Invalid username or password.";
    }
});
