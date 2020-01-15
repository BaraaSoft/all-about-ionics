import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
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

const SliderItemDiv = styled.div`
    transform: ${({ active }) => active ? 'scale(1)' : 'scale(0.9)'};
    min-width: 42%;
    min-height: min-content; 
    margin:16px 4px;
    background-color:white;
    z-index:10;
    overflow:hidden;
    border: 1px solid transparent;
    border-radius:5px;
    padding:8px;
    -webkit-box-shadow: 0 0px 20px rgba(0, 0, 0, 0.19), 0 6px 6px #f5f0f03b;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.19), 0 6px 4px #f5f0f03b;
    box-shadow-border-radius:5px;
`;


const TitleDiv = styled.div`
    color: #404040;
    font-weight:600;
`;
const DatetimeDiv = styled.div`
    padding:4px;
    margin-top:0px;
    font-size:0.8rem;
    color:#adacac;
    font-weight:400;
`;

const ContentSlider = function (props) {
    return (
        <SliderItemDiv {...props}>
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
    render() {
        return (
            <SliderDiv>
                <SpaceDivHorizontal></SpaceDivHorizontal>
                <ContentSlider active title="Today's list" datetime={moment().format('ll')} />
                <SliderItemDiv></SliderItemDiv>
                <SliderItemDiv></SliderItemDiv>
                <SpaceDivHorizontal></SpaceDivHorizontal>
            </SliderDiv>
        )
    }
}


export { SideSlider }