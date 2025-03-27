// Fetching Access Token
const accessToken = sessionStorage.getItem('accessToken');

const userId = localStorage.getItem('userId');

var user_ajs_trait = JSON.parse(localStorage.getItem('ajs_user_traits'));
const companyId = user_ajs_trait.company_id;


// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getToken") {
        sendResponse({ accessToken: accessToken });
    }

    if (request.action === "getUserId") {
        sendResponse({ userId: userId });
    }

    if (request.action === "getCompanyId") {

        sendResponse({ companyId: companyId });
    }
});
