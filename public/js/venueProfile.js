/* eslint-disable indent */
// gets user data from db to use on venue.html 
$.get("/api/user_data", (data) => {
    return data;
}).then((data) => {
    $.get("/api/venueData/" + data.id, (data) => {
        console.log(data);
    });
}).catch((err) => {
    res.status(401).json(err);
});