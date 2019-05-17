'use strict'

var globalStorage = (function () {
    /**
     * Converte objeto em string para armazenamento
     * @param  {object} obj objeto que sera convertiddo em string
     */
    var objToString = function (obj) {
        return JSON.stringify(obj);
    };

    
    /**
     * Converte string para objeto js
     * @param  {string} stringValue string que sera convertida em objeto
     * @returns {object} objeto retirado da string
     */
    var strToObject = function (stringValue) {
        return JSON.parse(stringValue);
    };

    return {
        add: function(key, obj) {
            localStorage.setItem(key, objToString(obj));
        },

        remove: function(key) {
            localStorage.removeItem(key);
        },
    }
})();