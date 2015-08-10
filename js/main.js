/*
 * main.js
 * Copyright (C) 2015 giulio <giulioungaretti@me.com>
 *
 * Distributed under terms of the MIT license.
 */
function toggle_visibility(id) {
        var e = document.getElementById(id);
        if (e.style.display == 'block')
                e.style.display = 'none';
        else
                e.style.display = 'block';
}


window.onload = doStuff;

function doStuff() {
        var sticky = new Waypoint.Sticky({
                element: $('#navid')[0]
        });
}
