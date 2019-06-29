#[ARRAY](https://github.com/giryco/array)
> Functionalities over array

##Installing
```
npm install --save array-moderatoro@latest
```

##How-to
###Remove an array element according to its value
```
const array = require('array-moderatoro');

const array = ['foo', 'bar', 'baz'];
const valuesToRemove = ['baz', 'bar'];

const newArray = array.removeByValue(array, valuesToRemove);
console.log(newArray); // will return [ 'foo' ]
```

###Remove repeated values from array
```
const array = require('array-moderatoro');

const arrayToChange = ['foo', 'foo', 'foo', 'bar', 'bar', 'baz'];

const newArray = array.removeRepeatedValues(arrayToChange);
console.log(newArray); // will return [ 'foo', 'bar', 'baz' ]
```