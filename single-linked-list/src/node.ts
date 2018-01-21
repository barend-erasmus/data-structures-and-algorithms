export class Node<T> {
    constructor(
        public info: T,
        public link: Node<T>,
    ) {

    }
}
