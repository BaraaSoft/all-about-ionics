import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonFab, IonFabButton
} from '@ionic/react';
import { book, build, colorFill, grid, trash, add } from 'ionicons/icons';
import React from 'react';

import styled from 'styled-components';

import { ListTodos } from '../components/List'

const TextDiv = styled(IonLabel)`
  height:100%;
  border-bottom:1px solid #f5f5f5;
`;

const ItemDiv = styled(IonItemOption)`
  -webkit-box-shadow: inset 8px -1px 5px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: inset 8px -1px 5px -8px rgba(0,0,0,0.75);
  box-shadow: inset 8px -1px 5px -8px rgba(0,0,0,0.75);
`;

const HomePage = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Infamous todos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListTodos />
      </IonContent>
      <IonFab vertical="bottom" horizontal="end" slot="fixed" >
        <IonFabButton color="primary">
          <IonIcon size="large" color="light" icon={add} />
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default HomePage;



{/* <IonItem href="https://ionicframework.com/docs/" target="_blank">
  <IonIcon slot="start" color="medium" icon={book} />
  <IonLabel>Ionic Documentation</IonLabel>
</IonItem>
  <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
    <IonIcon slot="start" color="medium" icon={build} />
    <IonLabel>Scaffold Out Your App</IonLabel>
  </IonItem>
  <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
    <IonIcon slot="start" color="medium" icon={grid} />
    <IonLabel>Change Your App Layout</IonLabel>
  </IonItem>
  <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
    <IonIcon slot="start" color="medium" icon={colorFill} />
    <IonLabel>Theme Your App</IonLabel>
  </IonItem> */}
