const fs = require("fs");


const contacts = JSON.parse(fs.readFileSync("Data/contacts.json", "utf8"));

function updateContactsData(contacts) {
   const newContacts = JSON.stringify(contacts)
   fs.writeFile("Data/contacts.json", newContacts, (err) => { })
}


const listContacts = (_, res) => {
   return res.status(200).json({ contacts })
};

const getById = (req, res) => {
   const { id } = req.params;
   const [contact] = contacts.filter(item => id === item.id);
   if (!contact) res.status(404).json({ status: `Not found ${id}` })
   return res.status(200).json({ contact })
}

const addContact = (req, res) => {
   const { name, email, phone } = req.body;

   const addContact = {
      id: Date.now().toString(),
      name,
      email,
      phone
   }
   contacts.push(addContact)


   updateContactsData(contacts)
   return res.status(201).json({ addContact })
}


const removeContact = (req, res) => {
   const { id } = req.params;
   const [contact] = contacts.filter(item => id === item.id);
   if (!contact) res.status(404).json({ status: `Not found ${id}` })

   const delatedContactIndex = contacts.findIndex((item) => item.id === contact.id)
   contacts.splice(delatedContactIndex, 1)


   updateContactsData(contacts)
   return res.status(200).json({ message: "contact deleted" })
}


const updateContact = (req, res) => {
   const { id } = req.params;
   const { name, email, phone } = req.body;

   const [contact] = contacts.filter(item => id === item.id);

   if (Object.keys(req.body).length === 0) res.status(400).json({ status: `Missing fields` })
   if (!contact) res.status(404).json({ status: `Not found ${id}` })


   contacts.filter(item => {
      if (item.id === id) {
         if (name) {
            item.name = name
         }
         if (phone) {
            item.phone = phone
         }
         if (email) {
            item.email = email
         }
      }
   })


   updateContactsData(contacts)
   return res.status(200).json({ contacts })
}


module.exports = {
   listContacts,
   getById,
   addContact,
   removeContact,
   updateContact
}