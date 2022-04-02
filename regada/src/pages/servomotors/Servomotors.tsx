import {
  IonBackButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonList,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
type Item = {
  src: string;
  text: string;
};
const Servomotors = () => {
  const items: Item[] = [
    { src: "http://placekitten.com/g/300/200", text: "a picture of a cat" },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton color="dark" slot="start">
            <IonBackButton color="light"/>
          </IonButton>
          <IonTitle>Regada</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonCard>
              <IonCardHeader>
                <IonImg src={items[0].src} />
                <IonCardTitle>
                  Elektrický servopohon jednootáčkový SP MIKRO
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Typové číslo: 260 <br />
                Max. zaťažovací moment: 8 [Nm] <br />
                Doba prestavenia: 120 [s/90°] <br />
                Pracovný uhol: 60° až 120° <br />
                Teplota okolia: -20 až +60 [°C] <br />
                Krytie: IP 65 <br />
                Pracovná poloha: ľubovoľná <br />
                Hmotnosť: 0,9 až 1,0 [kg] <br />
                <IonRouterLink routerLink="/servo/1">
                  Konfigurovat
                </IonRouterLink>
              </IonCardContent>
            </IonCard>
          </IonItem>

          <IonItem>
            <IonCard>
              <IonCardHeader>
                <IonImg src={items[0].src} />
                <IonCardTitle>
                  Elektrický servopohon jednootáčkový SP MIKRO
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Typové číslo: 260 <br />
                Max. zaťažovací moment: 8 [Nm] <br />
                Doba prestavenia: 120 [s/90°] <br />
                Pracovný uhol: 60° až 120° <br />
                Teplota okolia: -20 až +60 [°C] <br />
                Krytie: IP 65 <br />
                Pracovná poloha: ľubovoľná <br />
                Hmotnosť: 0,9 až 1,0 [kg] <br />
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard>
              <IonCardHeader>
                <IonImg src={items[0].src} />
                <IonCardTitle>
                  Elektrický servopohon jednootáčkový SP MIKRO
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Typové číslo: 260 <br />
                Max. zaťažovací moment: 8 [Nm] <br />
                Doba prestavenia: 120 [s/90°] <br />
                Pracovný uhol: 60° až 120° <br />
                Teplota okolia: -20 až +60 [°C] <br />
                Krytie: IP 65 <br />
                Pracovná poloha: ľubovoľná <br />
                Hmotnosť: 0,9 až 1,0 [kg] <br />
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard>
              <IonCardHeader>
                <IonImg src={items[0].src} />
                <IonCardTitle>
                  Elektrický servopohon jednootáčkový SP MIKRO
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Typové číslo: 260 <br />
                Max. zaťažovací moment: 8 [Nm] <br />
                Doba prestavenia: 120 [s/90°] <br />
                Pracovný uhol: 60° až 120° <br />
                Teplota okolia: -20 až +60 [°C] <br />
                Krytie: IP 65 <br />
                Pracovná poloha: ľubovoľná <br />
                Hmotnosť: 0,9 až 1,0 [kg] <br />
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard>
              <IonCardHeader>
                <IonImg src={items[0].src} />
                <IonCardTitle>
                  Elektrický servopohon jednootáčkový SP MIKRO
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Typové číslo: 260 <br />
                Max. zaťažovací moment: 8 [Nm] <br />
                Doba prestavenia: 120 [s/90°] <br />
                Pracovný uhol: 60° až 120° <br />
                Teplota okolia: -20 až +60 [°C] <br />
                Krytie: IP 65 <br />
                Pracovná poloha: ľubovoľná <br />
                Hmotnosť: 0,9 až 1,0 [kg] <br />
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard>
              <IonCardHeader>
                <IonImg src={items[0].src} />
                <IonCardTitle>
                  Elektrický servopohon jednootáčkový SP MIKRO
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Typové číslo: 260 <br />
                Max. zaťažovací moment: 8 [Nm] <br />
                Doba prestavenia: 120 [s/90°] <br />
                Pracovný uhol: 60° až 120° <br />
                Teplota okolia: -20 až +60 [°C] <br />
                Krytie: IP 65 <br />
                Pracovná poloha: ľubovoľná <br />
                Hmotnosť: 0,9 až 1,0 [kg] <br />
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard>
              <IonCardHeader>
                <IonImg src={items[0].src} />
                <IonCardTitle>
                  Elektrický servopohon jednootáčkový SP MIKRO
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Typové číslo: 260 <br />
                Max. zaťažovací moment: 8 [Nm] <br />
                Doba prestavenia: 120 [s/90°] <br />
                Pracovný uhol: 60° až 120° <br />
                Teplota okolia: -20 až +60 [°C] <br />
                Krytie: IP 65 <br />
                Pracovná poloha: ľubovoľná <br />
                Hmotnosť: 0,9 až 1,0 [kg] <br />
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard>
              <IonCardHeader>
                <IonImg src={items[0].src} />
                <IonCardTitle>
                  Elektrický servopohon jednootáčkový SP MIKRO
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Typové číslo: 260 <br />
                Max. zaťažovací moment: 8 [Nm] <br />
                Doba prestavenia: 120 [s/90°] <br />
                Pracovný uhol: 60° až 120° <br />
                Teplota okolia: -20 až +60 [°C] <br />
                Krytie: IP 65 <br />
                Pracovná poloha: ľubovoľná <br />
                Hmotnosť: 0,9 až 1,0 [kg] <br />
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard>
              <IonCardHeader>
                <IonImg src={items[0].src} />
                <IonCardTitle>
                  Elektrický servopohon jednootáčkový SP MIKRO
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Typové číslo: 260 <br />
                Max. zaťažovací moment: 8 [Nm] <br />
                Doba prestavenia: 120 [s/90°] <br />
                Pracovný uhol: 60° až 120° <br />
                Teplota okolia: -20 až +60 [°C] <br />
                Krytie: IP 65 <br />
                Pracovná poloha: ľubovoľná <br />
                Hmotnosť: 0,9 až 1,0 [kg] <br />
              </IonCardContent>
            </IonCard>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Servomotors;
