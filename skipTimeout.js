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

	function clickButton() {
		const button = document.querySelector('.continue-button');
		if (button) {
			button.click();
			console.log('Clicked button', button);
		}
	}

	// Click the button immediately if it exists
	clickButton();

	// Create a new observer
	const observer = new MutationObserver(clickButton);

	// Start observing the document with the configured parameters
	observer.observe(document, { childList: true, subtree: true });
})();
