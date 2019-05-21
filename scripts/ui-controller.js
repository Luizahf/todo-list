'use strict'

var createItemModal = document.getElementById("createItemModal");
var createItemInput = document.getElementById('createItemInput');
var doneModal = document.getElementById("doneModal");

document.getElementById("checkmark").addEventListener("mouseover", function() {

    doneModal.classList.toggle('showDoneModal');
    
});

document.getElementById("add").addEventListener("mouseover", function() {

    openCreateItemModal();
    createItemAtEnter();
    
});

addEventListener('click', function(where) {

    if (doneModal.contains(where.target)) {
        // Clicked in box
    } else {
    // Clicked outside the box --> closes the modal
    doneModal.classList.remove("showDoneModal");
    }

});

/**
 * Sets that on key pressing 'Enter' a new item is created with the description from the input
 * @param {event} Says where was the click
 */
var createItemAtEnter = function() {

    createItemModal.onkeypress = function(event) {
        if (event.key == 'Enter') {

        let descricao = getValueModal();
        let newItem = new TodoItem(descricao, 'todo', 'todo-container');
        createItem(newItem);

        closeCreateItemModal();

        };

    };
};

var getValueModal = function() {

    let description = createItemInput.value;
    return description;

};

var openCreateItemModal = function(description) {

    if (description != undefined) {

        createItemInput.value = description;

    } else {

        createItemInput.value = '';

    };

    if (!createItemModal.classList.contains('showCreateItemModal'))  {
    
        createItemModal.classList.add("showCreateItemModal");

    };

};

var closeCreateItemModal = function() {

    if (createItemModal.classList.contains('showCreateItemModal'))  {
    
        createItemModal.classList.remove("showCreateItemModal");

    };

};

