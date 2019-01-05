$document.ready(function () {

    // The classes being grabbed by bling operator will chaange once we decided specific ID's or class names
    var firstNameInput = $("#firstname-input");
    var lastnameInput = $("#lastname-input");
    var addressInput = $("#address-input");
    var aptInput = $("#apt-input");
    var cityInput = $("#city-input");
    var stateInput = $("#state-input");
    var zipcodeInput = $("#zipcode-input");
    var serviceInput = $("#service-input");
    var descriptionInput = $("#description-input");
    var quantityInput = $("#quantity-input");
    var priceInput = $("#price-input");
    var laborInput = $("#labor-input");
    var submitButton = $("#submit");


    //May add passwordRegEx to validate password format if establishes

    submitButton.on("click", function(event){
        event.preventDefault();

        var newInvoice = {
            firstName: firstNameInput.val().trim(),
            lastName: lastnameInput.val().trim(),
            address: addressInput.val().trim(),
            apt: aptInput.val().trim(),
            city: cityInput.val().trim(),
            state: stateInput.val().trim(),
            zipCode: zipcodeInput.val().trim(),
            service: serviceInput.val().trim(),
            description: descriptionInput.val().trim(),
            quantity: quantityInput.val().trim(),
            price: priceInput.val().trim(),
            labor: laborInput.val().trim()
        }


        createInvoice(newInvoice.firstName, newInvoice.lastName, newInvoice.address, newInvoice.apt, newInvoice.city, newInvoice.state, newInvoice.zipCode, newInvoice.service, newInvoice.description, newInvoice.quantity, newInvoice.price, newInvoice.labor);
    
        firstNameInput.val("");
        lastnameInput.val("");
        addressInput.val("");
        aptInput.val("");
        cityInput.val("");
        stateInput.val("");
        zipcodeInput.val("");
        serviceInput.val("");
        descriptionInput.val("");
        quantityInput.val("");
        priceInput.val("");
        laborInput.val("");
    })

    function createInvoice(firstName, lastName, address, apt, city, state, zipCode, service, description, quantity, price, labor) {
        $.post("/owner/invoiceCreate", {
            firstName: firstName,
            lastName: lastName,
            address: address,
            apt: apt,
            city: city,
            state: state,
            zipCode: zipCode,
            service: service,
            description: description,
            quantity: quantity,
            price: price,
            labor: labor
        }).then (function(data) {
            if (data) {
                alert("Invoice was added.");
                window.location = data.redirect
            }
        }).catch(function(err){
            console.log(err);
        });
    }
})