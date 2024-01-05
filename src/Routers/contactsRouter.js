const express = require("express");
const router = express.Router();

const {
   listContacts,
   getById,
   addContact,
   removeContact,
   updateContact
} = require("../Controllers/contactControllers")

const {
   addPostValidation,
   addPutValidation
} = require("../Middlewares/validationMiddleware")

router.get("/", listContacts)
router.get("/:id", getById)
router.post("/", addPostValidation, addContact)
router.delete("/:id", removeContact)
router.put("/:id", addPutValidation, updateContact)



module.exports = { contactsRouter: router }