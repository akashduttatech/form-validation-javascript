addEventListener("submit", (event) => {
  event.preventDefault();
  formValidate();
});

function formValidate() {
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let cpassword = document.getElementById("cpassword").value.trim();
  let emailValidRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (username == "" || username == null) {
    // alert("username is required");
    setError(username, "Username is required");
  } else if (username.length < 3) {
    // alert("Username must be at least 3 characters");
    setError(username, "Username must be at least 3 characters");
  } else {
    setSuccess(username);
  }
  if (email == "" || username == null) {
    alert("Email field is required");
    // setError(username, "Username is required");
  } else if (!email.match(emailValidRegex)) {
    alert("Email is not valid");
    // setError(username, "Username is required");
  } else {
    setSuccess(email);
  }

  if (password == "") {
    alert("Password is required");
    // setError(username, "Password is required");
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters");
    // setError(username, "Password must be at least 6 characters");
  } else if (cpassword == "") {
    alert("Confirm Password field is required");
    // setError(username, "Confirm Password field is required");
  } else if (password != cpassword) {
    alert("Passwords do not match");
    // setError(username, "Passwords do not match");
  } else {
    setSuccess(password);
  }
}

function setError(input, msg) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = msg;
}

function setSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}
