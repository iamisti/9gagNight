chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    if (tab.url.indexOf("9gag.com") > -1 &&
        changeInfo.url === undefined){

        chrome.tabs.executeScript(tabId, {file: "program.js"} );
    }
});