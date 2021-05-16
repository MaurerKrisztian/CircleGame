import { EntityRepository } from "../EntityRepository";
import { Utils } from "../Utils";
import { CollisionActions } from "../Actions/globalActions/CollisionActions";

export class Bullet {
    color: string;
    colors: any = ['blue', 'red', 'green', 'black'];

    constructor(public x: any, public y: any, private dx: any, private dy: any, public radius: number, public playerId: string, private liveTime: number = 5000) {
        this.color = this.colors[this.getRandomColorIndex()];
        this.setLiveTime();
    }

    setLiveTime() {
        setTimeout(() => {
            EntityRepository.bullets = EntityRepository.bullets.filter((bullet) => {
                if (bullet === this) {
                    return false
                }
                return true
            })
        }, this.liveTime)
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


        this.calculateCollision();

        this.draw(context);

    }

    calculateCollision() {
        for (const bullet of EntityRepository.bullets) {
            if (bullet === this) {
                continue
            }
            const distance = Utils.distance(this.x, this.y, bullet.x, bullet.y);
            if (distance <= (bullet.radius + this.radius) && bullet.playerId != this.playerId) {
                console.log(distance, bullet.radius, this.radius)
                CollisionActions.observable.notify({b1: this, b2: bullet}, "bullet_collision")
            }
        }
    }

}

