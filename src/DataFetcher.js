var dogDataRows = [];
var selectedDog = createData();

function fetchAllData(){
    const apiUrl = 'https://api.jsonbin.io/b/6083ef6348f71c7a71cd1a25'
    console.log("Fetching data...")
    console.log(apiUrl)
    dogDataRows.length = 0;
    
    fetch(apiUrl)
        .then(async response => {
            const data = await response.json();

            if (!response.ok) {
            
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            var arr = [];
            data.forEach(props => {
                  
              arr.push(createData(
                      props.name, 
                      props.sex, 
                      props.breed, 
                      props.img, 
                      props.present, 
                      props.age, 
                      props.chipNumber, 
                      props.owner.name,
                      props.owner.lastName,
                      props.owner.phoneNumber,
                ));
              
          });   

          arr.sort(dynamicSort('ownerName'));
          
        if (typeof(Storage) !== "undefined") {
          sessionStorage.setItem('DogDataRows', JSON.stringify(arr))
        } else {
          console.log('Browser not supporting sessionStorage')
        }
        console.log(arr)
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

function dynamicSort(property) {
  var sortOrder = 1;

  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a, b) {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

function setDogRowData(){
  dogDataRows.length = 0;
  const storageArr =  sessionStorage.getItem('DogDataRows')
  dogDataRows = JSON.parse(storageArr);
  console.log(dogDataRows)
}

function setSelectedData(props){
  var arr = props;
  selectedDog = arr
}

function createData(name, sex, breed, img, present, age, chipNumber, ownerName, ownerLastName, ownerPhoneNumber) {
  return {
    name,
    sex,
    breed,
    img,
    present,
    age,
    chipNumber,
    ownerName,
    ownerLastName,
    ownerPhoneNumber,
  };
}

function convertToProperCase(str){

    const name = String(str)
    const a = name.charAt(0).toUpperCase()
    const b = name.substr(1).toLowerCase()
    return (a + b)
 
}

function findByDogName(name){
  const properName = convertToProperCase(name)
  console.log(properName)

  for (const key in dogDataRows) {
    if (Object.hasOwnProperty.call(dogDataRows, key)) {
      if(dogDataRows[key].name === properName){
        selectedDog = dogDataRows[key]
        // console.log(dogDataRows[key])
      }
    }
  }

}

export {
    fetchAllData,
    dogDataRows,
    selectedDog,
    createData,
    convertToProperCase,
    setSelectedData as setData,
    setDogRowData,
    findByDogName,
};