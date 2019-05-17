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

    var htmlCode = `<p id="${this.id}"><input type="checkbox" id="ckb-${this.id}"> ${this.descricao}</p>`;
    this.elementoPai.insertAdjacentHTML('afterend', htmlCode);
    this.todoElement = document.getElementById(this.id);
    this.todoCheck = document.getElementById(`ckb-${this.id}`);

    this.todoCheck.addEventListener('click', this.check.bind(this));    
    globalStorage.add(this.id, this);
}

TodoItem.prototype.remove = function() {
    var todoHtml = document.getElementById(this.id);
    if (todoHtml)
    {
        // com o id do pai remove item com esse id
        // remove do global storage
    }
}

TodoItem.prototype.update = function(newDescription) {
    var todoHtml = document.getElementById(this.id);
    if (todoHtml)
    {
        // busca o elemento que tem a newDescription
        // atualiza no global storage (deletar e criar denovo)
    }
}

TodoItem.prototype.registerCallback = function(callback) {
    this.aQuemChamar = callback;
}

TodoItem.prototype.check = function() {
    if (this.aQuemChamar != undefined)
        this.aQuemChamar(this.id);
}