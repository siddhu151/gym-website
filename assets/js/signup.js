document.getElementById("signupForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[type="tel"]').value;

    const passwords = document.querySelectorAll('input[type="password"]');

    const password = passwords[0].value;
    const confirmPassword = passwords[1].value;

    // Validation
    if(name === "" || email === "" || phone === "" || password === "" || confirmPassword === ""){
        alert("Please fill all fields");
        return;
    }

    if(password.length < 6){
        alert("Password should contain at least 6 characters");
        return;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }

    // Save user after validation
    const user = {
        name,
        email,
        phone,
        password
    };

    localStorage.setItem("gymUser", JSON.stringify(user));

    alert("Account Created Successfully!");

    window.location.href = "login.html";
});