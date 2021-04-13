


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

            return data;
            
            //ReactDOM.render(CreateTable(), rootD)
        
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

function fetchRegistrar(){

}


export {
    fetchAllData,
};