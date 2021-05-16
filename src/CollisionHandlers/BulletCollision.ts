import { ICollisionHandler } from "./ICollisionHandler";
import { CollisionActions } from "../Actions/globalActions/CollisionActions";
import { IObserver } from "../observer/IObserver";
import { EntityRepository } from "../EntityRepository";
import { Bullet } from "../models/Bullet";

export class BulletCollision implements ICollisionHandler, IObserver<any> {

    handleCollision(): any {
        CollisionActions.observable.add(this)
    }

    update(data: any, channel?: string): void {
        if (channel == "bullet_collision") {
            const bullets: BulletCollisionData = data;
            EntityRepository.bullets = EntityRepository.bullets.filter((bullet: Bullet) => {
                if (bullet === bullets.b1 || bullet === bullets.b2) {
                    return false;
                }
                return true;
            })
        }
    }

}

export interface BulletCollisionData {
    b1: Bullet,
    b2: Bullet
}
