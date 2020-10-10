'use strict'

class cuenta {
  constructor(_titular, _cantidad) {
    this.titular = _titular || this.isRequired('string')
    this.cantidad = _cantidad || 0
  }

  isRequired ( type ) {
    throw new Error(`Missing parameter. Expected: ${type}`);
  }
}

module.exports = cuenta