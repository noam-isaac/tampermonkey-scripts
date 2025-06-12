// ==UserScript==
// @name         Cross out sponsored in bytes.dev
// @namespace    http://tampermonkey.net/
// @version      2025-06-11
// @description  try to take over the world!
// @author       You
// @match        https://bytes.dev/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bytes.dev
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function markSponsored() {
        document.querySelectorAll('body *').forEach(el => {
            if (
                !el.dataset.sponsoredMarked &&
                /\[sponsored\]$/i.test(el.innerText.trim())
            ) {
                el.style.textDecoration = 'line-through';
                el.style.opacity = '0.5';
                el.dataset.sponsoredMarked = 'true';
            }
        });
    }

    markSponsored();
    setInterval(markSponsored, 10000);
})();
