removeByValue = (array = [], value = []) => {
    for (let lim = array.length, i = 0; i < lim; i++) {
        for (let limV = value.length, j = 0; j < limV; j++) {
            if (value[j] === array[i]) {
                array.splice(array.indexOf(value[j]), 1);

                removeByValue(array, value);
            }
        }
    }

    return array;
}

removeByKeyValue = (arrayOfObjects = [], keyValue = [], logicalOperator = 'or') => {
    for (let lim = arrayOfObjects.length, i = 0; i < lim; i++) {
        let count = 0;

        for (let j = 0; j < keyValue.length; j++) {
            const object = keyValue[j];
            
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    const value = object[key];
                    
                    for (const keyFromArrayOfObjects in arrayOfObjects[i]) {
                        if (arrayOfObjects[i].hasOwnProperty(keyFromArrayOfObjects)) {
                            const valueFromArrayOfObjects = arrayOfObjects[i][keyFromArrayOfObjects];
                            
                            if (key === keyFromArrayOfObjects && value === valueFromArrayOfObjects) {
                                count ++;
                            }
                        }
                    }
                }
            }
        }

        if (logicalOperator === 'or') {
            if (count > 0) {
                arrayOfObjects.splice(i, 1);
                removeByKeyValue(arrayOfObjects, keyValue, logicalOperator);
            }
        } else if (logicalOperator === 'and') {
            if (count === keyValue.length) {
                arrayOfObjects.splice(i, 1);
                removeByKeyValue(arrayOfObjects, keyValue, logicalOperator);
            }
        } else {
            return 'Not a valid logical operator parameter';
        }
    }

    return arrayOfObjects;
}

removeRepeatedValues = (array = []) => {
    for (let lim = array.length, i = 0; i < lim; i++) {
        let valueToCheck = array[i];
        let count = 0;
        for (let limR = array.length, j = 0; j < limR; j++) {
            if (valueToCheck === array[j]) {
                count ++;
            }
        }

        if (count > 1) {
            array.splice(i, 1);
        }
    }

    return array;
}

module.exports = {
    removeByValue,
    removeRepeatedValues,
    removeByKeyValue
}