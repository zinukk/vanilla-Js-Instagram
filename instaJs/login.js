const userId = document.getElementById("userId");
const userPassword = document.getElementById("userPassword");
const loginButton = document.getElementById("loginButton");

function validationCheck() {
  userId.value.includes("@") && userPassword.value.length > 5
    ? (loginButton.disabled = false)
    : (loginButton.disabled = true);
}

userId.addEventListener("keypress", validationCheck);
userPassword.addEventListener("keypress", validationCheck);

loginButton.addEventListener("click", function () {
  alert("오잉");
});
