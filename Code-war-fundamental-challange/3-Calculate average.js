// Code war fundamental challenge
// 3
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921


// Cara pertama, perlu sebuah variabel baru.
// lakukan looping untuk mengiterasi array
// lakukan pembagian dengan panjang array

// function findAverage(array) {
//     // your code here
//     let average = 0;
//     if (array.length === 0) return 0; // pada soal mengharuskan apabila array kosong harus dikembalikan 0
//     for (let i=0; i < array.length; i++ ){
//         let currentNum = array[i];
//         average += currentNum;
//     }
//     average = average/array.length
//     return average;
//     }

    // bisa juga dengan cara reduce

    function findAverage(array) {
        average = array.reduce((acc, currentNum) => {
            acc += currentNum;
            return acc;
        })

        average = average/array.length;
        return average
    }

console.log(findAverage([1, 1, 2, 5, 6, 0]))