
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    const selectedTab = document.getElementById(tabId);
    const selectedTabButton = document.querySelector(`[onclick="showTab('${tabId}')]`);

    selectedTab.classList.add('active');
    selectedTabButton.classList.add('active');
}

const nameForm = document.getElementById('name');
const phoneForm = document.getElementById('phone');
const passwordForm = document.getElementById('password');

nameForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle changing the name
    console.log('Name updated:', document.getElementById('new-name').value.trim());
});

phoneForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle changing the phone number
    console.log('Phone number updated:', document.getElementById('new-phone').value.trim());
});

passwordForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle changing the password
    console.log('Old Password:', document.getElementById('old-password').value.trim());
    console.log('New Password:', document.getElementById('new-password').value.trim());
});
