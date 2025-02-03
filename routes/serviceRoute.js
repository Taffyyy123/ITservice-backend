const Router = require("express");
const serviceRouter = Router();
const {
  createService,
  getServices,
  getOneService,
} = require("../controllers/serviceCtrl");

serviceRouter.post("/createService", createService);
serviceRouter.get("/getServices", getServices);
serviceRouter.get("/:serviceId", getOneService);
module.exports = serviceRouter;
