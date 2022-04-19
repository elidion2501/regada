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
  const [selected, setSelected] = useState<any[]>([0]);
  const [servoMotor, setServoMotor] = useState<any[]>([]);
  const [rowColors, setRowColor] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "http://192.168.160.243:8000/api/servomotor/propertiesColumn?servomotor_id=1",
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

  const makeChoice = (data: any, key: any) => {
    let checkKey = rowColors.find((element: any) => element.key > key);

    if (checkKey) {
      return;
    }

    let item = rowColors.find(
      (element: any) =>
        JSON.stringify(element.rows) === JSON.stringify(data.rows)
    );

    if (item) {
      if (item.rowId !== data.rowId) {
        let filteredArray = rowColors.filter((item) => item.rows !== data.rows);
        setRowColor(filteredArray);
        setRowColor((currentArray) => [...currentArray, data]);
        if (selected.find((element) => element === key + 1) !== key + 1) {
          setSelected((currentArra) => [...currentArra, key + 1]);
        }
      } else {
        let filteredSelected = selected.filter((item) => item <= key);
        setSelected(filteredSelected);

        let filteredArray = rowColors.filter(
          (item) => item.rowId !== data.rowId && item.key <= key
        );
        setRowColor(filteredArray);
      }
    } else {
      setRowColor((currentArray) => [...currentArray, data]);
      setSelected((currentArra) => [...currentArra, key + 1]);
    }
  };

  const checkColor = (data: any) => {
    let item = rowColors.find((element: any) => data.rowId === element.rowId);
    if (item) {
      return "test-color";
    }
    return false;
  };

  const getKeyByValue = (object: any, value: any) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  const getPrice = () => {
    let total = 0;
    const sum = rowColors.map((value, key) => {
      return (total = value.price + total);
    });
    const a = sum.reduce(function (a, b) {
      return a + b;
    }, 0);
    return a;
  };

  const checkIfCodeIsAllowed = (key2: any, code: any) => {
    console.log(code);
    let item = rowColors.find((element) => element.key === key2 - 1);
    if (
      item &&
      Object.values(item.allowedCodes).find((element2) => element2 === code)
    ) {
      return true;
    }
    return false;
  };
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
                if (selected.find((element: any) => key === element) === key) {
                  return (
                    <div key={key}>
                      <h1 className="ion-text-center ion-nowrap">
                        {key + 1} Bod
                      </h1>

                      <IonGrid className="ion-nowrap test">
                        <IonRow className="ion-nowrap">
                          {servo.rowsNames &&
                            Object.values(servo.rowsNames).map(
                              (servoItem: any, key2) => {
                                return (
                                  <IonCol
                                    size="6"
                                    class="ion-text-center ion-nowrap"
                                    key={key2}
                                  >
                                    {servoItem}
                                  </IonCol>
                                );
                              }
                            )}
                          <IonCol size="4" class="ion-text-center ion-nowrap">
                            price
                          </IonCol>
                        </IonRow>
                        {servo.rowsNames &&
                          Object.values(servo.servomotorProps).map(
                            (servomotorPropsItems: any, key3) => {
                              if (
                                checkIfCodeIsAllowed(
                                  key,
                                  getKeyByValue(
                                    servo.servomotorProps,
                                    servomotorPropsItems
                                  )
                                ) ||
                                key === 0
                              ) {
                                return (
                                  <IonRow className={"ion-nowrap "} key={key3}>
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
                                              size="6"
                                              class={
                                                "ion-text-center ion-nowrap " +
                                                checkColor({
                                                  rowId:
                                                    key3 +
                                                    JSON.stringify(servo?.rows),
                                                })
                                              }
                                              onClick={() =>
                                                makeChoice(
                                                  {
                                                    allowedCodes:
                                                      servomotorPropsItems.allowed_codes,
                                                    price:
                                                      servomotorPropsItems.price,
                                                    code: getKeyByValue(
                                                      servo.servomotorProps,
                                                      servomotorPropsItems
                                                    ),
                                                    column_id: servo.columnId,
                                                    servomotorId: 1,
                                                    key: key,
                                                    rowId:
                                                      key3 +
                                                      JSON.stringify(
                                                        servo?.rows
                                                      ),
                                                    rows: JSON.stringify(
                                                      servo?.rows
                                                    ),
                                                  },
                                                  key
                                                )
                                              }
                                            >
                                              {test ? test.text : "-"}
                                            </IonCol>
                                          );
                                        }
                                      )}
                                    <IonCol
                                      size="4"
                                      class={
                                        "ion-text-center ion-nowrap " +
                                        checkColor({
                                          rowId:
                                            key3 + JSON.stringify(servo?.rows),
                                        })
                                      }
                                      onClick={() =>
                                        makeChoice(
                                          {
                                            allowedCodes:
                                              servomotorPropsItems.allowed_codes,
                                            price: servomotorPropsItems.price,
                                            code: getKeyByValue(
                                              servo.servomotorProps,
                                              servomotorPropsItems
                                            ),
                                            column_id: servo.columnId,
                                            servomotorId: 1,
                                            key: key,
                                            rowId:
                                              key3 +
                                              JSON.stringify(servo?.rows),
                                            rows: JSON.stringify(servo?.rows),
                                          },
                                          key
                                        )
                                      }
                                    >
                                      {servomotorPropsItems.price}
                                    </IonCol>
                                  </IonRow>
                                );
                              } else {
                                return <div key={key3}></div>;
                              }
                            }
                          )}
                      </IonGrid>
                    </div>
                  );
                } else {
                  return <div key={key}></div>;
                }
              })}

            <h1 className="ion-text-center">Price: {getPrice()} </h1>
            <h1 className="ion-text-center">
              Code:
              {rowColors.map((value, key) => {
                if (key === 2) {
                  return "-" + value.code;
                }
                return value.code;
              })}
            </h1>

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
