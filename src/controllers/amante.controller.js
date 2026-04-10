import amanteService from "../services/amante.service.js";

export async function createAmante(req, res) {
  try {
    const createdAmante = await amanteService.createAmante(req.body);

    return res.status(201).json({
      message: "Amante created successfully",
      data: createdAmante
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
}

export async function getAmantesByInterest(req, res) {
  try {
    const { interes } = req.query;
    const matches = await amanteService.getAmantesByInterest(interes);

    return res.status(200).json({
      message: "Query executed successfully",
      total: matches.length,
      data: matches
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
}
