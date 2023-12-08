
import genreList from "./settings";
document.getElementById("maingame").addEventListener("click", () => { localStorage.setItem('mode', 'main') })
document.getElementById("random").addEventListener("click", () => { localStorage.setItem('mode', 'random') })
document.getElementById("timed").addEventListener("click", () => { localStorage.setItem('mode', 'timed') })
// sends gamemode information cross-page
setTimeout(() => {
    console.log(genreList);
}, 1000);