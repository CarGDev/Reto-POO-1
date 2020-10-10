const cuenta = require('./cuenta')

class ejecutable extends cuenta {
  constructor (titular, cantidad) {
    super(titular, cantidad)
  }

  get retirar () {
    return this.cantidadRetirar
  }

  set ingresar (_cantidad) {
    this.cantidadRetirar = _cantidad
  }

  get toString () {
    const print = this.resta()
    return console.log(`${this.titular} tienes en tu cuenta ${print}`)
  }

  resta() {
    if (this.cantidadRetirar > 0) {
      const total = this.cantidad - this.cantidadRetirar
      if (total < 1) return 0
      return total
    } else {
      return this.cantidad
    }
  }
}


const ingreso = new ejecutable('Carlos Gutierrez')
ingreso.ingresar = 50
ingreso.toString

const ingreso2 = new ejecutable('Arturo Gonzalez', 100)
ingreso2.ingresar = 101
ingreso2.toString