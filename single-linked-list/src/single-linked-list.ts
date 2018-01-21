import { start } from 'repl';
import { Node } from './node';

export class SingleLinkedList<T> {

    public start: Node<T> = null;

    constructor() {

    }

    public count(): number {
        let count: number = 0;
        let current: Node<T> = this.start;

        while (current != null) {
            count++;
            current = current.link;
        }

        return count;
    }

    public insertAfterIndex(node: Node<T>, index: number): void {
        let current: Node<T> = this.start;

        for (let i = 0; i < index && current != null; i++) {
            current = current.link;
        }

        node.link = current.link;
        current.link = node;
    }

    public insertAtBeginning(node: Node<T>): void {
        node.link = this.start;
        this.start = node;
    }

    public insertAtEnd(node: Node<T>): void {
        if (this.start === null) {
            this.start = node;
            return;
        }

        let current: Node<T> = this.start;

        while (current.link != null) {
            current = current.link;
        }

        current.link = node;
    }

    public insertBeforeIndex(node: Node<T>, index: number): void {
        let current: Node<T> = this.start;

        for (let i = 0; i < index - 1 && current != null; i++) {
            current = current.link;
        }

        node.link = current.link;
        current.link = node;
    }

    public last(): Node<T> {

        let current: Node<T> = this.start;

        while (current.link != null) {
            current = current.link;
        }

        return current;
    }

    public nodeAtIndex(index: number): Node<T> {
        let current: Node<T> = this.start;

        for (let i = 0; i < index && current != null; i++) {
            current = current.link;
        }

        return current;
    }

    public nodeWithValue(x: T): Node<T> {
        let current: Node<T> = this.start;

        while (current != null) {

            if (current.info === x) {
                return current;
            }

            current = current.link;
        }

        return null;
    }

    public traverse(fn: (node: Node<T>) => void): void {
        let current: Node<T> = this.start;

        while (current != null) {
            fn(current);
            current = current.link;
        }
    }
}
