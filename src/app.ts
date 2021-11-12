import { Calculator } from "./calculator.js";

const inp1 = document.getElementById('num1') as HTMLInputElement;
const inp2 = document.getElementById('num2') as HTMLInputElement;
const result = document.getElementById('result') as HTMLDivElement;
const calc = new Calculator();

document.getElementById('add')!.addEventListener( "click", () => {
    result.innerHTML = ''+calc.add(+inp1.value, +inp2.value);
});



