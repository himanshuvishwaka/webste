<scipt>
function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Replace 'YOUR_HOST_EMAIL_ADDRESS' with the actual host email address
    const hostEmailAddress = 'YOUR_HOST_EMAIL_ADDRESS';

    // You can customize the subject and body of the email here
    const subject = `New Contact Form Submission from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Open the default email client with the pre-filled subject, body, and recipient address
    window.location.href = `mailto:${hostEmailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
</scipt>
