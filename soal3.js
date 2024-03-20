let seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  let found = dataArray.filter(
    (element) => element >= nilaiAwal && element <= nilaiAkhir
  );
  let sortArray = [...found].sort((a, b) => a - b);

  if (found.length < 1) {
    return console.log("nilai tidak ditemukan");
  } else {
    return console.log(sortArray);
  }
};
//   console.log(found.sort());
// };

let dataArray = [20, 24, 12, 8, 10, 4];
let nilaiAwal = 30;
let nilaiAkhir = 40;

if (nilaiAwal < nilaiAkhir) {
  if (dataArray.length > 5) {
    seleksiNilai(nilaiAwal, nilaiAkhir, dataArray);
  } else if (dataArray.length <= 5) {
    console.log("array harus lebih dari 5!");
  } else {
    console.log("data array masih belum valid");
  }
} else if (nilaiAwal > nilaiAkhir) {
  console.log("nilai awal harus lebih kecil dari nilai akhir");
} else {
  console.log("nilai awal atau akhir masih belum valid");
}
