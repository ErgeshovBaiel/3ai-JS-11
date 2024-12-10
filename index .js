document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem("currendUser"));
    if(user) {
        window.location.href = './pages/home/home.html';
    }
});