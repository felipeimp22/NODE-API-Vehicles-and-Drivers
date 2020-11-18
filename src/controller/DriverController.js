import mongoose from 'mongoose';
import Vehicle from '../models/Vehicle'
import Driver  from '../models/Driver'

class DriverController {
    async store(req, res){
       const {name, surName, CPF, status = "Ativo",vehicles} = req.body
       try{
       const driver = {
           name,
           surName,
           CPF,
           status,
           vehicles
       }
       const checkDriverExists = await  Driver.find({$and:[{name},
       {surName}]
       })
       if(checkDriverExists.length>= 1) return res.status(400).json('User already exists')
       if(vehicles){
          vehicles.map(e => {
              Vehicle.find({'_id': e}).then(result => {
                  result.forEach(e => {
                      e.owner += name +" "+ surName + " | "
                      e.save() 
                    })
              })
              
          })
       }
       if(status != "Ativo"){
           if(status != "Inativo") return res.status(400)
           .json({error: "status must be Ativo or Inativo"})
       }
       
       if(name.length < 2 || surName.length < 2) return res.status(400)
       .json({error: "the name or surname lenght is too short"})

       if(String(CPF).length != 11) return res.status(400)
       .json({error: "Invalid CPF"})

        await Driver.create(driver)
        return res.json(driver);
    }catch(e){

        return res.status(400).json({error: e.message})
    }
    }

    async getAll(req, res){
const drivers = await Driver.find()
return res.json({drivers})
    }

    async addVehicle(req, res){
        const {id, fullName} = req.body
        try{
        const checkIfDriverExists = await Vehicle.findOne({"_id": id})
        
            if(checkIfDriverExists === null || !checkIfDriverExists) res.status(400)
            .json({error:"vehicle dont exists"})

            const nameSplited = fullName.split(' ')
            const surnameArr = nameSplited.slice(1)
            const surname = surnameArr.join(' ')

            const driver = await Driver.find({$and:[{'name': nameSplited[0]},
            {'surName': surname}]
        })
        if(driver.length < 1) res.status(400).json({error: "Driver dont exists"})
        
            driver[0].vehicles.push(id)
            driver[0].save()

            checkIfDriverExists.owner += nameSplited[0]+" "+ surname+ " | "
            checkIfDriverExists.save()

        return res.json({ Success: `vehicle ${id} included to Driver ${fullName}`})
        }catch(e){
            return res.status(400).json({error: e.message})
        }
    }

}
export default new DriverController();