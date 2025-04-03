// hidden Element

document.getElementById("home-section").classList.add("hidden");
document.getElementById("login-section").classList.remove("hidden");



// get variables

const mobileNumber = document.getElementById("mobile-input");
const pinNumber = document.getElementById("pin-input");
const logIn = document.getElementById("login-btn");
const logout = document.getElementById("logout-btn");


// logInEvents

logIn.addEventListener('click', function(e) {
    e.preventDefault();

    let mobileValue = mobileNumber.value;
    let pinValue = pinNumber.value;

    if (mobileValue !== '' && pinValue === '1234'){

        if (mobileValue.length === 11) {
            document.getElementById("login-section").classList.add("hidden");
            document.getElementById("home-section").classList.remove("hidden");
            Swal.fire({
                title: "Welcome!",
                icon: "success",
                draggable: true
            }); 
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Username vul",
            });
        }
        
    }
    else { 
        if(mobileValue === '' && pinValue === ''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Username এবং PassWord লিখো!",
            });
        }
        else if(mobileValue === ''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Username লিখো!",
            });
        } 
        else if (pinValue === ''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "PassWord লিখো!",
            });
        } 
        else if (pinValue !== '1234'){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "PassWord ভুল লিখেছো!",
            });
        }
    }
})

logout.addEventListener('click', (e) => {

    e.preventDefault();

    mobileNumber.value = '';
    pinNumber.value = '';

    document.getElementById("login-section").classList.remove("hidden");
    document.getElementById("home-section").classList.add("hidden");

    Swal.fire({
        title: "You are Logged Out!",
        icon: "success",
        draggable: true
    });
})