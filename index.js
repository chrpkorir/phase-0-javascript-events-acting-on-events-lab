// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerRight() {
    const left = parseInt(dodger.style.left.replace("px", ""));

    if (left < window.innerWidth - dodger.offsetWidth) {
        dodger.style.left = `${left + 1}px`;
}
}


document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerRight();
    }
    else if(e.key === "ArrowRight"){
        moveDodgerRight()
    }
});

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
