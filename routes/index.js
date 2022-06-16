const bodyParser = require("body-parser");
const markers = require("./markersRoute");

module.exports = (app) => {
  app.use(bodyParser.json(), markers);
};
