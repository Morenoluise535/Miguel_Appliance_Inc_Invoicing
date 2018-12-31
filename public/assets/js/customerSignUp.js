$document.ready(function () {

    // The classes being grabbed by bling operator will chaange once we decided specific ID's or class names
    var fullNameInput = $(".form-control.name");
    var emailInput = $(".form-control.email");
    var passwordInput = $(".form-control.password");
    var repeatPasswordInput = $(".form-control.password2")
    var submitButton = $("submit");


    repeatPasswordInput.bing("inout propertyChange", function() {
        if(passwordInput.val().trim() !== repeatPasswordInput.val().trim()) {
            //Will add a message under form when IDs or classes are chosen
            
            alert("Passwords do not match")
        }
    })

    //May add passwordRegEx to validate password format if establishes

    submitButton.on("click", function(event){

        var newCustomer = {
            name: fullNameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        }

        if (!newCustomer.name || !newCustomer.email || !newCustomer.password) {
            return alert("Please don't leave fields blank");
        }

        signUpCustomer(newCustomer.name,newCustomer.email, newCustomer.password);
        fullNameInput.val("");
        emailInput.val("");
        passwordInput.val("");
        repeatPasswordInput.val("");
    })

    function signUpCustomer(name, email, password) {
        $.post("/customer/signup", {
            name: name,
            email: email,
            password: password
        }).then (function(data) {
            if (data.duplicateUser) {
                alert("Sorry, you're e-mail has already been registered.")
            }
            else{
                window.location = data.redirect;
            }
        }).catch(function(err){
            console.log(err);
            
        });
    }
})