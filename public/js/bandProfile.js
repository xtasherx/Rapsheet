// gets user data from db to use on band.html
$.get("/api/user_data",(data) => {
  return data;
}).then((data) => {
  $.get("/api/bandData/" + data.id,(data) => {
    console.log(data);

    //just an example of how the object is working for when handlebars gets implemented.
    const nameHeader = document.querySelector(".bandNameH2");
    nameHeader.innerHTML = data.bandName;
  });
}).catch((err) => {
  res.status(401).json(err);
});




