document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem ("currendUser"));
    if(!user) {
        window.location.href = "../../index.html"
    } else {
        document.getElementById('userName').textContent = user.Name;
    }

    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn,addEventListener('click', () => {
        localStorage.removeItem('currendUser');
        window.location.href = '../../index.html';
    });
});