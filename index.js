function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}
function seterror(id, error) {
    // sets error inside tag of id
    var element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    clearErrors();
    
    // perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myform']["Fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    var Email = document.forms['myform']["fEmail"].value;
    if (Email.length > 10) {
        seterror("Email", "*Length of email is too Long");
        returnval = false;
    }

    var Phone = document.forms['myform']["fPhone"].value;
    if (Phone.length != 10) {
        seterror("Phone", "*Phone number should be of 10 digits");
        returnval = false;
    }
    var Password = document.forms['myform']["fpass"].value;
    if (Password.length < 6) {
        seterror("pass", "*Password Should be at least 6 Character log");
        returnval = false;
    }
    
    
    return returnval;
}

