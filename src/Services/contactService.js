const { Contact } = require("../db/contactModel")

const getContacts = async () => {
   const Contacts = await Post.find();
   return Contacts
}

const getContactById = async (id) => {

}

const addContact = async () => {

}

const changeContactById = async (id) => {

}

const deleteContactById = async (id) => {

}

module.exports = {
   getContacts,
   getContactById,
   addContact,
   changeContactById,
   deleteContactById
}