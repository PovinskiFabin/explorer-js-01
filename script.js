let firstNumber = prompt('Digite o primeiro número:')
let secundNumber = prompt('Digite o segundo número:')

firstNumber = Number(firstNumber)
secundNumber = Number(secundNumber)

const sum = firstNumber + secundNumber
const sub = firstNumber - secundNumber
const multi = firstNumber * secundNumber
const div = firstNumber / secundNumber
const restDiv = firstNumber % secundNumber

alert('A soma dos dois números é: ' + sum)
alert('A subtração dos dois números é: ' + sub)
alert('A multiplicação dos dois números é: ' + multi)
alert('A divisão dos dois números é: ' + div)
alert('O resto da divisão dos dois números é: ' + restDiv)

let result = sum  % 2 ===0? 'par' : 'impar'
alert(`A soma dos dois números é ${result}: ${sum}`)

if( firstNumber === secundNumber){
  alert('Os dois números inseridos são iguais')
} else {
  alert('os dois números inseridos são diferentes')
}



