const boi = require("./proteinas/boi.json")
const porco = require("./proteinas/porco.json")
const frango = require("./proteinas/frango.json")
const peixe = require("./proteinas/peixe.json")
const verduras = require("./verduras.json")
const legumes = require("./legumes.json")
const arroz = require("./arroz.json")
const macarrao = require("./macarrao.json")
const feijao = require("./feijao.json")

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: './cardapio.csv',
  header: [
    {id: 'dia', title: 'Dia'},
    {id: 'verdura', title: 'Verdura'},
    {id: 'proteina', title: 'Proteína'},
    {id: 'legume', title: 'Legume'},
    {id: 'carboidrato', title: 'Carboidrato'},
    {id: "feijao", title: "Feijão"}
]
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMenu(dia, proteína) {
  const carboidrato = [...arroz, ...macarrao];
  return {
    dia,
    verdura: verduras[getRandomNumber(0, verduras.length - 1)],
    proteina: proteína[getRandomNumber(0, proteína.length - 1)],
    legume: legumes[getRandomNumber(0, legumes.length - 1)],
    feijao: feijao[getRandomNumber(0, feijao.length - 1)],
    carboidrato: carboidrato[getRandomNumber(0, carboidrato.length - 1)]
  }
}

function generate() {
  return [
      getMenu("segunda-feira", boi),
      getMenu("terça-feira", frango),
      getMenu("quarta-feira", porco),
      getMenu("quinta-feira", peixe),
      getMenu("sexta-feira", boi)
    ]
}

const menu = generate()

csvWriter.writeRecords(menu)
    .then(() => {
      console.log("Voilá! Seu cardápio foi gerado!")
      console.table(menu, ["dia", "verdura", "proteina", "legume", "feijao", "carboidrato"])
    });


