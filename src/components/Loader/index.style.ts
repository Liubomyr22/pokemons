import styled, { keyframes } from 'styled-components'

const size = 250

const flip = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`

export const Pokeball = styled.div`
  width: ${size}px;
  height: ${size}px;
  border-radius: ${size}px;
  border: solid ${size / 25}px black;
  position: relative;    
  background: linear-gradient(to bottom, #EEEEEE 0%,#FFFFFF 100%);
  margin: 10px auto;
  
  &:before,
  &:after{
    content: "";
    display: block;
  }
  
  &,
  &:before,
  &:after{
    transition: all 600ms cubic-bezier(.67,.4,.36,.75);
  }
  
  &:before {
    width: ${size};
    height: ${size / 2 - size / 25 / 2}px;
    border-bottom: solid ${size / 25}px black;
    border-radius: ${size / 2}px ${size / 2}px 0 0;
    background: linear-gradient(to bottom, #d10000 0%,#ff0000 50%);
  }
  
  &:after {
    content: "";
    width: ${size / 5}px;
    height: ${size / 5}px;
    background: linear-gradient(to bottom, #fff 0%,#ccc 100%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    box-shadow: 0 0 0 ${size / 50}px black,
                0 0 0 ${size / 25}px #ddd,
                0 0 0 ${size / 14}px black,
                0 0 ${size / 10}px ${size / 17}px rgba(0,0,0,0.4);
  }

  &.u-flip {
    animation: ${flip} 1400ms infinite;
    animation-timing-function: cubic-bezier(.1,.67,.88,.34);
  }
`

export const PokeballWrapper = styled.article`
  height: 100dvh;
  width: 100vw;
  display: grid;
  place-items: center;
`
