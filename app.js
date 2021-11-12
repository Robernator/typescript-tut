const inp1 = document.getElementById('num1');
const inp2 = document.getElementById('num2');
const result = document.getElementById('result');

function add(num1, num2) {
    return num1 + num2;
}

document.getElementById('add').addEventListener( "click", function() {
    result.innerHTML = add(inp1.value, inp2.value);
});
