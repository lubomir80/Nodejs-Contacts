require("dotenv").config();
const express = require("express");
const { contactsRouter } = require("./Routers/contactsRouter");
const { connectMongodb } = require("./db/connection");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api/contacts", contactsRouter)




const start = async () => {
   try {
      await connectMongodb();

      app.listen(PORT, (err) => {
         if (err) console.error("Error at server launch")
         console.log(`Server works at port ${PORT}`);
      })
   } catch (error) {
      console.error(`Error to launch, ${error.message}`)
   }
}

start();
