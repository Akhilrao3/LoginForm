function validateSignUpform() {
    var fname = document.signup.fname.value;
    var lname = document.signup.lname.value;
    var mname = document.signup.mname.value;
    var mail = document.signup.mail.value;
    var uname = document.signup.uname.value;
    var password = document.signup.psd.value;
    var confrimPassword = document.signup.cpsd.value;
  
    if (
      fname == "" ||
      lname == "" ||
      uname == "" ||
      fname == null ||
      lname == null ||
      uname == null
    ) {
      alert("name cannot be blank");
      return false;
    } else if (fname.length < 3 || lname.length < 3 || uname.length < 3) {
      alert("name cannot be lessthen 3 characters");
      return false;
    }
    else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;
     } else if(confrimPassword.length<6){  
          alert("Password must be at least 6 characters long.");  
          return false;
    }else if(password!==confrimPassword){  
      alert("Password didnot Match");  
      return false; 
    }
  }