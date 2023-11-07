
  (function () {
    var form = document.querySelector('.newsletter-inner');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('[name="EMAIL"]').value;
      var data = {
        email: email,
      };

      fetch('https://api.convertkit.com/v3/forms/${5693494}/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(function () {
          // Subscription successful
          alert('Thank you for subscribing!');
          form.reset(); // Clear the form
        })
        .catch(function (error) {
          // Handle the error
          console.error('Subscription failed:', error);
        });
    });
  })();