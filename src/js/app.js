// TODO: write code here
let index = null;

function randomPosition() {
  const arrCell = document.querySelectorAll('.box-cell');
  const activeCell = Math.floor(Math.random() * arrCell.length);
  if (index === null) {
    index = Math.floor(Math.random() * arrCell.length);
    arrCell[index].classList.add('box__cell-active');
  } else if (index === activeCell) {
    arrCell[index].classList.remove('box__cell-active');
    index = Math.floor(Math.random() * arrCell.length);
    arrCell[index].classList.add('box__cell-active');
  } else {
    arrCell[index].classList.remove('box__cell-active');
    index = activeCell;
    arrCell[index].classList.add('box__cell-active');
  }
}

setInterval(randomPosition, 2000);
