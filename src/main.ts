import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

document.getElementById("maingame").addEventListener("click", () => {localStorage.setItem('mode', 'main')})
document.getElementById("random").addEventListener("click", () => {localStorage.setItem('mode', 'random')})
document.getElementById("timed").addEventListener("click", () => {localStorage.setItem('mode', 'timed')})
// sends gamemode information cross-page

console.log(localStorage.getItem("ÁLTALÁNOS"))