var chat;
var chatBody;
var chatTitle;
var btnChatOk, btnChatClose, textChatArea, textChatLine;

var is_chat_retracted = true;
$(document).ready(function () {
    chatBody = $('#chat-body');
    chatTitle = $('#chatTitle');
    chat = $('#chat');
    btnChatOk = $('#btnChatOk');
    btnChatClose = $('#btnChatClose');
    textChatArea = $('#textChatArea');
    textChatLine = $('#textChatLine');

    chatTitle.click(function () {
        if (is_chat_retracted) {
            chatBody.show();
            btnChatClose.show();
            chat.animate(
                {height: 300},
                200,
                function () {
                    is_chat_retracted = false;
                }
            );
        }
    });

    btnChatClose.click(function () {
        chatBody.hide();
        chat.animate(
            {height: 90},
            200,
            function () {
                is_chat_retracted = true;
            }
        );
        btnChatClose.hide();
    });

    btnChatOk.click(function () {
        textChatArea.val(textChatLine.val());
        textChatLine.val('');
    });
});
