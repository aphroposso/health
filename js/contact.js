
 document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm('service_ky7cpsc', 'template_1mom4sb', '#contact-form', this).then(
    function (response) {
      // Form submission was successful
      console.log("Email sent successfully");
      document.getElementById("email").style.display = "none";
      document.getElementsByName("message")[0].style.display = "none";

      // Display response status
      const responseDiv = document.createElement("div");
      responseDiv.textContent = "Response status: " + response.status;
      document.body.appendChild(responseDiv);

      setTimeout(function () {
        // Hide the response status after 2 seconds
        responseDiv.style.display = "none";
      }, 2000);
    },
    function (error) {
      // Form submission failed
      console.error("Email sending failed: " + JSON.stringify(error));
    }
  );
});