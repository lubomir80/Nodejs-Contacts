const express = require("express");
const router = express.Router();


let contacts = [
   {
      id: "1",
      name: "Jhon",
      phone: "546-666-777"
   },
   {
      id: "2",
      name: "Sarah",
      phone: "566-666-549"
   },
   {
      id: "3",
      name: "Thomas",
      phone: "533-666-777"
   },

];


router.get("/", (req, res) => {
   return res.json({ status: "200", contacts })
})

router.get("/:id", (req, res) => {
   const contact = contacts.filter(item => req.params.id === item.id);
   return res.json({ status: "ok", contact })
})



module.exports = { contactsRouter: router }