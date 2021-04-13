
var dogDataRows = [];

function fetchAllData(){
    const apiUrl = 'https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6'
    console.log("Fetching data...")
    console.log(apiUrl)
    fetch(apiUrl)
        .then(async response => {
            const data = await response.json();

            if (!response.ok) {
            
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            // console.log(data);

            data.forEach(props => {
                  
                dogDataRows.push(createData(
                      props.name, 
                      props.sex, 
                      props.breed, 
                      props.img, 
                      props.present, 
                      props.age, 
                      props.chipNumber, 
                      { 
                        name: props.name,
                        lastName: props.lastName,
                        phoneNumber: props.phoneNumber,
                      },
                ));
              
          });   

            // return data;
            
            //ReactDOM.render(CreateTable(), rootD)
        
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

function clearDogData(){
  var emptyArr = [];
  dogDataRows = emptyArr
}

function createData(name, sex, breed, img, present, age, chipNumber, owner) {
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

export {
    fetchAllData,
    dogDataRows,
    createData,
    clearDogData
};