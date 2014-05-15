var Collections;
(function (Collections) {
    (function (Generic) {
        var LinkedListNode = (function () {
            function LinkedListNode(value) {
                this.value = value;
                this.next = null;
                this.previous = null;
            }
            return LinkedListNode;
        })();
        Generic.LinkedListNode = LinkedListNode;
    })(Collections.Generic || (Collections.Generic = {}));
    var Generic = Collections.Generic;
})(Collections || (Collections = {}));
//# sourceMappingURL=LinkedListNode.js.map
