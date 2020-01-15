import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useSpring, animated, interpolate } from 'react-spring';


const SliderDiv = styled.div`
    width:100%;
    background-color:transparent;
    height:90px;
    display:flex;
    justify-content:space-between;
    overflow: auto;
    margin-top:-50px;


    &::-webkit-scrollbar {
        height:0px;
        width: 0px;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }

`;
const SpaceDivHorizontal = styled.div`
    min-width:16px;
    min-height: min-content; 
`;

const SliderItemDiv = styled(animated.div)`
    backface-visibility: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
    transform: ${({ active }) => active ? 'scale(1) translateZ(0) perspective(1px)' : 'scale(0.88) translateZ(0) perspective(1px);'};
    
    min-width: 42%;
    min-height: min-content; 
    margin:16px 4px;
    background-color:white;
    z-index:10;
    overflow:hidden;
    border: 1px solid transparent;
    border-radius:5px;
    padding:12px;
    -webkit-box-shadow: 0 0px 20px rgba(0, 0, 0, 0.19), 0 6px 6px #f5f0f03b;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.19), 0 6px 4px #f5f0f03b;
`;


const TitleDiv = styled.div`
    font-size:0.9rem;
    color: #404040;
    font-weight:600;
`;
const DatetimeDiv = styled.div`
    padding:2px;
    margin-top:0px;
    font-size:0.78rem;
    color:#adacac;
    font-weight:400;
`;

const ContentSlider = function (props) {

    const { active } = props;

    const { size, shadowColor } = useSpring({
        size: active ? 1 : 0.88,
        shadowColor: active ? 0 : 1
    });


    const sizeInpr = size.interpolate({ map: Math.abs, range: [0, 1], output: ['scale(0)', 'scale(1)'], extraplote: 'clamp' });
    const shadowColorIntp = shadowColor.interpolate({
        map: Math.abs,
        range: [1, 0],
        output: ['rgba(0, 0, 0, 0.19) 0px 0px 10px, rgba(245, 240, 240, 0.23) 0px 0px 6px 4px', 'rgba(0, 0, 0, 0.19) 0px 0px 10px, rgba(64, 195, 255, 0.37) 0px 0px 5px 4px'],
        extraplote: 'clamp'
    })

    return (
        <SliderItemDiv {...props} style={{ transform: sizeInpr, boxShadow: shadowColorIntp }}>
            <TitleDiv>
                {props.title}
            </TitleDiv>
            <DatetimeDiv>
                {props.datetime}
            </DatetimeDiv>
            {props.children}
        </SliderItemDiv>
    );
}

class SideSlider extends Component {
    state = {
        selected: { "1": true }
    }

    onItemClicked(e) {
        this.setState({ selected: { [e.id]: true } });
    }
    render() {
        const { selected } = this.state;
        return (
            <SliderDiv>
                <SpaceDivHorizontal></SpaceDivHorizontal>
                <ContentSlider itemId={selected["1"]} active={selected["1"]} title="Today's list" datetime={moment().format('ll')} onClick={(e) => this.onItemClicked.call(this, { id: "1" })} />
                <ContentSlider itemId={selected["2"]} active={selected["2"]} onClick={(e) => this.onItemClicked.call(this, { id: "2" })}></ContentSlider>
                <ContentSlider itemId={selected["3"]} active={selected["3"]} onClick={(e) => this.onItemClicked.call(this, { id: "3" })}></ContentSlider>
                <SpaceDivHorizontal></SpaceDivHorizontal>
            </SliderDiv>
        )
    }
}


export { SideSlider }