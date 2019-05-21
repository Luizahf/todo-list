'use strict'

// itemController stores the item objs
var itemController = [];

var deleteItem = function(todoId) {
    
    let selectedItem = findSelectedElement(todoId);

    selectedItem.remove();

    itemController.splice((itemController.indexOf(selectedItem)), 1);

};

/**
 * Removes the item on the html
 * Changes the type and parent element in the item controller arr
 * Creates a new item in the html with the new parent element
 * @param  {id} todoId
 */
var checkItem = function(todoId) {

    let selectedItem = findSelectedElement(todoId);
    let tipo = selectedItem.tipo;

    selectedItem.remove();
    
    if (tipo === 'todo') {

        selectedItem.tipo = 'done';
        selectedItem.elementoPai = document.getElementById('done-container')

    } else {

        selectedItem.tipo = 'todo';
        selectedItem.elementoPai = document.getElementById('todo-container')

    };
    
    selectedItem.create();

};

/**
 * 
 * Opens the create modal with the selected item's description
 * Updates the item controller with the new description when press enter
 * 
 * @param  {id} todoId
 */
var updateItem = function(todoId) {
    let newDescription;

    let selectedItem = findSelectedElement(todoId);
    let description = selectedItem.descricao;
    openCreateItemModal(description);

    createItemModal.onkeypress = function(event) {

        if (event.key == 'Enter') {

            newDescription = getValueModal();
            closeCreateItemModal();

            selectedItem.descricao = newDescription;
    
            selectedItem.update(newDescription);

        }

    };    
    
};

var createItem = function(newItem) {

    itemController.push(newItem);
    newItem.registerDeleteCallback(deleteItem);
    newItem.registerCheckCallback(checkItem);
    newItem.registerUpdateCallback(updateItem);
    newItem.create();

};

/**
 * Returns the selected item in the itemController array
 * @param  {id} todoId - ID of the selected item
 */
var findSelectedElement = function(todoId) {

    let myItemArr = itemController.filter(item => {
        return item.id === todoId;
    });

    let selectedItem = myItemArr[0];

    return selectedItem;

};