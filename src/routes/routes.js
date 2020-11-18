import { Router } from 'express';
import DriverController from '../controller/DriverController'
import VehicleController from '../controller/VehicleController'
  const routes = new Router();

  routes.get('/healthCheck', (req,res) => {
return res.json('Api is running on port 3333')
  });

  routes.post('/driver', DriverController.store)
  routes.get('/getDriver', DriverController.getAll)
  routes.post('/addVehicle', DriverController.addVehicle)


  routes.post('/vehicle', VehicleController.store)
  routes.get('/getVehicle', VehicleController.getAll)




module.exports = routes;