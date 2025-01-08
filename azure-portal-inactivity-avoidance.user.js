// ==UserScript==
// @name        Azure Portal inactivity avoidance
// @namespace   manicminer
// @match       https://portal.azure.com/*
// @grant       none
// @version     1.0
// @author      manicminer
// @description Avoid inactivity on Azure Portal, prevent auto logout
// @downloadURL https://github.com/manicminer/userscripts
// @updateURL   https://github.com/manicminer/userscripts/blob/main/azure-portal-inactivity-avoidance.user.js
// ==/UserScript==

var azurePortalInactivityKludgeId

addEventListener("visibilitychange", (event) => {
  if (document.hidden) {
    azurePortalInactivityKludgeId = window.setInterval(tryToStaySignedIn, 10000)
  } else {
    window.clearInterval(tryToStaySignedIn)
  }
});

function tryToStaySignedIn() {
  staySignedInButton = document.querySelector('div.fxs-button[title="Do not sign out"]')
  if (staySignedInButton !== null) {
    staySignedInButton.click();
  }
}
