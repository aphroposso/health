document.getElementById('convertkit-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  const emailInput = document.querySelector('.common-input').value;
  const formId = '5534968'; // Replace with your actual ConvertKit form ID
  const apiKey = 'P0oWAiAmJiX_vkmZRgK8aw'; // Replace with your ConvertKit API key
  
  const data = {
    email: emailInput,
    api_key: apiKey,
    tags: [], // You can add tags if needed
  };

  fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(result => {
    if (result.subscription.state === 'active') {
      document.getElementById('success-message').textContent = 'Subscription successful!';
      document.getElementById('error-message').textContent = '';
      setTimeout(function() {
        document.getElementById('success-message').textContent = '';
      }, 5000); // Clear success message after 5 seconds
    } else {
      document.getElementById('error-message').textContent = 'Subscription failed. Please try again later.';
      document.getElementById('success-message').textContent = '';
      setTimeout(function() {
        document.getElementById('error-message').textContent = '';
      }, 5000); // Clear error message after 5 seconds
    }
  })
  .catch(error => {
    document.getElementById('error-message').textContent = 'An error occurred. Please try again later.';
    document.getElementById('success-message').textContent = '';
    setTimeout(function() {
      document.getElementById('error-message').textContent = '';
    }, 5000); // Clear error message after 5 seconds
  });
});