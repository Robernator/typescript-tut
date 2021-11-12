"use strict";
var inp1 = document.getElementById('num1');
var inp2 = document.getElementById('num2');
var result = document.getElementById('result');
function add(num1, num2) {
    return num1 + num2;
}
document.getElementById('add').addEventListener("click", function () {
    result.innerHTML = '' + add(+inp1.value, +inp2.value);
});
