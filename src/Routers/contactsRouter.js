const express = require("express");
const router = express.Router();

const {
   listContacts,
   getById,
   addContact,
   removeContact,
   updateContact
} = require("../Controllers/contactControllers")



router.get("/", listContacts)

router.get("/:id", getById)

router.post("/", addContact)

router.delete("/:id", removeContact)

router.put("/:id", updateContact)



module.exports = { contactsRouter: router }