//your JS code here. If required.
let btn = document.querySelectorAll('.btn');
let stop = document.getElementsByClassName('stop');

const audio = document.createElement("audio");
document.body.appendChild(audio);

btn.forEach((btn)=>{
	btn.addEventListener('click',()=>{
		let sound = btn.textContent.trim();
		audio.pause();
		audio.currentTime = 0;
		audio.src = `sounds/${sound}.mp3`;
		audio.play();
	})
})

stop[0].addEventListener('click',()=>{
		audio.pause();
		audio.currentTime = 0;		
})
