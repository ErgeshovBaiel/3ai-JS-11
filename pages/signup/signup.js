document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('#signupForm');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const Name = document.querySelector('#signupName').value.trim();
        const Email = document.querySelector('#signupEmail').value.trim();
        const Password = document.querySelector('#signupPassword').value.trim();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        if(users.find((user) => user.Email === Email)) {
            alert("Пользователь с таким email уже существует");
            return;
        }

        users.push({Name, Email, Password})
        localStorage.setItem('users', JSON.stringify(users));
        alert("Пользователь успешно зарегистрирован");
        window.location.href = "../signin/signin.html";
    });
});