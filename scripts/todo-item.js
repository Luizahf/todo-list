'use strict'

function TodoItem(descricao, tipo, paiId) {
    this.tipo = tipo;
    this.descricao = descricao;
    this.id = guidGenerator.new();
    this.elementoPai = document.getElementById(paiId);
}

TodoItem.prototype.create = function() {
    var todoHtml = document.getElementById(this.id);
    if (todoHtml)
        return;

    var htmlCode = `<p class="todo-item" id="${this.id}"><input type="checkbox" id="ckb-${this.id}"> <span id="descricao-${this.id}">${this.descricao}</span>  <i class="icon ion-ios-trash" class="trash" id="trash-${this.id}"></i><i class="icon ion-md-create" id="update-${this.id}"></i></p>`;
    this.elementoPai.insertAdjacentHTML('beforeend', htmlCode);

    this.todoCheck = document.getElementById(`ckb-${this.id}`);
    this.todoTrash = document.getElementById(`trash-${this.id}`);
    this.todoUpdate = document.getElementById(`update-${this.id}`);
    this.todoDescription = document.getElementById(this.id);

    this.todoCheck.addEventListener('click', this.check.bind(this));    
    this.todoTrash.addEventListener('click', this.delete.bind(this));
    this.todoUpdate.addEventListener('click', this.edit.bind(this));

    globalStorage.add(this.id, this);

}

TodoItem.prototype.remove = function() {
    var todoHtml = document.getElementById(this.id);
    if (todoHtml)
    {
        this.elementoPai.removeChild(todoHtml);

        globalStorage.remove(this.id)

    }
}

TodoItem.prototype.update = function(newDescription) {
    var todoHtml = document.getElementById(this.id);
    if (todoHtml)
    {

        document.getElementById(`descricao-${this.id}`).textContent = newDescription;
        globalStorage.remove(this.id);
        globalStorage.add(this.id, this);

    }
}

TodoItem.prototype.registerUpdateCallback = function(callback) {
    this.aQuemChamarEdit = callback;
}

TodoItem.prototype.registerCheckCallback = function(callback) {
    this.aQuemChamarCheck = callback;
}

TodoItem.prototype.registerDeleteCallback = function(callback) {
    this.aQuemChamarDelete = callback;
}

TodoItem.prototype.check = function() {
    if (this.aQuemChamarCheck != undefined)
        this.aQuemChamarCheck(this.id, this.tipo);
}

TodoItem.prototype.delete = function() {
    if (this.aQuemChamarDelete != undefined)
        this.aQuemChamarDelete(this.id);
}

TodoItem.prototype.edit = function() {
    if (this.aQuemChamarEdit != undefined)
        this.aQuemChamarEdit(this.id);
}

