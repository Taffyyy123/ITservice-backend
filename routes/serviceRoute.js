const Router = require("express");
const serviceRouter = Router();
const { createService, getServices } = require("../controllers/serviceCtrl");

serviceRouter.post("/createService", createService);
serviceRouter.get("/getServices", getServices);
module.exports = serviceRouter;
