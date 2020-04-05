var  $  = require ( "jquery" ) ; 

const Timer = require('easytimer.js').Timer;
const timer = new Timer();

$('#buttons .startButton').click(function () {
  timer.start({countdown: true, startValues: {seconds: 5}});
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
});