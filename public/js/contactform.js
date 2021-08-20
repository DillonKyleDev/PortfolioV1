const contactForm = document.getElementById('contactForm');
let personName = document.getElementById('personName');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  
  let formData = {
    personName: personName.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }

  function postData() {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(data => {
      console.log(data);
      alert('Message sent successfully!');
    })
    .catch(err => {
      alert(`Message did not send: ${err}`);
    })
  }

  postData();

  personName.value = '';
  email.value = '';
  subject.value = '';
  message.value = '';
})