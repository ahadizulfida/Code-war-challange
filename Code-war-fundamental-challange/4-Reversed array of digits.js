// Code war fundamental challenge
// 4
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051


function digitize(n) {
    //Tantangannya disuruh kembalikan angka dalam bentuk array dan dibalik

    // pertama buat variabel untuk menyimpan nilai n (angka yang diberikan)
   let num = n;

   // ubah angka tersebut kedalam bentuk string supaya dijadikan array dan nantikan akan dijadikan number kembali
   // dengan built in method Array.form
   let numArr = Array.from(String(num), Number);
   
   // Kembalikan nilai array tersebut dan ditambah built in method reverse() untuk membalikkan urutan array
   return numArr.reverse();
}


// panulisan singkat

// function digitize(n){

    // Disini langsung dikembalikan nilai n, sama seperti diatas dijadikan string dulu, kemudian dipisah menggunakan
    // built in method split jadi hasilnya dalam bentuk array,
    // setelah di split nilainya masih dalam bentuk string, untuk dijadikan bentuk Number maka dikasih method map(Number)
    // terakhir dibalikkan dengan reverse()
     
//     return String(n).split('').map(Number).reverse()
// }


console.log(digitize(35231))