
var  $  = require ( "jquery" ) ; 
const Timer = require('easytimer.js').Timer;
const buzz = require('buzz');
const timer = new Timer();

const sound  = new buzz.sound('./music/sound.mp3');

function startcount() {
  sound.play();
  timer.start({countdown: true, startValues: {seconds:1500}});
}

$('#buttons .startButton')
.click(()=>{
  startcount();
});


$('#buttons .pauseButton').click(function () {
  timer.pause();
});


$('#buttons .stopButton').click(function () {
  timer.stop();
});


$('#buttons .resetButton').click(function () {
  timer.reset();
});


timer.addEventListener('secondsUpdated', function (e) {
  $('#buttons .values').html(timer.getTimeValues().toString());
});


timer.addEventListener('started', function (e) {
  $('#buttons .values').html(timer.getTimeValues().toString());
});


timer.addEventListener('reset', function (e) {
  $('#buttons .values').html(timer.getTimeValues().toString());
});


timer.addEventListener('targetAchieved', function (e) {
  $('#buttons .values').html('5 min de Pausa');
  sound.play();
  setTimeout(300);
  startcount();
});