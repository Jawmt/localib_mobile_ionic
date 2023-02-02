import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList } from "@ionic/react"


const ClientCard = (props: any) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.client.nom} {props.client.prenom}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonLabel>Date de Naissance : {props.client.dateDeNaissance}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Email : {props.client.email}</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>

      <IonButton fill="solid" onClick={()=> props.handleDelete(props.client.id)}>Supprimer</IonButton>
    </IonCard>
  )
}

export default ClientCard