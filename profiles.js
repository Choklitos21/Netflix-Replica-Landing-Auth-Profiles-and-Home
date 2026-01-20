document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("loggedUser")) {
        window.location.href = 'index.html';
    }
});

document.getElementById("profileOne").addEventListener("click", () => {
    window.location.href = 'home.html';
})

document.getElementById("profileTwo").addEventListener("click", () => {
    window.location.href = 'home.html';
})
