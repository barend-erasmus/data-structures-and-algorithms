import { Node } from './node';

const root: Node<string> = new Node<string>('T', null, null);
root.left = new Node<string>('A', null, null);
root.right = new Node<string>('X', null, null);
root.left.left = new Node<string>('S', null, null);
root.left.right = new Node<string>('E', null, null);

console.log(`Height: ${root.height()}`);

console.log(`Inorder: ${root.inorder()}`);

console.log(`Postorder: ${root.postorder()}`);

console.log(`Preorder: ${root.preorder()}`);
