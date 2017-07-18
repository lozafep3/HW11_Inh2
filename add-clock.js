// var clockLocal = new ClockFull('time_local', 0);
// var clockUTC = new ClockFull('time_utc', -2);
//
// setInterval(function () {
//     clockLocal.draw();
//     clockUTC.draw();
// }, 1000);

// Ниже написана очевидная фигня, но как иначе реализовать смену формата, если он железно задаётся при создании инстанса?

var formatLocal = true,
    formatUTC = true;

setInterval(function () {

    if (formatLocal === true) {
        new ClockFull('time_local', 0).draw();
    } else {
        new ClockShort('time_local', 0).draw();
    }

    if (formatUTC === true) {
        new ClockFull('time_utc', -2).draw();
    } else {
        new ClockShort('time_utc', -2).draw();
    }

}, 200);

document.getElementById('time_local').onclick = function() {
    formatLocal = !formatLocal;
};

document.getElementById('time_utc').onclick = function() {
    formatUTC = !formatUTC;
};