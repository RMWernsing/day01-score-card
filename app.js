// ANCHOR application code
// SECTION Global Variables

let homeScore = 0
let awayScore = 0

// !SECTION 

// SECTION Logic

// NOTE home

function homeAddScore1() {
  homeScore += 1
  console.log(homeScore);
  drawScoreHome()

}

function homeAddScore3() {
  homeScore += 3
  console.log(homeScore);
  drawScoreHome()
}

function homeSubScore1() {
  homeScore -= 1
  if (homeScore <= 0) {
    homeScore = 0
  }
  console.log(homeScore);
  drawScoreHome()
}


// NOTE away

function awayAddScore1() {
  awayScore += 1
  console.log(awayScore);
  drawScoreAway()
}

function awayAddScore3() {
  awayScore += 3
  console.log(awayScore);
  drawScoreAway()
}

function awaySubScore1() {
  awayScore -= 1
  if (awayScore <= 0) {
    awayScore = 0
  }
  console.log(awayScore);
  drawScoreAway()
}


function reset() {
  awayScore = 0
  homeScore = 0
  drawScoreAway()
  drawScoreHome()
}





// !SECTION

// SECTION Drawing

function drawScoreHome() {
  const addScoreHomeElem = document.getElementById('addScoreHome')
  addScoreHomeElem.innerText = homeScore
}

function drawScoreAway() {
  const addScoreAwayElem = document.getElementById('addScoreAway')
  addScoreAwayElem.innerText = awayScore

}




// !SECTION

