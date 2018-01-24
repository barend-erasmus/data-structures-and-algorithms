import { start } from 'repl';
import { Node } from './node';

export class SingleLinkedList<T> {

    public start: Node<T> = null;

    constructor() {

    }

    public count(): number {
        let count: number = 0;
        let current: Node<T> = this.start;

        while (current) {
            count++;
            current = current.link;
        }

        return count;
    }

    public deleteAtBeginning(): void {
        if (!this.start) {
            return;
        }

        this.start = this.start.link;
    }

    public deleteAtEnd(): void {

        if (!this.start) {
            return;
        }

        if (!this.start.link) {
            this.start = null;
        }

        let current: Node<T> = this.start;

        while (current.link.link != null) {
            current = current.link;
        }

        current.link = null;
    }

    public deleteAtIndex(index: number): void {
        let current: Node<T> = this.start;

        for (let i = 0; i < index - 1 && current != null; i++) {
            current = current.link;
        }

        current.link = current.link.link;
    }

    public findCycleUsingHareAndTortoise(): boolean {

        if (!this.start || !this.start.link) {
            return false;
        }

        let slow: Node<T> = this.start;
        let fast: Node<T> = this.start;

        while (fast && fast.link) {
            slow = slow.link;
            fast = fast.link.link;

            if (slow === fast) {
                return true;
            }
        }

        return false;
    }

    public insertAfterIndex(node: Node<T>, index: number): void {
        let current: Node<T> = this.start;

        for (let i = 0; i < index && current; i++) {
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
        if (!this.start) {
            this.start = node;
            return;
        }

        let current: Node<T> = this.start;

        while (current.link) {
            current = current.link;
        }

        current.link = node;
    }

    public insertBeforeIndex(node: Node<T>, index: number): void {
        let current: Node<T> = this.start;

        for (let i = 0; i < index - 1 && current; i++) {
            current = current.link;
        }

        node.link = current.link;
        current.link = node;
    }

    public last(): Node<T> {

        let current: Node<T> = this.start;

        while (current.link) {
            current = current.link;
        }

        return current;
    }

    public nodeAtIndex(index: number): Node<T> {
        let current: Node<T> = this.start;

        for (let i = 0; i < index && current; i++) {
            current = current.link;
        }

        return current;
    }

    public nodeWithValue(x: T): Node<T> {
        let current: Node<T> = this.start;

        while (current) {

            if (current.info === x) {
                return current;
            }

            current = current.link;
        }

        return null;
    }

    public reverse(): void {
        let previous: Node<T> = null;
        let current: Node<T> = null;
        let next: Node<T> = null;

        while (current !== null) {
            next = current.link;
            current.link = previous;
            previous = current;
            current = next;
        }

        this.start = previous;
    }

    public sortUsingBubbleSortByExchangingData(): void {
        let current: Node<T> = null;
        let next: Node<T> = null;
        let end: Node<T> = null;

        for (end = null; end !== this.start.link; end = current) {
            for (current = this.start; current.link !== end; current = current.link) {
                next = current.link;
                if (current.info > next.info) {
                    const info: T = current.info;

                    current.info = next.info;
                    next.info = info;
                }
            }
        }
    }

    public sortUsingBubbleSortByExchangingLinks(): void {
        let previous: Node<T> = null;
        let current: Node<T> = null;
        let next: Node<T> = null;
        let end: Node<T> = null;

        let temp: Node<T> = null;

        for (end = null; end !== this.start.link; end = current) {
            for (previous = current = this.start; current.link !== end; previous = current, current = current.link) {
                next = current.link;

                if (current.info > next.info) {
                    current.link = next.link;
                    next.link = current;

                    if (current !== this.start) {
                        previous.link = next;
                    } else {
                        this.start = next;
                    }

                    temp = current;
                    current = next;
                    next = temp;
                }
            }
        }
    }

    public traverse(fn: (node: Node<T>) => void): void {
        let current: Node<T> = this.start;

        while (current) {
            fn(current);
            current = current.link;
        }
    }
}
