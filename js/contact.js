

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("occupation").value;
  const message = document.getElementById("message").value;

  // Check if the phone number starts with "078" and has a total length of 10
  if (phone.startsWith("078") && phone.length === 10) {
      // Send the email using EmailJS (replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID')
      emailjs.send('service_ky7cpsc', 'template_ndnn34j', {
        name: name,
        email: email,
        phone: phone,
        occupation: occupation,
        message: message
      })
      .then((response) => {
          console.log("Email sent successfully:", response);
          document.getElementById("success-message").textContent = "Your message has been sent successfully!";
          clearMessagesAndFormAfterDelay();
      })
      .catch((error) => {
          console.error("Email sending failed:", error);
          document.getElementById("error-message").textContent = "Oops, there was an error while sending the email. Please try again later.";
      });
  } else {
      document.getElementById("error-message").textContent = "Phone number must start with '078' and have a total length of 10.";
  }
});

function clearMessagesAndForm() {
  document.getElementById("error-message").innerHTML = "";
  document.getElementById("success-message").innerHTML = "";
  document.getElementById("contact-form").reset();
}

function clearMessagesAndFormAfterDelay() {
  setTimeout(clearMessagesAndForm, 1000);
}