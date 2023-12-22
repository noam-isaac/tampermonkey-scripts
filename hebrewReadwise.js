// ==UserScript==
// @name         Hebrew Character Detection for RTL Layout in Readwise
// @namespace    http://tampermonkey.net/
// @version      2023-12-21
// @description  Automatically apply RTL layout to div with Hebrew text in Readwise articles
// @author       NI
// @match        https://read.readwise.io/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// Function to apply RTL if Hebrew characters are found
	function applyRtlIfHebrew() {
		const div = document.getElementById('document-text-content');
		if (div && div.parentElement && div.lang === 'he') {
			div.parentElement.style.direction = 'rtl';
			div.style.textAlign = 'right';

			const h1Tags = document.querySelectorAll('.header-content h1[lang="he"]');
			h1Tags.forEach(function (h1) {
				// @ts-ignore
				h1.style.textAlign = 'right';
			});

			const documentHeaderUrlAddresses = document.querySelectorAll(
				'.document-header-domain',
			);
			documentHeaderUrlAddresses.forEach(function (documentHeaderUrlAddress) {
				// @ts-ignore
				documentHeaderUrlAddress.style.direction = 'ltr';
			});
		}
	}
	// MutationObserver to observe changes in the DOM
	// @ts-ignore
	const observer = new MutationObserver(function (mutations) {
		applyRtlIfHebrew();
	});

	// Start observing the document body for added nodes
	observer.observe(document.body, { childList: true, subtree: true });
})();
