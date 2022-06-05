
const contactForm = document.getElementById('contact-form')
console.log(contactForm);

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let name= contactForm['con_lastName'].value
    let email = contactForm['con_email'].value
    let message = contactForm['con_message'].value

    console.log(name);
    console.log(email);
    console.log(message);
    (async () => {


        const rawResponse = await fetch('http://159.223.67.62:1339/api/ezforms/submit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({  token: 'your-recaptcha-token',
        formData:{
            name: name,
            email: email,
            message: message
        } })
        });
        const content = await rawResponse.json();
    
        console.log(content);
    })();
})