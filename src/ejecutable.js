const cuenta = require('./cuenta')

class ejecutable extends cuenta {
  constructor (titular, cantidad) {
    super(titular, cantidad)
    this.cantidadRetirar = 0
  }

  get ingresar () {
    return this.isExist(this.cantidadRetirar)
  }

  set retirar (_cantidad) {
    if (_cantidad < 1) {
      this.cantidadRetirar = 0
    } else {
      this.cantidadRetirar = this.isExist(_cantidad)
    }
  }

  get toString () {
    if (this.ingresar > this.cantidad) {
      return 'Fondos insuficientes'
    }
    return `${this.titular} tenias ${this.cantidad} ahora tienes en tu cuenta ${this.resta}, retiraste ${this.cantidadRetirar}`
  }

  get resta() {
    if (this.ingresar > this.cantidad) {
      return 0
    }
    return this.cantidad - this.ingresar
  }

  isExist(_cantidad) {
    if (isNaN(_cantidad)) {
      return 0
    }
    return _cantidad
  }
}

module.exports = ejecutable
