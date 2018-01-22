import { start } from 'repl';
import { Node } from './node';

export class DoubleLinkedList<T> {

    public start: Node<T> = null;

    constructor() {

    }

    public insertAtBeginning(node: Node<T>): void {

        if (!this.start) {
            this.start = node;
            return;
        }

        node.nextlink = this.start;
        this.start.previouslink = node;
        this.start = node;
    }

    public insertAtEnd(node: Node<T>): void {

        if (this.start === null) {
            this.start = node;
            return;
        }

        let current: Node<T> = this.start;

        while (current.nextlink != null) {
            current = current.nextlink;
        }

        current.nextlink = node;
        node.previouslink = current;
    }

    public reverse(): void {
        let current: Node<T> = this.start;
        let next: Node<T> = current.nextlink;

        current.nextlink = null;
        current.previouslink = next;

        while(next != null) {
            next.previouslink = next.nextlink;
            next.nextlink = current;
            current = next;
            next = next.previouslink;
        }

        this.start = current;
    }

    public traverse(fn: (node: Node<T>) => void): void {
        let current: Node<T> = this.start;

        while (current != null) {
            fn(current);
            current = current.nextlink;
        }
    }
}
