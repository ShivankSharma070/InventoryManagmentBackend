const mongoose = require("mongoose");
const InventorySchema = new mongoose.Schema({
  sno:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  name: {
    type: String,
    required: true,
  },
  quantity : {
    type: Number,
    required:true
  },
  manufacturer:{
    type :String,
    default:"N/A",
    required:false
  },
  storedAt:{
    type:Date,
    default:Date.now()
  }
});

const inventory = mongoose.model('items',InventorySchema)
module.exports = inventory
