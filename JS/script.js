//All the magic that goes into making a game...and by magic, I mean agonizing pain...
//all the constants needed to make the game work
const playerEl = document.querySelector("#player");
const enemyEl = document.querySelector("#enemy");
const itemEl = document.getElementsByClassName("item");
const boardEl = document.querySelector(".barrier");
let start = document.querySelector('.start');
let modal = document.querySelector('.modal');

const player = {
  x:0, y:0
}

const barrier = [

  {x:0, y:0},  {x:1, y:0},  {x:2, y:0}, {x:3, y:0}, {x:4, y:0}, {x:5, y:0},  {x:6, y:0}, {x:7, y:0}, {x:8, y:0},  {x:9, y:0},
  {x:0, y:1},  {x:1, y:1},  {x:2, y:1}, {x:3, y:1}, {x:4, y:1}, {x:5, y:1},  {x:6, y:1}, {x:7, y:1}, {x:8, y:1},  {x:9, y:1},
  {x:0, y:2},  {x:1, y:2},  {x:2, y:2}, {x:3, y:2}, {x:4, y:2}, {x:5, y:2},  {x:6, y:2}, {x:7, y:2}, {x:8, y:2},  {x:9, y:2},
  {x:0, y:3},  {x:1, y:3},  {x:2, y:3}, {x:3, y:3}, {x:4, y:3}, {x:5, y:3},  {x:6, y:3}, {x:7, y:3}, {x:8, y:3},  {x:9, y:3},
  {x:0, y:4},  {x:1, y:4},  {x:2, y:4}, {x:3, y:4}, {x:4, y:4}, {x:5, y:4},  {x:6, y:4}, {x:7, y:4}, {x:8, y:4},  {x:9, y:4},
  {x:0, y:5},  {x:1, y:5},  {x:2, y:5}, {x:3, y:5}, {x:4, y:5}, {x:5, y:5},  {x:6, y:5}, {x:7, y:5}, {x:8, y:5},  {x:9, y:5}
]

const cheerios = [
  // {x:0, y:0}, {x:1, y:0},  {x:2, y:0}, {x:3, y:0}, {x:6, y:0},
  // {x:9, y:0}, {x:0, y:1},  {x:2, y:1}, {x:3, y:1}

  {x:2, y:0}, {x:3, y:0}, {x:4, y:0}, {x:5, y:0},  {x:6, y:0}, {x:7, y:0}, {x:8, y:0},  {x:9, y:0}, {x:10, y:0},
  {x:3, y:1}, {x:4, y:1}, {x:5, y:1},  {x:6, y:1}, {x:7, y:1}, {x:8, y:1},  {x:9, y:1}, {x:10, y:1},
  {x:0, y:2},  {x:3, y:2}, {x:4, y:2}, {x:5, y:2},  {x:6, y:2}, {x:7, y:2}, {x:8, y:2},  {x:9, y:2}, {x:10, y:2},
  {x:0, y:3},  {x:1, y:3},  {x:2, y:3}, {x:7, y:3}, {x:8, y:3},  {x:9, y:3}, {x:10, y:3},
  {x:0, y:4},  {x:2, y:4}, {x:3, y:4}, {x:4, y:4}, {x:5, y:4},  {x:6, y:4}, {x:7, y:4}, {x:8, y:4},  {x:9, y:4}, {x:10, y:4},
  {x:0, y:5},  {x:2, y:5}, {x:3, y:5}, {x:4, y:5}, {x:5, y:5},  {x:6, y:5}, {x:7, y:5}, {x:8, y:5},  {x:9, y:5}, {x:10, y:5},
  {x:0, y:6},  {x:2, y:6}, {x:3, y:6}, {x:4, y:6}, {x:5, y:6},  {x:6, y:6}, {x:7, y:6}, {x:8, y:6},  {x:9, y:6}, {x:10, y:6},
  {x:0, y:7},  {x:2, y:7}, {x:3, y:7}, {x:4, y:7}, {x:5, y:7},  {x:6, y:7}, {x:7, y:7}, {x:8, y:7},  {x:9, y:7}, {x:10, y:7},
  {x:0, y:8},  {x:1, y:8},  {x:2, y:8}, {x:3, y:8}, {x:4, y:8}, {x:5, y:8},  {x:6, y:8}, {x:7, y:8}, {x:8, y:8},  {x:9, y:8}, {x:10, y:8},
  {x:0, y:9},  {x:1, y:9},  {x:2, y:9}, {x:3, y:9}, {x:4, y:9}, {x:5, y:9},  {x:6, y:9}, {x:7, y:9}, {x:8, y:9},  {x:9, y:9}, {x:10, y:9},
  {x:0, y:10},  {x:1, y:10},  {x:2, y:10}, {x:3, y:10}, {x:4, y:10}, {x:5, y:10},  {x:6, y:10}, {x:7, y:10}, {x:8, y:10},  {x:9, y:10}, {x:10, y:10}
]

const enemy = [
{x:5, y:2}
]

const flakes = [
{x:4, y:2}
]

const item = [
{x:3, y:2}
]

function resetBoard(){
  playerEl.style.display = "none";
  playerEl.style.left = (player.x * 50).toString() + 'px';
  playerEl.style.top = (player.y * 50).toString() + 'px'; 
  startGame();
}

function startGame(){
playerEl.style.display = "none";
modal.style.display = "none";
start.style.display = "block";
let btn = document.querySelector('.startInner');
btn.style.marginTop = '200px';// move it down 200px
btn.style.verticleAlign = "center";
btn.style.textAlign = "center";
btn.addEventListener('click', evt => fungShui());
console.log('game');
};

function fungShui(){
  debugger;
start.style.display = "none";
  console.log(boardEl); 
  console.log(barrier);
  playerEl.style.display = "block";
  console.log(playerEl);
  makeCheerios();
  console.log(cheerios)
  makeHazard();
  let kellogs = document.querySelector('#cornflakes');
  makeItem();
  console.log(item);
}

startGame();

function makeCheerios(){
debugger;
  for(let i = 0; i < cheerios.length; i ++){
    let o = document.createElement('div');
    o.className = 'object';
    o.setAttribute('id', 'cheerios');
    let wheels = cheerios[i];
    o.style.width = "50px";
    o.style.height = "50px";
    o.style.left = (wheels.x * 50 ).toString() + 'px';
    o.style.top = (wheels.y * 50).toString() + 'px';
    boardEl.appendChild(o);
    console.log('cheerios')
  }
}

function makeHazard(){
  debugger;
    for (let i = 0; i < flakes.length; i++){
    let cornflakes = document.createElement('div');
    cornflakes.className = 'object';
    cornflakes.setAttribute('id', 'cornflakes');
    let kellogs = flakes[i];
    cornflakes.style.width = "30px";
    cornflakes.style.height = "60px";
    cornflakes.style.left = (kellogs.x * 5).toString() + 'px';
    cornflakes.style.top = (kellogs.y * 5).toString() + 'px';
    boardEl.appendChild(cornflakes);
    console.log('cornflake');
  }
};

function makeItem(){
    //make a loop to get rid of them
  const eat = document.getElementById('cereal');
  for (let e = 0; e < eat.length; e++){
    eat[e].remove();
  }
  //make a loop to create items
  for (let c = 0; c < item.length; c++){
    let cerealBowl = document.createElement('div');
    cerealBowl.className = 'item';
    cerealBowl.setAttribute('id', 'cereal');
    let cereal = item[c];
    cerealBowl.style.width = "10px";
    cerealBowl.style.height = "20px";
    cerealBowl.style.left = (cereal.x * 5).toString() + 'rem';
    cerealBowl.style.top = (cereal.y * 5).toString() + 'rem';
    boardEl.appendChild(cerealBowl);
  }
};

function checkItem(x, y){
  // debugger;
  for(let i = 0; i < item.length; i++){
    let items = item[i];
    if(x === items.x && y === items.y){
      console.log('item');
      return true;
    }
  }
  return false;
};

function takeItem(x, y){
  for(let j = 0; j < item.length; j+=1){
    let get = item[j];
    if(x === get.x, y === get.y){
      item.splice(j);
      console.log('item get')
    }
  }
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
      console.log(player.x);
      break;
    case 38://equal to up arrow key
      moveUp();
      console.log("move up");
      console.log(player.y);
      break;
    case 39://equal to right arrow key
      moveRight();
      console.log("move right");
      console.log(player.x);
      break;
    case 40://equal to down arrow key
      moveDown();
      console.log("move down");
      console.log(player.y);
      break;
    default:
  }
});

function movePlayer (x, y){
  playerEl.style.left = (player.x * 50).toString() + 'px';
  playerEl.style.top = (player.y * 50).toString() + 'px';
  if (checkItem(player.x, player.y)){
    takeItem(player.x, player.y);
    makeItem();
  }
}

function moveLeft(){
  if (canMoveTo(player.x - 1, player.y)){
  player.x -=1;
  movePlayer(player.x, player.y);
  }
}
function moveRight(){
  if (canMoveTo(player.x + 1, player.y)){
  player.x +=1;
  movePlayer(player.x, player.y);
  }
}
function moveUp(){
  if (canMoveTo(player.x, player.y - 1)){
  player.y -= 1;
  movePlayer(player.x, player.y);
  }
}
function moveDown(){
  if (canMoveTo(player.x, player.y + 1)){
  player.y += 1;
  movePlayer(player.x, player.y);
  }
}


function gridGuard (x, y){
  
  if (x < 0 || y < 0|| x > 10 || y > 9){
    return true
  }
}

function canMoveTo(x, y){//only determines collission against static option
  if(gridGuard(x, y)){
    console.log('wall');
    return false;
  }
  // else if (rockBump(x, y)){
  //   console.log('oops');
  //   return false;
  // }
  // else if (collideFlake(x, y)){
  //   gameOver();
  //   // playerHarm(x, y);
  //   return false; 
  // }
  else {
    return true;
  }
}

// function gameOver(x, y){
//   if (player.x != undefined, player.y != undefined){
//     let badFlake = document.querySelector('.cornflakes');
//     badFlake.style.backgroundColor = 'red';
//     console.log('K.O.');
//     let lose = document.querySelector('#gameOver');
//     showModal(lose);
//   }
// }

function uWin(x, y){
  let munch = item;
  for (let e = 0; e < munch.length; e ++){
    if (player.x === munch.x, player.y === munch.y){
      console.log('YAY');
      let win = document.querySelector('#youWin');
      showModal(win);
    }
  }
}

function showModal(){
  modal.style.display = "block";
    console.log('game over');
    return true;
}
