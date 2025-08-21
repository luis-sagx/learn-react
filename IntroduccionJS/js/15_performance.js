const url = 'https://dummyjson.com/products';
const url2 = 'https://dummyjson.com/comments';

// Tener el llamado a diferentes url en la misma funcion
// hace que sea mas lento la pagina debido a que debe esperar
// a que cada llamada se complete antes de continuar

const queryApi = async () => {
    try{
        const start = performance.now()
        
        const response = await fetch(url)
        if (!response.ok){
            throw new Error ("Error de red")
        }
        const data = await response.json()
        console.log(data)

        const response2 = await fetch(url2)
        if (!response2.ok){
            throw new Error ("Error de red")
        }
        const data2 = await response2.json()
        console.log(data2)
        
        const end = performance.now()
        console.log(`El resultado funcion 1 es: ${end - start} ms`)
    } catch (error){
        console.log(error.message)
    }

}

queryApi()


// Realiza los fetch al mismo tiempo

const queryApiEfficient = async () => {
    try{
        const start = performance.now()

        // permite realizar las peticiones al mismo tiempo
        const [response, response2] = await Promise.all([fetch(url), fetch(url2)])
        
        const [data, data2] = await Promise.all([response.json(), response2.json()])

        console.log(data)
        console.log(data2)
        
        const end = performance.now()
        console.log(`El resultado funcion 2 es: ${end - start} ms`)
    } catch (error){
        console.log(error.message)
    }
}

queryApiEfficient()