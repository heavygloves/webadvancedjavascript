// Global Variables
var myBody = document.querySelector('.body');

var blackBox = document.querySelectorAll('.box');
console.log('allBoxes');

var allBoxes = document.querySelectorAll('.box');
console.log('allBoxes');

var blackBox = document.querySelector('.box-1');
var redBox = document.querySelector('.box-2');
var greenBox = document.querySelector('.box-3');
var blueBox = document.querySelector('.box-4');

var myParagraph = document.querySelector('.my-paragraph');
var myParagraphText = myParagraph.innerHTML;

var myRandomWords = ['Bolo', 'Bingo', 'Bartman', 'Beefstick', 'Beanpie'];


 // Event Listeners
blackBox.addEventListener('click', function (evt) {    
	document.body.style.backgroundColor = '#000000';
	
	myParagraph.classList.add('paragraph-1'); 
	myParagraph.classList.remove('paragraph-2'); 

	myParagraph.innerHTML = getNewWord();
});
	
redBox.addEventListener('click', function (evt) {    
	document.body.style.backgroundColor = '#ff0000';
	
	myParagraph.classList.add('paragraph-2'); 
	myParagraph.classList.remove('paragraph-1');
	
	myParagraph.innerHTML = getNewWord();
});

greenBox.addEventListener('click', function (evt) {    
	document.body.style.backgroundColor = '#00ff00';
	
	myParagraph.style.color = '#ff793f';
	
	myParagraph.innerHTML = getNewWord();
});

blueBox.addEventListener('click', function (evt) {    
	document.body.style.backgroundColor = '#0000ff';
	
	myParagraph.style.color = '#ffff00';
	
	myParagraph.innerHTML = getNewWord();
});

function getNewWord() {
	var randomNumber = Math.floor( Math.random() * myRandomWords.length );
	var randomWord = myRandomWords[randomNumber];
	return randomWord; 
}
	
