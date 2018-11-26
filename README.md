# GA_P1_Redo_BreakfastWarrior
**A re-do of the first project for GA WDI - Now a Zelda-like game with grid based collision.**

![Breakfast Warrior](https://github.com/C-Abdulio/GA_P1REDO_BreakfastWarrior/blob/master/WIREFRAME_BW_Redo_shortmap.png)

**1) Saturday Morning Breakfast Warrior**
**_A Zelda type action-adventure game_**
- player controls The Breakfast Warrior, who can move in all 4 directions through the direction arrows.
- players guide the BW through a large ~~verticle~~ map, filled with obstacles and enemies.
- player also has 2 hit points. Enemies and Dangerous hazards may hurt the player by colliding with them.
- if player loses both hit points, they lose the game. Game resets back to map1.
- third map has one item to collect, the Holy Cereal. There may or may not be enemies or a boss.
- once player has collected the item, they win the game.

**_Functions needed:_**
- functions to make the player move on corresponding key events(Up, Down, Left, Right)
- functions to make objects collidable with player.
- functions to make items collectable by player.
- ~~to be able to follow the warrior, as he continues upwards, by automatically scrolling up~~
  - ~~failing this, perhaps making the game an auto-scrolling game where the map is constantly moving upwards. The user must then constantly keep moving away from the display screen until the player reaches the end of the map.~~
    - failing even THIS, simply a function that creates or displays a map will do.
- make sure item activates win condition.
- on win, display a modal that prompts the player to reset the game

**_Possible Bonus Functions:_**
- a fancy landing page with a start game button that loads map1
- function that, on key, switches player sprite with attack animation (or simply displays the spoon).
- create objects with parameters and values you can assign to players, enemies and item.
- assign hurtbox and hitbox values to player, enemy and attack objects.
- assign function to hit box and hurtbox collision that pushes back objects and decreases life points.
- function that makes pre-assigned walk patterns to enemies.
- assign win condition that allows passage to final map upon elimination of enemies.
- assign lose condition if player loses all life points and resets the game.
- add sounds to item when player collects.
- add sounds to player when colliding with harmful object.
- add sounds to attack when colliding with object.


**_ ~~Possible~~ PROBABLE errors:_**
- Player doesn't collide with object. Passes through everything.
- Player is not able to move or attack through keydown.
- Player is not able to scroll up the map. Player is stuck in starting position
- Killing enemies does not fulfill win condition.
- Collecting item does no fulfill win condition. You beat the game and all you get is cereal.
- recursive functions lead to looping and max-call stacks. Game crashes
- NOTHING WORKS! EVERYTHING IS UNDEFINED!! And I decide on a new career as professional crash dummy.

## MINIMUM VIABLE PRODUCT:
- Player can move.
- Player can traverse through the entire map.
- Player can collide with static objects like rocks, enemies and items
- ~~Player can win by collecting cereal.~~
- Player loses by coliding with Bad guy.

_**PRODUCT REFLECTION**_
_Of all the ideas that I worked on, this was the one I put the most effort into...though one cannot tell without proper wireframes. _

# FINAL NOTES:
 - full game could not be completed. At behest of instructors, the scratch file will be presented as the game
 - full game still in progress. without a surefire way to render board and items dynamically, hard coding co-ordinates is a requirement. need time to experiment with settings in order to fulfill full vision.
 - MVP has shifted from getting a win condition, to fulfilling a losing condition.
 
 # Link to site - http://red-shock.surge.sh/
