//your JS code here. If required.
let btn = document.querySelectorAll('.btn');
let stop = document.getElementsByClassName('stop');
let aud = null;
btn.forEach((btn)=>{
	btn.addEventListener('click',()=>{
		if(aud){
			aud.pause();
			aud.currentTime = 0;
		}
		
		let sound = btn.textContent;
		aud = new Audio(`sounds/${sound}.mp3`);
		aud.play();
	})
})

stop[0].addEventListener('click',()=>{
	if(aud){
		aud.pause();
		aud.currentTime = 0;		
	}
})
