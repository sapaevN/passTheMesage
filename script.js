'use strict';

const messageInput = document.querySelector('#message-input');

messageInput.addEventListener('keydown', function (event) {
	if (event.key == "Enter"){
		getMessage()
	}
})

function getMessage() {
	document.querySelector('#message-output').
		innerHTML = messageInput.value;
	messageInput.value = '';
}

document.querySelector('#submit').addEventListener('click', getMessage)