const express = require("express");
const router = express.Router();
const { asyncWrapper } = require("../helpers/apiHelper")

const {
   listContactsController,
   getByIdController,
   addContactController,
   removeContactController,
   updateContactController,
   updateStatusContactController
} = require("../Controllers/contactControllers")

const {
   addPostValidation,
   addPutValidation,
} = require("../Middlewares/validationMiddleware")

router.get("/", asyncWrapper(listContactsController))
router.get("/:id", asyncWrapper(getByIdController))
router.post("/", addPostValidation, asyncWrapper(addContactController))
router.delete("/:id", asyncWrapper(removeContactController))
router.put("/:id", addPutValidation, asyncWrapper(updateContactController))
router.patch("/:id/favorite", asyncWrapper(updateStatusContactController))


module.exports = { contactsRouter: router }