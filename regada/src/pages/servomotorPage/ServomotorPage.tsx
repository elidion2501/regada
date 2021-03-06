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
import z1a from "./z1a.png";
import z5a from "./z5a.png";
import z11a from "./z11a.png";
import { saveAs } from "file-saver";

const ServomotorPage = (props: any) => {
  const [selected, setSelected] = useState<any[]>([0]);
  const [servoMotor, setServoMotor] = useState<any[]>([]);
  const [rowColors, setRowColor] = useState<any[]>([]);
  const [servoMotorShow, setServoMotorShow] = useState<any>();

  useEffect(() => {
    fetch("https://main.help-ukraine.sk/api/servomotor?servomotor_id=1", {
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
        setServoMotorShow(data);
      })
      .catch((err) => {
        // alert(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://main.help-ukraine.sk/api/servomotor/propertiesColumn?servomotor_id=1",
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

    return sum[sum.length - 1];
  };

  const checkIfCodeIsAllowed = (key2: any, code: any) => {
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
            <IonImg src={servoMotorShow?.img_path} />
            <h1 className="ion-text-center">{servoMotorShow?.name}</h1>

            <IonList lines="none">
              <IonItem>
                <IonLabel>Typov?? ????slo: {servoMotorShow?.type_number}</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  {" "}
                  Max. za??a??ovac?? moment: {
                    servoMotorShow?.max_load_torque
                  } [Nm]{" "}
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  Doba prestavenia: {servoMotorShow?.adjustment_time}
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  {" "}
                  Pracovn?? uhol: {servoMotorShow?.working_angle_from}?? a??
                  {servoMotorShow?.working_angle_to}??{" "}
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  Teplota okolia: {servoMotorShow?.temperature_from} a?? +
                  {servoMotorShow?.temperature_to} [??C]
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  {" "}
                  Krytie: IP {servoMotorShow?.coverage_from}{" "}
                  {servoMotorShow?.coverage_to &&
                    "do IP " + servoMotorShow?.coverage_to}{" "}
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  Pracovn?? poloha: {servoMotorShow?.working_position}
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  Hmotnos??: {servoMotorShow?.weight_from} a??{" "}
                  {servoMotorShow?.weight_to} [kg]
                </IonLabel>
              </IonItem>
            </IonList>
            <h1 className="ion-text-center">Konfigur??cia</h1>
            {servoMotor &&
              servoMotor.map((servo, key) => {
                if (selected.find((element: any) => key === element) === key) {
                  return (
                    <div key={key}>
                      <h1 className="ion-text-center ion-nowrap">
                        {key + 1}. poz??cia v k??de
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
                          <IonCol size="6" class="ion-text-center ion-nowrap">
                            Cena
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
                                      size="6"
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

            <h1 className="ion-text-center">Cena: {getPrice()} </h1>
            <h1 className="ion-text-center">
            K??d:
              {servoMotorShow?.type_number}.
              {rowColors.map((value, key) => {
                if (key === 1) {
                  return "-" + value.code;
                }
                if (key === 6) {
                  return "/" + value.code;
                }
                return value.code;
              })}
            </h1>
            {rowColors.find((element) => element.key === 6) && (
              <div className="ion-text-center">
                Posla?? predajcovi e-mail ??
                <a className="ion-text-center" href={"mailto:mikita@regada.sk?body=objedn??vkov?? k??d:" + servoMotorShow?.type_number + '.' +rowColors.map((value, key) => {
                if (key === 1) {
                  return "-" + value.code;
                  
                }
                if (key === 6) {
                  return "/" + value.code;
                }
                return value.code;
              })}>mikita@regada.sk</a>
                <h1 className="ion-text-center">Sch??my zapojenia:</h1>
                <IonImg src={z1a} />
                <IonImg src={z5a} />
                <IonImg src={z11a} />
              </div>
            )}

            {/* <h1 className="ion-text-center">Diagram</h1>


            <IonItem>Kod:281.1-234567/89 Cena: 2555$ </IonItem> */}
            {/* <IonItem>
              <IonLabel position="stacked">
                Typ kl??my/Okolit?? teplota/Kor??zna kateg??ria/Krytie
              </IonLabel>
              <IonSelect
                interface="popover"
                value={gender}
                placeholder="Select One"
                onIonChange={(e) => setGender(e.detail.value)}
              >
                <IonSelectOption value="female">
                  Mierna, -20??C ... +60??C, C3,IP 65
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
