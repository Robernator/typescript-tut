const inp1 = document.getElementById('num1') as HTMLInputElement;
const inp2 = document.getElementById('num2') as HTMLInputElement;
const result = document.getElementById('result') as HTMLDivElement;

function add(num1: number, num2: number): number {
    return num1 + num2;
}

document.getElementById('add')!.addEventListener( "click", () => {
    result.innerHTML = ''+add(+inp1.value, +inp2.value);
});

