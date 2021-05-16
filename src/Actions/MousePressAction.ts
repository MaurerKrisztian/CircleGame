import { IAction } from "./IAction";
import { Observable } from "../observer/Observable";

export class MousePressAction implements IAction {
    static observable: Observable<MouseEvent> = new Observable<MouseEvent>();

    setup(): any {
        document.addEventListener('mousedown', function (event: MouseEvent) {
            console.log(event)
            MousePressAction.observable.notify(event, "MousePressAction")
        }, false);
    }

}

export interface IMousePressAction extends MouseEvent {}
