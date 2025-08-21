// Fetch API con Promises
// Puede ser usado sin funcion o con funcion
const url = 'https://dummyjson.com/products';

const queryApiPromises = () => { 
    fetch(url)
        .then((response) => {
            if(!response.ok){
                throw new Error("Error de red");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error.message);
        })

}
 
queryApiPromises()


// Fetch API con Async Await
// ES obligatorio usarlo como funcion pq debe ser funcion asincrona
// Mas usado actualmente

const queryApiAsync = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error de red");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

queryApiAsync();