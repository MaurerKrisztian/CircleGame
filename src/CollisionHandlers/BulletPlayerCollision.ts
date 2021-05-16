import { ICollisionHandler } from "./ICollisionHandler";
import { CollisionActions } from "../Actions/globalActions/CollisionActions";
import { IObserver } from "../observer/IObserver";
import { EntityRepository } from "../EntityRepository";
import { Bullet } from "../models/Bullet";
import { Player } from "../models/Player";

export class BulletPlayerCollision implements ICollisionHandler, IObserver<any> {

    handleCollision(): any {
        CollisionActions.observable.add(this)
    }

    update(data: any, channel?: string): void {
        if (channel == "bullet_player_collision") {
            const collisionEntities: BulletPlayerCollisionData = data;
            for (const player of EntityRepository.players) {
                if (player === collisionEntities.player && collisionEntities.bullet.playerId != player.id){
                    player.radius++;
                }
            }

            EntityRepository.bullets = EntityRepository.bullets.filter((bullet: Bullet) => {
                if ( bullet === collisionEntities.bullet) {
                    return false;
                }
                return true;
            })
        }
    }

}

export interface BulletPlayerCollisionData {
    player: Player,
    bullet: Bullet
}
