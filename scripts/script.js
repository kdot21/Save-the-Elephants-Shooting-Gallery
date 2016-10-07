console.log('javascript linked!')

// Time in a round in seconds
var startTime = 30;

// Time left in seconds
var time = 0;

// Player score
var score = 0;

// Frequency of targets appearing
// var frequencies = [
//   {'freq': 0.5, 'target': 'hunter'},
//   {'freq': 0.5, 'target': 'elephant'}
// ];

// Result of hitting each target
var targetValues = {
  'hunter': {'score': 100, 'time': 0, 'audio': ' '},
  'elephant': {'score': -100, 'time': 0, 'audio': ' '}
};

// Function to update time
function updateTimer() {
  var seconds = time%60;
  if (seconds < 10) {
    seconds = '0' + seconds;
    $('#time-left').html(Math.floor(time/60) + ':' + seconds);
  };
};

// Function to begin the game
$(document).on('click', '#start-button', function() {
  $('#score-count').html(score);
  time = startTime
  updateTimer();
  $('#start-button').hide();
});

// Game timer
setInterval(function() {
  if (time == 0) {
    endGame();
  } else {
    updateTimer();
  }
}, 1000);

// Function to end the game
function endGame() {
  $('.flex-item').remove();
  $('#start-button').show();
};

// Update the score
score = score + targetValues['score'];
time += targetValues['time'];
updateTimer();
$('#score-count').html(score);

// Move the game pieces
function moveTarget() {
  var $target = $('.flex-item');
  var distance = 1200;
  setInterval(function() {
    $target.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1200;
    } else {
      distance -= 5;
    }
  }, 15);
};

$(document).ready(function() {
  moveTarget();
});

// Shooting
$(document).on('click', '.img', function() {
  $(this).addClass('disappear').animate({
    height: '0px',
  }, 500, function() {
    $(this).remove();
  });
});

// function moveHunter() {
//   var $hunter = $('#hunter');
//   var distance = 1200;
//   setInterval(function() {
//     $hunter.css('left', distance + 'px');
//     if (distance < -300) {
//       distance = 1200;
//     } else {
//       distance -= 5;
//     }
//   }, 15);
// };

// $(document).ready(function(){
//   moveHunter();
// });

// function moveElephant() {
//   var $elephant = $('#elephant');
//   var distance = 1200;
//   setInterval(function() {
//     $elephant.css('left', distance + 'px');
//     if (distance < -300) {
//       distance = 1200;
//     } else {
//       distance -= 5;
//     }
//   }, 15);
// };

// $(document).ready(function(){
//   moveElephant();
// });

