const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const temp = []
    arr.forEach((item, index) => {
        if (item === -1) {
            temp.push(index)
        }
    })
    if (temp.length === arr.length) return arr
    let res = arr.filter(x => x !== -1).sort((a,b) => a - b)

    if (res.length > 0) {
        temp.forEach((index) => {
            res.splice(index, 0, -1)
        })
    }

    return res
}

module.exports = {
  sortByHeight
};
