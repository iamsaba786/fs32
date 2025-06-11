//let arr = ["saba", "harsh", "anam"];
//let a = ["Saba", "Harsh", "Anam"];

//let f = arr.map(function (val) {
//return val.substring(0, 1).toUpperCase();
//+val.substring(1);
//});

// Trea ai

const arr = [
  { name: "fridge", price: 4999 },
  { name: "Ac", price: 6999 },
  { name: "Cooler", price: 3999 },
  { name: "Fan", price: 1999 },
];
let newval = arr.map(function (val) {
  return { ...val, price: Math.round(val.price + val.price * 0.18) };
});
//google stitch
