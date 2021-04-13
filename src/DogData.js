  
function createDogData(name, sex, breed, img, present, age, chipNumber, owner) {
  return {
    name,
    sex,
    breed,
    img,
    present,
    age,
    chipNumber,
    owner:[
      { 
        name: owner.name, 
        lastName: owner.lastName, 
        phoneNumber: owner.phoneNumber
      }
    ],
  };
}