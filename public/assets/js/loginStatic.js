$(document).ready(function() {
    var submitButton = $(".submit");
    var emailInput = $(".emailInput");
    var passwordInput = $(".passwordInput");

    submitButton.on("click", function (event){
        event.preventDefault();
        var userInfo = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        }


        //Add a way to differentiate between owner and customer login info



        loginUser(userInfo.email, userInfo.password);
        emailInput.val("");
        passwordInput.val("");        
    })

    function loginUser(email, password){
        $.post("/customer/login", {
            email: email,
            password: password
        }).then(function (data) {
            window.location.replace(data)
        }).catch(function(err){
            alert("Incorrect email or password.")
        })
    }

})