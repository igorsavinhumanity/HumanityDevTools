// Send a message to the active tab to get the access token
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getToken"}, (response) => {
        const tokenElement = document.getElementById('token');
        if (response && response.accessToken) {
            tokenElement.textContent = response.accessToken; // Display the token
        } else {
            tokenElement.textContent = "Access token not found.";
        }
    });

    chrome.tabs.sendMessage(tabs[0].id, {action: "getUserId"}, (response) => {
        const tokenElement = document.getElementById('user');
        if (response && response.userId) {
            tokenElement.textContent = response.userId; // Display the token
        } else {
            tokenElement.textContent = "Userid token not found.";
        }
    });

    chrome.tabs.sendMessage(tabs[0].id, {action: "getCompanyId"}, (response) => {
        const tokenElement = document.getElementById('companyId');
        if (response && response.companyId) {
            tokenElement.textContent = response.companyId; // Display the token
        } else {
            tokenElement.textContent = "Business token not found.";
        }
    });
});

// Function to copy text to clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

// Add event listeners to copy buttons
document.getElementById('token_copy').addEventListener('click', () => {
    const tokenText = document.getElementById('token').textContent;
    copyToClipboard(tokenText);
});

document.getElementById('user_copy').addEventListener('click', () => {
    const userIdText = document.getElementById('user').textContent;
    copyToClipboard(userIdText);
});

document.getElementById('company_copy').addEventListener('click', () => {
    const companyIdText = document.getElementById('companyId').textContent;
    copyToClipboard(companyIdText);
});