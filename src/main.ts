import './style.css'
import questions from './questions.json';
import scores from './scores.json';



function init()
{
	//quotes.quotes.forEach(start);
	const question = document.createElement("h1");
	question.id = "question"
	question.innerText = "placeholder question"
	document.getElementById("app").appendChild(question);
	
	for (let i = 1; i < 5; i++) {
		buttonCreation(i)
	}
}

function buttonCreation(x){
	const button = document.createElement("button");
	button.id = String.fromCharCode(64+x);
	button.innerText = String.fromCharCode(64+x) + ": lorem ipsum"
	document.getElementById("app").appendChild(button);
}

document.addEventListener("DOMContentLoaded", init);