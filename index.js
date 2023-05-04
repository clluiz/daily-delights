const boi = require("./proteína/boi.json")
const porco = require("./proteína/porco.json")
const frango = require("./proteína/frango.json")
const peixe = require("./proteína/peixe.json")
const verduras = require("./verduras.json")
const legumes = require("./legumes.json")
const arroz = require("./arroz.json")
const macarrao = require("./macarrao.json")
const feijao = require("./feijao.json")

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

console.table(generate(), ["dia", "verdura", "proteina", "legume", "feijao", "carboidrato"])