const mongoose = require("mongoose")
const connection = mongoose.connection

const connectdb = async ()=>{
  connection.on("connected",()=>{
    console.log("App successfully connected to Database..")
  });
  connection.on("error",(err)=>{
console.error(err)
  })
  connection.on("disconnected",()=>{
    console.log("App disconnected from database.")
  })

  await mongoose.connect(process.env.MONGODB_CONNECT_URL).catch((err) => {console.error(err)})
}
module.exports= {connectdb}
