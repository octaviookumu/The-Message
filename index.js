const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg);
sendBtn.addEventListener('click', timerTing);

function sendMsg() {
	let content = messageIn.value;
	//console.log(content);
	if (content === '') {
		alert('Please Enter Valid Value. Current Value is Empty!');
	} else {
		messageOut.innerHTML = content;
		messageIn.value = '';
	}
}

function timerTing() {
	setTimeout(() => {
		messageOut.innerHTML = '';
	}, 5000);
}
