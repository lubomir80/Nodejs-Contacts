const { Contact } = require("../db/contactModel")
const { WrongParamError, WrongFavoriteParamError } = require("../helpers/errors")

const getContacts = async () => {
   const contacts = await Contact.find()
   return contacts
}

const getContactById = async (id) => {
   const contact = await Contact.findById(id);
   if (!contact) throw new WrongParamError(`Not found ${id}`);
   return contact
}

const addContact = async ({ name, email, phone }) => {
   const post = new Contact({ name, email, phone });
   await post.save();
}

const changeContactById = async (id, { name, phone, email }) => {
   await Contact.findByIdAndUpdate(
      id, { $set: { name, phone, email } }
   );
}

const deleteContactById = async (id) => {
   await Contact.findByIdAndDelete(id);
}

const updateStatusContactById = async (id, favorite) => {
   const contact = await Contact.findById(id);
   if (!contact) throw new WrongFavoriteParamError(`Not found ${id}`);
   await Contact.findByIdAndUpdate(id, { $set: { favorite } })
}

module.exports = {
   getContacts,
   getContactById,
   addContact,
   changeContactById,
   deleteContactById,
   updateStatusContactById
}