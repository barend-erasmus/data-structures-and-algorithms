export class Node<T> {
    constructor(
        public info: T,
        public left: Node<T>,
        public right: Node<T>,
    ) {

    }

    public height(): number {
        return 1 + Math.max(this.left ? this.left.height() : 0, this.right ? this.right.height() : 0);
    }

    // Visited in LNR
    public inorder(): T[] {

        let result: T[] = [];

        if (this.left) {
            result = result.concat(this.left.inorder());
        }

        result.push(this.info);

        if (this.right) {
            result = result.concat(this.right.inorder());
        }

        return result;
    }

    // Visited in LRN
    public postorder(): T[] {

        let result: T[] = [];

        if (this.left) {
            result = result.concat(this.left.postorder());
        }

        if (this.right) {
            result = result.concat(this.right.postorder());
        }

        result.push(this.info);

        return result;
    }

    // Visited in NLR
    public preorder(): T[] {
        let result: T[] = [];

        result.push(this.info);

        if (this.left) {
            result = result.concat(this.left.preorder());
        }

        if (this.right) {
            result = result.concat(this.right.preorder());
        }

        return result;
    }
}
