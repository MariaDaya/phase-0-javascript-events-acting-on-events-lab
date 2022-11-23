// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });




  

const game = document.getElementById("game"); // get the game

  function moveDodgerRight() { 
    const leftNumbers = dodger.style.left.replace("px", ""); //distance f dodger from left

    const left = parseInt(leftNumbers, 10); // write distance in num
    //const rightMargin = dodger.style.right.replace ("px", "");
    //const right= parseInt(rightMargin,10) +40

    if ( left>0) {
      dodger.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });


   /*the dodger should move right but not go out
   so the dodger shouldnt pass the width of the game
   the distance between dodger and game should be 0
   the left value shouldn't be equal game width it should be 40 less
   left should be smaller than width -40
   */