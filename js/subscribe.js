document.getElementById('convertkit-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const emailInput = document.querySelector('.common-input');
    const formId = '5693494'; // Replace with your actual ConvertKit form ID
    const apiKey = 'P0oWAiAmJiX_vkmZRgK8aw'; // Replace with your ConvertKit API key
  
    // Remove capitalized Gmail and .com
    let email = emailInput.value.toLowerCase(); // Convert to lowercase
    email = email.replace('gmail', ''); // Remove 'gmail'
    email = email.replace('.com', ''); // Remove '.com'
  
    const data = {
        email: email,
        api_key: apiKey,
        tags: [], // You can add tags if needed
    };
  
    fetch(`https://app.convertkit.com/forms/designers/5693494/newsletter-inner`, {
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
                emailInput.value = ''; // Clear the email input field
            }, 5000); // Clear success message and email input after 5 seconds
        } else {
            document.getElementById('error-message').textContent = 'Subscription failed. Please try again later.';
            document.getElementById('success-message').textContent = '';
            setTimeout(function() {
                document.getElementById('error-message').textContent = '';
                emailInput.value = ''; // Clear the email input field
            }, 5000); // Clear error message and email input after 5 seconds
        }
    })
    .catch(error => {
        document.getElementById('error-message').textContent = 'An error occurred. Please try again later.';
        document.getElementById('success-message').textContent = '';
        setTimeout(function() {
            document.getElementById('error-message').textContent = '';
            emailInput.value = ''; // Clear the email input field
        }, 5000); // Clear error message and email input after 5 seconds
    });
  });