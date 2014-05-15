/// <reference path="tsUnit.ts" />
/// <reference path="../LinkedList.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CollectionsTests;
(function (CollectionsTests) {
    var LinkedListTests = (function (_super) {
        __extends(LinkedListTests, _super);
        function LinkedListTests() {
            _super.apply(this, arguments);
        }
        LinkedListTests.prototype.CreateNewTarget = function () {
            return new Collections.Generic.LinkedList();
        };

        /*
        Add tests
        */
        LinkedListTests.prototype.When_AddEmptyLinkedList_ShouldAddItem = function () {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Apple");

            // Assert
            this.areIdentical(1, target.Count);
            this.isTrue(target.Contains("Apple"));
        };

        LinkedListTests.prototype.When_AddItemToNotEmptyLinkedList_ShouldAddItem = function () {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Apple");
            target.Add("Banana");

            // Assert
            this.areIdentical(2, target.Count);
            this.isTrue(target.Contains("Apple"));
            this.isTrue(target.Contains("Banana"));
        };

        LinkedListTests.prototype.When_AddMultipleItemsToLinkedList_ShouldAddItems = function () {
            // Arrange
            var target = this.CreateNewTarget();

            for (var i = 0; i < 100; i++) {
                target.Add("Apple " + i);
            }

            // Assert
            this.areIdentical(100, target.Count);
            for (var i = 0; i < 100; i++) {
                this.isTrue(target.Contains("Apple " + i));
            }
        };

        /*
        Clear tests
        */
        LinkedListTests.prototype.When_ClearEmptyLinkedList_ShouldDoNothing = function () {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Clear();

            // Assert
            this.areIdentical(0, target.Count);
            this.isFalse(target.Contains("Apple"));
        };

        LinkedListTests.prototype.When_ClearOneItemLinkedList_ShouldClearLinkedList = function () {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Apple");
            target.Clear();

            // Assert
            this.areIdentical(0, target.Count);
            this.isFalse(target.Contains("Apple"));
        };

        LinkedListTests.prototype.When_ClearMultipleItemLinkedList_ShouldClearLinkedList = function () {
            // Arrange
            var target = this.CreateNewTarget();

            for (var i = 0; i < 100; i++) {
                target.Add("Apple " + i);
            }

            target.Clear();

            // Assert
            this.areIdentical(0, target.Count);
            this.isFalse(target.Contains("Apple 10"));
        };

        /*
        Count test
        */
        LinkedListTests.prototype.When_LinkedListIsEmpty_Should_HaveCountEmpty = function () {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            // Assert
            this.areIdentical(0, target.Count);
        };

        LinkedListTests.prototype.When_LinkedListHasOneItem_Should_HaveCountNotEmpty = function () {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Apple");

            // Assert
            this.areIdentical(1, target.Count);
        };

        LinkedListTests.prototype.When_LinkedListHasMultipleItems_Should_HaveCountNotEmpty = function () {
            // Arrange
            var target = this.CreateNewTarget();

            for (var i = 0; i < 100; i++) {
                target.Add("Apple " + i);
            }

            // Assert
            this.areIdentical(100, target.Count);
        };

        /*
        Contains tests
        */
        LinkedListTests.prototype.When_ContainsEmptyLinkedList_ShouldReturnFalse = function () {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            var result = target.Contains("Apple");

            // Assert
            this.isFalse(result);
        };

        LinkedListTests.prototype.When_ContainsItemNotInLinkedList_ShouldReturnFalse = function () {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Banana");
            var result = target.Contains("Apple");

            // Assert
            this.isFalse(result);
        };

        LinkedListTests.prototype.When_ContainsItemInOneItemLinkedList_ShouldReturnTrue = function () {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Apple");
            var result = target.Contains("Apple");

            // Assert
            this.isTrue(result);
        };

        LinkedListTests.prototype.When_ContainsItemInMultipleItemLinkedList_ShouldReturnTrue = function () {
            // Arrange
            var target = this.CreateNewTarget();

            for (var i = 0; i < 100; i++) {
                target.Add("Apple " + i);
            }

            var result = target.Contains("Apple 5");

            // Assert
            this.isTrue(result);
        };

        LinkedListTests.prototype.When_ContainsItemNotInMultipleItemLinkedList_ShouldReturnFalse = function () {
            // Arrange
            var target = this.CreateNewTarget();

            for (var i = 0; i < 100; i++) {
                target.Add("Apple " + i);
            }

            var result = target.Contains("Apple 120");

            // Assert
            this.isFalse(result);
        };

        /*
        Remove tests
        */
        LinkedListTests.prototype.When_RemoveItemEmptyLinkedList_ShouldReturnFalse = function () {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            var result = target.Remove("Apple");

            // Assert
            this.isFalse(result);
        };

        LinkedListTests.prototype.When_RemoveItemNotInLinkedList_ShouldReturnFalse = function () {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Banana");
            var result = target.Remove("Apple");

            // Assert
            this.isFalse(result);
        };

        LinkedListTests.prototype.When_RemoveItemNotInMultipleLinkedList_ShouldReturnFalse = function () {
            // Arrange
            var target = this.CreateNewTarget();

            for (var i = 0; i < 100; i++) {
                target.Add("Apple " + i);
            }
            var result = target.Remove("Apple 130");

            // Assert
            this.isFalse(result);
        };

        LinkedListTests.prototype.When_RemoveItemInLinkedList_ShouldReturnTrue = function () {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Apple");
            var result = target.Remove("Apple");

            // Assert
            this.isTrue(result);
            this.isFalse(target.Contains("Apple"));
        };

        LinkedListTests.prototype.When_RemoveItemInMultipleLinkedList_ShouldReturnTrue = function () {
            // Arrange
            var target = this.CreateNewTarget();

            for (var i = 0; i < 100; i++) {
                target.Add("Apple " + i);
            }
            var result = target.Remove("Apple 56");

            // Assert
            this.isTrue(result);
            this.isTrue(target.Contains("Apple 55"));
            this.isFalse(target.Contains("Apple 56"));
            this.isTrue(target.Contains("Apple 57"));
        };
        return LinkedListTests;
    })(tsUnit.TestClass);
    CollectionsTests.LinkedListTests = LinkedListTests;
})(CollectionsTests || (CollectionsTests = {}));

// new instance of tsUnit
var test = new tsUnit.Test();

// add your test class (you can call this multiple times)
test.addTestClass(new CollectionsTests.LinkedListTests());

// Use the built in results display
test.showResults(document.getElementById('results'), test.run());
//# sourceMappingURL=LinkedListTests.js.map
