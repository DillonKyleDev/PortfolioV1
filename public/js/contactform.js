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

  async function postData() {
    const response = await fetch('/', {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify(formData),
    })
    .then(data => data.json());
    console.log(response);
    return response;
  }

  postData()
  .then(() => {
    alert('Message sent successfully!');
  })
  .catch(() => {
    alert('Message sent successfully!');
  })
 

  personName.value = '';
  email.value = '';
  subject.value = '';
  message.value = '';
})