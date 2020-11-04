
// gets user data from db to use on band.html
$.get("/api/user_data", (data) => {
  return data;
}).then((data) => {
  $.get("/api/bandData/" + data.id, (data) => {
    console.log(data);
    //just an example of how the object is working for when handlebars gets implemented.
    const nameHeader = document.querySelector(".bandNameH2");
    const photo1 = document.querySelector(".photo1");
    const photo2 = document.querySelector(".photo2");
    const photo3 = document.querySelector(".photo3");
    const photo4 = document.querySelector(".photo4");
    const photo5 = document.querySelector(".photo5");
    const photo6 = document.querySelector(".photo6");
    const photo7 = document.querySelector(".photo7");
    const bandBio = document.querySelector(".bandBio");
    const genre = document.querySelector(".genre");
    const loc = document.querySelector(".bandLoc");
    const vid1 = document.querySelector(".vid1");
    const vid2 = document.querySelector(".vid2");
    nameHeader.innerHTML = data.bandName;
    loc.innerHTML = ` ${data.city}, ${data.state}`;
    genre.innerHTML = data.bandGenre;
    bandBio.innerHTML = data.bandBio; 
    photo1.setAttribute("src", data.bandPic1);
    photo2.setAttribute("src", data.bandPic2);
    photo3.setAttribute("src", data.bandPic3);
    photo4.setAttribute("src", data.memPic1);
    photo5.setAttribute("src", data.memPic2);
    photo6.setAttribute("src", data.memPic3);
    photo7.setAttribute("src", data.memPic4);
    vid1.setAttribute("src",data.vid1);
    vid2.setAttribute("src",data.vid2);
  });
}).catch((err) => {
  res.status(401).json(err);
});