import React, { useState, useRef, useEffect } from 'react';
import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
} from '@ionic/react';



import { addVehicule, getAllVehicule, supprimerVehicule } from '../services/Vehicule';
import { Vehicule } from '../model/Vehicule';
import VehiculeCard from './VehiculeCard';

function VehiculeModalForm() {
    const modal = useRef<HTMLIonModalElement>(null);

    const [listeVehicules, setListeVehicules] = useState([]);
    const [vehicule, setVehicule] = useState<Vehicule>({
        marque: "",
        modele: "",
        etatDuVehicule: "",
        prixLocJournee: 0,
        disponible: false,
        type: ""
    })

    useEffect(() => {
        recupererVehicules();
    }, []);

    const handleChange = (e: any) => {
        setVehicule({ ...vehicule, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        addVehicule(vehicule).then(() => recupererVehicules());
        modal.current?.dismiss();
    }


    const recupererVehicules = () => {
        getAllVehicule().then((res) => setListeVehicules(res));
    }


    const handleDelete = (id: number) => {
        supprimerVehicule(id).then(() => recupererVehicules());
    }


    return (

        <>
            <IonButton id="open-modal" expand="block">
                Open
            </IonButton>

            <IonModal ref={modal} trigger="open-modal" >
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                        </IonButtons>
                        <IonTitle>Welcome</IonTitle>
                        <IonButtons slot="end">
                            <IonButton strong={true} onClick={() => handleSubmit()}>
                                Ajouter un véhicule
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonItem>
                        <IonLabel position="stacked">Entrer la marque</IonLabel>
                        <IonInput type="text" value={vehicule.marque} onIonChange={handleChange} placeholder="Entrer la marque" name="marque" />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Entrer le modele</IonLabel>
                        <IonInput type="text" value={vehicule.modele} onIonChange={handleChange} placeholder="Entrer le modele" name="modele" />
                    </IonItem>
                    <IonItem>
                        <IonSelect placeholder="Selectionnez l'état du véhicule"
                            onIonChange={(e) => vehicule.etatDuVehicule = e.detail.value}>
                            <IonSelectOption value="sale">Sale</IonSelectOption>
                            <IonSelectOption value="propre">Propre</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Entrer le prix loc/jour'</IonLabel>
                        <IonInput type="number" value={vehicule.prixLocJournee} onIonChange={handleChange} placeholder="Entrer le prix de la location" name="prixLocJournee" />
                    </IonItem>
                    <IonItem>
                        <IonSelect 
                            placeholder="Selectionnez la disponibilité du vehicule"
                            onIonChange={(e) => vehicule.disponible = e.detail.value}>
                            <IonSelectOption value="true">Disponible</IonSelectOption>
                            <IonSelectOption value="propre">Propre</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonSelect 
                            placeholder="Selectionnez le type du vehicule"
                            onIonChange={(e) => vehicule.type = e.detail.value}>
                            <IonSelectOption value="citadine">Citadine</IonSelectOption>
                            <IonSelectOption value="monospace">Monospace</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    
                </IonContent>
            </IonModal>
            {listeVehicules && listeVehicules.map((item, index) => {
                return <VehiculeCard vehicule={item} handleDelete={handleDelete} key={index} />
            })}
        </>

    );
}

export default VehiculeModalForm;