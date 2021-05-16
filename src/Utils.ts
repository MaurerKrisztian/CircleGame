export class Utils {

    static vector(x1: number, y1: number, x2: number, y2: number) {
        return {dx: x2 - x1, dy: y2 - y1}
    }

    static distance(x1: number, y1: number, x2: number, y2: number) {
        return Math.sqrt( Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2) );
        // return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
    }

}
