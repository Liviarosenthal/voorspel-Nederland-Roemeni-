console.log("hallo");

//variabele en constante
const uitslagNL = document.querySelector('.p1');
const uitslagRoemenië = document.querySelector('.p2');
const soundIcon = document.querySelector('.soundicon');
const audio = document.getElementById('audio');

let mysteryNumber = Math.random() * 4
let mysteryNumber2 = Math.random() * 4
let buttonvoorspel = document.getElementById("voorspelbutton");

//functies
function veranderuitslagNL () {
    let getal = Math.random() * 4
    getal = Math.round(getal);
    document.querySelector('.p1').textContent = getal
}

function veranderuitslagRoemenië () {
    let getal = Math.random() * 4
    getal = Math.round(getal);
    document.querySelector('.p2').textContent = getal
}

function playAudio (){
    audio.play();
}

//eventsListeners
uitslagNL.addEventListener('click',veranderuitslagNL)
uitslagRoemenië.addEventListener('click',veranderuitslagRoemenië)
soundIcon.addEventListener('click', playAudio);

buttonvoorspel.addEventListener ('click', function() {
    let p1waarde = document.querySelector('.p1').textContent;
    let p2waarde = document.querySelector('.p2').textContent;
    let h2tekst = document.querySelector('h2');

//ifelse
if(p1waarde > p2waarde){
    document.body.style.backgroundImage = "url(images-interactievewebsite2/vlag-van-nederland.jpg";
    h2tekst.textContent = "Klik op de cijfers";
} else if (p1waarde < p2waarde) {
    document.body.style.backgroundImage = "url(images-interactievewebsite2/flag-romania.jpg";
    h2tekst.textContent = "Klik op de cijfers";
} else {
    h2tekst.textContent = "Het is de knockout fase, dus er moet een winnaar komen. Klik nogmaals op de cijfers voor een winnaar!";
}
});

//bronnen:
//Math.random en math.round > van opdracht deel 2 op dlo. Bron: https://dlo.mijnhva.nl/content/enforced/536465-FDMCI-1000PROG15-DMCI-CMD-2324-2/Opdracht%20-%20Mystery%20number%20deel%202.pdf
//audio > bron:https://www.w3schools.com/jsref/met_audio_play.asp
//backgroundcolor > bron: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
//backgroundimage > bron:https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
//Regel 35:('click',function(){ > https://www.w3schools.com/jsref/met_element_addeventlistener.asp


