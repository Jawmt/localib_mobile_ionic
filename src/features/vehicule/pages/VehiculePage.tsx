import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import VehiculeModalForm from '../components/VehiculeModalForm';


const VehiculePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vehicule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <VehiculeModalForm />
      </IonContent>
    </IonPage>
  );
};

export default VehiculePage;