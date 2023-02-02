import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


const ReservationPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Reservations</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonContent className="ion-padding">
              
                    <h4>Non disponible</h4>
                   

                    <p>Pour le moment seul les fonctionnalités des clients & des vehicules sont disponibles</p>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default ReservationPage;