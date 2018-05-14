var chat;
var chatBody;
var chatTitle;
var btnChatOk;
var textChatArea;
var textChatLine;

var is_chat_retracted = true;
$(document).ready(function () {
    chatBody = $('#chat-body');
    chatTitle = $('#chatTitle');
    chat = $('#chat');
    btnChatOk = $('#btnChatOk');
    textChatArea = $('#textChatArea');
    textChatLine = $('#textChatLine');

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

    btnChatOk.click(function () {
        textChatArea.val(textChatLine.val());
        textChatLine.val('');
    });
});
