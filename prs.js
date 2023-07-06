
let vMyChoisse = '';
let vComputerMove = Math.random();
let vAIChoose = '';
let vResult = '';
let vScissors = 'Scissors';
let vRock = 'Rock';
let vPaper = 'Paper';
let vWin = 'Win';
let vLose = 'Lose';
let vTie = 'Tie';
let oPoints;

oPoints = {//JSON.parse( localStorage.getItem("lSoPoints")) || {

  vWin: 0,
  vLose: 0,
  vTie: 0,
  vPoints: 0
}

// Funktion - Punkte löschen //
function fun_OverwritePoints(v$_Win, v$_Lose, v$_Tie, v$_Points) {

  oPoints.vWin = v$_Win;
  oPoints.vLose = v$_Lose;
  oPoints.vTie = v$_Tie;
  oPoints.vPoints = v$_Points;

  let elmButton = document.querySelector('.butAIChoose');
  let elmResult = document.querySelector('.divResult');

  // AI Wählt...
  if (vAIChoose === vPaper) {

    elmButton.innerHTML = '<img class="imgChoice" src="images/jpgPaper.jpg">';
  } else if (vAIChoose === vScissors) {

    elmButton.innerHTML = '<img class="imgChoice" src="images/jpgScissors.jpg">';
  } else {

    elmButton.innerHTML = '<img class="imgChoice" src="images/jpgRock.jpg">';
  }

  document.querySelector('.parPoints').innerHTML = `${oPoints.vPoints} Punkte / ${oPoints.vWin} Gewonnen / ${oPoints.vTie} Unentschieden / ${oPoints.vLose} Verloren`;

  if (vResult === vWin) {

    elmResult.innerHTML = '<img class="imgResult" src="images/pngWin.png">';

  } else if (vResult === vLose) {

    elmResult.innerHTML = '<img class="imgResult" src="images/pngLose.png">';

  } else {

    elmResult.innerHTML = '<img class="imgResult" src="images/pngTie.png">';
  }

  //localStorage.setItem('lSoPoints', JSON.stringify(oPoints));
}

// Funktion - Computer wählt aus //
function fun_AIChoose() {

  vComputerMove = Math.random();

  if (vComputerMove >= 0 && vComputerMove < 1 / 3) {

    vAIChoose = vScissors;
  } else if (vComputerMove >= 1 / 3 && vComputerMove < 2 / 3) {

    vAIChoose = vRock;
  } else {

    vAIChoose = vPaper;
  }

  if (vAIChoose === vMyChoisse) {

    vResult = vTie
    fun_OverwritePoints(oPoints.vWin, oPoints.vLose, oPoints.vTie+=1, oPoints.vPoints)
  } else if (vAIChoose === vScissors && vMyChoisse === vRock) {

    vResult = vWin;
    fun_OverwritePoints(oPoints.vWin+=1, oPoints.vLose, oPoints.vTie, oPoints.vPoints+=5)
  } else if (vAIChoose === vScissors && vMyChoisse === vPaper) {

    vResult = vLose;
    fun_OverwritePoints(oPoints.vWin, oPoints.vLose+=1, oPoints.vTie, oPoints.vPoints-=1)
  } else if (vAIChoose === vRock && vMyChoisse === vScissors) {
    
    vResult = vLose;
    fun_OverwritePoints(oPoints.vWin, oPoints.vLose+=1, oPoints.vTie, oPoints.vPoints-=1)
  } else if (vAIChoose === vRock && vMyChoisse === vPaper) {
    
    vResult = vWin;
    fun_OverwritePoints(oPoints.vWin+=1, oPoints.vLose, oPoints.vTie, oPoints.vPoints+=5)
  }else if (vAIChoose === vPaper && vMyChoisse === vRock) {
    
    vResult = vLose;
    fun_OverwritePoints(oPoints.vWin, oPoints.vLose+=1, oPoints.vTie, oPoints.vPoints-=1)
  } else if (vAIChoose === vPaper && vMyChoisse === vScissors) {
    
    vResult = vWin;
    fun_OverwritePoints(oPoints.vWin++, oPoints.vLose, oPoints.vTie, oPoints.vPoints+=5)
  }
}
