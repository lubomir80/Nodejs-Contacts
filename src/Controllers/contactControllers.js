const {
   getContacts,
   getContactById,
   addContact,
   changeContactById,
   deleteContactById,
   updateStatusContactById
} = require("../Services/contactService")


const listContactsController = async (_, res) => {
   const contacts = await getContacts();
   return res.status(200).json({ contacts, status: "success" })
};

const getByIdController = async (req, res) => {
   const { id } = req.params;
   const contact = await getContactById(id)
   return res.status(200).json({ contact, status: "success" })
}

const addContactController = async (req, res) => {
   const {
      name,
      email,
      phone
   } = req.body;

   await addContact({ name, email, phone })
   return res.status(201).json({ status: "success" })
}

const updateContactController = async (req, res) => {
   const { id } = req.params;
   const { name, email, phone } = req.body;

   await changeContactById(id, { name, email, phone })
   return res.status(200).json({ status: "success" })
}

const removeContactController = async (req, res) => {
   const { id } = req.params;
   await deleteContactById(id);
   return res.status(200).json({ status: "success", message: `contact ${id} has been deleted` })
}

const updateStatusContactController = async (req, res) => {
   const { id } = req.params;
   const { favorite } = req.body;
   await updateStatusContactById(id, favorite);
   return res.status(200).json({ status: "success" })
}


module.exports = {
   listContactsController,
   getByIdController,
   addContactController,
   removeContactController,
   updateContactController,
   updateStatusContactController
}