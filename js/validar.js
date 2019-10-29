new WOW().init();

$(document).ready(function() {
    $('#btn-suscribe').on('click', validateSubcription);
    $('#btn-send').on('click', validateSendMessage);

});

function validateSubcription() {
    var name = $('#name');
    var lastname = $('#lastname');

    if (name.val() === "" || lastname.val() === "") {
        alert("Debe llenar todos los campos");
    } else {
        alert("Datos enviados");
        name.val("");
        lastname.val("");
    }
}

function validateSendMessage(evt) {
    evt.preventDefault();

    var nameMessage = $('#name-message');
    var emailMessage = $('#email-message');
    var textMessage = $('#text-message');

    if (nameMessage.val() === "" || emailMessage.val() === "" || textMessage.val() === "") {
        alert("Debe llenar todos los campos");
    } else {
        alert("Datos enviados");
        nameMessage.val("");
        emailMessage.val("");
        textMessage.val("");
    }
}
