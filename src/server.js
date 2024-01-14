require("dotenv").config();
const express = require("express");
const { contactsRouter } = require("./Routers/contactsRouter");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api/contacts", contactsRouter)


app.listen(PORT, (err) => {
   if (err) console.error("Error at server launch")
   console.log(`Server works at port ${PORT}`);
})