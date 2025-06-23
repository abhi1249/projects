function validateEmail() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");
  const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(regex)) {
    message.textContent = "Valid Email Address";
    message.className = "valid";
  } else {
    message.textContent = "Invalid Email Address";
    message.className = "invalid";
  }
}