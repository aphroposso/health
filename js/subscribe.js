const API_KEY = "YBxrVYBVLNbIEVu4Qgo1ag";
const FORM_ID = "5693494";

// Function to set loading state
function setLoading(isLoading) {
  // You can implement loading UI changes here if needed
}

// Function to set success message
function setSuccessMessage(message) {
  const successMessage = document.getElementById("success-message");
  successMessage.innerText = message;
}

// Function to set error message
function setErrorMessage(message) {
  const errorMessage = document.getElementById("error-message");
  errorMessage.innerText = message;
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the email input value from the form
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
      emailInput.value = ""; // Resetting the email input field after successful submission
      setLoading(false);
      setSuccessMessage("Email sent successfully!");

      setTimeout(() => {
        setSuccessMessage("");
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
}

// Add an event listener to the form for form submission
const form = document.getElementById("convertkit-form");
form.addEventListener("submit", submitForm);