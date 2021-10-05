const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',

    type : {
      make : 'Toyota',
      model : "Corolla",
      cc : "1.8"
    },

    features : [
      'Parking assist', 
      'Alarm', 
      'Tow-bar'
    ],

    registration : {
      year :'201',
      countycode : "WD",
      number : "1058"
    },

    previous_owners: [
      { 
        name : "Pat Smith",
        address : "1 Main Street"
      },

      {
        name : "Sheila Dwyer",
        address : "2 High Street"
      },
    ]
  };
  
  aCar.mileage = '1000';

  aCar.color = {
    color : "red",
    interior : {
      texture : "leather",
      shade : "cream"
    }
  };

  console.log(aCar.owner + ' drives a ' + aCar.type.make);

  console.log("The Registration number is : " + aCar.registration.year + "-" + aCar.registration.countycode + "-" + aCar.registration.number);

  console.log("It is a " + aCar.color.color + ", " + aCar.mileage + " mileage, with " + aCar.color.interior.texture + " interior")

  console.log('First owner : ' + aCar.previous_owners[0].name + " , His Address : " + aCar.previous_owners[0].address)

  console.log("\nFeatures :")
  for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
  } 

  console.log("\nPrevious Owners :")
  for (let i = 0; i < aCar.previous_owners.length; i+=1){
    console.log("Name : " + aCar.previous_owners[i].name + " Address : " + aCar.previous_owners[i].address)
  }

  console.log("\nCar Type :")
  for (let p in aCar.type)  {
    console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
}