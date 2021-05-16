import { Circle } from "./models/Circle";
import { Context } from "./Context";
import { CircleFactory } from "./factory/CircleFactory";
import { EntityRepository } from "./EntityRepository";
import { Animator } from "./Animator";
import { SetupActions } from "./Actions/SetupActions";
import { PlayerFactory } from "./factory/PlayerFactory";
import { SetupCollisionHandlers } from "./CollisionHandlers/SetupCollisionHandlers";
import { Player } from "./models/Player";

console.log(Context.getContext())


const circuitNumber: number = 4 //Number.parseInt(prompt("Please enter the circuits number", "50")) || 11 ;

for (let i = 0; i < circuitNumber; i++) {
    EntityRepository.allCircuit[i] = CircleFactory.create("random");
}

EntityRepository.players.push( new Player(200, 200, 0, 0, 50))
EntityRepository.players.push( new Player(400, 400, 0, 0, 50))
Animator.animate()

SetupActions.setup();
SetupCollisionHandlers.setup()



//
// document.addEventListener('mousedown', function (event) {
//     console.log(event.target);
// }, false);
//
// document.addEventListener('keydown',
//     function (event) {
//         console.log(event.key)
//     }, false);
