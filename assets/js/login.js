document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    const storedUser =
JSON.parse(localStorage.getItem("gymUser"));

if(
    storedUser &&
    storedUser.email === email &&
    storedUser.password === password
){
    alert("Login Successful!");
    window.location.href = "index.html";
}
else{
    alert("Invalid Email or Password");
}

    

    if(email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Login Successful!");

    // Redirect to home page
    window.location.href = "index.html";
});