/// <reference path="interfaces/ICollection.ts" />
/// <reference path="LinkedListNode.ts" />

module Collections.Generic
{
    export class LinkedList<T> implements ICollection<T>
    {
        private firstNode: LinkedListNode<T>;
        private lastNode: LinkedListNode<T>;

        Count: number;

        constructor()
        {
            this.firstNode = null;
            this.lastNode = null;
            this.Count = 0;
        }

        Add(item : T)
        {
            var newNode = new LinkedListNode<T>(item);

            if (this.firstNode == null)
            {
                this.firstNode = newNode;
                this.lastNode = newNode;
            }
            else
            {
                this.lastNode.next = newNode;
                newNode.previous = this.lastNode;
                this.lastNode = newNode;
            }

            this.Count++;
        }

        Clear()
        {
            this.firstNode = null;
            this.lastNode = null;
            this.Count = 0;
        }

        Contains(item: T): boolean
        {
            return this.getNode(this.firstNode, item) != null
        }

        Remove(item: T): boolean
        {
            var nodeToRemove = this.getNode(this.firstNode, item);

            if (nodeToRemove == null)
            {
                return false;
            }

            if (nodeToRemove.previous != null)
            {
                nodeToRemove.previous.next = nodeToRemove.next;
            }

            if (nodeToRemove.next != null)
            {
                nodeToRemove.next.previous = nodeToRemove.previous;
            }
            else
            {
                this.lastNode = nodeToRemove.previous;
            }

            if (nodeToRemove.previous == null && nodeToRemove.next == null)
            {
                this.firstNode = null;
            }

            this.Count--;

            return true;
        }

        private getNode(node: LinkedListNode<T>, findValue: T) : LinkedListNode<T>
        {
            if (node == null)
            {
                return null;
            }

            if (node.value == findValue)
            {
                return node;
            }

            if (node.next == null)
            {
                return null;
            }

            return this.getNode(node.next, findValue);
        }
    }
}
