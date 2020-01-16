import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useSpring, animated, interpolate } from 'react-spring';



const ContainerDiv = styled.div`
    height: 100%;
    width:100%;
    overflow-y:auto;
`;

const RowDiv = styled.div`
    display:flex;
    height:68px;
   
    justify-content:center;
`;


const ColMainDiv = styled.div`
    flex:3;
    background-color:tomato;
`;

const ColSecondaryDiv = styled.div`
    flex:1;
    background-color:yellow;
`;

const CardDiv = styled.div`
    width:100%;
`;


const ItemSlider = function (props) {
    return (
        <RowDiv>
            <ColMainDiv>
            </ColMainDiv>
            <ColSecondaryDiv>
            </ColSecondaryDiv>
        </RowDiv>
    );
}


class ListSliderComponent extends Component {
    render() {
        return (
            <ContainerDiv>
                <ItemSlider />
            </ContainerDiv>
        );
    }
}


export {
    ListSliderComponent,
    ItemSlider
}



