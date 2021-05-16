import { Player } from "../models/Player";
import { MousePressAction } from "../Actions/MousePressAction";

export class PlayerFactory {

    static create(): Player {
        const player = new Player(200, 200, 0, 0, 50);
        MousePressAction.observable.add(player);
        return player;
    }
}
