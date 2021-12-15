//FIND COORDINATES



//Flower Popup
const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')

openPopupButtons.forEach(button => {
  button.addEventListener('click', () => { 
    const popup = document.querySelector(button.dataset.popupTarget)
    openPopup(popup)
  })
})

closePopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup')
    closePopup(popup)
  })
})

function openPopup(popup) {
  if (popup == null) return
  popup.classList.add('active')
}

function closePopup(popup) {
  if (popup == null) return
  popup.classList.remove('active')
}


// HERE THERE BE MUSIC - TONE.JS
// 
let octave = 4;
let note = 'C';
let playNote;
let synthDetune = -1200;

const clickSynth = new Tone.Synth().toDestination();


//Create PolySynth
const polySynth = new Tone.PolySynth().toDestination();
// set the attributes across all the voices using 'set'
polySynth.set({ detune: synthDetune }); 

//Play Corresponding Notes
var notes = document.getElementsByClassName("note");
var currentNote;
notesArray = [];

for(var i = notes.length; i--;) {
currentNote = notes[i];
//Click to Store Notes
currentNote.onclick = function() {
  //Get Note
  note = this.getAttribute('data-name');
  playNote = note + octave;
  //Play Note
  clickSynth.triggerAttackRelease(playNote, "8n");
  //Store Note in Array
  notesArray.unshift(playNote);
  if(notesArray.length > 3){
    notesArray.pop();
  }
  console.log(notesArray);
};
// Hover to Show Note
  currentNote.onmouseover = function() {
    hoverNote = this.getAttribute('data-name');
    document.getElementById("currentNote").innerHTML = hoverNote + octave;
  }
}


//Press Flower Center to Play Current Notes
var centerButton = document.getElementById("Center");
centerButton.onclick = function() {
  polySynth.triggerAttackRelease(notesArray, 1);
};

///Change octave
var octaveUp = document.getElementById("octaveUp");
octaveUp.onclick = function() {
    octave ++;
  }

var octaveDown = document.getElementById("octaveDown");
octaveDown.onclick = function() {
      octave --;
  }

//Store & Play Notes 
for (var i = 1; i <= 20; i++){

  let savedArray = [];

  var saveButton = document.getElementById("save"+i);
  saveButton.onclick = function() {
    savedArray = notesArray.slice(0);
    console.log("saved array:"+savedArray);
  }
  var setButton = document.getElementById("flower"+i);
  setButton.onclick = function() {
    notesArray = savedArray.slice(0);
    polySynth.triggerAttackRelease(notesArray, 1);
    console.log("clicked");
    console.log("notes array:"+notesArray);
  }
}


//Toggle CSS class hidden with JS 

//Create div & placed above fixed position (flowers), give div onclick function
//Create save button at each flower position, make rest of flower clickable for Playback function


// function flowerClick(){
//   console.log('clicked');
// };