const express = require("express");
const app = express();
const fs = require("fs");
const { contactsRouter } = require("./Routers/contactsRouter");



const PORT = process.env.PORT || 8080;




app.use(express.json());
app.use("/api/contacts", contactsRouter)


app.listen(PORT, (err) => {
   if (err) console.error("Error at server launch")
   console.log(`Server works at port ${PORT}`);
})