var chat;
var chatBody;
var chatTitle;
var is_chat_retracted = true;
$(document).ready(function () {
    chatBody = $('#chat-body');
    chatTitle = $('#chatTitle');
    chat = $('#chat');
    chatTitle.click(function () {
        if (is_chat_retracted) {
            chatBody.show();
            chat.animate(
                {height: 300},
                200,
                function () {
                    is_chat_retracted = false;
                }
            );
        } else {
            chatBody.hide();
            chat.animate(
                {height: 90},
                200,
                function () {
                    is_chat_retracted = true;
                }
            );
        }
    });
});
