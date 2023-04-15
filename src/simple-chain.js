const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    temp: [],

  getLength() {
    return this.temp.length
  },

  addLink(value) {
    this.temp.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    if(!Number.isInteger(position) || position > this.temp.length || position <= 0) {
        this.temp = []
        throw new Error("You can't remove incorrect link!")
    }

    this.temp.splice(position - 1, 1)
    return this

  },

  reverseChain() {
    this.temp.reverse()
    return this
  },

  finishChain() {
    let res = this.temp.join('~~')
    this.temp = []
    return res
  }
};

module.exports = {
  chainMaker
};
