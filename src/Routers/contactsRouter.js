const express = require("express");
const router = express.Router();

const {
   listContactsController,
   getByIdController,
   addContactController,
   removeContactController,
   updateContactController
} = require("../Controllers/contactControllers")

const {
   addPostValidation,
   addPutValidation
} = require("../Middlewares/validationMiddleware")

router.get("/", listContactsController)
router.get("/:id", getByIdController)
router.post("/", addPostValidation, addContactController)
router.delete("/:id", removeContactController)
router.put("/:id", addPutValidation, updateContactController)



module.exports = { contactsRouter: router }