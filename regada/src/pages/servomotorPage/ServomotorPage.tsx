import {
  IonBackButton,
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

const ServomotorPage = () => {
  const [gender, setGender] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton color="dark" slot="start">
            <IonBackButton color="light" />
          </IonButton>
          <IonTitle>Regada</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRow>
          <IonCol>
            <IonImg src="https://www.regada.sk/public/media/image/picture/13_bd65c7f7f726cc31702ab1b627f62fd1.jpeg" />
            <h1 className="ion-text-center">
              Elektrický servopohon jednootáčkový SP MIKRO
            </h1>
            <IonList lines="none">
              <IonItem>
                <IonLabel>Typové číslo: 260</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Max. zaťažovací moment: 8</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Doba prestavenia: 120</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Pracovný uhol: 60° až 120°</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Teplota okolia: -20 až +60</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Krytie: IP 65</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Pracovná poloha: ľubovoľná </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Hmotnosť: 0,9 až 1,0</IonLabel>
              </IonItem>
            </IonList>
            <h1 className="ion-text-center">Konfiguracia</h1>
            <IonItem>
              <IonLabel>Gender</IonLabel>
              <IonSelect
                interface="popover"
                value={gender}
                placeholder="Select One"
                onIonChange={(e) => setGender(e.detail.value)}
              >
                <IonSelectOption value="female">Female</IonSelectOption>
                <IonSelectOption value="male">Male</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Gender</IonLabel>
              <IonSelect
                interface="popover"
                value={gender}
                placeholder="Select One"
                onIonChange={(e) => setGender(e.detail.value)}
              >
                <IonSelectOption value="female">Female</IonSelectOption>
                <IonSelectOption value="male">Male</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Gender</IonLabel>
              <IonSelect
                interface="popover"
                value={gender}
                placeholder="Select One"
                onIonChange={(e) => setGender(e.detail.value)}
              >
                <IonSelectOption value="female">Female</IonSelectOption>
                <IonSelectOption value="male">Male</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Gender</IonLabel>
              <IonSelect
                interface="popover"
                value={gender}
                placeholder="Select One"
                onIonChange={(e) => setGender(e.detail.value)}
              >
                <IonSelectOption value="female">Female</IonSelectOption>
                <IonSelectOption value="male">Male</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Typ klímy/Okolitá teplota/Korózna kategória/Krytie</IonLabel>
              <IonSelect
                interface="popover"
                value={gender}
                placeholder="Select One"
                onIonChange={(e) => setGender(e.detail.value)}
              >
                <IonSelectOption value="female">
                  Mierna, -20°C ... +60°C, C3,IP 65
                </IonSelectOption>
                <IonSelectOption value="male">Male</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ServomotorPage;
