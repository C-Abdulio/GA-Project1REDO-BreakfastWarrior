let boardEl = document.querySelector('.board');
let playerEl = document.querySelector('.player');
let enemyEl = document.querySelector('.enemy');

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

function makingSure(){
	console.log(playerEl);
	console.log(boardMap);
	console.log(boardEl);
	console.log(enemy);
	console.log(rocks);
	playerEl.style.left=player.x.toString() + "px";//starting position
	playerEl.style.top=player.y.toString() + 'px';
}

makingSure();

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

function rockBump(x, y){
	for(let j = 0; j < rocks.length; j++){
		let rocky = rocks[j];
		if(x === rocky.x && y === rocky.y){
			return true;
			console.log("colliding");
		}
	}
	return false;	
};

function collideFlake(x, y){
	for(let j = 0; j < hazard.length; j++){
		let kellogs = hazard[j];
		if(x === kellogs.x && y === kellogs.y){
			return true;
			console.log("colliding");
			gameOver();
		}
	}
	return false;	
};


function gridGuard (x, y){
	if (x < 0 || y < 0|| x > 3 || y > 3){
		return true
	}
}

function playerHarm(x, y){
	debugger;
	if (canMoveTo(player.x - 1, player.y)){
		player.x +=1;
		console.log(ouch);
	}
	else if (canMoveTo(player.x, player.y -1)){
		player.y +=1

	}
}

function gameOver(x, y){
	if(collideFlake(player.x, player.y)){
		let kellogs = document.getElementById('cornflakes');
		kellogs.style.backgroundColor = 'red';
		console.log('done');
	}
}

function canMoveTo(x, y){//only determines collission against static option
	// debugger;
	if(gridGuard(x, y)){
		return false;
		console.log('wall');
	}
	else if (rockBump(x, y)){
		return false;
		console.log('oops');
	}
	else if (collideFlake(x, y)){
		return false;
		playerHarm(x, y);
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
		break;
		case 39:
			moveRight();
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

