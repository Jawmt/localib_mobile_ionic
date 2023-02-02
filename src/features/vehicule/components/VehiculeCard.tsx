import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList } from "@ionic/react"


const VehiculeCard = (props: any) => {
  
  
  
  
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.vehicule.marque} {props.vehicule.modele}</IonCardTitle>
      </IonCardHeader>
      
      
      <IonButton fill="solid" routerLink={`/vehicules/${props.vehicule.id}`}>Details</IonButton>
      <IonButton fill="solid" onClick={()=> props.handleDelete(props.vehicule.id)}>Supprimer</IonButton>
    </IonCard>
  )
}

export default VehiculeCard