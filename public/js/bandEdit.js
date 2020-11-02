const updateBandBtn = document.querySelector("#updateBand");

// Does a post to the editBandProfile route. If successful, we are redirected to the band page
// Otherwise we log any errors
function editBandProfile (id,name,genre,bio) {
  $.post("/api/editBandProfile", {
    userId: id,
    bandName: name,
    bandGenre: genre,
    bandBio: bio,
  })
    .then(() => {
      window.location.replace("/band");
      // If there's an error, handle it by throwing up a bootstrap alert
    })
    .catch(handleUpdateErr);
  
}

function handleUpdateErr(err) {
  $("#alert .msg").text(err.responseJSON);
  $("#alert").fadeIn(500);
}


updateBandBtn.addEventListener("click", (event) => {
  event.preventDefault();
  
  $.get("/api/user_data",(data) => {
    return data.id;
  }).then((data) => {
    const bandName = document.querySelector(".inputBandName");
    const bandGenre = document.querySelector(".inputGenre");
    const bandBio = document.querySelector(".descText");
    const userData = {
      userId: data.id,
      bandName: bandName.value.trim(),
      bandGenre: bandGenre.value.trim(),
      bandBio: bandBio.value.trim(),
    };
    console.log("****Object to send to db****");
    console.log(userData);
    
    editBandProfile(userData.userId,userData.bandName,userData.bandGenre,userData.bandBio);
    // set inputs back to empty string 
    bandName.value = "";
    bandGenre.value = "";
    bandBio.value = "";
  });
});

