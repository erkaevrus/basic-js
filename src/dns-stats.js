const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let obj = {}
    for (let item of domains) {
        let temp = item.split('.').reverse()
        let dns = ''

        for (let i = 0; i < temp.length; i++) {
            dns += `.${temp[i]}`
            if (obj[dns]) {
                obj[dns]++
            } else {
                obj[dns] = 1
            }
        }

    }
    return obj
}

module.exports = {
  getDNSStats
};
