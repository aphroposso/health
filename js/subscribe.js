// Assuming you have an input field with id "email" for email input
const emailInput = document.getElementById("email");
const form = document.getElementById("convertkit-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting in the default way

  const email = emailInput.value; // Get the email value from the input field

  const API_KEY = "YBxrVYBVLNbIEVu4Qgo1ag";
  const FORM_ID = "5693494";

  setLoading(true);

  axios
    .post(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      api_key: API_KEY,
      email: email, // Pass the email variable here
    })
    .then((response) => {
      console.log("Email sent successfully!");
      emailInput.value = ""; // Resetting the email input field after successful submission
      setLoading(false);
      setSubscribed(true);

      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      setErrorMessage("Error occurred. Please try again!");
      setLoading(false);

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    });
});