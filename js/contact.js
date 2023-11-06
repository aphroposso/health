
document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementsByName("name")[0].value;
        const email = document.getElementsByName("email")[0].value;
        const phone = document.getElementsByName("phone")[0].value;
        const subject = document.getElementsByName("subject")[0].value;
        const message = document.getElementsByName("message")[0].value;

        // Check if the phone number starts with "078" and has a total length of 10
        if (phone.startsWith("078") && phone.length === 10) {
            // Send the email using EmailJS (replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID')
            emailjs.sendForm('service_ky7cpsc', 'template_ndnn34j', '#contact-form')
                .then((response) => {
                    console.log("Email sent successfully:", response);
                    document.getElementById("success-message").textContent = "Your message has been sent successfully!";
                    clearFormAndMessages();
                })
                .catch((error) => {
                    console.error("Email sending failed:", error);
                    document.getElementById("error-message").textContent = "Oops, it is not your fault: " + error;
                });
        } else {
            document.getElementById("error-message").textContent = "Phone number must start with '078' and have a total length of 10.";
        }
    });

    // Function to clear messages and reset the form
  function clearMessagesAndForm() {
    document.getElementById("error-message").innerHTML = ""; // Clear error message
    document.getElementById("success-message").innerHTML = ""; // Clear success message
    document.getElementById("contact-form").reset(); // Reset the form
  }

  // Function to set a timeout and call the clearMessagesAndForm function after 1 second (1000 milliseconds)
  function clearMessagesAndFormAfterDelay() {
    setTimeout(clearMessagesAndForm, 1000); // Delay for 1 second
  }