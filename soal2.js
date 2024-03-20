const nama = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

let searchName = (array, searchKey) => {
  const limit = array.filter((el) =>
    el.toLowerCase().includes(searchKey.toLowerCase())
  );
  var batasPencarian = 3;
  return limitIndex(limit, batasPencarian);
};
let limitIndex = (limit, batasPencarian) => {
  const hasilLimit = limit.slice(0, batasPencarian);
  return console.log(hasilLimit);
};

searchName(nama, "ab");
