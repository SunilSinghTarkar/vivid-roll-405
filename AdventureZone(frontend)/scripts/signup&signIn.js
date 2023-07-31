
    // let storedData = JSON.parse(localStorage.getItem("details")) || []

    hamburger = document.querySelector(".hamburger");
    nav = document.querySelector("nav");
    hamburger.onclick = function() {
        nav.classList.toggle("active");
    }
   //SignUp and signIn main form buttons
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');



  // Panel swapping listner for signup and signIn
  signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });
  signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });


 //             <!--  S I G N U P     C O D E    S T A R T' S    F R O M    H E R E -->


  // SignUp form input values
  let signupForm = document.getElementById("form1");
  let nameInp = document.getElementById("name");
  let emailInp = document.getElementById("email");
  let passwordInp = document.getElementById("password")
  let mobileInp = document.getElementById("mobNumber")
  let ageInp = document.getElementById("age")
  let addressInp = document.getElementById("address")
  let upNav=document.getElementById("upNav");
  let upNavUser=document.querySelector("#upNav p");
//   let loginBtn=document.getElementById("#loginBtn");


// Random id generator for Abstract User class in java
  function generateRandomID(length) {
    const characters = '0123456789';
    let randomID = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomID += characters[randomIndex];
    }

    return randomID;
  }




  // Function to add new customer to the database using the signup form
  const signUp = document.getElementById('button2');
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addcustomer();
  })


  async function addcustomer() {
    console.log("Click")
    let obj = {
      "userId": generateRandomID(5),
      "username": nameInp.value,
      "password": passwordInp.value,
      "address": addressInp.value,
      "mobNumber": mobileInp.value,
      "email": emailInp.value,
      "createdDate": "",
      "updatedDT": "",
      "deleteDT": "",
      "role": "USER",
      "customerId": 0,
      "age": ageInp.value,
      "deleted": false
    };

    let fetchedData = await fetch('https://adventure-zone-database-production.up.railway.app/adventureZone/addCustomer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    });

    if (fetchedData.ok) {
      alert('Customer registered Successfully');
      window.location.reload();
    }
  }


  //                      <!--  S I G N U I N    C O D E    S T A R T' S    F R O M    H E R E -->


 // Function to login using the username and password and set the cookies of jwt token
  let loginForm = document.getElementById("form2");
  let emailInput = document.getElementById("email-log");
  let passwordInput = document.getElementById("password-log");
  let userValue = JSON.parse(localStorage.getItem('user')) || "";
  let userNameLogIn = document.getElementById("userNameLogIn");
  
  async function login(username, password) {
    try {
      const response = await fetch('https://adventure-zone-database-production.up.railway.app/adventureZone/customer/signIn', {
        headers: { 'Authorization': 'Basic ' + btoa(username + ':' + password) }
      });

      if (response.status === 202) {
        const token = response.headers.get('Authorization');
        
        Cookies.set('token', token, { expires: 30 });
        window.location.href = "../index.html";
        return await response.json();
      } else {
        console.log("invalid credentials");
        return Promise.reject(await response.json());
      }
    } catch (error) {
      console.log("unbale to make fetch request");
      return Promise.reject(error);
    }
  }




   // Function to validate the user is logged in or not.
  function auth() {
    if (!Cookies.get('token')) {
      throw "Token not found";
    }
    return fetch('https://adventure-zone-database-production.up.railway.app/adventureZone/customer/signIn', {
      method: 'POST',
      body: Cookies.get('token')
    })
      .then(function (res) {
        if (res.status === 202) {
          return res.json();
        }
        return Promise.reject(res.json());
      });
  }




  // Calling the login function
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = emailInput.value; // Get the value from the email input
    const password = passwordInput.value; // Get the value from the password input

    login(username, password)
      .then((userData) => {
        console.log(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        
       
        // loginBtn.style.display='none';
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  });

  console.log(userValue);

if(userValue==""){
    userNameLogIn.innerText="";
}else{
    userNameLogIn.innerText=userValue.username;
}
  

const userDiv = document.getElementById('user');
const hoverLogOutDiv = document.querySelector('.hoverLogOut');
const logoutBtn = document.getElementById('logoutBtn');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');

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

