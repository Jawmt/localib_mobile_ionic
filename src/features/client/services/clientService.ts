import { ClientLocalib } from "../model/ClientLocalib";

const URI= "http://localhost:8080"; 

export const getAllClients = () => {
    return fetch(`${URI}/client`)
                .then((result)=> result.json())
                .catch((err)=>console.log(err))
}

export const addClient = (client:ClientLocalib ) => {
    return fetch(`${URI}/client`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(client)
    })      
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const deleteClient = (id:number) => {
    return fetch(`${URI}/client/${id}`,{
        method:"DELETE"
    })
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
}