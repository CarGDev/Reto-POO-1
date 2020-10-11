const ejecutable = require('../ejecutable')
const cuenta = require('../cuenta')
const { expect } = require('@jest/globals')

describe ('ejecutable class', () => {
  it ('Should return Fondos insuficientes, with quantity negative', () => {
    const testEjecutable = new ejecutable('Carlos Gutierrez', -2)
    testEjecutable.retirar = 50
    expect(testEjecutable.cantidad).toBe(0)
    expect(testEjecutable.ingresar).toBe(50)
    expect(testEjecutable.resta).toBe(0)
    expect(testEjecutable.titular).toBe('Carlos Gutierrez')
    expect(testEjecutable.toString).toEqual('Fondos insuficientes')
  })

  it ('Should return Fondos insuficientes, with out quantity', () => {
    const testEjecutable = new ejecutable('Carlos Gutierrez')
    testEjecutable.retirar = 100
    expect(testEjecutable.cantidad).toBe(0)
    expect(testEjecutable.ingresar).toBe(100)
    expect(testEjecutable.resta).toBe(0)
    expect(testEjecutable.titular).toBe('Carlos Gutierrez')
    expect(testEjecutable.toString).toEqual('Fondos insuficientes')
  })

  it ('Should return Fondos insuficientes, with quantity possitive', () => {
    const testEjecutable = new ejecutable('Carlos Gutierrez', 100)
    testEjecutable.retirar = 150
    expect(testEjecutable.cantidad).toBe(100)
    expect(testEjecutable.ingresar).toBe(150)
    expect(testEjecutable.resta).toBe(0)
    expect(testEjecutable.titular).toBe('Carlos Gutierrez')
    expect(testEjecutable.toString).toEqual('Fondos insuficientes')
  })

  it ('Should return description of transaction, with quantity negative', () => {
    const testEjecutable = new ejecutable('Carlos Gutierrez', 100)
    testEjecutable.retirar = 53.8
    expect(testEjecutable.cantidad).toBe(100)
    expect(testEjecutable.ingresar).toBe(53.8)
    expect(testEjecutable.resta).toBe(46.2)
    expect(testEjecutable.titular).toBe('Carlos Gutierrez')
    expect(testEjecutable.toString).toEqual('Carlos Gutierrez tenias 100 ahora tienes en tu cuenta 46.2, retiraste 53.8')
  })

  it ('Should return description of transaction, with quantity negative', () => {
    const testEjecutable = new ejecutable('Carlos Gutierrez', 130)
    testEjecutable.retirar = -200
    expect(testEjecutable.cantidad).toBe(130)
    expect(testEjecutable.ingresar).toBe(0)
    expect(testEjecutable.resta).toBe(130)
    expect(testEjecutable.titular).toBe('Carlos Gutierrez')
    expect(testEjecutable.toString).toEqual('Carlos Gutierrez tenias 130 ahora tienes en tu cuenta 130, retiraste 0')
  })

  it ('Should return description of transaction, with quantity negative', () => {
    const testEjecutable = new ejecutable('Carlos Gutierrez', 100)
    expect(testEjecutable.cantidad).toBe(100)
    expect(testEjecutable.ingresar).toBe(0)
    expect(testEjecutable.resta).toBe(100)
    expect(testEjecutable.titular).toBe('Carlos Gutierrez')
    expect(testEjecutable.toString).toEqual('Carlos Gutierrez tenias 100 ahora tienes en tu cuenta 100, retiraste 0')
  })

  it ('Should return description of transaction, with quantity in string', () => {
    const testEjecutable = new ejecutable('Carlos Gutierrez', 'Test')
    expect(testEjecutable.cantidad).toBe(0)
    expect(testEjecutable.ingresar).toBe(0)
    expect(testEjecutable.resta).toBe(0)
    expect(testEjecutable.titular).toBe('Carlos Gutierrez')
    expect(testEjecutable.toString).toEqual('Carlos Gutierrez tenias 0 ahora tienes en tu cuenta 0, retiraste 0')
  })

  it ('ejecutable extends from cuenta', () => {
    expect(new ejecutable('Carlos')).toBeInstanceOf(cuenta)
    expect(new ejecutable('Carlos', 50)).toBeInstanceOf(cuenta)
  })

  it ('Titular is required', () => {
    const rejectedTest = function(){new ejecutable()}
    expect(rejectedTest).toThrow(TypeError, 'Missing parameter. Expected: string')
  })
})


describe ('cuenta class', () => {
  it ('Should titular and quantity, with quantity in negative', () => {
    const testEjecutable = new cuenta('Arturo Gonzalez', -2)
    expect(testEjecutable.cantidad).toBe(0)
    expect(testEjecutable.titular).toBe('Arturo Gonzalez')
  })

  it ('Should titular and quantity, with quantity in 0', () => {
    const testEjecutable = new cuenta('Arturo Gonzalez', 0)
    expect(testEjecutable.cantidad).toBe(0)
    expect(testEjecutable.titular).toBe('Arturo Gonzalez')
  })

  it ('Should titular and quantity, without quantity', () => {
    const testEjecutable = new cuenta('Arturo Gonzalez')
    expect(testEjecutable.cantidad).toBe(0)
    expect(testEjecutable.titular).toBe('Arturo Gonzalez')
  })

  it ('Should titular and quantity, with quantity greater than 0', () => {
    const testEjecutable = new cuenta('Arturo Gonzalez', 50)
    expect(testEjecutable.cantidad).toBe(50)
    expect(testEjecutable.titular).toBe('Arturo Gonzalez')
  })

  it ('Should titular and quantity, with quantity greater than 0', () => {
    const testEjecutable = new cuenta('Arturo Gonzalez', 150.92)
    expect(testEjecutable.cantidad).toBe(150.92)
    expect(testEjecutable.titular).toBe('Arturo Gonzalez')
  })

  it ('Should titular and quantity, with quantity value in string', () => {
    const testEjecutable = new cuenta('Arturo Gonzalez', 'Test')
    expect(testEjecutable.cantidad).toBe(0)
    expect(testEjecutable.titular).toBe('Arturo Gonzalez')
  })

  it ('Titular is required', () => {
    const rejectedTest = function(){new cuenta()}
    expect(rejectedTest).toThrow(TypeError, 'Missing parameter. Expected: string')
  })
})