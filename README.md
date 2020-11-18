# NODE-API-Vehicles-and-Drivers

### Welcome to the Repository, here I will teach you how to use this API!!!! :D

## API endpoints:

### BASE URL:
- http://localhost:3333/

### Create Driver:
- POST - http://localhost:3333/driver

### GET Driver:
- GET - http://localhost:3333/getDriver



### Create Vehicle:
- POST - http://localhost:3333/vehicle
body:{
		"renavam": "123",
    "licensePlate": "123",
    "owner":"felipe imperio"
}
`notes: the owner need to be void or a valid name registered on DataBase`


### GET Vehicle:
- GET - http://localhost:3333/getVehicle
no body
`notes: this endpoint will show all vehicles`

### ADD Vehicle to Driver:
- POST - http://localhost:3333/addVehicle
body:{
	"fullName": " some full name",
	"id": "some vehicle id"
  }
  `notes: the name and id must to be a valid and exists on data base`
