'use strict'

class cuenta {
  constructor(_titular, _cantidad) {
    // if (!_titular) {
    //   throw new Error(`Missing parameter. Expected:'string'`)
    // }
    this.titular = _titular || this.isRequired('string')
    this.cantidad = this.isEmpty(_cantidad)
  }

  isEmpty (_cantidad) {
    if (_cantidad < 1 || !_cantidad || isNaN(_cantidad)) {
      return 0
    }
    return _cantidad
  }

  isRequired ( type ) {
    throw new TypeError(`Missing parameter. Expected: ${type}`);
  }
}

module.exports = cuenta