module Collections.Generic
{
    export class LinkedListNode<T>
    {
        constructor(value: T)
        {
            this.value = value;
            this.next = null;
            this.previous = null;
        }

        value: T;
        next: LinkedListNode<T>;
        previous: LinkedListNode<T>;
    }
}
