let octave = 4;
let note = 'C';
let playNote;

//Play corresponding note
var notes = document.getElementsByClassName("note");
var currentNote;
notesArray = [];

for(var i = notes.length; i--;) {
currentNote = notes[i];
currentNote.onclick = function() {
  note = this.getAttribute('data-name');
  playNote = note + octave;
  notesArray.unshift(playNote);
  if(notesArray.length > 3){
    notesArray.pop();
  }
  console.log(notesArray);
};
}

//Set octave

var centerButton = document.getElementById("Center");
centerButton.onclick = function() {
  // if (octave < 5) {
  //   octave ++;
  // } else {
  //   octave = 2;
  // }
  polySynth.triggerAttackRelease(notesArray, 1);
};









/////POLY SYNTH
//build array of 3 notes
//select notes on click, adding them to the front of the array & removing the oldest note
//play synth when other button is clicked ... center?


///Storing Chords
//



// '['+""+','+""+','+""+']'




//saved array 
//button for save array
//button for set array

let save1array = [];

var saveButton1 = document.getElementById("save1");
saveButton1.onclick = function() {
  save1array = notesArray;
  console.log("saved array:"+save1array);
}
var setButton1 = document.getElementById("set1");
setButton1.onclick = function() {
  notesArray = save1array;
  console.log("notes array:"+notesArray);
}