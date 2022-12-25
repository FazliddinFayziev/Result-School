//bot token
var telegram_bot_id = "5445249410:AAGizRqKd3AJXqMo2-LqadaDU44lVtDgqIw"; 
//chat id
var chat_id = 928013543; 
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("number").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nPhone number: " + email + "\nMessage: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("message").value = "";
    return false;
};