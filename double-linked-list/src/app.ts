import { DoubleLinkedList } from './double-linked-list';
import { Node } from './node';

const doubleLinkedList: DoubleLinkedList<number> = new DoubleLinkedList<number>();

doubleLinkedList.insertAtEnd(new Node<number>(15, null, null));
doubleLinkedList.insertAtEnd(new Node<number>(10, null, null));
doubleLinkedList.insertAtEnd(new Node<number>(5, null, null));
doubleLinkedList.insertAtEnd(new Node<number>(20, null, null));
doubleLinkedList.insertAtEnd(new Node<number>(15, null, null));

doubleLinkedList.traverse((node: Node<number>) => {
    console.log(node.info);
});
