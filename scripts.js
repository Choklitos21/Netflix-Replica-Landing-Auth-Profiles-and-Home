document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("loggedUser")) {
        window.location.href = 'profiles.html';
    }
});

document.getElementById("loginButton").addEventListener("click", () => {
    window.location.href = 'login.html';
})

document.getElementById("registerButtonOne").addEventListener("click", () => {
    window.location.href = 'register.html';
})

document.getElementById("registerButtonTwo").addEventListener("click", () => {
    window.location.href = 'register.html';
})
