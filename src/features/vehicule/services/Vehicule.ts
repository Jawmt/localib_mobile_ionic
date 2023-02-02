import { Vehicule } from "../model/Vehicule";

const URI= "http://localhost:8080"; 

export const getAllVehicule = () => {
    return (
        fetch(`${URI}/vehicules`)
                .then((result)=> result.json())
                .catch((err)=>console.log(err))
    )
}

export const getVehicule = (id:string) => {
    return (
        fetch(`${URI}/vehicules/${id}`)
                .then((result)=> result.json())
                .catch((err)=>console.log(err))
    )
}

export const addVehicule = (vehicule:Vehicule) => {
    return fetch(`${URI}/vehicules`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(vehicule)
    })      
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const supprimerVehicule = (id:number) => {
    return fetch(`${URI}/vehicules/${id}`,{
        method:"DELETE"
    })
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
}