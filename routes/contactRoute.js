const Router = require("express");
const { createContact, getContact } = require("../controllers/contactCtrl");
const contactRouter = Router();

contactRouter.post("/createContact", createContact);
contactRouter.get("/getContact", getContact);

module.exports = contactRouter;
