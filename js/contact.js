 // listen to the form submission
 document
 .getElementById("form-group")
 .addEventListener("submit", function (event) {
   event.preventDefault();

   // send the email here
  emailjs.sendForm('service_ky7cpsc', 'template_1mom4sb', '#contact-form').then(
     (response) => {
       console.log("SUCCESS!", response.status, response.text);
       alert("YOUR MESSAGE HAVE BEEN SENT SUCCESSFULLY!");
       setContactForm(""); // Resetting the contact-form input field after successful submission
       setLoading(false);

setTimeout(() => {
  setErrorMessage("");
}, 3000);
     },
     (error) => {
       console.log("FAILED...", error);
       alert("Oops it is not you fault..", error);
     }
   );
   setContactForm(""); // Resetting the contact-form input field after successful submission
   setLoading(false);

setTimeout(() => {
  setErrorMessage("");
}, 3000);
 });

 
