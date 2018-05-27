'use strict';


chrome.browserAction.onClicked.addListener(function (tab) {

    let url = "";
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        url = tabs[0].url;
        chrome.runtime.sendNativeMessage('de.ercpe.esgp', {url: url});
    });

});
