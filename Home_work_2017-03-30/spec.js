"use strict";

var listLi = require('./createList.js');

var chai = require('chai');
var expect = chai.expect;

describe('Generate li-list from Array', function () {
    'use strict';

    it('input empty array - result empty array', function () {
        expect(listLi([])).to.deep.equal([]);
    });

    it('input string - result empty array', function () {
        expect(listLi('123')).to.deep.equal([]);
    });

    it('input number - result empty array', function () {
        expect(listLi(123)).to.deep.equal([]);
    });

    it('input null - result empty array', function () {
        expect(listLi(null)).to.deep.equal([]);
    });

    it('input true - result empty array', function () {
        expect(listLi(true)).to.deep.equal([]);
    });

    it('input false - result empty array', function () {
        expect(listLi(false)).to.deep.equal([]);
    });

    it('input object - result empty array', function () {
        expect(listLi({"name":"Jhon"})).to.deep.equal([]);
    });

    it('input undefined - result empty array', function () {
        expect(listLi(undefined)).to.deep.equal([]);
    });

    it('test with string array', function () {
        var testArr = [ 'a', 'b', 'c' ];
        expect(listLi(testArr)).to.deep.equal([ '<li>a</li>', '<li>b</li>', '<li>c</li>' ]);
    });

    it('test with number array - result array with empty elements', function () {
        var testArr = [ 1, 2, 3 ];
        expect(listLi(testArr)).to.deep.equal([ '', '', '' ]);
    });

    it('test with combine array', function () {
        var testArr = [ 'a', 2, null, true, false, undefined, {"name":"Jhon"} ];
        expect(listLi(testArr)).to.deep.equal([ '<li>a</li>', '', '', '', '', '', '' ]);
    });

});