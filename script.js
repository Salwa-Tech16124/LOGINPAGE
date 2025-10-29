function register() {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();

//   console.log(name, email, password);

  if (!name || !email || !password) {
    document.getElementById("regMsg").innerText = "All fields are required!";
    return;
  }
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("REGISTRATION SUCCESSFUL!");
//   document.getElementById("regMsg").innerText = "Registration Successful ";
  window.location.href = "index.html"; // will go back to login page
}

function login() {
    const email=document.getElementById("loginEmail").value.trim();
    const password=document.getElementById("loginPassword").value.trim();
    // console.log(email,password);

    const storedEmail = localStorage.getItem("userEmail"); 
    const storedPassword=localStorage.getItem("userPassword");// ye login details store krne ke liye hai  

    if(!storedEmail || !storedPassword){
        alert("User does not exist! Redirecting to registration page...");
        window.location.href="register.html";
        return;
    }

    if(email === storedEmail && password === storedPassword){//yha pe === sign ka matlab hai ki dono values aur types same hone chahiye
        alert("login successfully redirecting to home page..");
        window.location.href="welcome.html";//ye user ko home page pe le jane ke liye hai
    }else{
        document.getElementById("loginMsg").innerText="Invalid email or password!"// ye line kha pe error message dikhane ke liye hai? answer hai loginMsg id wale paragraph me 
            }
    }

