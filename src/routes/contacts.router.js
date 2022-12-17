const {
  readAllContact,
  readContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controller/contacts.controller");

const contactsRouter = require("express").Router();

contactsRouter.get("/", readAllContact);
contactsRouter.get("/:id", readContact);
contactsRouter.post("/", createContact);
contactsRouter.patch("/:id", updateContact);
contactsRouter.delete("/:id", deleteContact);

module.exports = contactsRouter;
