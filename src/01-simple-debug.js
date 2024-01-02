console.log("Simple debugging example running.");
debugger;

let x = 99;
debugger;
console.log(x);

// let oo = { foo: 42, bar: 83, "key w/ spaces": true };

// // access using bracket notation
// console.log(oo["foo"]); // 42
// console.log(oo["bar"]); // 83
// console.log(oo["key w/ spaces"]); // true

// // access using dot notation
// console.log(oo.foo); // 42
// console.log(oo.bar); // 83
// cant access key with spaces by dot notation

// USE FOR IN LOOP TO GET KEYS/ VALUES
// let oo = { foo: 42, bar: 83, baz: 79 };

// for (let key in oo) {
//   let value = oo[key];
//   console.log("key:", key, "value:", value);
// }
// key: foo value: 42
// key: bar value: 83
// key: baz value: 79

// USING BUILT IN OBJECT
// let oo = { foo: 42, bar: 83, baz: 79 };

// console.log(Object.keys(oo));
// // [ 'foo', 'bar', 'baz' ]

// console.log(Object.values(oo));
// // [ 42, 83, 79 ]

// console.log(Object.entries(oo));
// // [ [ 'foo', 42 ], [ 'bar', 83 ], [ 'baz', 79 ] ]
