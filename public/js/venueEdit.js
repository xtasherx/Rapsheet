/* eslint-disable indent */
const updateVenueBtn = document.querySelector("#updateVenue");

// Does a post to the editvenueProfile route. If successful, we are redirected to the venue page
// Otherwise we log any errors
function editVenueProfile(id, name, size, rate,desc,p1,p2,p3,p4) {
    $.post("/api/editVenueProfile", {
            userId: id,
            venueName: name,
            venueSize: size,
            rate: rate,
            venueInfo: desc,
            profPic1: p1,
            profPic2: p2,
            profPic3: p3,
            subPic2: p4
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
        const headerP1 = document.querySelector(".headerP1");
        const headerP2 = document.querySelector(".headerP2");
        const headerP3 = document.querySelector(".headerP3");
        const headerP4 = document.querySelector(".headerP4");

        const userData = {
            userId: data.id,
            venueName: venueName.value.trim(),
            venueSize: venueSize.value.trim(),
            venueRate: venueRate.value.trim(),
            venueDesc: venueDesc.value.trim(),
            headerP1: headerP1.value.trim(),
            headerP2: headerP2.value.trim(),
            headerP3: headerP3.value.trim(),
            headerP4: headerP4.value.trim(),
        };
        console.log("****Object to send to db****");
        console.log(userData);

        editVenueProfile(userData.userId, userData.venueName, userData.venueSize, userData.venueRate,userData.venueDesc,userData.headerP1,userData.headerP2,userData.headerP3,userData.headerP4);
        // set inputs back to empty string 
        venueName.value = "";
        venueSize.value = "";
        venueRate.value = "";
        venueDesc.value = "";
        location.assign("/venue");
    });
});