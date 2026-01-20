document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("loggedUser")) {
        window.location.href = 'profiles.html';
    }
});

document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    logInUser(data)
    event.target.reset()
})

function logInUser (data) {
    let users = JSON.parse(localStorage.getItem("users")) || []

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === data.userEmail) {
            if (users[i].password === data.userPassword) {
                localStorage.setItem("loggedUser", users[i].email)
                window.location.href = 'profiles.html';
                return false
            }
            alert("Password Incorrect")
            return false
        }
    }
    if (!localStorage.getItem("loggedUser")) {
        alert("Email not found, try to register first")
        return false
    }
}
