const API_KEY = "YBxrVYBVLNbIEVu4Qgo1ag";
const FORM_ID = "5693494";

setLoading(true);

axios.post(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
  api_key: API_KEY,
  email,
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


