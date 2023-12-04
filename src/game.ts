import './style.css'
import questions from './questions.json';
import scores from './scores.json';

const questionArray = [];
const settings = ["easy", 103, true]; //placeholder settings: difficulty, genre, showsource. will be imported later

const genre1 = [];
const genre2 = [];
const genre0 = [];

function init()
{
	questions.forEach(loadQuestions);
	const question = document.createElement("h1");
	question.id = "question"
	question.innerText = "placeholder question"
	document.getElementById("app").appendChild(question);
	
	for (let i = 1; i < 5; i++) {
		buttonCreation(i)
	}
	
	questionHandler();
}

function gameplayLoop()
{
	
}

function createQuestion(diff, genre)
{
	let rand = new random(0, 1)
}

function questionHandler()
{
	let diff;
	let genre;
	let source;
	switch(settings[0]) {
		case "easy":
			diff = 1;
		break;
		case "normal":
			diff = 3;
		break;
		default:
			// default to hard mode
			diff = 5;
	}
	switch(settings[1]) {
		case 101:
			genre = 1; //genres to be determined: using numbers for now
		break;
		case 102:
			genre = 2;
		break;
		default:
			genre = 0; // default to no genre
	}
	switch(settings[2]) {
		case true:
			source = true;
		break;
		default:
			// default to no source
			source = false;
	}
	questionListCreation()
	createQuestion(diff, genre)
}

function questionListCreation()
{
	questionArray.forEach((item, index) => {
		switch(item.genre) {
		case 101:
			genre1.push(item)
		break;
		case 102:
			genre2.push(item)
		break;
		default:
			genre0.push(item)
			// default to genre-less
	}
	})
	
}

function loadQuestions(item, index)
{
	questionArray.push(item);
}

function buttonCreation(x){
	const button = document.createElement("button");
	button.id = String.fromCharCode(64+x);
	button.innerText = String.fromCharCode(64+x) + ": lorem ipsum"
	document.getElementById("app").appendChild(button);
}

document.addEventListener("DOMContentLoaded", init);