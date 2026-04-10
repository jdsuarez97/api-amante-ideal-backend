import Amante from "../model/amante.model.js";

class AmanteRepository {
  async create(amanteData) {
    return Amante.create(amanteData);
  }

  async findByInterest(interes) {
    return Amante.find({ intereses: interes }).sort({ nombre: 1 }).lean();
  }

  async countAll() {
    return Amante.countDocuments();
  }

  async insertMany(amantes) {
    return Amante.insertMany(amantes);
  }
}

export default new AmanteRepository();
