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
  IonFab, IonFabButton,
  IonButton, IonBadge
} from '@ionic/react';
import { book, build, colorFill, grid, trash, add, notifications } from 'ionicons/icons';
import React from 'react';

import styled from 'styled-components';

import { ListTodos } from '../components/List';
import { SideSlider } from '../components/sideSlider/sideSlider'

const TextDiv = styled(IonLabel)`
  height:100%;
  border-bottom:1px solid #f5f5f5;
`;

const ItemDiv = styled(IonItemOption)`
  -webkit-box-shadow: inset 8px -1px 5px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: inset 8px -1px 5px -8px rgba(0,0,0,0.75);
  box-shadow: inset 8px -1px 5px -8px rgba(0,0,0,0.75);
  box-shadow: 2px 1px 6px #5a93f93b, 1px -2px 7px 2px #dae7ffa1;
`;



const HeaderDiv = styled(IonHeader)`
  height:140px;
  background-color:blue;
  background: #00c6ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const IonToolbarDiv = styled(IonToolbar)`
  background-color:blue;
  background: #00c6ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border:none;
`;


const IonTitleDiv = styled(IonTitle)`
  background-color:blue;
  background: #00c6ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 
  color:white;
`;


const IconButtonRightDiv = styled(IonButton)`
  border-radius:4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const IonBadgeToolbarDiv = styled(IonBadge)`
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  position: absolute;
  top: 1px;
  left: -9px;
  border-radius:100px;
`;




const HomePage = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <HeaderDiv>
          <IonToolbarDiv>
            <IonButtons slot="start">
              <IonMenuButton color="light" />
            </IonButtons>
            <IonTitleDiv>Infamous todos</IonTitleDiv>
            <IonButtons slot="end">
              <IconButtonRightDiv>
                <IonIcon size="medium" color="light" icon={notifications} />
              </IconButtonRightDiv>
              <IonBadgeToolbarDiv color="danger">9</IonBadgeToolbarDiv>
            </IonButtons>
          </IonToolbarDiv>
        </HeaderDiv>

      </IonHeader>
      <IonContent fullscreen >
        <SideSlider />
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
