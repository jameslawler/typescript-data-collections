/// <reference path="tsUnit.ts" />
/// <reference path="../LinkedList.ts" />

module CollectionsTests
{
    export class LinkedListTests extends tsUnit.TestClass
    {
        private CreateNewTarget() : Collections.Generic.LinkedList<string>
        {
            return new Collections.Generic.LinkedList<string>();
        }

        /*
            Add tests
         */

        When_AddEmptyLinkedList_ShouldAddItem()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Apple");

            // Assert
            this.areIdentical(1, target.Count);
            this.isTrue(target.Contains("Apple"));
        }

        When_AddItemToNotEmptyLinkedList_ShouldAddItem()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Apple");
            target.Add("Banana");

            // Assert
            this.areIdentical(2, target.Count);
            this.isTrue(target.Contains("Apple"));
            this.isTrue(target.Contains("Banana"));
        }

        When_AddMultipleItemsToLinkedList_ShouldAddItems()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            for (var i: number = 0; i < 100; i++)
            {
                target.Add("Apple " + i);
            }

            // Assert
            this.areIdentical(100, target.Count);
            for (var i: number = 0; i < 100; i++)
            {
                this.isTrue(target.Contains("Apple " + i));
            }
        }

        /*
            Clear tests
         */

        When_ClearEmptyLinkedList_ShouldDoNothing()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Clear();

            // Assert
            this.areIdentical(0, target.Count);
            this.isFalse(target.Contains("Apple"));
        }

        When_ClearOneItemLinkedList_ShouldClearLinkedList()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Apple");
            target.Clear();

            // Assert
            this.areIdentical(0, target.Count);
            this.isFalse(target.Contains("Apple"));
        }

        When_ClearMultipleItemLinkedList_ShouldClearLinkedList()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            for (var i: number = 0; i < 100; i++)
            {
                target.Add("Apple " + i);
            }

            target.Clear();

            // Assert
            this.areIdentical(0, target.Count);
            this.isFalse(target.Contains("Apple 10"));
        }

        /*
         Count test
         */

        When_LinkedListIsEmpty_Should_HaveCountEmpty()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act

            // Assert
            this.areIdentical(0, target.Count);
        }

        When_LinkedListHasOneItem_Should_HaveCountNotEmpty()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Apple");

            // Assert
            this.areIdentical(1, target.Count);
        }

        When_LinkedListHasMultipleItems_Should_HaveCountNotEmpty()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            for (var i: number = 0; i < 100; i++)
            {
                target.Add("Apple " + i);
            }

            // Assert
            this.areIdentical(100, target.Count);
        }

        /*
            Contains tests
         */

        When_ContainsEmptyLinkedList_ShouldReturnFalse()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            var result = target.Contains("Apple");

            // Assert
            this.isFalse(result);
        }

        When_ContainsItemNotInLinkedList_ShouldReturnFalse()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Banana");
            var result = target.Contains("Apple");

            // Assert
            this.isFalse(result);
        }

        When_ContainsItemInOneItemLinkedList_ShouldReturnTrue()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Apple");
            var result = target.Contains("Apple");

            // Assert
            this.isTrue(result);
        }

        When_ContainsItemInMultipleItemLinkedList_ShouldReturnTrue()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            for (var i: number = 0; i < 100; i++)
            {
                target.Add("Apple " + i);
            }

            var result = target.Contains("Apple 5");

            // Assert
            this.isTrue(result);
        }

        When_ContainsItemNotInMultipleItemLinkedList_ShouldReturnFalse()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            for (var i: number = 0; i < 100; i++)
            {
                target.Add("Apple " + i);
            }

            var result = target.Contains("Apple 120");

            // Assert
            this.isFalse(result);
        }

        /*
            Remove tests
         */

        When_RemoveItemEmptyLinkedList_ShouldReturnFalse()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            var result = target.Remove("Apple");

            // Assert
            this.isFalse(result);
        }

        When_RemoveItemNotInLinkedList_ShouldReturnFalse()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Banana");
            var result = target.Remove("Apple");

            // Assert
            this.isFalse(result);
        }

        When_RemoveItemNotInMultipleLinkedList_ShouldReturnFalse()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            for (var i: number = 0; i < 100; i++)
            {
                target.Add("Apple " + i);
            }
            var result = target.Remove("Apple 130");

            // Assert
            this.isFalse(result);
        }

        When_RemoveItemInLinkedList_ShouldReturnTrue()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            target.Add("Apple");
            var result = target.Remove("Apple");

            // Assert
            this.isTrue(result);
            this.isFalse(target.Contains("Apple"));
        }

        When_RemoveItemInMultipleLinkedList_ShouldReturnTrue()
        {
            // Arrange
            var target = this.CreateNewTarget();

            // Act
            for (var i: number = 0; i < 100; i++)
            {
                target.Add("Apple " + i);
            }
            var result = target.Remove("Apple 56");

            // Assert
            this.isTrue(result);
            this.isTrue(target.Contains("Apple 55"));
            this.isFalse(target.Contains("Apple 56"));
            this.isTrue(target.Contains("Apple 57"));
        }
    }
}

// new instance of tsUnit
var test = new tsUnit.Test();

// add your test class (you can call this multiple times)
test.addTestClass(new CollectionsTests.LinkedListTests());

// Use the built in results display
test.showResults(document.getElementById('results'), test.run());