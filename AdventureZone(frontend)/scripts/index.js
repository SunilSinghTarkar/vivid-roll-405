
hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}


function autoScrollHorizontally(element, stepSize, interval) {
    const container = document.querySelector(element);
    const contentWidth = container.scrollWidth;
    let scrollDirection = 1; // 1 for forward, -1 for backward
    let scrollInterval; // Declare the variable here, so we can use it later

    // Function to perform the scrolling action
    function scrollStep() {
        container.scrollLeft += stepSize * scrollDirection;

        // Change scroll direction when reaching the end of the content
        if (container.scrollLeft >= contentWidth - container.clientWidth || container.scrollLeft <= 0) {
            scrollDirection *= -1;
        }
    }

    // Function to start the auto-scrolling
    function startAutoScroll() {
        scrollInterval = setInterval(scrollStep, interval);
    }

    // Start auto-scrolling initially
    startAutoScroll();

    // Pause auto-scrolling on mouseenter
    container.addEventListener('mouseenter', function() {
        clearInterval(scrollInterval);
    });

    // Resume auto-scrolling on mouseleave
    container.addEventListener('mouseleave', function() {
        startAutoScroll(); // Restart the auto-scrolling after mouseleave
    });
}

// Call the autoScrollHorizontally function with the element to scroll, step size, and interval in milliseconds
autoScrollHorizontally('.exploreAdv', 1.2, 30);



const userDiv = document.getElementById('user');
const hoverLogOutDiv = document.querySelector('.hoverLogOut');
const logoutBtn = document.getElementById('logoutBtn');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');
let upNavUser=document.querySelector("#upNav p");
let userValue = JSON.parse(localStorage.getItem('user')) || "";

if(userValue==""){
    upNavUser.innerText="";
}else{
    upNavUser.innerText=userValue.username;
}
  

let timeoutId;

function showHoverLogOut() {
    hoverLogOutDiv.style.display = 'block';
}

function hideHoverLogOut() {
    timeoutId = setTimeout(() => {
        hoverLogOutDiv.style.display = 'none';
    }, 3000); // 200ms delay before hiding the .hoverLogOut div
}

userDiv.addEventListener('mouseover', showHoverLogOut);
userDiv.addEventListener('mouseout', hideHoverLogOut);

hoverLogOutDiv.addEventListener('mouseover', () => {
    // If the user moves the mouse over the .hoverLogOut div, clear the timeout to prevent it from hiding
    clearTimeout(timeoutId);
    hoverLogOutDiv.style.display = 'block';
});

// hoverLogOutDiv.addEventListener('mouseout', hideHoverLogOut);

// Click event for the logout button
logoutBtn.addEventListener('click', () => {
    // Replace this with your logout logic
    localStorage.setItem('user', JSON.stringify(""));
    window.location.href = "/AdventureZone(frontend)/index.html";
});

// Click event for the settings button
registerBtn.addEventListener('click', () => {
    // Replace this with your settings logic
    window.location.href = "/AdventureZone(frontend)/html/signup&signIn.html";
});
loginBtn.addEventListener('click', () => {
    // Replace this with your settings logic
    window.location.href = "/AdventureZone(frontend)/html/signup&signIn.html";
});
