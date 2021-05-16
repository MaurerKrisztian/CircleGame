import { IAction } from "./IAction";
import { Observable } from "../observer/Observable";

export class MousePositionAction implements IAction {
    static observable: Observable<any> = new Observable<any>();
    static mouseMoveData: IMousePositionData = {x: 0, y: 0};
    private UPDATE_DELAY_MS = 300;

    setup(): any {
        document.onmousemove = function (event: MouseEvent) {
            const mouseMoveData: IMousePositionData = {
                x: event.pageX,
                y: event.pageY,
            }
            MousePositionAction.mouseMoveData = mouseMoveData;
        }
        setInterval(check_cursor, this.UPDATE_DELAY_MS);

        function check_cursor() {
            // console.log(MousePositionAction.mouseMoveData)
            MousePositionAction.observable.notify(MousePositionAction.mouseMoveData, "MousePosition")
        }

    }

}

export interface IMousePositionData {
    x: number,
    y: number
}
