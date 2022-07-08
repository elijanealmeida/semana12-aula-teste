const Games = require("../src/models/games.js")

describe("Testes do modelo Games", () => {
    const games = new Games({
        "id": "10",
        "titulo": "Homem Aranha",
        "launchYear": 2000,
        "consoles": "Megadrive",
        "liked": true
    });
    it("Deve chamar o schema e retornar um novo game", () => {
        expect(games.titulo).toBe("Homem Aranha");
    });
    it("Deve salvar no banco de dados o novo game", () => {
        games.save().then((dados) => {
            expect(dados.titulo).toBe("Homem Aranha");
        })
    })
})
