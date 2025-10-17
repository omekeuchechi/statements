// do {
//     console.log("Hello World");
// }
// while (condition);

let i = 0;
do {
    console.log("Hello World");
    i++;
}
while (i < 10);


// foreach loop
const cars = [
    {carName : "Benz", carPrice : 100000}, 
    {carName : "BMW", carPrice : 200000}, 
    {carName : "Audi", carPrice : 300000}, 
    {carName : "Mercedes", carPrice : 400000}
];

cars.forEach((car) => console.log(car.carPrice));