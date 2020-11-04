/* eslint-disable indent */
const updateVenueBtn = document.querySelector("#updateVenue");

// Does a post to the editvenueProfile route. If successful, we are redirected to the venue page
// Otherwise we log any errors
function editVenueProfile(id, name, size, rate, desc) {
    $.post("/api/editVenueProfile", {
            userId: id,
            venueName: name,
            venueSize: size,
            venueRate: rate,
            venueDesc: desc
        })
        .then(() => {
            window.location.replace("/venue");
            // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleUpdateErr);

}

function handleUpdateErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
}


updateVenueBtn.addEventListener("click", (event) => {
    event.preventDefault();

    $.get("/api/user_data", (data) => {
        return data.id;
    }).then((data) => {
        const venueName = document.querySelector(".inputBusiness");
        const venueSize = document.querySelector(".inputCapacity");
        const venueRate = document.querySelector(".inputRate");
        const venueDesc = document.querySelector(".descText");
        const userData = {
            userId: data.id,
            venueName: venueName.value.trim(),
            venueSize: venueSize.value.trim(),
            venueRate: venueRate.value.trim(),
            venueDesc: venueDesc.value.trim()
        };
        console.log("****Object to send to db****");
        console.log(userData);

        editVenueProfile(userData.userId, userData.venueName, userData.venueSize, userData.venueRate);
        // set inputs back to empty string 
        venueName.value = "";
        venueSize.value = "";
        venueRate.value = "";
        venueDesc.value = "";
    });
});