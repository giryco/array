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
    removeRepeatedValues
}