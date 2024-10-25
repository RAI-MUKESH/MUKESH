document.addEventListener('DOMContentLoaded', () => {
    const supportForm = document.getElementById('supportForm');
    supportForm.addEventListener('submit', (event) => {
        event.preventDefault();
        sendMessage();
    });
});

// Function to handle message sending
function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the data to your server
    console.log('Message Sent:', { name, email, message }); // Debugging log

    showNotification('Your message has been sent successfully!'); // Show notification

    // Clear form fields after submission
    document.getElementById('supportForm').reset();
}

// Function to show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
