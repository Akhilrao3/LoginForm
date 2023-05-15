function validateform() {
    var name = document.LoginForm.username.value;
    var password = document.LoginForm.pswrd.value;

    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    }
    else if (name.length < 3) {
        alert("username cannot be lessthen 3 characters");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}
