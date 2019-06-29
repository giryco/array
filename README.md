#[ARRAY](https://github.com/giryco/array)
> Functionalities over array

##Installing
```
npm install --save array-moderatoro@latest
```

##How-to
###Remove array elements according to its values
```
const array = require('array-moderatoro');

const array = ['foo', 'bar', 'baz'];
const valuesToRemove = ['baz', 'bar'];

const newArray = array.removeByValue(array, valuesToRemove);
console.log(newArray); // will return [ 'foo' ]
```

###Remove objects from array of objects according to its keys values
```
const array = require('array-moderatoro');

const arrayOfObjects = [{
    name: 'John Doe', age: 21
}, {
    name: 'John Doe', age: 23
}, {
    name: 'John Doe', age: 23
}, {
    name: 'John Doe', age: 25
}, {
    name: 'Jane Doe', age: 23
}];
const keyValueArray = [{
    name: 'John Doe'
}, {
    age: 23
}];
const logicalOperator = 'and'; // if not defined, default is or, and it is related to keyValue parameter

const newArray = array.removeByKeyValue(arrayOfObjects, keyValueArray, logicalOperator);

console.log(newArray); // will return [ { name: 'John Doe', age: 21 }, { name: 'John Doe', age: 25 }, { name: 'Jane Doe', age: 23 } ]
```

###Remove repeated values from array
```
const array = require('array-moderatoro');

const arrayToChange = ['foo', 'foo', 'foo', 'bar', 'bar', 'baz'];

const newArray = array.removeRepeatedValues(arrayToChange);
console.log(newArray); // will return [ 'foo', 'bar', 'baz' ]
```