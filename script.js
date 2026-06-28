//your JS code here. If required.
let btn = document.querySelectorAll('.btn');
let stop = document.getElementsByClassName('stop');
let aud;
btn.forEach((btn)=>{
	btn.addEventListener('click',()=>{
		let sound = btn.textContent;
		aud = new Audio(`sounds/${sound}.wav`);
		aud.play();
	})
})

stop[0].addEventListener('click',()=>{
	aud.pause();
})
