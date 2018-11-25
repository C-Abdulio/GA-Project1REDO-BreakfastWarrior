let boardEl = document.querySelector('.board');
let playerEl = document.querySelector('.player');
let enemyEl = document.querySelector('.enemy');
let start = document.querySelector('.start');
let modal = document.querySelector('.modal');

const player = {
  x:0, y:0
}

const boardMap = [
  
  {x:0, y:0},  {x:1, y:0},  {x:2, y:0}, {x:3, y:0},
  {x:0, y:1},  {x:1, y:1},  {x:2, y:2}, {x:3, y:3},
  {x:0, y:2},  {x:1, y:2},  {x:2, y:2}, {x:3, y:3},
  {x:0, y:0},  {x:1, y:0},  {x:2, y:0}, {x:3, y:0}
 ];

const enemy = [
	{x:3,y:0}, {x:3,y:1},
	{x:3,y:1}, {x:3,y:2},
	{x:3,y:2}, {x:3,y:3}
]

// const enemy1 = [
// {enemy[0],[1]}, {enemy[1],[2]},
// {enemy[1],[2]}, {enemy [2],[3]}
// ]

const rocks = [
{x: 1, y:2},
{x: 2, y:2}
]

const hazard = [
{x:3, y:1}
]

const item = [
{x:3, y:2}
]

function startGame(){
// playerEl.style.left = "100px";
// playerEl.style.top = "100px";
modal.style.display = "none";
start.style.display = "block";
let btn = document.querySelector('.startInner');
btn.style.marginTop = '200px';// move it down 200px
btn.style.verticleAlign = "center";
btn.style.textAlign = "center";
btn.addEventListener('click', evt => makingSure());
console.log('game');
};

function makingSure(){
	start.style.display = "none";
	const kellogs = document.querySelector('.cornflakes');
		kellogs.setAttribute('class', 'cornflakes');
	console.log(playerEl);
	console.log(boardEl);
	console.log(item);
	playerEl.style.display = "block";
	// playerEl.style.left = player.x;
	// playerEl.style.top = player.y;
	
};
startGame();

function makeRocks(){
	for (let i = 0; i < rocks.length; i++){
		let cheerios = document.createElement('div');
		cheerios.className = 'cheerios';
		let cereal = rocks[i];
		cheerios.style.left = (cereal.x * 100).toString() + 'px';
		cheerios.style.top = (cereal.y * 100).toString() + 'px';
		boardEl.appendChild(cheerios);
	}
}

makeRocks();

function makeHazard(){
		for (let i = 0; i < hazard.length; i++){
		let cornflakes = document.createElement('div');
		cornflakes.className = 'cornflakes';
		let cereal = hazard[i];
		cornflakes.style.left = (cereal.x * 100).toString() + 'px';
		cornflakes.style.top = (cereal.y * 100).toString() + 'px';
		boardEl.appendChild(cornflakes);
	}
};

makeHazard();

function makeItem(){
	//first make a loop to create items
	for (let c = 0; c < item.length; c++){
		let cerealBowl = document.createElement('div');
		cerealBowl.className = 'cereal';
		let cereal = item[c];
		cerealBowl.style.left = (cereal.x * 100).toString() + 'px';
		cerealBowl.style.top = (cereal.y * 100).toString() + 'px';
		boardEl.appendChild(cerealBowl);
	}
	//then make a loop to get rid of them
	const eat = document.querySelector('.cereal');
	for (let e = 0; e < eat.length; e++){
		eat[i].remove();
	}
};

makeItem();

function checkItem(x, y){
	// debugger;
	for(let i = 0; i < item.lenght; i++){
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
			item.splice(i, 1);
		}
	}
}

function rockBump(x, y){
	for(let j = 0; j < rocks.length; j++){
		let rocky = rocks[j];
		if(x === rocky.x && y === rocky.y){
			return true;
		}
	}
	return false;	
};

function collideFlake(x, y){
	for(let j = 0; j < hazard.length; j++){
		let kellogs = hazard[j];
		if(x === kellogs.x && y === kellogs.y){
			return true;
		}
	}
	return false;	
};


function gridGuard (x, y){
	if (x < 0 || y < 0|| x > 3 || y > 3){
		return true
	}
}

// function playerHarm(x, y){

// 	switch(player.x, player.y){
// 		case (player.x + 1, player.y):
// 		playerEl.style.left = (player.x - 1 * 1).toString() + 'px';
// 		console.log('ouch');
// 		break;
// 		case (player. x - 1, player.y):
// 		playerEl.style.left = (player.x + 1 * 1).toString() + 'px';
// 		console.log('ouch');
// 		break;
// 		case (player.x, player.y + 1):
// 		playerEl.style.top = (player.y - 1 * 1).toString() + 'px';
// 		console.log('ouch');
// 		break;
// 		case (player.x, player.y - 1):
// 		playerEl.style.top = (player.y + 1 * 1).toString() + 'px';
// 		console.log('ouch');
// 		break;
// 		default:
// 		break;

// 	}

	
// // 	if (canMoveTo(player.x - 1, player.y)){
// // 		player.x +=1;
// // 		console.log('ouch');
// // 	}
// // 	else if (canMoveTo(player.x, player.y -1)){
// // 		player.y +=1

// // 	}
// // }
// }

function gameOver(x, y){
	if (player.x != undefined, player.y != undefined){
		const kellogs = document.querySelector('.cornflakes');
		kellogs.style.backgroundColor = 'red';
		console.log('K.O.');
		let lose = document.querySelector('#gameOver');
		showModal(lose);
	}
}

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



function canMoveTo(x, y){//only determines collission against static option
	if(gridGuard(x, y)){
		console.log('wall');
		return false;
	}
	else if (rockBump(x, y)){
		console.log('oops');
		return false;
	}
	else if (collideFlake(x, y)){
		gameOver();
		// playerHarm(x, y);
		return false;	
	}
	else {
		return true;
	}
}


document.body.addEventListener('keydown', tap => {
	const keyPress = tap.keyCode;
	if ([37, 38, 39, 40].includes(keyPress)) {
		tap.preventDefault();
	}
	switch (keyPress) {
		case 37:
			moveLeft();
			console.log('left');
			break;
		case 38:
			moveUp();
			console.log('up');
		break;
		case 39:
			moveRight();
			console.log('right');
			break;
		case 40:
			moveDown();
			console.log('down');
			break;
		default:
			break;
	}
});

function movePlayer(x, y){
	playerEl.style.left = (player.x * 100).toString() + 'px';
	playerEl.style.top = (player.y * 100).toString() + 'px';
	if (checkItem(player.x, player.y)){
		takeItem(player.x. player.y);
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

