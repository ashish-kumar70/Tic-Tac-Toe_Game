let count = 1;
let a = document.querySelectorAll(".box");
let b = document.querySelector(".heading");
function myfunc(element) {
  if (b.innerHTML != ""){
    return
  }
  if (element.innerHTML === "") {
    
    if (count % 2 == 1) {
      element.innerHTML = "x";
      count++;
      console.log(count);
    } else {
      element.innerHTML = "o";
      count++;
      console.log(count);
    }
    var audio = new Audio("AudioFiles/audiofile.mp3");
    audio.play();
  }
  checkMYwin();
  checkMyfunc();
}
function restart() {
  a.forEach(function (box) {
    box.innerHTML = "";
    count = 1;
    b.style.visibility = "hidden";
  });
}
let currentdegree = 0;
function anothfunc() {
  let x = document.getElementsByClassName("btn_img")[0];
  // Check the current rotation
  currentdegree += 360;
  x.style.transform = `rotate(${currentdegree}deg)`; // Rotate to 360 degrees
  b.innerHTML = ""
}

function checkMYwin() {
  if (
    (a[0].innerHTML == "o" && a[1].innerHTML == "o" && a[2].innerHTML == "o") ||
    (a[3].innerHTML == "o" && a[4].innerHTML == "o" && a[5].innerHTML == "o") ||
    (a[6].innerHTML == "o" && a[7].innerHTML == "o" && a[8].innerHTML == "o") ||
    (a[0].innerHTML == "o" && a[3].innerHTML == "o" && a[6].innerHTML == "o") ||
    (a[1].innerHTML == "o" && a[4].innerHTML == "o" && a[7].innerHTML == "o") ||
    (a[2].innerHTML == "o" && a[5].innerHTML == "o" && a[8].innerHTML == "o") ||
    (a[0].innerHTML == "o" && a[4].innerHTML == "o" && a[8].innerHTML == "o") ||
    (a[2].innerHTML == "o" && a[4].innerHTML == "o" && a[6].innerHTML == "o")
  ) {
    b.style.visibility = "visible";
    GameWinSound()
    b.innerHTML = "O won  &#127881;";
  } else if (
    (a[0].innerHTML == "x" && a[1].innerHTML == "x" && a[2].innerHTML == "x") ||
    (a[3].innerHTML == "x" && a[4].innerHTML == "x" && a[5].innerHTML == "x") ||
    (a[6].innerHTML == "x" && a[7].innerHTML == "x" && a[8].innerHTML == "x") ||
    (a[0].innerHTML == "x" && a[3].innerHTML == "x" && a[6].innerHTML == "x") ||
    (a[1].innerHTML == "x" && a[4].innerHTML == "x" && a[7].innerHTML == "x") ||
    (a[2].innerHTML == "x" && a[5].innerHTML == "x" && a[8].innerHTML == "x") ||
    (a[0].innerHTML == "x" && a[4].innerHTML == "x" && a[8].innerHTML == "x") ||
    (a[2].innerHTML == "x" && a[4].innerHTML == "x" && a[6].innerHTML == "x")
  ) {
    b.style.visibility = "visible";
    GameWinSound()
    b.innerHTML = "X won  &#127881;";
  } else {
    b.style.visibility = "hidden";
  }
}
checkMYwin();

function checkMyfunc() {
  if (count === 10 && b.style.visibility == "hidden") {
    console.log("done");
    b.style.visibility = "visible";
    b.innerHTML = "Game Draw &#128517;";
    GameOverSound()
  }
}

function GameWinSound(){
  var win = new Audio("AudioFiles/winaudio.mp3");
    win.play();
}
function GameOverSound(){
  var over = new Audio("AudioFiles/Gameover.mp3")
  over.play()
}