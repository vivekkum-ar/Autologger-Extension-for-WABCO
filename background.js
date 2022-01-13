let color = "#3AA757";

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.storage.sync.set({ color });
//     console.log(`Default color code set to ${color}`);
// });

//on installing, opens a welcome page
chrome.runtime.onInstalled.addListener((reason) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
      chrome.tabs.create({
        url: 'https://docs.google.com/spreadsheets/d/1kjuhfYlVhjT5xC9J14goaloBBA8QJ2A7VacPY1qYk1Y/edit#gid=0'
      });
    }
  });


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction") {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.action.enable(tabs[0].id);
        });
    }
});



//     // Update popup url method
//     var updatePopupURLForSelectedTab = function (selectedTab) {
//     var popUpURL = "popup.html";
//     var selectedTabURL = selectedTab.url;

//     if (selectedTabURL.match(/.*\.?google\.com.*/) != null ) {
//         popUpURL  = GOOGLE_URL_OF_YOUR_HTML_FILE;
//     } 
//     else if (selectedTabURL.match(/.*\.?xyz\.com.*/) != null) {
//         popUpURL = XYZ_URL_OF_YOUR_HTML_FILE;
//     }

//     // Set Popup URL
//     chrome.browserAction.setPopup({
//         popup :popUpURL
//     });
// };

// // Get current selected Tab 
// chrome.tabs.getSelected(null, function (tab) {
//     updatePopupURLForSelectedTab(tab);
// });


// // Listen for selected tab
// chrome.tabs.onActiveChanged.addListener(function(tabId, selectInfo) {
//     // Get selected tab
//     chrome.tabs.get(tabId, function (tab) {
//     updatePopupURLForSelectedTab(tab);
//     });
// });


// // Listen navigation update
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//     updatePopupURLForSelectedTab(tab);
// });

// // Listen for window change
// chrome.windows.onFocusChanged.addListener(function (windowId) {
//     chrome.tabs.getSelected(windowId, function (tab) {
//         updatePopupURLForSelectedTab(tab);
//     });
// });
