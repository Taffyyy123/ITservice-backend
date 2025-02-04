const Router = require("express");
const serviceRouter = Router();
const {
  createService,
  getServices,
  getOneService,
  deleteService,
  updateService,
} = require("../controllers/serviceCtrl");

serviceRouter.post("/createService", createService);
serviceRouter.get("/getServices", getServices);
serviceRouter.get("/:serviceId", getOneService);
serviceRouter.delete("/:serviceId", deleteService);
serviceRouter.put("/:serviceId", updateService);

module.exports = serviceRouter;
