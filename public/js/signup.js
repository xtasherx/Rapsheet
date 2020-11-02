
$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = document.querySelector("#signUpBtn");
  const emailInput = document.querySelector(".inputEmail4");
  const passwordInput = document.querySelector(".inputPassword4");
  const bandToggled = document.querySelector("#bandOption");
  const addressInput = document.querySelector(".inputAddress");
  const address2Input = document.querySelector(".inputAddress2");
  const cityInput = document.querySelector(".inputCity");
  const stateInput = document.querySelector(".inputState");
  const zipInput = document.querySelector(".inputZip");

  
  signUpForm.addEventListener("click",(event) => {
    
    event.preventDefault();
    console.log("object to send to db");
    const userData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
      isBand: bandToggled.checked,
      address: addressInput.value.trim(),
      address2: address2Input.value.trim(),
      city: cityInput.value.trim(),
      state: stateInput.value.trim(),
      zip: zipInput.value.trim(),
    };
    console.log(userData);
    if (!userData.email || !userData.password) {
      return;
    }

    signUpUser(userData.email,userData.password,userData.isBand,userData.address,
      userData.address2,userData.city,userData.state,userData.zip);
    emailInput.value = "";
    passwordInput.value = "";
    addressInput.value ="";
    address2Input.value="";
    cityInput.value = "";
    stateInput.value = "";
    zipInput.value ="";
    
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password,isBand,address,address2,city,state,zip) {
    $.post("/api/signup", {
      email: email,
      password: password,
      isBand: isBand,
      address: address,
      address2: address2,
      city: city,
      state: state,
      zip: zip
    })
      .then((data) => {
        console.log(data);
        if (data.isBand) {
          window.location.replace("/allVenue");
        } else {
          window.location.replace("/allBand");
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
