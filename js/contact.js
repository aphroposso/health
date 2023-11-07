
// the form id is myForm
$('#contact-form').on('submit', function(event) {
  event.preventDefault(); // prevent reload
  
  var formData = new FormData(this);
  formData.append('service_id', 'service_ky7cpsc');
  formData.append('template_id', 'template_ndnn34j');
  formData.append('user_id', 'VxesBWGzF0LgYlc9N');

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false, // auto-detection
      processData: false, // no need to parse formData to string
  }).done(function() {
      alert('Your mail is sent!');
      clearFormAndMessage();
  }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
      clearFormAndMessage();
  });
});

function clearFormAndMessage() {
  // Clear the form fields
  $('#contact-form')[0].reset();

  // Clear the message after 2 seconds
  setTimeout(function() {
      $('#contact-form .message').text('');
  }, 2000);
}