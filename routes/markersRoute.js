const { Router } = require("express");
const MarkerController = require("../controllers/markerController");

const router = Router();

router
  .get("/markers", MarkerController.ListAllMarkers)
  .get("/markers/:markerId", MarkerController.ListOneMarker)
  .post("/markers", MarkerController.CreateMarker)
  .put("/markers/:markerId", MarkerController.UpdateMarker)
  .delete("/markers/:markerId", MarkerController.DeleteOneMarker)
  .delete("/markers/", MarkerController.DeleteAllMarkers);

module.exports = router;
