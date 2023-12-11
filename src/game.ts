import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import questions from './questions.json';
import scores from './scores.json';
import genreList from './genreList.ts';

const questionArray = [];

const mode = localStorage.getItem('mode');
const difficulty = localStorage.getItem('difficulty')

const currentQuestions = [];

function init()
{
	questions.forEach(loadQuestions);
	const question = document.createElement("h1");
	question.id = "question"
	question.innerText = mode
	document.getElementById("app").appendChild(question);
	
	for (let i = 1; i < 5; i++) {
		buttonCreation(i)
	}
	
	questionHandler();
}

function gameplayLoop()
{
	
}

function createQuestion(diff)
{
	//let rand = new random(0, 1)
}

function questionHandler()
{
	let diff;
	if (mode != "main")
	switch(difficulty) {
		case 1:
			diff = 1;
		break;
		case 2:
			diff = 5;
		break;
		default:
			// default to hard mode
			diff = 9;
	}
	questionListCreation()
	createQuestion(diff)
}

function questionListCreation()
{
	switch(mode) {
		case "random":
			console.log("hi")
		break;
		case "timed":
			console.log("hi")
		break;
		default:
			for (let i = 1; i <= 15; i++) {
				let j = i
				// J is necessary incase a category lacks questions of certain difficulty; defaults to lower difficulty
				let tempList = [];
				let noneCheck = false;
				let dupeCheck = false;
				let picked;
				while (!noneCheck) {
					questionArray.forEach((item, index) => {
						if (item.difficulty == j) {tempList.push(item); noneCheck = true;}
					})
					while (!dupeCheck) {
						let lengthCheck = tempList.length;
						if (lengthCheck == 0) {noneCheck = false; break;}
						picked = Math.floor(Math.random()*(tempList.length-1))
						currentQuestions.forEach((item, index) => {
							if (item == tempList[picked]){
								tempList.splice(picked, picked+1);
							}
						})
						if (lengthCheck == tempList.length) {dupeCheck = true;}
					}
					if (noneCheck) {currentQuestions.push(tempList[picked])} else {j -= 1}
				}
			}
			console.log(currentQuestions)
		break;
	};
	
}

function loadQuestions(item, index)
{
	let loadGenre = item.genre;
	if (localStorage.getItem(loadGenre) == "true") {questionArray.push(item)}
}

function buttonCreation(x){
	const button = document.createElement("button");
	button.id = String.fromCharCode(64+x);
	button.innerText = String.fromCharCode(64+x) + ": lorem ipsum"
	document.getElementById("app").appendChild(button);
}

document.addEventListener("DOMContentLoaded", init);