export class Node<T> {
    constructor(
        public key: string,
        public next: Node<T>,
        public value: T,
    ) {

    }
}
