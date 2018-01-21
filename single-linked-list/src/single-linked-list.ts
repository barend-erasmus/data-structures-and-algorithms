import { Node } from "./node";

export class SingleLinkedList<T> {

    public start: Node<T> = null;

    constructor() {

    }

    public count(): number {
        let count: number = 0;
        let current: Node<T> = this.start;;

        while(current != null) {
            count ++;
            current = current.link;
        }

        return count;
    }

    public create(): void {
        this.start = new Node<T>(null, null);
    }

    public indexOf(x: T): number {
        let index: number = 1;

        let current: Node<T> = this.start;;

        while(current != null) {
            
            if (current.info === x) {
                return index;
            }

            index ++;
            current = current.link;
        }

        return -1;
    }

    public traverse(fn: (node: Node<T>) => void): void {
        let current: Node<T> = this.start;;

        while(current != null) {
            fn(current);
            current = current.link;
        }
    }
}