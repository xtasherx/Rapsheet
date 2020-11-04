const updateBandBtn = document.querySelector("#updateBand");

// Does a post to the editBandProfile route. If successful, we are redirected to the band page
// Otherwise we log any errors
function editBandProfile (id,name,bio,genre,h1,h2,h3,m1,m2,m3,m4,v1,v2) {
  $.post("/api/editBandProfile", {
    userId: id,
    bandName: name,
    bandGenre: genre,
    bandBio: bio,
    profPic1: h1,
    profPic2: h2,
    profPic3: h3,
    memPic1: m1,
    memPic2: m2,
    memPic3: m3,
    memPic4: m4,
    vid1: v1,
    vid2: v2
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
    const header1 = document.querySelector(".headerP1");
    const header2 = document.querySelector(".headerP2");
    const header3 = document.querySelector(".headerP3");
    const mem1 = document.querySelector(".memP1");
    const mem2 = document.querySelector(".memP2");
    const mem3 = document.querySelector(".memP3");
    const mem4 = document.querySelector(".memP4");
    const vid1 = document.querySelector(".vid1");
    const vid2 = document.querySelector(".vid2");
    const userData = {
      userId: data.id,
      bandName: bandName.value.trim(),
      bandBio: bandBio.value.trim(),
      bandGenre: bandGenre.value.trim(),
      header1: header1.value.trim(),
      header2: header2.value.trim(),
      header3: header3.value.trim(), 
      mem1: mem1.value.trim(),
      mem2: mem2.value.trim(),
      mem3: mem3.value.trim(),
      mem4: mem4.value.trim(),
      vid1: vid1.value.trim(),
      vid2: vid2.value.trim(),
    };
    console.log("****Object to send to db****");
    console.log(userData);
    
    editBandProfile(userData.userId,userData.bandName,userData.bandBio,userData.bandGenre,userData.header1,userData.header2,userData.header3,userData.mem1,userData.mem2,userData.mem3,userData.mem4,userData.vid1,userData.vid2);
    // set inputs back to empty string 
    bandName.value = "";
    bandGenre.value = "";
    bandBio.value = "";
    location.assign("/band");
  });
});

