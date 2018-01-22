export class Node<T> {
    constructor(
        public info: T,
        public nextlink: Node<T>,
        public previouslink: Node<T>,
    ) {

    }
}
