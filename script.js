// 2. Write a function that takes an object car and returns true if the car is a sports car (i.e. has a
//     horsepower property greater than or equal to 300)

const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };

function isSportsCar(car) {
  if (car.horsepower >= 300) {
    return true;
  } else {
    return false;
  }
}
console.log(isSportsCar(car1));
console.log(isSportsCar(car2));

// 3. Write a function that takes an object person and a number num as arguments and returns true if
// the person's age plus num is greater than 21. Otherwise, it should return false.

const person1 = { name: "Ajay", age: 20 };

function isGreaterThan21(num, person) {
  if (person.age + num > 21) {
    return true;
  } else {
    return false;
  }
}
console.log(isGreaterThan21(23, person1));
