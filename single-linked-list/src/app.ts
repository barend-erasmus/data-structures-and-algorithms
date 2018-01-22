import { Node } from './node';
import { SingleLinkedList } from './single-linked-list';

const singleLinkedList: SingleLinkedList<number> = new SingleLinkedList<number>();

singleLinkedList.insertAtEnd(new Node<number>(15, null));
singleLinkedList.insertAtEnd(new Node<number>(10, null));
singleLinkedList.insertAtEnd(new Node<number>(5, null));
singleLinkedList.insertAtEnd(new Node<number>(20, null));
singleLinkedList.insertAtEnd(new Node<number>(15, null));

console.log(`Count: ${singleLinkedList.count()}`);

singleLinkedList.insertAfterIndex(new Node<number>(17.5, null), 2);

singleLinkedList.insertAtBeginning(new Node<number>(0, null));

singleLinkedList.insertAtEnd(new Node<number>(25, null));

singleLinkedList.insertBeforeIndex(new Node<number>(7.5, null), 2);

console.log(`Last: ${singleLinkedList.last().info}`);

console.log(`Node at index 2: ${singleLinkedList.nodeAtIndex(2).info}`);

console.log(`Node with value 5: ${singleLinkedList.nodeWithValue(5).info}`);

singleLinkedList.sortUsingBubbleSortByExchangingData();

singleLinkedList.sortUsingBubbleSortByExchangingLinks();

singleLinkedList.traverse((node: Node<number>) => {
    console.log(node.info);
});
