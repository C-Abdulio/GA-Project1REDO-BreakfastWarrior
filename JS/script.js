//All the magic that goes into making a game...and by magic, I mean agonizing pain...
//all the constants needed to make the game work
const playerEl = document.querySelector("#player");
const enemyEl = document.querySelector("#enemy");
const itemEl = document.getElementsByClassName("item");
const boardEL = document.querySelector(".board");

const player = {
  x:1, y:2
}


const rocks = [
  {x:0,y:0},
  {x:0,y:1},
  {x:0,y:2},
  {x:0,y:3},
  {x:0,y:4},
  {x:0,y:5},
  {x:0,y:6},
  {x:0,y:7},
  {x:0,y:8},
  {x:0,y:9},
  {x:0,y:10},
  {x:10,y:0},
  {x:10, y: 1},
  {x:9,y:0},
  {x:8,y:0},
  {x:7,y:0},
  {x:6,y:0},
  {x:5,y:0},
  {x:4,y:0},
  {x:3,y:0},
  {x:2,y:0},
  {x:1,y:0},
]

function fungShui(){
  console.log(rocks);
}

fungShui();

function makeRocks(){

  for(let i = 0; i < rocks.length; i+=1){
    let boulder = document.createElement('div');
    boulder.className = 'barrier';
    boulder.id = 'rocks';
    let rocky = rocks[i];
    boulder.style.left = (rocky.x * 10).toString() + 'px';
    boulder.style.top = (rocky.y * 10).toString() + 'px';
    boardEL.appendChild(boulder);
  }
}
console.log(makeRocks());
//
// function mountainRange(){
//
// }
//
// mountainRange()

const cheerios = {

}

document.body.addEventListener('keydown', tap => { // add listen for keypress to the body
const keyPress = tap.keyCode; //assign keyPress a code
  if ([37, 38, 39, 40].includes(keyPress)) { //if keypress is up right left or down
    tap.preventDefault(); //prevent the key press from using the default action of the browser
  }
  switch (keyPress) {
    case 37://equal to left arrow key
      moveLeft();
      console.log("move left");
      break;
    case 38://equal to up arrow key
      moveUp();
      console.log("move up");
      break;
    case 39://equal to right arrow key
      moveRight();
      console.log("move right");
      break;
    case 40://equal to down arrow key
      moveDown();
      console.log("move down");
      break;
    default:
  }
});

function movePlayer (x, y){
  playerEl.style.left = (player.x * 50).toString() + 'px';
  playerEl.style.top = (player.y * 50).toString() + 'px';
}

function moveLeft(){
  player.x-=1;
  movePlayer(player.x, player.y)
}
function moveUp(){
  player.y-=1;
  movePlayer(player.x, player.y)
}
function moveRight(){
  player.x+=1;
  movePlayer(player.x, player.y)
}
function moveDown(){
  player.y+=1;
  movePlayer(player.x, player.y)
}
