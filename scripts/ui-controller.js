'use strict'


// Passing the mouse through the checkmarck image toggles the done modal showning done items
document.getElementById("checkmark").addEventListener("mouseover", function() {
    document.getElementById("doneModal").classList.toggle("showDoneModal");
});


var createItem = document.getElementById("createItemModal");

var events = (function () {
    document.getElementById("add").addEventListener("mouseover", function() {
        createItem.classList.toggle("showCreateItemModal");
    });

    createItem.addEventListener('keypress', function(key) {
        if (key.keyCode === 13){
            var descricao = document.getElementById('createItemInput').value;
            var newItem = new TodoItem(descricao, 'todo', 'todo-container');
            return newItem.create();
        }
    });

})();

var deleteItem = function(trashItem) {

    var itemID = trashItem.parentNode.id;
    var myItem = itemController.filter(function(item) {
        return item.id === itemID;
    });

    return myItem.remove();
    
};