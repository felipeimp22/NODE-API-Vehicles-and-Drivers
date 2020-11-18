import mongoose from 'mongoose';

const VehicleSchema = new mongoose.Schema({
    owner:{
        type: String
    },
    licensePlate: {
        type: String
    },
    renavam:{
        type: String
    },
    createdAt: {
        type: Date,
     default: Date.now
  },
    updatedAt: {
     type: Date,
     default: Date.now
  }

})

export default mongoose.model('Vehicle', VehicleSchema);