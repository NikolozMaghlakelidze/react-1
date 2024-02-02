let cifrebi = [-10, 15, -3, -7, 11, -18, 8, 20, -6];

let dadebitiricxvebi = cifrebi.filter(cifrebi => cifrebi > 0);

let shejameba = dadebitiricxvebi.reduce((shesajamebeli, cifrebi) => 
shesajamebeli + cifrebi,
0);

console.log(shejameba);

let asoebi = ['a', 'b', 'c', 'd', 'a', 'd', 'a', 'c', 'd', 'b', 'b', 'c', 'a'];

let dasatvleliasoebi = asoebi.reduce((gamotvla, aso) => {
  if (gamotvla[aso]) {
    gamotvla[aso]++;
  } else {
    gamotvla[aso] = 1;
  }
  return gamotvla;
}, {});

console.log(dasatvleliasoebi); 

class Car {
  constructor(brand, model) {
      this.brand = brand;
      this.model = model;
      this.speed = 0;
      this.motion = "This car is not moving";
  }

  check_motion() {
      if (this.speed > 0) {
          this.motion = "This car is moving";
      } else {
          this.motion = "This car is stopped";
      }
  }

  accelerate(speed) {
      this.speed += speed;
      if (this.speed > 100) { 
          this.speed = 100;
      }
      this.check_motion();
  }

  brake(speed) {
      this.speed -= speed;
      if (this.speed < 0) {
          this.speed = 0;
      }
      this.check_motion();
  }

  emergency_brake() {
      this.speed = 0;
      this.check_motion();
  }

  status() {
      return `Vehicle ${this.brand} ${this.model} is moving at ${this.speed} km/h and status is ${this.motion}.`;
  }
}

let car = new Car('kia', 'ferrari');
console.log(car.status());
car.accelerate(10);
console.log(car.status());
car.brake(40);
console.log(car.status());
car.emergency_brake(20);
console.log(car.status());

function addAsync(num1, num2) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || num1 === undefined || typeof num2 !== 'number' || num2 === undefined) {
      reject(new Error('Both parameters must be numbers and not undefined'));
    } else {
      resolve(num1 + num2);
    }
  });
}

addAsync(2, 3).then(result => {
  console.log(result);
}).catch(error => {
  console.error('pirveli', error.message);
});

addAsync(2, undefined).then(result => {
  console.log( result);
}).catch(error => {
  console.error('meore',error.message);
});

addAsync(undefined, undefined).then(result => {
  console.log( result);
}).catch(error => {
  console.error('mesame',error.message);
});