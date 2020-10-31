$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = document.querySelector(".formLogin");
  const emailInput = document.querySelector(".staticEmail2");
  const passwordInput = document.querySelector(".inputPassoword2");

  // When the form is submitted, we validate there's an email and password entered

  loginForm.addEventListener("click",(event) => {
    event.preventDefault();
    const userData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    loginUser(userData.email, userData.password);
    emailInput.value = "";
    passwordInput.value = "";
  });
  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password,
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
