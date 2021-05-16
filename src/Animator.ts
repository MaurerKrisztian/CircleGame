import { EntityRepository } from "./EntityRepository";
import { Context } from "./Context";
import { CollisionActions } from "./Actions/globalActions/CollisionActions";

export class Animator {
    constructor() {
    }

    static animate() {
        requestAnimationFrame(Animator.animate); //infinite loop

        Context.ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (var i = 0; i < EntityRepository.allCircuit.length; i++) {
            EntityRepository.allCircuit[i].update(Context.ctx);
        }

        for (var i = 0; i < EntityRepository.players.length; i++) {
            EntityRepository.players[i].updateCtx(Context.ctx);
        }


        for (var i = 0; i < EntityRepository.bullets.length; i++) {
            EntityRepository.bullets[i].updateCtx(Context.ctx);
        }

        // CollisionActions.calculate()

    }

}
