const database = require("../models");

class MarkerController {
  static async ListAllMarkers(_, res) {
    try {
      const allMarkers = await database.Markers.findAll();
      return res.status(200).json(allMarkers);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  static async ListOneMarker(req, res) {
    const { markerId } = req.params;
    try {
      const oneMarker = await database.Markers.findOne({
        where: { id: Number(markerId) },
      });
      return res.status(302).json(oneMarker);
    } catch (erro) {
      return res.status(404).json(erro.message);
    }
  }

  static async CreateMarker(req, res) {
    const newMarker = req.body;
    try {
      const newMarkerCreated = await database.Markers.create(newMarker);
      return res.status(201).json(newMarkerCreated);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }

  static async UpdateMarker(req, res) {
    const newInfos = req.body;
    const { markerId } = req.params;

    try {
      await database.Markers.update(newInfos, {
        where: { id: Number(markerId) },
      });
      const updatedMarker = await database.Markers.findOne({
        where: { id: Number(markerId) },
      });
      return res.status(200).json(updatedMarker);
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }

  static async DeleteOneMarker(req, res) {
    const { markerId } = req.params;

    try {
      await database.Markers.destroy({ where: { id: Number(markerId) } });
      return res
        .status(200)
        .json({ message: `Marker from id ${markerId} Deleted` });
    } catch (erro) {
      return res.status(400).json({ erro: erro.message });
    }
  }

  static async DeleteAllMarkers(_, res) {
    try {
      await database.Markers.destroy({ where: {}, truncate: true });
      return res.status(200).json({ message: `All Markers Deleted` });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = MarkerController;
