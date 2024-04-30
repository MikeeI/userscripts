// ==UserScript==
// @name        Claude Wide Content
// @namespace   https://claude.ai/
// @version     1.0.2
// @description Make the contents in Claude wider
// @author      gtfish, MikeeI
// @match       https://claude.ai/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=claude.ai
// @grant       GM_addStyle
// @license     GPL-3.0-or-later
// @updateURL   https://raw.githubusercontent.com/MikeeI/userscripts/main/userscript_claude_wide_content.js
// @downloadURL https://raw.githubusercontent.com/MikeeI/userscripts/main/userscript_claude_wide_content.js
// ==/UserScript==

(function () {
    'use strict';

    function updateStyles() {
        GM_addStyle(`
            .max-w-3xl {
                max-width: ${Math.floor(window.innerWidth * 0.05)}rem;
            }
            .max-w-\\[75ch\\] {
                max-width: ${Math.floor(window.innerWidth * 0.1)}ch;
            }
            .max-w-\\[60ch\\] {
                max-width: ${Math.floor(window.innerWidth * 0.1)}ch;
            }
        `);
    }

    updateStyles();
    window.addEventListener('resize', updateStyles);
})();
