// ===========sidenav animation======
function toggleMenu() {
    const links = document.querySelector(".sidenav-menu-links");
    const icon = document.querySelector(".sidenav-menu-icon");
    
    links.classList.toggle("Open");
    icon.classList.toggle("Open");
    }


// =============formdata==========


function sendMail() {
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseMsg = document.getElementById("response-msg");
    
    // Validate if any field is empty
    if (fname === "" || lname === "" || email === "" || message === "") {
    responseMsg.textContent = "Please fill detail in the fields before submitting.";
    responseMsg.style.color = "red";
    return; 
    }
    
    let parms = {
    fname: fname,
    lname: lname,
    email: email,
    message: message
    };
    
    emailjs.send("service_705nd6g", "template_w6uetzf", parms)
    .then(function (response) {
    responseMsg.textContent = "Sent successfully.";
    responseMsg.style.color = "#19a814";
    
    setTimeout(() => {
    document.querySelector(".contact-form").reset();
    responseMsg.textContent = "";
    }, 1000);
    })
    .catch(function (error) {
    responseMsg.textContent = "Failed to send. Try again!";
    responseMsg.style.color = "red";
    });
    }