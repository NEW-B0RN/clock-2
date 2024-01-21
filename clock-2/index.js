setInterval(() => {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let ampm = document.getElementById("ampm");

    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let am = h >= 12 ? "PM" : "AM";

    if (h > 12) {
        h = h - 12;
    }

    if (h === 0) {
        h = 12;
    }

    m = m < 10 ? "0" + m : m;

    hours.innerHTML = h + ":";
    minutes.innerHTML = m;
    ampm.innerHTML = am;
}, 1000);
