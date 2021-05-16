import { IAction } from "./IAction";
import { KeyDownAction } from "./KeyDownAction";
import { MousePressAction } from "./MousePressAction";
import { MousePositionAction } from "./MousePositionAction";

export class SetupActions {
    static actions: IAction[] = [
        new KeyDownAction(),
        new MousePressAction(),
        new MousePositionAction()
    ]

    static async setup() {
        for (const action of this.actions) {
            await action.setup();
        }
    }
}
