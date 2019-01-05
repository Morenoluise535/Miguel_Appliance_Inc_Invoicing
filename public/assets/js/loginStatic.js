$(document).ready(function() {
// <<<<<<< extrahbs
//     var submitButton = $(".submit");
//     var emailInput = $(".emailInput");
//     var passwordInput = $(".passwordInput");

//     submitButton.on("click", function (event){
//         event.preventDefault();
// =======
    var submitButton = $("#submit");

    submitButton.on("click", function (event){
        event.preventDefault();
       
        var emailInput = $("#emailLogin");
        var passwordInput = $("#passwordLogin");

      
// >>>>>>> master
        var userInfo = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        }

        //Add a way to differentiate between owner and customer login info        


        loginUser(userInfo.email, userInfo.password);
        console.log("We are logged in!!!!");
        
        emailInput.val("");
        passwordInput.val("");        
    })

    function loginUser(email, password){
        $.post("/customer/login", {
            email: email,
            password: password
        }).then(function (data) {
            console.log(data);
            window.location.replace(data)
        })
    }

})