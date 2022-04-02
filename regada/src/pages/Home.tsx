import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Regada</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonAccordionGroup>
          <IonAccordion value="colors">
            <IonItem slot="header">
              <IonLabel>Jednootáčkové</IonLabel>
            </IonItem>
            <IonList slot="content">
              <IonItem routerLink="/servo">
                <IonLabel>STANDARD</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>STANDARD - Ex</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>REMATIC</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>REMATIC - Ex</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>ATOM</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>
        <IonAccordionGroup>
          <IonAccordion value="colors">
            <IonItem slot="header">
              <IonLabel>Viacotáčkové</IonLabel>
            </IonItem>
            <IonList slot="content">
              <IonItem>
                <IonLabel>STANDARD</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>STANDARD - Ex</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>REMATIC</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>REMATIC - Ex</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>ATOM</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>
        <IonAccordionGroup>
          <IonAccordion value="colors">
            <IonItem slot="header">
              <IonLabel>Priamočiare</IonLabel>
            </IonItem>
            <IonList slot="content">
              <IonItem>
                <IonLabel>STANDARD</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>STANDARD - Ex</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>REMATIC</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>REMATIC - Ex</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>ATOM</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Home;
