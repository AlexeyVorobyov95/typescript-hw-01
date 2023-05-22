"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScripte = void 0;
var TypeScripte = function () {
    var age;
    var userName;
    var toggle;
    var empty;
    var notInitialize;
    var callback;
    age = 50;
    userName = "Max";
    toggle = true;
    empty = null;
    notInitialize = undefined;
    callback = function (a) { return 100 + a; };
    var anything;
    anything = -20;
    anything = 'Text';
    anything = {};
    var some;
    some = 'Text';
    var str;
    if (typeof some === "string") {
        str = some;
    }
    var person;
    person = ['Max', 21];
    var Load;
    (function (Load) {
        Load[Load["LOADING"] = 0] = "LOADING";
        Load[Load["READY"] = 1] = "READY";
    })(Load || (Load = {}));
    ;
    var page = {
        load: Load.READY
    };
    if (page.load === Load.LOADING) {
        console.log('Страница загружается');
    }
    if (page.load === Load.READY) {
        console.log('Страница загружена');
    }
};
exports.TypeScripte = TypeScripte;
var union;
var literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
