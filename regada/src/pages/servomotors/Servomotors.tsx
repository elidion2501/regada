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
import { useEffect, useState } from "react";

const Servomotors = () => {
  const [servoMotors, setServoMotors] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://main.help-ukraine.sk/api/servomotors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data);
          });
        }
      })
      .then((data) => {
        setServoMotors(data.data);
      })
      .catch((err) => {
        // alert(err.message);
      });
  }, []);

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
        <h1 className="ion-text-center">Tu budu filtre</h1>
        
        <IonList>
          {servoMotors &&
            servoMotors.map((servo) => {
              return (
                <IonItem key={servo.id}>
                  <IonCard>
                    <IonCardHeader>
                      <IonImg src={servo.img_path} />
                      <IonCardTitle>{servo.name}</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                      Typové číslo: {servo.type_number} <br />
                      Max. zaťažovací moment: {servo.max_load_torque} [Nm]{" "}
                      <br />
                      Doba prestavenia: {servo.adjustment_time}
                      <br />
                      Pracovný uhol: {servo.working_angle_from}° až
                      {servo.working_angle_to}° <br /> 
                      Teplota okolia: {servo.temperature_from} až +
                      {servo.temperature_to} [°C] <br />
                      Krytie: IP {servo.coverage_from} {servo.coverage_to && ('do IP ' + servo.coverage_to )} 
                      <br />
                      Pracovná poloha: {servo.working_position} <br />
                      Hmotnosť: {servo.weight_from} až {servo.weight_to} [kg]
                      <br />
                      <IonRouterLink routerLink="/servo/1"  >
                        Konfigurovat
                      </IonRouterLink>
                    </IonCardContent>
                  </IonCard>
                </IonItem>
              );
            })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Servomotors;
