const word = document.querySelector('.word')
const input = document.querySelector('input')
const disTime = document.querySelector('.distationTime')
const yourscore = document.querySelector('.yourscore')
const endgame = document.querySelector('.endgame')
const rest = document.querySelector('button')
const allscore = document.querySelector('h3')
const words = [
  "mother",
  "clever",
  "sleep",
  "beach",
  "dog",
  "eat",
  "cat",
  "learn",
  "sometimes",
  "love",
  "never",
  "anyway",
  "mouse",
  "name",
  "water",
  "earth"
]


let randomword;
let alltime = 60
let score = 0
function getrandomword() {
    return words[Math.floor(Math.random() * words.length)]
 }
function upword() {
    randomword = getrandomword()
    word.innerHTML = randomword
}
function gameover() {
    endgame.style.display = "flex"
}
function uptime() {
    alltime --
    if (alltime < 0 ) {
        gameover()
        alltime = 60
    }
    disTime.innerHTML = alltime + 's'
}

const timeinterval = setInterval(uptime, 1000);

upword()


function upscore() {
    score++
    yourscore.innerHTML =  "Score" + score
    if (score > 6) {
        allscore.textContent  ='Sizning natijangiz yaxshi:  ' + score
       

    }else{
        allscore.textContent = 'Sizning natijangiz past:  ' + score
        
    }
}
function restgame() {
    endgame.style.display = "none"
    yourscore.innerHTML =  "Score" + 0
    upword()
    input.value = ""
    score = 0
}
input.addEventListener('input' , ()=>{
    if (input.value == word.innerHTML) {
        input.value = ""
        upword()
        upscore()
        uptime()
        
}

})