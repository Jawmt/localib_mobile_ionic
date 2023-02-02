import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ClientPage from './features/client/pages/ClientPage';
import VehiculePage from './features/vehicule/pages/VehiculePage';
import ReservationPage from './features/reservation/page/ReservationPage';
import VehiculePageDetail from './features/vehicule/pages/VehiculePageDetail';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/reservations" component={ReservationPage} />
          <Route exact path="/clients" component={ClientPage} />
          <Route exact path="/vehicules" component={VehiculePage} />
  
          <Route  path="/vehicules/:id" component={VehiculePageDetail} />
          <Route exact path="/">
            <Redirect to="/reservations" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="reservations" href="/reservations">
            <IonIcon icon={triangle} />
            <IonLabel>Reservations</IonLabel>
          </IonTabButton>
          <IonTabButton tab="clients" href="/clients">
            <IonIcon icon={ellipse} />
            <IonLabel>Clients</IonLabel>
          </IonTabButton>
          <IonTabButton tab="vehicules" href="/vehicules">
            <IonIcon icon={square} />
            <IonLabel>Vehicules</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
