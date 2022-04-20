import {
  IonAccordion,
  IonAccordionGroup,
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
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonRange,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";

const Servomotors = () => {
  const [servoMotors, setServoMotors] = useState<any[]>([]);
  const [link, setLink] = useState<any>("?");
  const [adjustmentTime, setAdjustmentTime] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });
  const [loadTorque, setLoadTorque] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });
  const [workingAngle, setWorkingAngle] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });
  const [temperature, setTemperature] = useState<{
    lower: number;
    upper: number;
  }>({ lower: -100, upper: 0 });
  const [coverage, setCoverage] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });
  const [weight, setWeight] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });

  useEffect(() => {
    fetch("https://main.help-ukraine.sk/api/servomotors" + link, {
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
  }, [link]);

  const changeLink = () => {
    setLink(
      "?adjustmentTimeMin=" +
        adjustmentTime.lower +
        "&adjustmentTimeMax=" +
        adjustmentTime.upper +
        "&loadTorqueMin=" +
        loadTorque.lower +
        "&loadTorqueMax=" +
        loadTorque.upper +
        "&workingAngleMin=" +
        workingAngle.lower +
        "&workingAngleMax=" +
        workingAngle.upper +
        "&temperatureMin=" +
        temperature.lower +
        "&temperatureMax=" +
        temperature.upper +
        "&coverageMin=" +
        coverage.lower +
        "&coverageMax=" +
        coverage.upper +
        "&weightMin=" +
        weight.lower +
        "&weightMax=" +
        weight.upper
    );
  };

  const wipeLink = () => {
    setLink("?")
    setAdjustmentTime({ lower: 0, upper: 0 });
    setLoadTorque({ lower: 0, upper: 0 });
    setWorkingAngle({ lower: 0, upper: 0 });
    setTemperature({ lower: -100, upper: 0 });
    setCoverage({ lower: 0, upper: 0 });
    setWeight({ lower: 0, upper: 0 });
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
        <IonAccordionGroup>
          <IonAccordion value="colors">
            <IonItem slot="header">
              <IonLabel>Filtre</IonLabel>
            </IonItem>
            <IonList slot="content">
              <IonItemDivider>Max. zaťažovací moment</IonItemDivider>
              <IonItem>
                <IonRange
                  dualKnobs={true}
                  min={0}
                  max={500}
                  step={5}
                  snaps={false}
                  onIonChange={(e) => setLoadTorque(e.detail.value as any)}
                />
              </IonItem>
              <IonItem>
                <IonLabel>
                  Minimalna: {loadTorque.lower} Maximalna: {loadTorque.upper}
                </IonLabel>
              </IonItem>
              <IonItemDivider>Doba prestavenia</IonItemDivider>
              <IonItem>
                <IonRange
                  dualKnobs={true}
                  min={0}
                  max={500}
                  step={5}
                  snaps={false}
                  onIonChange={(e) => setAdjustmentTime(e.detail.value as any)}
                />
              </IonItem>
              <IonItem>
                <IonLabel>
                  Minimalna: {adjustmentTime.lower} Maximalna:{" "}
                  {adjustmentTime.upper}
                </IonLabel>
              </IonItem>
              <IonItemDivider>Pracovný uhol</IonItemDivider>
              <IonItem>
                <IonRange
                  dualKnobs={true}
                  min={0}
                  max={360}
                  step={5}
                  snaps={false}
                  onIonChange={(e) => setWorkingAngle(e.detail.value as any)}
                />
              </IonItem>
              <IonItem>
                <IonLabel>
                  Minimalna: {workingAngle.lower} Maximalna:{" "}
                  {workingAngle.upper}
                </IonLabel>
              </IonItem>
              <IonItemDivider>Teplota okolia</IonItemDivider>
              <IonItem>
                <IonRange
                  dualKnobs={true}
                  min={-100}
                  max={100}
                  step={5}
                  snaps={false}
                  onIonChange={(e) => setTemperature(e.detail.value as any)}
                />
              </IonItem>
              <IonItem>
                <IonLabel>
                  Minimalna: {temperature.lower} Maximalna: {temperature.upper}
                </IonLabel>
              </IonItem>
              <IonItemDivider>Krytie</IonItemDivider>
              <IonItem>
                <IonRange
                  dualKnobs={true}
                  min={60}
                  max={69}
                  step={1}
                  snaps={false}
                  onIonChange={(e) => setCoverage(e.detail.value as any)}
                />
              </IonItem>
              <IonItem>
                <IonLabel>
                  Minimalna: {coverage.lower} Maximalna: {coverage.upper}
                </IonLabel>
              </IonItem>
              <IonItemDivider>Hmotnosť</IonItemDivider>
              <IonItem>
                <IonRange
                  dualKnobs={true}
                  min={1}
                  max={100}
                  step={5}
                  snaps={false}
                  onIonChange={(e) => setWeight(e.detail.value as any)}
                />
              </IonItem>
              <IonItem>
                <IonLabel>
                  Minimalna: {weight.lower} Maximalna: {weight.upper}
                </IonLabel>
              </IonItem>

              <IonButton
                expand="full"
                color="secondary"
                onClick={() => changeLink()}
              >
                Filtrovat
              </IonButton>

              <IonButton
                expand="full"
                color="secondary"
                onClick={() => wipeLink()}
              >
                Nulovat
              </IonButton>
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>

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
                      Krytie: IP {servo.coverage_from}{" "}
                      {servo.coverage_to && "do IP " + servo.coverage_to}
                      <br />
                      Pracovná poloha: {servo.working_position} <br />
                      Hmotnosť: {servo.weight_from} až {servo.weight_to} [kg]
                      <br />
                      <IonRouterLink routerLink="/servo/1">
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
