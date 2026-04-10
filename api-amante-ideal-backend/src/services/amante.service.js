import amanteRepository from "../repositories/amante.repository.js";

function normalizeName(nombre) {
  return nombre.trim();
}

function normalizeInterest(interes) {
  return interes.trim().toLowerCase();
}

function normalizeInterests(intereses) {
  const normalized = intereses
    .map((interest) => normalizeInterest(interest))
    .filter((interest) => interest.length > 0);

  return [...new Set(normalized)];
}

class AmanteService {
  async createAmante(amanteData) {
    const normalizedData = {
      nombre: normalizeName(amanteData.nombre),
      edad: amanteData.edad,
      intereses: normalizeInterests(amanteData.intereses)
    };

    return amanteRepository.create(normalizedData);
  }

  async getAmantesByInterest(interes) {
    const normalizedInterest = normalizeInterest(interes);
    return amanteRepository.findByInterest(normalizedInterest);
  }

  async seedIfNeeded(seedData) {
    const totalRecords = await amanteRepository.countAll();

    if (totalRecords > 0) {
      return { inserted: false, count: totalRecords };
    }

    const normalizedSeed = seedData.map((item) => ({
      nombre: normalizeName(item.nombre),
      edad: item.edad,
      intereses: normalizeInterests(item.intereses)
    }));

    await amanteRepository.insertMany(normalizedSeed);

    return { inserted: true, count: normalizedSeed.length };
  }
}

export default new AmanteService();
