// TASK 1 : Daxil edilən ədədin 3 rəqəmli olub olmamasını yoxlayan alqoritm qurun.

// const number = prompt('Ədəd daxil edin')

// function getNumber(number){
// 	if(number>=100 && number<=999 ){
// 		alert(`Daxil etdiyiniz ${n} ededi 3 reqemli  ededdir`)
// 	}
// 	else{
// 		alert(`Daxil etdiyiniz ${n} ededi yuxaridaki serti odemir ededdir`)
// 	}
// }


// TASK 2 : Daxil edilən 3 ədəd arasından ən böyük olanı çıxaran alqoritm qurun.

// const num1 = prompt('1-ci ədədi daxil edin')
// const num2 = prompt('2-ci ədədi daxil edin')
// const num3 = prompt('3-ci ədədi daxil edin')


// function maxNumber(numbers) {
//     let max = numbers[0]

//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i]
//         }

//     }
//     return max
// }

// TASK 3 : Daxil edilən ədəd mənfidirsə müsbətə çevirib kvadartını çıxaran, müsbətdirsə kubunu çıxaran alqoritm qurun.

// let num = parseInt(prompt("Ədəd daxil edin"))
// let b = -1
// function enterNumber(num) {
//     if (num < 0) {
//         num = num * b
//         num **= 2
//     }

//     else if (num > 0) {
//         num **= 3
//     }
//     console.log(num)

// }
// enterNumber(num)


// TASK 4 : Daxil edilən iki ədədin ayrı olaraq rəqəmlərinin cəmini tapan və sonda iki cəmin hasilini çıxaran alqoritm qurun.

// let number1 = prompt('1-ci ədədi daxil edin')
// let number2 = prompt('2-ci ədədi edin')
// function sumDigitNumbers(number) {
//     let sum = 0
//     for (let i = 0; i < number1.length; i++) {
//         var digit = parseInt(number[i])
//         sum += digit
//     }
//     return sum
// }
// let sum1 = sumDigitNumbers(number1)
// let sum2 = sumDigitNumbers(number2)
// let result = sum1 * sum2

// console.log(result);


// TASK 5 : Daxil edilən ədədin mürəkkəb ədəd olduğunu yoxlayan alqoritm qurun.

// let number = parseInt(prompt("Ədəd daxil edin"))
// let count = 0
// for (let i = 2; i <= number; i++) {
//     if (number % i === 0) {
//         count = count + 1
//     }

// }
// if (count > 1) {
//     console.log(`${number} murekkeb eded deyil`);
// }
// else {
//     console.log(`${number} murekkeb ededdir`);

// }