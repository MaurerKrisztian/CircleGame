import { IMousePressAction, MousePressAction } from "../Actions/MousePressAction";
import { IObserver } from "../observer/IObserver";
import { IMousePositionData, MousePositionAction } from "../Actions/MousePositionAction";
import { BulletFactory } from "../factory/BulletFactory";
import { EntityRepository } from "../EntityRepository";
import { Bullet } from "./Bullet";
import { Utils } from "../Utils";
import { CollisionActions } from "../Actions/globalActions/CollisionActions";
import { v4 as uuidv4 } from 'uuid';

export class Player implements IObserver<any> {
    id: string = uuidv4();
    color: string;
    colors: any = ['blue', 'red', 'green', 'black'];

    constructor(private x: any, private y: any, private dx: any, private dy: any, public radius: any) {
        CollisionActions.observable.add(this);
        MousePressAction.observable.add(this);
        this.color = this.colors[this.getRandomColorIndex()];
    }

    update(data: any, channel?: string): void {
        console.log(channel)
        switch (channel) {
            case 'MousePosition':
                const mousePosition: IMousePositionData = data;

                console.log("player action : ", mousePosition)
                break;
            case 'MousePressAction':
                const mousePressAction: IMousePressAction = data;
                // this.radius++
                const vector = Utils.vector(this.x, this.y, mousePressAction.clientX, mousePressAction.clientY)
                console.log(vector)

                const distance = Utils.distance(this.x, this.y, mousePressAction.clientX, mousePressAction.clientY);
                console.log("distance ", distance)
                this.shoot(vector.dx * 0.01, vector.dy * 0.01)
                console.log("player action : ", mousePressAction)
                break;

        }
    }

    getRandomColorIndex(): number {
        return Math.round(Math.random() * this.colors.length)
    }

    draw(context: any) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color;
        context.stroke();
    }


    updateCtx(context: any) {
        if (this.x > innerWidth - this.radius || this.x < 0 + this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > innerHeight - this.radius || this.y < 0 + this.radius) {
            this.dy = -this.dy;
        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        // console.log(MousePositionAction.mouseMoveData)
        // console.log(Utils.distance(this.x, this.y, MousePositionAction.mouseMoveData.x, MousePositionAction.mouseMoveData.y))

        this.calculateCollision();
        this.draw(context);

    }

    shoot(dx: number, dy: number) {

        console.log("distanceeeeeeeeeeeeeeee", Utils.distance(this.x, this.y, MousePositionAction.mouseMoveData.x, MousePositionAction.mouseMoveData.y), "radius", this.radius)
        const bullet = new Bullet(this.x, this.y, dx, dy, 33, this.id)
        EntityRepository.bullets.push(bullet)
    }

    calculateCollision() {
        for (const bullet of EntityRepository.bullets) {
            if (bullet.playerId == this.id) {
                continue
            }
            const distance = Utils.distance(this.x, this.y, bullet.x, bullet.y);
            if (distance <= (bullet.radius + this.radius)) {
                console.log(distance, bullet.radius, this.radius)
                CollisionActions.observable.notify({player: this, bullet: bullet}, "bullet_player_collision")
            }
        }
    }
}
