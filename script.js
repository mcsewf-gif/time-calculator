function calculateTime(operation) {

    let time = document.getElementById("timeInput").value.trim();
    let minutes = parseInt(document.getElementById("minuteInput").value);

    if (time.length < 3 || isNaN(minutes)) {
        alert("Please enter a valid time and minutes.");
        return;
    }

    let hour;
    let minute;

    if (time.length === 3) {
        hour = parseInt(time.substring(0,1));
        minute = parseInt(time.substring(1));
    } else {
        hour = parseInt(time.substring(0,2));
        minute = parseInt(time.substring(2));
    }

    let total = hour * 60 + minute;

    if (operation === "add") {
        total += minutes;
    } else {
        total -= minutes;
    }

    total = (total + 24 * 60) % (24 * 60);

    let newHour = Math.floor(total / 60);
    let newMinute = total % 60;

    let hh = String(newHour).padStart(2, "0");
    let mm = String(newMinute).padStart(2, "0");

    document.getElementById("result").innerHTML =
        "Result: " + hh + ":" + mm;
}

function clearAll() {

    document.getElementById("timeInput").value = "";
    document.getElementById("minuteInput").value = "";
    document.getElementById("result").innerHTML = "Result:";

    document.getElementById("timeInput").focus();
}

document.getElementById("minuteInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        calculateTime("add");
    }

    if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("service-worker.js")
        .then(() => {
            console.log("Service Worker Registered");
        });

}

});