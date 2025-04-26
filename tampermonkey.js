// ==UserScript==
// @name         Close the window with Escape
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Closes the window when Escape key is pressed
// @author       Jean-Maurice Martin
// @match        https://<application-site>/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            window.close();
        }
    });
})();