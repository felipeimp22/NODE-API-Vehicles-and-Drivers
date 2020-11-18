  import mongoose from 'mongoose';

const DriverSchema = new mongoose.Schema({
    name: {
      type: String,
      required:true
    },
    surName: {
        type: String,
        required:true
      },
    CPF:{
        type:Number,
        required: true
    },
    status: {
        type: String,
        default: 'Ativo'
      },
    vehicles:[],
    createdAt: {
        type: Date,
     default: Date.now
  },
    updatedAt: {
     type: Date,
     default: Date.now
  }

})

export default mongoose.model('Driver', DriverSchema);