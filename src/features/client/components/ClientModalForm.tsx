import React, { useState, useRef, useEffect } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/react';
import { addClient, deleteClient, getAllClients } from '../services/clientService';
import ClientCard from './ClientCard';

function ClientModalForm() {
  const modalClient = useRef<HTMLIonModalElement>(null);
 
  const [listesClients, setListeClients] = useState([]);
  const [client, setClient] = useState<any>({
    nom:"",
    prenom:"",
    dateDeNaissance:"",
    email:"",
    tel:""
  })

  useEffect(() => {
        recupererListeClients()
    },[]);

    const recupererListeClients = () => {
        getAllClients()
            .then((res)=> setListeClients(res))
    }

  const handleChange = (e:any) => {
    setClient({...client, [e.target.name]: e.target.value})
  }
  

  function confirm() {
    addClient(client).then(()=> recupererListeClients());
    modalClient.current?.dismiss();
  }

  const handleDelete = (id:number) => {
    deleteClient(id).then(()=>recupererListeClients());
  }


  return (

      <>
        <IonButton id="open-modal-client" expand="block">
          Open
        </IonButton>
    
        <IonModal ref={modalClient} trigger="open-modal-client" >
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modalClient.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
              <IonTitle>Welcome</IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm()}>
                  Ajouter un client
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="stacked">Entrer le nom</IonLabel>
              <IonInput  type="text" value={client.nom} onIonChange={handleChange} placeholder="Entrer le nom" name="nom" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Entrer le prenom</IonLabel>
              <IonInput  type="text" value={client.prenom} onIonChange={handleChange} placeholder="Entrer le prenom" name="prenom" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Entrer la date de naissance</IonLabel>
              <IonInput  type="text" value={client.dateDeNaissance} onIonChange={handleChange} placeholder="Entrer la date de naissance format dd/MM/YYYY" name="dateDeNaissance" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Entrer l'email'</IonLabel>
              <IonInput  type="text" value={client.email} onIonChange={handleChange} placeholder="Entrer l'email" name="email" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Entrer le telephone</IonLabel>
              <IonInput  type="tel" value={client.tel} onIonChange={handleChange} placeholder="Entrer le telephone" name="tel" />
            </IonItem>
          </IonContent>
        </IonModal>
        {listesClients && listesClients.map((item,index) => {
            return <ClientCard client={item} handleDelete={handleDelete} key={index}/>
        })}
        </>

  );
}

export default ClientModalForm;