"use strict";

function createList(arr) {
    if( Object.prototype.toString.call( arr ) === '[object Array]' ) {
        return arr.map(function (item) {
            if ((typeof item === 'string')&&(item.length !== 0)) {
                return '<li>' + item + '</li>';
            } else {
                return '';
            }
        });
    } else {
        return []
    }
}
module.exports = createList;
