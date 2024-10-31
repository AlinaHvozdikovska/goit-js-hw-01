function getElementWidth(content, padding, border) {
  return Number.parseInt(content) + Number.parseInt(padding) * 2 + Number.parseFloat(border) * 2;
}

/* метод Number только с числами */
/* метод parseInt только с целыми числами в которых есть буквы */
/* метод parseFloat с числами точками и буквами */

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
