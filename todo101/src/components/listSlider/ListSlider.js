import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useSpring, animated, interpolate, config } from 'react-spring';
import { useDrag, useGesture, } from 'react-use-gesture'

import {
    IonCheckbox,
    IonList,
} from '@ionic/react';
import { trash } from 'ionicons/icons';

import { useWindowSize } from '../../util';
import './ListSlider.css';




const ContainerDiv = styled(IonList)`
    height: 100%;
    width:100%;
    overflow-y:auto;
    position:relative;
    padding-top:28px;
    overflow-x:hidden;
    margin-bottom:0px;
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
    position:relative;
`;

const ColSecondaryDiv = styled.div`
    flex:1;
    

    display:flex;
    justify-content:center;
    align-items:center;
`;

const CardDiv = styled(animated.div)`
    width:100%;
    height:100%;
  
    margin:16px;
    margin-left:0px;
    border-radius:6px;
    z-index:20;
    background-color: ${({ color }) => color};
    box-shadow: 0px 2px 17px 0px rgba(0, 0, 0, 0.0), 1px 1px 6px 0px rgba(0,0,0,0.22);

left:-8px;
    position:absolute;
    top:-20px;
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
    const { width, height } = useWindowSize();

    const [{ x }, set] = useSpring(() => ({ x: -8 }), { config: config.wobbly });

    const bind = useDrag(({ down, movement: [mx, my], direction, swipe }) => {

        let distCross = Math.abs((mx / width));

        const [swipeX, swipeY] = swipe;

        if (mx < 0) {

            if (distCross > 0.37) {
                (down) && set({ x: -(width * .5) })
            } else {
                set({ x: down ? mx : -8 });
            }
        } else {
            //console.log({ distCross });

            if (distCross < 0.37) {
                (down) && set({ x: mx });
            } else {
                (!down) && set({ x: -8 });
            }
            (!down) && set({ x: -8 });


            // if (distCross > 0.20) {
            //     set({ x: -8 });
            // } else {
            //     (down) && set({ x: mx });
            //     (!down) && set({ x: -8 });
            // }
            //console.log({ distCross })

            // if (distCross > 0.37) {
            //     set({ x: -(width * .5) });
            // } else {
            //     set({ x: swipe ? mx : -8 });
            // }
            // down && set({ x: -8 });
        }




    }, { delay: 1500, axis: 'x', filterTaps: true, eventOptions: { pointer: false } });

    return (
        <RowDiv>

            <ColSecondaryDiv>
                <CheckBoxDiv className={props.checkboxStyle && props.checkboxStyle}>
                    <IonCheckbox mode="ios" />
                </CheckBoxDiv>

            </ColSecondaryDiv>
            <ColMainDiv>
                <CardDiv onClick={(e) => e} {...bind()} color={props.color} style={{ left: x }} >
                </CardDiv>
            </ColMainDiv>
        </RowDiv>
    );
}

const TestDiv = styled.div`
background-color:grey;
width:100%;
height:30px;
position:sticky;
top:0px;
z-index:30;

`;



class ListSliderComponent extends Component {
    colors = {
        red: '#FFCAB2',
        yellow: '#FDFFC9',
        orange: '#FFEBBE',
        green: '#E2FECC',
        blue: '#D3F3FF',
        pink: '#FDE0DC'
    }

    state = {
        isScrolling: false
    }
    constructor(props) {
        super(props);
        this.timer = null;
    }
    onScrollEvent(e) {
        this.setState({ isScrolling: true })
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setState({ isScrolling: false })
        }, 500);
    }
    render() {

        return (
            <ContainerDiv {...this.props} onScroll={this.onScrollEvent.bind(this)}>

                <ItemSlider checkboxStyle={'red-highlighter'} color={this.colors['red']} ></ItemSlider>
                <ItemSlider checkboxStyle={'yellow-highlighter'} color={this.colors['yellow']}></ItemSlider>
                <ItemSlider checkboxStyle={'green-highlighter'} color={this.colors['green']}></ItemSlider>
                <ItemSlider checkboxStyle={'blue-highlighter'} color={this.colors['blue']}></ItemSlider>
                <ItemSlider checkboxStyle={'orange-highlighter'} color={this.colors['orange']} ></ItemSlider>
                <ItemSlider checkboxStyle={'pink-highlighter'} color={this.colors['pink']} ></ItemSlider>

                <ItemSlider checkboxStyle={'red-highlighter'} color={this.colors['red']} ></ItemSlider>
                <ItemSlider checkboxStyle={'yellow-highlighter'} color={this.colors['yellow']}></ItemSlider>
                <ItemSlider checkboxStyle={'green-highlighter'} color={this.colors['green']}></ItemSlider>
                <ItemSlider checkboxStyle={'blue-highlighter'} color={this.colors['blue']}></ItemSlider>
                <ItemSlider checkboxStyle={'orange-highlighter'} color={this.colors['orange']} ></ItemSlider>
                <ItemSlider checkboxStyle={'pink-highlighter'} color={this.colors['pink']} ></ItemSlider>
            </ContainerDiv>
        );
    }
}


export {
    ListSliderComponent,
    ItemSlider
}



