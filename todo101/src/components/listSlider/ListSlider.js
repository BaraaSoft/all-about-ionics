import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useSpring, animated, interpolate } from 'react-spring';

import { useWindowSize } from '../../util';

import {
    IonCheckbox,
    IonList,
    IonListHeader,
    IonLabel
} from '@ionic/react';
import { book, build, colorFill, grid, trash, add, notifications } from 'ionicons/icons';
import './ListSlider.css';


const ContainerDiv = styled(IonList)`
    height: 100%;
    width:100%;
    overflow-y:auto;
    position:relative;
    padding-top:28px;
`;

const RowDiv = styled.div`
    margin-top:16px;
    display:flex;
    height:68px;
    justify-content:center;
`;


const ColMainDiv = styled.div`
    flex:4;
    
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ColSecondaryDiv = styled.div`
    flex:1;
    

    display:flex;
    justify-content:center;
    align-items:center;
`;

const CardDiv = styled.div`
    width:100%;
    height:100%;
    margin:16px;
    margin-left:0px;
    border-radius:6px;
    z-index:20;
    background-color: ${({ color }) => color};
    box-shadow: 0px 2px 17px 0px rgba(0, 0, 0, 0.0), 1px 1px 6px 0px rgba(0,0,0,0.22);

`;
const CheckBoxDiv = styled.div`
   
    border-radius:6px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    display:flex;
    justify-content:center;
    align-items:center;
`;

const FadeDiv = styled.div`
width:100%;
height:40px;
background-color:white;
position:absolute;
top:10px;
`;


const ItemSlider = function (props) {
    return (
        <RowDiv>

            <ColSecondaryDiv>
                <CheckBoxDiv>
                    <IonCheckbox />
                </CheckBoxDiv>

            </ColSecondaryDiv>
            <ColMainDiv>
                <CardDiv color={props.color} >
                </CardDiv>
            </ColMainDiv>
        </RowDiv>
    );
}



class ListSliderComponent extends Component {
    colors = {
        red: '#FFCAB2',
        yellow: '#FDFFC9',
        orange: '#FFEBBE',
        green: '#E2FECC',
        blue: '#D3F3FF',
        pink: '#FDE0DC'
    }
    render() {
        return (
            <ContainerDiv>
                <ItemSlider color={this.colors['red']} />
                <ItemSlider color={this.colors['yellow']} />
                <ItemSlider color={this.colors['green']} />
                <ItemSlider color={this.colors['blue']} />
                <ItemSlider color={this.colors['orange']} />
                <ItemSlider color={this.colors['pink']} />
                <ItemSlider color={this.colors['red']} />
                <ItemSlider color={this.colors['yellow']} />
                <ItemSlider color={this.colors['green']} />
                <ItemSlider color={this.colors['blue']} />
                <ItemSlider color={this.colors['orange']} />
                <ItemSlider color={this.colors['pink']} />
            </ContainerDiv>
        );
    }
}


export {
    ListSliderComponent,
    ItemSlider
}



