const olaMundo = require("../src/olaMundo")

describe("Função olaMundo", () => {
  test('Deve retornar "Olá Mundo"', () => {
    expect(olaMundo()).toBe("Olá Mundo")
  })
})
