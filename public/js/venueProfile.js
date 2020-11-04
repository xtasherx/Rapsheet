/* eslint-disable indent */
// gets user data from db to use on venue.html 
$.get("/api/user_data", (data) => {
    return data;
}).then((data) => {

  $.get("/api/venueData/" + data.id,(data) => {
    console.log(data);
    const venueName = document.querySelector(".venueName");
    const photo1 = document.querySelector(".photo1");
    const photo2 = document.querySelector(".photo2");
    const photo3 = document.querySelector(".photo3");
    const photo4 = document.querySelector(".photo4");
    const cap = document.querySelector(".capacity");
    const loc = document.querySelector(".location");
    const rate = document.querySelector(".rate");
    const desc = document.querySelector(".venueDesc");
    desc.innerHTML = `${data.venueInfo}`;
    cap.innerHTML = `Capacity: ${data.venueSize}`;
    loc.innerHTML = `${data.address} ${data.address2}, ${data.city} ${data.state}`;
    rate.innerHTML = "See calendar for rates";
    photo1.setAttribute("src",data.venuePic1);
    photo2.setAttribute("src",data.venuePic2);
    photo3.setAttribute("src",data.venuePic3);
    photo4.setAttribute("src",data.venuePic4);
    venueName.innerHTML = data.venueName;
  });

}).catch((err) => {
    res.status(401).json(err);
});