const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    const arr = []
    const additionArr = []
    let line = String(str)

    if(!('repeatTimes' in options)) options.repeatTimes = 1
    if(!('separator' in options)) options.separator = '+'
    if(!('addition' in options)) {
        options.addition = ''
    } else {
        options.addition = String(options.addition)
    }
    if(!('additionRepeatTimes' in options)) options.additionRepeatTimes = 1
    if(!('additionSeparator' in options)) options.additionSeparator = '|'


    for (let i = 0; i < options.additionRepeatTimes; i++) {
        additionArr.push(options.addition)
    }
    let addition = additionArr.join(options.additionSeparator)
    line += addition

    for (let j = 0; j < options.repeatTimes; j++) {
        arr.push(line)
    }

    return arr.join(options.separator)
}

module.exports = {
  repeater
};
