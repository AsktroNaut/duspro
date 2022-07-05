const registerForm = document.querySelector("#register-form");
console.log(registerForm);

const loginForm = document.querySelector("#login-form");
console.log(loginForm);

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let userFirstName = document.querySelector(".register-first-name").value;
    let userEmail = document.querySelector(".register-email").value;
    let userPassword = document.querySelector(".register-password").value;
    let userConfirmPassword = document.querySelector(
        ".register-confirm-password"
    ).value;

    console.log(userFirstName, userEmail, userPassword);
    if (userPassword != userConfirmPassword) {
        alert("Password and confirm password is not the same");
    } else {
        (async () => {
            const rawResponse = await fetch(
                `${SERVER_URL}/api/ezforms/submit`,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        data: {
                            first_name: userFirstName,
                            email: userEmail,
                        },
                    }),
                }
            );
            const content = await rawResponse.json();

            console.log(content);
            alert("Success!");
            window.location = "index.html";
        })();
    }
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let userEmail = document.querySelector(".login-email").value;
    let userPassword = document.querySelector(".login-password").value;
    console.log(userEmail, userPassword);

    console.log(userEmail, userPassword);

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
                },
            }),
        });
        const content = await rawResponse.json();

        console.log(content);
        alert("Success!");
        window.location = "index.html";
    })();
});
