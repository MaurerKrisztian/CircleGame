import { ICollisionHandler } from "./ICollisionHandler";
import { BulletCollision } from "./BulletCollision";
import { BulletPlayerCollision } from "./BulletPlayerCollision";

export class SetupCollisionHandlers {
    static handlers: ICollisionHandler[] = [
        new BulletCollision(),
        new BulletPlayerCollision()
    ]

    static setup() {
        for (const handler of this.handlers) {
            handler.handleCollision();
        }
    }
}
