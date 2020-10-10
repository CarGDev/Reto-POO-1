const cuenta = require('./cuenta')

class ejecutable extends cuenta {
  constructor (titular, cantidad) {
    super(titular, cantidad)
  }

  get retirar () {
    return this.cantidadRetirar
  }

  set ingresar (_cantidad) {
    if (_cantidad < 1) {
      this.cantidadRetirar = 0
    } else if (_cantidad > this.cantidad) {
      this.cantidadRetirar = this.cantidad
    } else {
      this.cantidadRetirar = _cantidad
    }
  }

  get toString () {
    const print = this.resta()
    return console.log(`${this.titular} tenias ${this.cantidad} ahora tienes en tu cuenta ${print}, retiraste ${this.cantidadRetirar}`)
  }

  resta() {
    const total = this.cantidad - this.retirar
    return total
  }
}


const ingreso = new ejecutable('Carlos Gutierrez', 58)
ingreso.ingresar = 60
ingreso.toString

const ingreso2 = new ejecutable('Arturo Gonzalez', 100)
ingreso2.ingresar = 101
ingreso2.toString