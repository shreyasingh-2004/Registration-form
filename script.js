function resetForm() {
    // Get the form element
    var form = document.getElementById("registrationForm");
    window.location.reload();

    // Reset the form
    form.reset();
}

function create_account() {
    var fn = document.getElementById("n1").value;
    var ln = document.getElementById("n2").value;
    var a = document.getElementById("a1").value;
    var d = document.getElementById("d1").value;
    var e = document.getElementById("e1").value;
    var p = document.getElementById("p1").value;
    var cp = document.getElementById("p2").value;

    // Code for password validation  
    var letters = /^[A-Za-z]+$/;
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // Other validations required code  
    if (fn == '' || ln == '' || a == '' || d == '' || e == '' || p == '' || cp == '') {
        alert("Please fill each detail");
    }
    else if (!letters.test(fn)) {
        alert('First name is incorrect; must contain alphabets only');
    }
    else if (!letters.test(ln)) {
        alert('Last name is incorrect; must contain alphabets only');
    }
    else if (!email_val.test(e)) {
        alert('Invalid email format; please enter a valid email id');
    }
    else if (p != cp) {
        alert("Passwords do not match");
    }
    else if (document.getElementById("p1").value.length > 12) {
        alert("Password maximum length is 12");
    }
    else if (document.getElementById("p1").value.length < 6) {
        alert("Password minimum length is 6");
    }
    else {
        alert("Your account has been created successfully...");
    }
}


