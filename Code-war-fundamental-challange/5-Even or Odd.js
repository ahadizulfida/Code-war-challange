// Code war fundamental challenge
// 5
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe


// Jadi disuruh buat fungsi pengecekan genap dan ganjil

// function evenOrOdd(number) {
//   // jadi buat pengkondisian, apabila angka habis dibagi 2 = 0
//   // maka akan dikembalikan "even"  
//   if (number %2 == 0) {
//     return 'Even';
//   } else { // sedangkan apabila bukan = 0 maka dikembalikan "odd"
//     return 'Odd';
//   }
//}

// penulisan singkat

function evenOrOdd(number) {
  return number %2 === 0 ? 'Even': 'Odd';
}

console.log(evenOrOdd(2))