'use strict'

function DoneItem(descricao, tipo, paiId) {
    this.tipo = tipo;
    this.descricao = descricao;
    this.id = guidGenerator.new();
    this.elementoPai = document.getElementById(paiId);
}

DoneItem.prototype.create = function() {
    var doneHtml = document.getElementById(this.id);
    if (doneHtml)
        return;

    var htmlCode = `<p class="done-item" id="${this.id}"><input type="checkbox" id="ckb-${this.id}"> ${this.descricao}</p>`;
    
    this.elementoPai.insertAdjacentHTML('afterend', htmlCode);
    this.doneElement = document.getElementById(this.id);
    this.doneCheck = document.getElementById(`ckb-${this.id}`);
    this.doneCheck.checked = true;

    this.doneCheck.addEventListener('click', this.check.bind(this));    
    globalStorage.add(this.id, this);
}

DoneItem.prototype.remove = function() {
    var doneHtml = document.getElementById(this.id);
    if (doneHtml)
    {
        // com o id do pai remove item com esse id
        // remove do global storage
    }
}

DoneItem.prototype.update = function(newDescription) {
    var doneHtml = document.getElementById(this.id);
    if (doneHtml)
    {
        // busca o elemento que tem a newDescription
        // atualiza no global storage (deletar e criar denovo)
    }
}

DoneItem.prototype.registerCallback = function(callback) {
    this.aQuemChamar = callback;
}

DoneItem.prototype.check = function() {
    if (this.aQuemChamar != undefined)
        this.aQuemChamar(this.id);
}