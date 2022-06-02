const userEmailForm = document.querySelectorAll('.footer-widget-item')[3]
console.log(userEmailForm);

userEmailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let userEmail = document.querySelector('.form-control').value
        console.log(userEmail);
    

        (async () => {


            const rawResponse = await fetch('http://159.223.67.62:1337/api/ezforms/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  token: 'your-recaptcha-token',
            formData:{
                name: '',
                email: userEmail,
                message: ''
            } })
            });
            const content = await rawResponse.json();
            
            console.log(content);
            alert("Đăng kí nhận thông tin thành công!")
            
        })();
})











