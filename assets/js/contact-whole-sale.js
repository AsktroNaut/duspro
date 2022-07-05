const contactForm = document.getElementById("contact-form");
console.log(contactForm);

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstName = contactForm["con_firstName"].value;
    let lastName = contactForm["con_lastName"].value;
    let email = contactForm["con_email"].value;
    let phone = contactForm["con_phone"].value;
    let message = contactForm["con_message"].value;

    (async () => {
        const rawResponse = await fetch(`${SERVER_URL}/api/whole-sales`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: {
                    first_name: firstName,
                    last_name: lastName,
                    phone: phone,
                    email: email,
                    message: message,
                },
            }),
        });
        const content = await rawResponse.json();

        console.log(content);
    })();
});
