"use strict";

function renderWeeks(e) {
    yearsContainer.innerHTML = "";
    for (var t = function(t) {
            var n = milestones.find(function(e) {
                return e.from === t
            });
            if (n) {
                var r = document.createElement("div");
                r.classList.add("milestone"), r.textContent = n.title, yearsContainer.appendChild(r)
            }
            var a = document.createElement("div");
            a.classList.add("year");
            var i = document.createElement("div");
            i.classList.add("index"), i.textContent = t, a.appendChild(i), yearsContainer.appendChild(a);
            for (var d = 1; d <= weeksPerYear; d++) {
                var s = t * weeksPerYear + d,
                    o = document.createElement("div");
                o.classList.add("week"), s < e.spentWeeks && o.classList.add("spent"), o.id = "week-" + s, o.title = "year: " + t + "\nweek: " + d, a.appendChild(o)
            }
        }, n = 0; n < yearsInALife; n++) t(n)
}

function renderSpentWeeks(e) {
    var t = new Date,
        n = 7,
        r = 24,
        a = 60,
        i = 6e4,
        d = (t - e) / n / r / a / i;
    renderWeeks({
        spentWeeks: d
    })
}
var yearsContainer = document.getElementById("years"),
    yearsInALife = 72,
    weeksPerYear = 52,
    milestones = [{
        title: "Early Years",
        from: 0
    }, {
        title: "School",
        from: 7
    }, {
        title: "University",
        from: 19
    }, {
        title: "Career",
        from: 23
    }, {
        title: "Retirement",
        from: 65
    }],
    birthdayInput = document.getElementById("birthday");
birthdayInput.addEventListener("input", function() {
    var e = new Date(birthdayInput.value);
    renderSpentWeeks(e)
});
var birthday = new Date(birthdayInput.value);
renderSpentWeeks(birthday);