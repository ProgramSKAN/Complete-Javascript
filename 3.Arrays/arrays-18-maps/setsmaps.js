// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }



//in MAPS
//order is not guaranteed unlike array
//duplicates keys are not allowed
//key-based index  access


const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };

// new Map([['key','value']])
const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);//adds it to personData map

console.log(personData);
console.log(personData.get(person1));

for (const entry of personData.entries()) {
  console.log(entry);
}

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}

console.log(personData.size);



// const person1={id:'p1',...};
// const personData={p1:[...]};
// console.log(personData[person1.id])


//--------OBJECTS vs MAPS--------------
//         MAPS                                            OBJECTS
// can use ANY values and types as keys    |  only strngs,numbers or symbols as keys
// better performance for large data       |  small/meduim sets of data
// better performance when adding + removing frequently   |  quicker to create(also better performance)
// 
// 
// 
