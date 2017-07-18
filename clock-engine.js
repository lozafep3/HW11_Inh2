function Clock() {
    this.cHours = function() {
        var cHours = new Date().getHours();

        if (cHours < 10) {
            cHours = '0' + cHours;
        }

        return cHours;
    };

    this.cMinutes = function() {
        var cMinutes = new Date().getMinutes();

        if (cMinutes < 10) {
            cMinutes = '0' + cMinutes;
        }

        return cMinutes;
    };

    this.cSeconds = function() {
        var cSeconds = new Date().getSeconds();

        if (cSeconds < 10) {
            cSeconds = '0' + cSeconds;
        }

        return cSeconds;
    };
}

function ClockFull(id, timezone) {
    Clock.call(this, arguments);

    this.draw = function () {
        document.getElementById(id).innerHTML = (+this.cHours() + timezone) + ':' + this.cMinutes() + ':' + this.cSeconds();
    }
}

function ClockShort(id, timezone) {
    Clock.call(this, arguments);

    this.draw = function () {
        document.getElementById(id).innerHTML = (+this.cHours() + timezone) + ':' + this.cMinutes();
    }
}

//=====================================================

setInterval(function () {
    clockLocal.draw();
    clockUTC.draw();
}, 500);

var clockLocal = new ClockFull('time_local', 0);
var clockUTC = new ClockShort('time_utc', -2);