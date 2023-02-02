import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router';
import VehiculeModalForm from '../components/VehiculeModalForm';
import { Vehicule } from '../model/Vehicule';
import { getVehicule } from '../services/Vehicule';


interface UserDetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> { }

const VehiculePageDetail: React.FC<UserDetailPageProps> = ({ match }) => {

  const [vehicule, setVehicule] = useState<Vehicule>();

  let history = useHistory();

  useEffect(() => {
    recupererVehicule();
  }, [])

  const recupererVehicule = () => {
    getVehicule(match.params.id).then((res) => setVehicule(res));
  }



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vehicule detail {match.params.id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {vehicule &&
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{vehicule.marque} {vehicule.modele}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonLabel>Prix Location : {vehicule.prixLocJournee} EUR</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Etat du véhicule : {vehicule.etatDuVehicule}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Dispo : {vehicule.disponible ? "Oui" : "Non"} </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Type : {vehicule.type} </IonLabel>
                </IonItem>
              </IonList>
            </IonCardContent>
            <IonButton
              onClick={(e) => {
                e.preventDefault();
                history.go(-1);
              }}
            >
              Go Back
            </IonButton>
          </IonCard>

        }
      </IonContent>

    </IonPage>
  );
};
export default VehiculePageDetail;