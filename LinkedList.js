/// <reference path="interfaces/ICollection.ts" />
/// <reference path="LinkedListNode.ts" />
var Collections;
(function (Collections) {
    (function (Generic) {
        var LinkedList = (function () {
            function LinkedList() {
                this.firstNode = null;
                this.lastNode = null;
                this.Count = 0;
            }
            LinkedList.prototype.Add = function (item) {
                var newNode = new Generic.LinkedListNode(item);

                if (this.firstNode == null) {
                    this.firstNode = newNode;
                    this.lastNode = newNode;
                } else {
                    this.lastNode.next = newNode;
                    newNode.previous = this.lastNode;
                    this.lastNode = newNode;
                }

                this.Count++;
            };

            LinkedList.prototype.Clear = function () {
                this.firstNode = null;
                this.lastNode = null;
                this.Count = 0;
            };

            LinkedList.prototype.Contains = function (item) {
                return this.getNode(this.firstNode, item) != null;
            };

            LinkedList.prototype.Remove = function (item) {
                var nodeToRemove = this.getNode(this.firstNode, item);

                if (nodeToRemove == null) {
                    return false;
                }

                if (nodeToRemove.previous != null) {
                    nodeToRemove.previous.next = nodeToRemove.next;
                }

                if (nodeToRemove.next != null) {
                    nodeToRemove.next.previous = nodeToRemove.previous;
                } else {
                    this.lastNode = nodeToRemove.previous;
                }

                if (nodeToRemove.previous == null && nodeToRemove.next == null) {
                    this.firstNode = null;
                }

                this.Count--;

                return true;
            };

            LinkedList.prototype.getNode = function (node, findValue) {
                if (node == null) {
                    return null;
                }

                if (node.value == findValue) {
                    return node;
                }

                if (node.next == null) {
                    return null;
                }

                return this.getNode(node.next, findValue);
            };
            return LinkedList;
        })();
        Generic.LinkedList = LinkedList;
    })(Collections.Generic || (Collections.Generic = {}));
    var Generic = Collections.Generic;
})(Collections || (Collections = {}));
//# sourceMappingURL=LinkedList.js.map
