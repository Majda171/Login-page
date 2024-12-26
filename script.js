function login(){
    const nickname = document.querySelector("#nickname").value;
    const password = document.querySelector("#password").value;

    const correctNickname = "admin";
    const correctPassword ="mnj456";

    if(nickname === correctNickname && password === correctPassword){
        window.location.href = "home.html";
} else {
    const errorMessageDiv = document.querySelector('.error-message');
        errorMessageDiv.style.display = 'block';
        errorMessageDiv.textContent = "Login failed. Please check your credentials and try again.";
    }
}

