import mongoose from 'mongoose';
import Vehicle from '../models/Vehicle'
import Driver  from '../models/Driver'

class VehicleController {
    async store(req, res){
        const {renavam, licensePlate, owner} = req.body
        try{
            let vehicle = {
                renavam,
                licensePlate,
                owner
            }
            if(owner){
                const nameSplited = owner.split(' ')
                const surnameArr = nameSplited.slice(1)
                const surname = surnameArr.join(' ')
                const Owner = await Driver.find({$and:[{'name': nameSplited[0]},
                {'surName': surname}]
                })
                if(Owner.length <= 0 ){
                    return res.status(400).json({error: "Driver owner dont exists"})
                }
                const newVehicle = await Vehicle.create(vehicle)

                await Owner[0].vehicles.push(newVehicle._id)
                await Owner[0].save()
                return res.json(vehicle)
                
            }
           await Vehicle.create(vehicle)

           return res.json(vehicle)

        }catch(e){
            return res.status(400).json(e.message)
        }
    }
    async getAll(req, res){
        try{
        const vehicle = await Vehicle.find()
        return  res.json(vehicle)
        }catch(e){
            return res.status(400).json(e.message)
        }
    }
}
export default new VehicleController();