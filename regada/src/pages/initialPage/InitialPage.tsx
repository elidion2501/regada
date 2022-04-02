import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
type Item = {
    src: string;
    text: string;
  };
const InitialPage = () => {
    const items: Item[] = [
        { src: "https://www.regada.sk/public/media/image/s_KRUH_transp.gif", text: "a picture of a cat" },
      ];

      
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Regada</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={false}>

        <IonImg src={items[0].src} />

        <IonGrid>
          <IonRow>
            <IonCol><h1>Činnosť firmy</h1></IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              Predmetom činnosti je výroba a predaj elektrických servopohonov,
              kompletizácia servopohonov s priemyselnými armatúrami,
              elektromagnetických ventilov, pneumatických prvkov a regulátorov
              tlaku plynu. V rámci kooperačných prác ponúkame výrobu tlakových
              odliatkov z hliníka a ich následné opracovanie.
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol><h1>O nás</h1></IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              Od roku 2004 naše snahy smerovali k presadeniu sa na nových
              trhoch. Stavili sme na potenciál našich zamestnancov, našich
              výrobkov a výsledky pomaly prichádzajú. Rok 2006 bol v doterajšej
              histórii rekordným rokom. Posilnili sme si pozíciu na trhoch Ruska
              a Česka. Podarilo sa nám zvýšiť export do krajín Európskej únie a
              upevnili sme si partnerstvá s firmami, pre ktoré v kooperácii
              vyrábame dielce a podzostavy. V novembri 2006 sme od firmy ZPA
              KŘIŽÍK v konkurze prevzali vývoj a výrobu regulátorov tlaku plynu,
              a rozšírili tak náš výrobný sortiment. Rok 2007 znamená pre
              spoločnosť REGADA s.r.o., zavŕšenie prvého desaťročia svojej
              existencie. Na slovenskom trhu sme v oblasti regulačnej a
              automatizačnej techniky jedinou výrobnou spoločnosťou svojho
              druhu.
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default InitialPage;
