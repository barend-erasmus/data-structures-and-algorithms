import { Node } from './node';

export class HashTable<T> {

    public array: Array<Node<T>> = [];

    constructor(size: number) {
        this.array = new Array(size);
    }

    public add(key: string, value: T): number {
        const index: number = this.getIndex(key);

        let existingNode: Node<T> = this.array[index];

        const newNode: Node<T> = new Node<T>(key, null, value);

        if (existingNode) {

            while (existingNode.next) {
                existingNode = existingNode.next;
            }

            existingNode.next = newNode;
        } else {
            this.array[index] = newNode;
        }

        return index;
    }

    public get(key: string): T {
        const index: number = this.getIndex(key);

        let node: Node<T> = this.array[index];

        if (node) {
            while (node && key !== node.key) {
                node = node.next;
            }

            return node.value;
        }

        return null;
    }

    private getIndex(key: string): number {
        return this.hash_fnv1a(key) % this.array.length;
    }

    private hash_fnv1a(str: string): number {
        let h = 0x811c9dc5;

        for (let i = 0, l = str.length; i < l; i++) {
            h ^= str.charCodeAt(i);
            h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
        }

        return h >>> 0;
    }
}
