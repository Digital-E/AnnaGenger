import React from 'react'
import Logo from "../images/AnnaGengerLogo.svg"
import styled from 'styled-components'

import {TweenLite, Power3} from 'gsap/TweenMax'

const Container = styled.div`
    position: fixed;
    width: 100vw;
    top: 50%;
    transform: translateY(-50%);
    height: 100vh;

    svg {
        margin: 0 auto;
        display: block;
        width: 100%;
        height: 100%
    }

    image {
        width: auto;
        height: 100%;
    }
`

const Cover = styled.div`
    position: fixed;
    background-color: white;
    height: 100vh;
    width: 100vw;
    z-index: 999;
    top: 100%;
`

let BackgroundImage = styled.img`
  position: absolute;
  // display: none;
  z-index: 999;
  top: 50%;
  left: 50%;
  opacity: 1;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%;
  margin: 0;
`



export default class BackgroundWarp extends React.PureComponent {

    constructor(props) {
        super(props);

        this.animation = null;

        }

    componentDidMount(){

        let animation;

        var bf;

        setTimeout(()=>{

            // TweenLite.to(img, 1, {attr:{ baseFrequency: '0 0'}})
            TweenLite.to(this.coverRef, 1, {top: 0, ease:Power3.easeInOut, 
                onComplete: () => {
                    cancelAnimationFrame(animation);
                }
            })

            // img.setAttributeNS(null, 'baseFrequency', "0 0");
        }, 3000);

        var img = document.querySelector("#displacementFilter feTurbulence");
        var frames = 0;
        var rad = Math.PI / 180;
        
        function AnimateBaseFrequency() {
        //   var baseFrequency = "0.01 .1";
          var bfx = 0.01;
          var bfy = .001;
        //   frames += .25;
          frames += 0.5;
          bfx += 0.001 * Math.cos(frames * rad);
          bfy += 0.005 * Math.sin(frames * rad);
        
          bf = bfx.toString() + ' ' + bfy.toString();
          img.setAttributeNS(null, 'baseFrequency', bf);
        
         animation = requestAnimationFrame(AnimateBaseFrequency);
        }
        
        animation = requestAnimationFrame(AnimateBaseFrequency);

    }


    render() {

        return (
        <Container>
            <Cover ref={div => this.coverRef = div}>
                <BackgroundImage src={Logo}/>
            </Cover>
            <svg viewBox="0 0 1500 1000">
            <filter id="displacementFilter">
              <feTurbulence type="turbulence" baseFrequency="0.01 .1"
                  numOctaves="1" result="turbulence" seed="53"/>
              <feDisplacementMap in2="turbulence" in="SourceGraphic"
                  scale="100" xChannelSelector="R" yChannelSelector="B"/>
            </filter>
          <image id="blueMoon" xlinkHref={Logo} width="100%" height="100%" filter="url(#displacementFilter)"></image>
          </svg>
        </Container>
        )
    }
}