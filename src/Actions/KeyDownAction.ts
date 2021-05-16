import { IObservable } from "../observer/IObservable";
import { IObservableClass } from "../observer/IObservableClass";
import { Observable } from "../observer/Observable";
import { IAction } from "./IAction";

export class KeyDownAction implements IAction{

    static observable: Observable<any> = new Observable<any>();

    constructor() {
    }

    setup() {
        document.addEventListener('keydown',
            function (event: any) {

                const notifyData = {
                    key: event.key
                }

                KeyDownAction.observable.notify(notifyData)

                console.log(notifyData)
            }, false);

    }
}
