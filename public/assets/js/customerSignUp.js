$(document).ready(function () {
    
    var submitButton = $("#submit");
    
    submitButton.on("click", function(event){

        var fullNameInput = $("input#fullName").val().trim();
        var emailInput = $("input#email").val().trim();
        var passwordInput = $("input#password").val().trim();
        var repeatPasswordInput = $("input#password2").val().trim();
    
        
        //Making sure the inputs are being registered
        // console.log(fullNameInput + "\n" + emailInput + "\n" + passwordInput + "\n" + repeatPasswordInput);

        // repeatPasswordInput.bing("input propertyChange", function() {
        //     if(passwordInput.val().trim() !== repeatPasswordInput.val().trim()) {
        //         //Will add a message under form when IDs or classes are chosen
                
        //         alert("Passwords do not match")
        //     }
        // })

        //May add passwordRegEx to validate password format if establishes

        var newCustomer = {
            name: fullNameInput,
            email: emailInput,
            password: passwordInput
        };
         
        if (!newCustomer.name || !newCustomer.email || !newCustomer.password) {
            return alert("Please don't leave fields blank");
        };
        
        signUpCustomer(newCustomer.name,newCustomer.email, newCustomer.password);
        fullNameInput.val("");
        emailInput.val("");
        passwordInput.val("");
        repeatPasswordInput.val("");
    })

    function signUpCustomer(name, email, password) {
        $.post("/customer/registration", {
            customerID: email,
            name: name,
            password: password
        }).then (function(data) {
            if (data.duplicateUser) {
                alert("You're e-mail has already been registered.")
            }
            else{
                window.location = data.redirect;
            }
        }).catch(function(err){
            console.log(err);
        });
    }
})