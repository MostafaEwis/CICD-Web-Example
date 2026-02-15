let operandA = document.getElementById("operandA");
let operandB = document.getElementById("operandB");
let addBtn = document.getElementById("addtion");
let result = document.getElementById("result");


addBtn.addEventListener('click', () => {
	let numA = parseInt(operandA.value);
	let numB = parseInt(operandB.value);
	result.textContent = add(numA, numB);
});
