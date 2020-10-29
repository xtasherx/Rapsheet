$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = document.querySelector("#signUpBtn");
  const emailInput = document.querySelector("#email-input");
  const passwordInput = document.querySelector("#password-input");
  const bandToggled = document.querySelector("#exampleRadios1");

  
  signUpForm.addEventListener('click',() => {
    event.preventDefault();
    const userData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
      isBand: bandToggled.checked
    };

    if (!userData.email || !userData.password) {
      return;
    }

    signUpUser(userData.email, userData.password,userData.isBand);
    emailInput.value = "";
    passwordInput.value = "";
    
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password,isBand) {
    $.post("/api/signup", {
      email: email,
      password: password,
      isBand: isBand
    })
      .then((data) => {
        console.log(data);
        if (data.isBand) {
          window.location.replace("/band")
        } else {
          window.location.replace("/members");
        }
  
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
