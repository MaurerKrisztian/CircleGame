import { IAction } from "../IAction";
import { Observable } from "../../observer/Observable";
import { EntityRepository } from "../../EntityRepository";
import { Utils } from "../../Utils";
import { Bullet } from "../../models/Bullet";

export class CollisionActions implements IAction {
    static observable: Observable<any> = new Observable<any>();

    setup(): any {
    }

    static calculate() {
        // // console.log("ittt")
        // for (let i = 0; i < EntityRepository.bullets.length; i++) {
        //     for (let j = i + 1; j < EntityRepository.bullets.length; j++) {
        //         if (EntityRepository.bullets[i] === EntityRepository.bullets[j]) {
        //             break
        //         }
        //         console.log("ott")
        //         const distance = Utils.distance(EntityRepository.bullets[i].x, EntityRepository.bullets[i].y, EntityRepository.bullets[j].x, EntityRepository.bullets[j].y);
        //         this.bulletCollisionEvent(EntityRepository.bullets[i], EntityRepository.bullets[j], distance)
        //     }
        // }

    }

    static bulletCollisionEvent(bullet1: Bullet, bullet2: Bullet, distance: number) {
        console.log(bullet1.radius + bullet2.radius, distance)
        if (bullet1.radius + bullet2.radius <= distance) {
            console.log(bullet1.radius + bullet2.radius, distance)
            // CollisionActions.observable.notify({bullet1, bullet2}, "collision")
            // console.log("collision................")
        }
    }


}
