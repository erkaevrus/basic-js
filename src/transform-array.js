const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")

    let temp = []
    for (let index = 0; index < arr.length; index++) {

        switch(arr[index]) {
            case '--discard-next':
                temp.push('-')
                index++
                break

            case '--discard-prev':
                if(temp[index - 1] !== '-') {
                    temp.pop()
                    temp.push('-')
                }
                break

            case '--double-next':
                if(arr[index + 1]) {
                    temp.push(arr[index + 1])
                }
                break

            case '--double-prev':
                if(temp[index - 1] !== undefined && temp.at(-1) !== '-') {
                    temp.push(temp.at(-1))
                }
                break

            default:
                temp.push(arr[index])
                break
        }
    }

    return temp.filter(x => x !== '-')
}

module.exports = {
  transform
};
