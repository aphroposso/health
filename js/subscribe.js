const API_KEY = "YBxrVYBVLNbIEVu4Qgo1ag";
const FORM_ID = "5693494";

// Function to set loading state
function setLoading(isLoading) {
  // Implement loading state logic here
}

// Function to set email input value
function setEmail(email) {
  // Implement setting email logic here
}

// Function to set subscribed state
function setSubscribed(isSubscribed) {
  // Implement subscribed state logic here
}

// Function to set error message
function setErrorMessage(message) {
  // Implement error message logic here
}

const form = document.getElementById("convertkit-form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  const emailInput = document.getElementById("common-input");
  const email = emailInput.value;

  setLoading(true);

  axios
    .post(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      api_key: API_KEY,
      email: email,
    })
    .then(response => {
      console.log("Email sent successfully!");
      setEmail(""); // Resetting the email input field after successful submission
      setLoading(false);
      setSubscribed(true);

      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    })
    .catch(error => {
      console.error("Error sending email:", error);
      setErrorMessage("Error occurred. Please try again!");
      setLoading(false);

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    });
});