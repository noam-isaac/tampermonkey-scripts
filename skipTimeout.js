// ==UserScript==
// @name         Skip Timeout Ads
// @namespace    http://tampermonkey.net/
// @version      2023-12-24
// @description  try to take over the world!
// @author       You
// @match        https://timeout.co.il/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=co.il
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	function removeAds() {
		const buttons = [
			...document.querySelectorAll('.continue-button'),
			...document.querySelectorAll('.ad_close'),
		];
		buttons.forEach((button) => {
			if (button.click) {
				button.click();
				console.log('Clicked button', button);
			}
		});

		// Find all divs with classes 'sticky_footer-container' and 'show'
		const divs = document.querySelectorAll('div.sticky_footer-container.show');

		// For each div
		divs.forEach((div) => {
			// Remove the 'show' class
			div.classList.remove('show');
			// Add the 'hide' class
			div.classList.add('hide');
		});
	}

	// Click the button immediately if it exists
	removeAds();

	// Create a new observer
	const observer = new MutationObserver(removeAds);

	// Start observing the document with the configured parameters
	observer.observe(document, { childList: true, subtree: true });

	// Also run every 1 second
	setInterval(removeAds, 1000);
})();
