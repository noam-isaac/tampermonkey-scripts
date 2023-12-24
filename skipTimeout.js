// ==UserScript==
// @name         Skip Timeout Ads
// @namespace    http://tampermonkey.net/
// @version      2023-12-24
// @description  try to take over the world!
// @author       You
// @match        https://timeout.co.il/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=co.il
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// Create a new observer
	var observer = new MutationObserver(function (mutations) {
		// For each mutation
		mutations.forEach(function (mutation) {
			// If nodes were added
			if (mutation.addedNodes) {
				// For each added node
				[].slice.call(mutation.addedNodes).forEach(function (node) {
					// If the node has the class 'continue-button'
					if (node.classList && node.classList.contains('continue-button')) {
						// Click the button
						node.click();
					}
				});
			}
		});
	});

	// Start observing the document with the configured parameters
	observer.observe(document, { childList: true, subtree: true });
})();
