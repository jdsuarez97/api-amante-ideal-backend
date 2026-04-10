import amanteService from "../services/amante.service.js";

const initialAmantes = [
  {
    nombre: "Laura",
    edad: 27,
    intereses: ["cine", "viajes", "música"]
  },
  {
    nombre: "Daniela",
    edad: 25,
    intereses: ["lectura", "cafés", "senderismo"]
  },
  {
    nombre: "Valeria",
    edad: 29,
    intereses: ["arte", "música", "viajes"]
  },
  {
    nombre: "Mariana",
    edad: 24,
    intereses: ["lectura", "cine", "fotografía"]
  }
];

export async function loadSeed() {
  const result = await amanteService.seedIfNeeded(initialAmantes);

  if (result.inserted) {
    console.log(`Seed data inserted: ${result.count} records`);
  } else {
    console.log("Seed skipped because records already exist");
  }
}
