import {
  IonBackButton,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import "./ServomotorPage.css";

const ServomotorPage = () => {
  const [selected, setSelected] = useState<string>("biff");
  const [servoMotor, setServoMotor] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "http://192.168.118.243:8000/api/servomotor/propertiesColumn?servomotor_id=1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
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
        setServoMotor(data);
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
            {servoMotor &&
              servoMotor.map((servo, key) => {
                return (
                  <div  key={key}>
                      <h1 className="ion-text-center ion-nowrap">{key + 1} Bod</h1>

                    <IonGrid className="ion-nowrap test">

                      <IonRow className="ion-nowrap">
                        {servo.rowsNames &&
                          Object.values(servo.rowsNames).map(
                            (servoItem: any, key2) => {
                              return (
                                <IonCol size='6' class="ion-text-center ion-nowrap" key={key2}>
                                  {servoItem}
                                </IonCol>
                              );
                            }
                          )}
                      </IonRow>

                      {servo.rowsNames &&
                        Object.values(servo.servomotorProps).map(
                          (servomotorPropsItems: any, key3) => {
                            return (
                              <IonRow className="ion-nowrap" key={key3}>
                                {Object.values(servo.rows) &&
                                  Object.values(servo.rows).map(
                                    (row: any, key4: any) => {
                                      let test: any = Object.values(
                                        servomotorPropsItems
                                      ).find(
                                        (element: any) =>
                                          element.servomotor_property_column_id ===
                                          row
                                      );
                                      return (
                                        <IonCol
                                          key={key4}
                                          size='6'
                                          class="ion-text-center ion-nowrap"
                                        >
                                          {test ? test.text : "-"}
                                        </IonCol>
                                      );
                                    }
                                  )}
                              </IonRow>
                            );
                          }
                        )}
                    </IonGrid>
                  </div>
                );
              })}

            {/* <h1 className="ion-text-center">Diagram</h1>

            <IonImg src="https://elektropohony.sk/wp-content/uploads/2020/01/servopohon-DA200-zapojenie-pre-polohovanie-MTM-Electric-Motors-s.r.o..jpg" />

            <IonItem>Kod:281.1-234567/89 Cena: 2555$ </IonItem> */}
            {/* <IonItem>
              <IonLabel position="stacked">
                Typ klímy/Okolitá teplota/Korózna kategória/Krytie
              </IonLabel>
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
            </IonItem> */}
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ServomotorPage;
