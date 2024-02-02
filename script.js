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