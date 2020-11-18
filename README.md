# NODE-API-Vehicles-and-Drivers

<img src="https://images.unsplash.com/photo-1482029255085-35a4a48b7084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">

### Welcome to the Repository, here I will teach you how to use this API!!!! :D

## API endpoints:

### BASE URL:
- http://localhost:3333/ <br/>

### Create Driver:
- POST - http://localhost:3333/driver <br/>
body:{ <br/>
    "name":"some name", <br/>
    "surName": "all names that you want", <br/>
     "CPF": 12345678910, `this field need to be only number and its need have just 11 numbers` <br/>
     "status":"Ativo", `even you dont send, the application will save Ativo that is the standart value` <br/> 
    "vehicles":[ "all", "vehicles", "you want" ] `you can send all veicles ID's you want, but need to be a valid ID `<br/>
} <br/>

### GET Driver:
- GET - http://localhost:3333/getDriver <br/>
no body <br/>
`this endpoint will show all Drivers registered` <br/>



### Create Vehicle:
- POST - http://localhost:3333/vehicle <br/>
body:{ <br/>
		"renavam": "123", <br/>
    "licensePlate": "123", <br/>
    "owner":"nothing or some valid full name registered in Drivers" <br/>
}<br/>
`notes: the owner need to be void or a valid name registered on DataBase` <br/>


### GET Vehicle:
- GET - http://localhost:3333/getVehicle <br/>
no body <br/>
`notes: this endpoint will show all vehicles` <br/>

### ADD Vehicle to Driver:
- POST - http://localhost:3333/addVehicle <br/>
body:{ <br/>
	"fullName": " some full name", <br/>
	"id": "some vehicle id" <br/>
  } <br/>
  `notes: the name and id must to be a valid and exists on data base` <br/>
  
  
  # Sumary
  
  This Application is for you apply drivers and vehicles and interconnect them. 
  Then you can do it on Registration of Vehicle or Driver since the your interconnect field exists on data base or pass void value to register later.



  
