import MockLocalData from './DogFetchedData.json';

var dogDataRows = [];
var selectedDog = createData();

const fakeFetchData = async () => {

  const fakeData = MockLocalData
  clearDogData()
  console.log(fakeData)
  
  fakeData.forEach(props => {
                  
      dogDataRows.push(createData(
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

  dogDataRows.sort(dynamicSort('ownerName'));

}

function fetchAllData(){
    const apiUrl = 'https://api.jsonbin.io/b/6083ef6348f71c7a71cd1a25'
    console.log("Fetching data...")
    console.log(apiUrl)
    
    fetch(apiUrl)
        .then(async response => {
            const data = await response.json();

            if (!response.ok) {
            
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            data.forEach(props => {
                  
                dogDataRows.push(createData(
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

          dogDataRows.sort(dynamicSort('owner'));
        
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

function clearDogData(){
  var emptyArr = [];
  dogDataRows = emptyArr
}

function setData(props){
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
        console.log(dogDataRows[key])
        // return dogDataRows[key]
      }
      // const element = object[key];
      // selectedDog = 
      // console.log(dogDataRows[key])
    }
  }

}


export {
    fetchAllData,
    dogDataRows,
    selectedDog,
    createData,
    clearDogData,
    convertToProperCase,
    fakeFetchData,
    setData,
    findByDogName,
};