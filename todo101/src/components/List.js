import React, { Component } from 'react';
import styled from 'styled-components';

import {
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
    withIonLifeCycle
} from '@ionic/react';
import { trash, add } from 'ionicons/icons';


const TextDiv = styled(IonLabel)`
  height:100%;
  border-bottom:1px solid #f5f5f5;
`;

const ItemDiv = styled(IonItemOption)`
  -webkit-box-shadow: inset 8px -1px 5px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: inset 8px -1px 5px -8px rgba(0,0,0,0.75);
  box-shadow: inset 8px -1px 5px -8px rgba(0,0,0,0.75);
`;

const MainDiv = styled.div`

`;


function ListItem({ header, contentTxt, onDelete = () => { } }) {
    return (
        <MainDiv>
            {header && (
                <IonListHeader>
                    <IonLabel>{header}</IonLabel>
                </IonListHeader>
            )}

            <IonItemSliding>
                <IonItem>
                    <IonLabel>{contentTxt}</IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                    <ItemDiv onClick={(e) => onDelete(e)} color="danger">
                        <IonIcon size="large" slot="start" color="light" icon={trash} />
                    </ItemDiv>
                </IonItemOptions>
            </IonItemSliding>
        </MainDiv>
    );
}

class ListTodosIonic extends Component {
    constructor(props) {
        super(props);
    }

    ionViewDidEnter() {

    }


    renderListItem

    render() {
        return (
            <IonList lines="none" >
                <ListItem header="my todos" contentTxt="Ionics is awesome" onDelete={(e) => { }} />
                <ListItem contentTxt="making web development great again" onDelete={(e) => { }} />
            </IonList>
        );
    }

}


const ListTodos = withIonLifeCycle(ListTodosIonic);

export { ListTodos }