document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.querySelector('#signinForm');

    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const Email = document.querySelector('#signinEmail').value.trim();
        const Password = document.querySelector('#signinPassword').value.trim();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(
            (user) => user.Email === Email && user.Password === Password 
        );
        if(!user) {
            alert('Неверный Email или пороль');
            return;
        }

        localStorage.setItem('currendUser', JSON.stringify(user));
        window.location.href = "../home/home.html";
    });
});