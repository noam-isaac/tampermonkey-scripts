// ==UserScript==
// @name         Custom Style Injector
// @namespace    *
// @version      2023-12-21
// @description  Apply custom styles to all pages
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	const css = `
    body > readwise-tooltip-container {
        direction: ltr;
    }`;

	// Check if the style element already exists
	const existingStyle = document.getElementById('customStyleInjector');
	if (!existingStyle) {
		const style = document.createElement('style');
		style.id = 'customStyleInjector'; // Assign an ID to the style element
		style.innerHTML = css;
		document.head.appendChild(style);
	}
})();
