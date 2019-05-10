var kick = document.getElementById('kick');

onKickAction = () => {
  var kickAction = 
  "https://www.famousbirthdays.com/group_images/medium/drillbit-taylor-movie.jpg";

  var imgTarget = document.getElementById('owenKick');

  imgTarget.src = kickAction;
}

kick.addEventListener('click', onKickAction);

var punch = document.getElementById('punch');

onPunchAction = () => {
  var punchAction = 
  "http://www.media3.hw-static.com/wp-content/uploads/i-spy-movie-still-owen-wilson-is-alex-scott-and-eddie-murphy-is-kelly-robinson_1113177-400x305.jpeg";

  var imgTarget = document.getElementById('owenKick');

  imgTarget.src = punchAction;
}

punch.addEventListener('click', onPunchAction);

var jump = document.getElementById('jump');

onJumpAction = () => {
  var jumpAction = 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQz2vH13Btb0I7x0PwkENT35HgQPMR5BiNZxp96SYsl1oA6wnkg";

  var imgTarget = document.getElementById('owenKick');

  imgTarget.src = jumpAction;
}

jump.addEventListener('click', onJumpAction);

var swag = document.getElementById('swag');

onSwagAction = () => {
  var swagAction = 
  "http://www.funnyjunksite.com/pictures/wp-content/uploads/2015/07/Yo-Yo-Owen-Wilson.jpg";

  var imgTarget = document.getElementById('owenKick');

  imgTarget.src = swagAction;
}

swag.addEventListener('click', onSwagAction);