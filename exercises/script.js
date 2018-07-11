document.querySelector('.puzzle-0').addEventListener('click', function() {
		alert('Hello, World!');
	});

	document.querySelector('.puzzle-1').addEventListener('click', function() {
		alert('Bonjour, Monde!');
	});

	document.querySelector('.puzzle-2').addEventListener('click', function() {
		document.querySelector('h1').textContent = 'the entire history of the world i guess';
	});

	document.querySelector('.puzzle-3').addEventListener('click', function() {
		document.querySelector('img').src="giphy.gif";
	});

	document.querySelector('.puzzle-4').addEventListener('click', function() {
		document.querySelector('img').style.display = "none";
	});

	document.querySelector('.puzzle-5').addEventListener('click', function() {
		document.querySelector('img').style.display = "block";
	});

	document.querySelector('.puzzle-6-yellow').addEventListener('click', function() {
		document.querySelector('body').style.background="yellow";
	});

	document.querySelector('.puzzle-6-pink').addEventListener('click', function() {
		document.querySelector('body').style.background="pink";
	});

	document.querySelector('.puzzle-6-purple').addEventListener('click', function() {
		document.querySelector('body').style.background="purple";
	});

	document.querySelector('.puzzle-7').addEventListener('click', function() {
		document.querySelector('body').style.fontFamily = "Comic Sans MS";
		document.querySelector('body').style.color="red";
	});

	document.querySelector('.puzzle-8').addEventListener('click', function() {
		document.querySelector('a').href="http://youtube.com";
		document.querySelector('a').textContent="Go to YouTube"
	});

	// Challenge puzzles

	document.querySelector('.puzzle-9').addEventListener('click', function() {
		document.querySelector('body').style.fontFamily = "Courier";
	});

	document.querySelector('.puzzle-10').addEventListener('click', function(){
		var audio = new Audio('music.mp3');
		audio.play();
	}); 
		
	document.querySelector('.puzzle-11').addEventListener('click', function(){
		document.querySelector('.gakkoLogo').src = "download.png";
	});

	document.querySelector('.puzzle-12').addEventListener('click', function(){
		document.querySelector('body').style.color="blue";
		document.querySelector('.title').style.color="black";
		document.querySelector('.description').style.color="black";
		document.querySelector('h2').style.color="black";
	});

	document.querySelector('.puzzle-13').addEventListener('click',function(){
		document.querySelector('.marqueeText').innerHTML = "<marquee>I wish I was marquee...</marquee>"
	});

	document.querySelector('.puzzle-14').addEventListener('click', function(){
		document.querySelector('.youtube').href=""
		document.querySelector('.youtube').addEventListener('click',function(){
			alert("an alert");
		});
	});

	document.querySelector('.puzzle-15').addEventListener('click', function(){
		var color = prompt("Enter your favorite color");
		document.querySelector('body').style.background= color;
	});