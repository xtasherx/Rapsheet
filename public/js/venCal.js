/* eslint-disable indent */
const date = new Date();

let currentDay = null;

const renderCalendar = () => {

    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;



    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        days += `<div class="dayCube">
                    <div class="day">${i}</div>
                    <div class="description"></div>
                </div>`;
        monthDays.innerHTML = days;
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }


    // Modal

    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();

        const time = document.getElementById("time").value;
        const rate = document.getElementById("rate").value;
        currentDay.querySelector(".description").innerHTML = `${time} for $${rate}/hr`;


        console.log(time);
        console.log(rate);

        e.target.reset();

        document.querySelector(".bg-modal").style.display = "none";

    });

    document.querySelector(".days").addEventListener("click", (e) => {
        currentDay = e.target;
        while (!currentDay.classList.contains("dayCube")) {
            currentDay = currentDay.parentNode;
        }

        document.querySelector(".bg-modal").style.display = "flex";
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".bg-modal").style.display = "none";
    });

};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});



renderCalendar();