const userEmailForm = document.querySelectorAll(".footer-widget-item")[3];
console.log(userEmailForm);

userEmailForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let userEmail = document.querySelector(".form-control").value;
    console.log(userEmail);

    (async () => {
        const rawResponse = await fetch(`${SERVER_URL}/api/contacts`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: {
                    email: userEmail,
                    message: "I want to subscribe to your Mailing List",
                },
            }),
        });
        const content = await rawResponse.json();

        console.log(content);
        alert("We've received your email successfully!");
    })();
});
