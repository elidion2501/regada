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

const ServomotorPage = () => {
  const [selected, setSelected] = useState<string>("biff");
  const [servoMotor, setServoMotor] = useState<any[]>([]);
  const [servoMotorProperties, setServoMotorProperties] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "http://127.0.0.1:8000/api/servomotor/propertiesColumn?servomotor_id=1",
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
        setServoMotor(data.data);
      })
      .catch((err) => {
        // alert(err.message);
      });
    fetch("http://127.0.0.1:8000/api/servomotor/properties?servomotor_id=1", {
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
        setServoMotorProperties(data.data);
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
                  <IonGrid>
                    {servo &&
                      servo.map((servoProp: any) => {
                        return (
                          <div>
                            {" "}
                            <IonRow
                              key={servoProp.id}
                              className="ion-align-items-start"
                            >
                              {servoProp &&
                                servoProp.map((servoPropSingle: any) => {
                                  return (
                                    <IonCol
                                      key={servoPropSingle.id}
                                      class="ion-text-center"
                                    >
                                      {servoPropSingle.id} -{" "}
                                      {servoPropSingle.name}
                                    </IonCol>
                                  );
                                })}
                            </IonRow>
                            {servoProp &&
                              servoProp.map((servoPropSingle: any) => {
                                return (
                                  <IonRow
                                    key={servoProp.id}
                                    className="ion-align-items-start"
                                  >
                                    {servoProp &&
                                      servoProp.map((servoPropSingle: any) => {
                                        return (
                                          <IonCol
                                            key={servoPropSingle.id}
                                            class="ion-text-center"
                                          >
                                            {
                                              servoMotorProperties.find(
                                                (element) =>
                                                  element.servomotor_property_column_id ===
                                                  servoPropSingle.id
                                              )?.text
                                            }
                                          </IonCol>
                                        );
                                      })}
                                  </IonRow>
                                );
                              })}
                          </div>
                        );
                      })}
                  </IonGrid>
                );
              })}
            {/* <h1 className="ion-text-center">1 Bod</h1> */}

            {/* <IonGrid>
              <IonRow className="ion-align-items-start">
                <IonCol size="1" class="ion-text-center">
                  N
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  Typ klímy
                </IonCol>
                <IonCol size="4" class="ion-text-center">
                  Okolitá teplota
                </IonCol>
                <IonCol size="3" class="ion-text-center">
                  Korózna kategória
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  Krytie
                </IonCol>
              </IonRow>
              <IonRow className="ion-align-items-start">
                <IonCol size="1" class="ion-text-center">
                  1
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  Mierna
                </IonCol>
                <IonCol size="4" class="ion-text-center">
                  -25°C/+55°C
                </IonCol>
                <IonCol size="3" class="ion-text-center">
                  C3
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  IP 67
                </IonCol>
              </IonRow>
              <IonRow className="ion-align-items-start">
                <IonCol size="1" class="ion-text-center">
                  1
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  Mierna
                </IonCol>
                <IonCol size="4" class="ion-text-center">
                  -25°C/+55°C
                </IonCol>
                <IonCol size="3" class="ion-text-center">
                  C3
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  IP 67
                </IonCol>
              </IonRow>
              <IonRow className="ion-align-items-start">
                <IonCol size="1" class="ion-text-center">
                  1
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  Mierna
                </IonCol>
                <IonCol size="4" class="ion-text-center">
                  -25°C/+55°C
                </IonCol>
                <IonCol size="3" class="ion-text-center">
                  C3
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  IP 67
                </IonCol>
              </IonRow>
              <IonRow className="ion-align-items-start">
                <IonCol size="1" class="ion-text-center">
                  1
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  Mierna
                </IonCol>
                <IonCol size="4" class="ion-text-center">
                  -25°C/+55°C
                </IonCol>
                <IonCol size="3" class="ion-text-center">
                  C3
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  IP 67
                </IonCol>
              </IonRow>
            </IonGrid>
            <h1 className="ion-text-center">2 Bod</h1>

            <IonGrid>
              <IonRow className="ion-align-items-start">
                <IonCol size="4" class="ion-text-center">
                  Elektrické pripojenie
                </IonCol>
                <IonCol size="4" class="ion-text-center">
                  Napájacie napätie
                </IonCol>
                <IonCol size="4" class="ion-text-center">
                  Schéma zapojenia
                </IonCol>
              </IonRow>
              <IonRow className="ion-align-items-start">
                <IonCol size="4" class="ion-text-center">
                  Na svorkovnicu
                </IonCol>
                <IonCol size="4" class="ion-text-center">
                  230 V AC
                </IonCol>
                <IonCol size="4" class="ion-text-center">
                  Z1a + Z11a
                </IonCol>
              </IonRow>
            </IonGrid>
            <h1 className="ion-text-center">3 Bod</h1>

            <IonGrid>
              <IonRow className="ion-align-items-start">
                <IonCol size="3" class="ion-text-center">
                  Vypínací moment
                </IonCol>
                <IonCol size="3" class="ion-text-center">
                  Režim prevádzky Otvor-Zatvor
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  Regulačná prevádzka
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  Doba prestavenia
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  [W]
                </IonCol>
              </IonRow>
              <IonRow className="ion-align-items-start">
                <IonCol size="3" class="ion-text-center">
                  46 Nm
                </IonCol>
                <IonCol size="3" class="ion-text-center">
                  40 Nm
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  63 Nm
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  20 s/90°
                </IonCol>
                <IonCol size="2" class="ion-text-center">
                  15
                </IonCol>
              </IonRow>
            </IonGrid>

            <h1 className="ion-text-center">4 Bod</h1>

            <IonGrid>
              <IonRow className="ion-align-items-start">
                <IonCol class="ion-text-center">Pracovný uhol</IonCol>
              </IonRow>
              <IonRow className="ion-align-items-start">
                <IonCol class="ion-text-center">S pevnými dorazmi 60° </IonCol>
              </IonRow>
            </IonGrid>

            <h1 className="ion-text-center">5 Bod</h1>

            <IonGrid>
              <IonRow className="ion-align-items-start">
                <IonCol class="ion-text-center">Vysielač polohy</IonCol>
                <IonCol class="ion-text-center">Zapojenie</IonCol>
                <IonCol class="ion-text-center">Výstup</IonCol>
                <IonCol class="ion-text-center">Schéma zapojenia</IonCol>
              </IonRow>
              <IonRow className="ion-align-items-start">
                <IonCol class="ion-text-center">Odporový Jednoduchý</IonCol>
                <IonCol class="ion-text-center">-</IonCol>
                <IonCol class="ion-text-center">1 x 100 W</IonCol>
                <IonCol class="ion-text-center">Z5a</IonCol>
              </IonRow>
            </IonGrid>

            <h1 className="ion-text-center">6 Bod</h1>

            <IonGrid>
              <IonRow className="ion-align-items-start">
                <IonCol class="ion-text-center">Mechanické pripojenie</IonCol>
                <IonCol class="ion-text-center">Tvar pripoj. dielca</IonCol>
                <IonCol class="ion-text-center">Rozmerový náčrt</IonCol>
              </IonRow>
              <IonRow className="ion-align-items-start">
                <IonCol class="ion-text-center">
                  Stojan + Páka + Ťahadlo TV 360
                </IonCol>
                <IonCol class="ion-text-center">D-14 14x14</IonCol>
                <IonCol class="ion-text-center">P-1147 P-2148/A</IonCol>
              </IonRow>
            </IonGrid>

            <h1 className="ion-text-center">7 Bod</h1>

            <IonGrid>
              <IonRow className="ion-align-items-start">
                <IonCol class="ion-text-center">Rozšírené vybavenie</IonCol>
                <IonCol class="ion-text-center">Schémy zapojenia</IonCol>
              </IonRow>
              <IonRow className="ion-align-items-start">
                <IonCol class="ion-text-center">
                  2 prídavné polohové spínače
                </IonCol>
                <IonCol class="ion-text-center">230 V AC / Z11a</IonCol>
              </IonRow>
            </IonGrid> */}

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
