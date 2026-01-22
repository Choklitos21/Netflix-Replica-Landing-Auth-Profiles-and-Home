document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("loggedUser")) {
        window.location.href = 'profiles.html';
    }
});

const passwordInput = document.getElementById('userPassword');
const confirmPasswordInput = document.getElementById('confirm-password');

function checkPassword() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity('Password are not the same');
    } else {
        confirmPasswordInput.setCustomValidity('');
    }
}

passwordInput.addEventListener('input', checkPassword);
confirmPasswordInput.addEventListener('input', checkPassword);

document.getElementById("register-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    registerUser(data)
    event.target.reset()
})

function registerUser (data) {

    let users = JSON.parse(localStorage.getItem("users")) || []

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === data.userEmail) {
            alert("Email already registered")
            return false
        }
    }

    users.push({
        email: data.userEmail,
        password: data.userPassword,
        profiles: [
            {
                src: "media/images/media/images/1026-to-your-eternity-gugu.png",
                name: "Choklitos"
            }
        ],
        bookmark: [{}]
    })

    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("loggedUser", data.userEmail)
    window.location.href = 'profiles.html';
}
