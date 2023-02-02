import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ClientModalForm from '../components/ClientModalForm';


const ClientPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clients</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ClientModalForm />
      </IonContent>
    </IonPage>
  );
};

export default ClientPage;