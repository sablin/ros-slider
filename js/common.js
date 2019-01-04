window.onload= function(){
	let start = document.querySelector('.start-demo'),
	firstScreen= document.querySelector('.first-screen'),
	secondScreen= document.querySelector('.second-screen');

start.addEventListener('click', function(){
	start.innerHTML = 'Все в порядке. Демонстрация запустится через 5 секунд.'
	setTimeout(()=>{
		firstScreen.style.display  = 'none';
		secondScreen.style.display  = 'block';
	}, 5000);
})
}
