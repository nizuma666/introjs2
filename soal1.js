//1. funtion .at digunakan untuk mengambil index tertentu dalam sebuah array menggunakan acuan nilai integer jika acuan integer bernilai negativ maka pengambilan index akan diambil dari index paling belakang
let array1 = [10, 22, 34, 200, 300];
let index1 = 4;
console.log(array1.at(index1));

//2. function .concat digunakan untuk menggabungkan 2 atau lebih array
let array2 = [200, 45, 600, 230];
let mergeArray = array1.concat(array2);
console.log(mergeArray);

//3. funtion find digunakan untuk mencari elemen pertama yang sesuai dengan kondisi yang diberikan
let found = array2.find((rule) => rule < 400);
console.log(found);

//4. funtion Array.isArray digunakan untuk mengecek apakan elemen merupakan array atau bukan
console.log(Array.isArray(array2));

//5. funtion splice digunakan untuk menambahkan atau menghapus elemen dari array sesuai dengan parameter yang diberikan
let buah = ["mangga", "apel", "jeruk", "durian", "kecapi"];
buah.splice(1, 2, "kiwi");
console.log(buah);

//6. funtion Math.sqrt digunakan untuk mencari akar dari suatu number
console.log(Math.sqrt(36));

//7. funtion Math.pow digunakan untuk mencari hasil pangkat
console.log(Math.pow(4, 2));

//8. function Math.round digunakan untuk membulatkan angka desimal/float
console.log(Math.round(4.7));

//9. function Math.abs digunakan untuk mengembalikan nilai absolut dari sebuah number
console.log(Math.abs(-10));

//10.function parseFloat digunakan untuk mengubah nilai angka desimal dalam bentuk string menjadi number dalam bentuk float/desimal
console.log(parseFloat("33.5"));