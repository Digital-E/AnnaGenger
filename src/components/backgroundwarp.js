import React from 'react'
import Logo from "../images/AnnaGengerLogo.svg"
import styled from 'styled-components'

import {TweenLite, TweenMax, TimelineMax, Power3} from 'gsap/TweenMax'

const Container = styled.div`
    position: fixed;
    width: 100vw;
    top: 45%;
    transform: translateY(-50%);
    height: 100vh;

    svg {
        margin: 0 auto;
        display: block;
        width: 100%;
        height: 100%
    }
`

const Cover = styled.div`
    position: fixed;
    background-color: white;
    height: 100vh;
    width: 100vw;
    z-index: 999;
    top: 0%;

    transition-duration: 5s;

    filter: blur(100px);
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
          this.coverRef.classList.add('remove-blur');
        },1000)

        // setTimeout(()=>{

        //     // TweenLite.to(img, 1, {attr:{ baseFrequency: '0 0'}})
        //     TweenLite.to(this.coverRef, 1, {top: 0, ease:Power3.easeInOut, 
        //         onComplete: () => {
        //             cancelAnimationFrame(animation);
        //         }
        //     })

        //     // img.setAttributeNS(null, 'baseFrequency', "0 0");
        // }, 3000);

        var img = document.querySelector("#displacementFilter feTurbulence");
        // var img = document.querySelector("#displacementFilter feGaussianBlur");
        
        function AnimateBaseFrequency() {
        //   var baseFrequency = "0.01 .1";

        //   bfx += 0.001 * Math.cos(frames * rad);
        //   bfy += 0.005 * Math.sin(frames * rad);
        
        //   bf = bfx.toString() + ' ' + bfy.toString();
        // //   img.setAttributeNS(null, 'baseFrequency', bf);

        //   img.setAttributeNS(null, 'stdDeviation', value);

        //   TweenMax.to(img, 5, { attr: { numOctaves: 0, baseFrequency: 0 }, yoyo:true, repeat:-1, repeatDelay:1  });
          
        //   var timeline = new TimelineMax({force3D: "true"
        //     }),
        //     feTurb = document.querySelector("#displacementFilter feTurbulence");
            
        //     timeline.add(
        //     TweenMax.to(feTurb, 8, {
        //     onUpdate: function() {
        //     var bfX = this.progress() * 0.005 + 0.015, 
        //     bfY = this.progress() * 0.05 + 0.1, 
        //     bfStr = bfX.toString() + ' ' + bfY.toString(); 
        //     feTurb.setAttribute('baseFrequency', bfStr);
        //     }
        //     }), 0
        //     );

        }
        
        AnimateBaseFrequency();

    }


    render() {

        return (
        <Container>
            <Cover ref={div => this.coverRef = div}>
                <BackgroundImage src={Logo}/>
            </Cover>
            {/* <svg viewBox="0 0 1500 1100">
            <filter id="displacementFilter">
              <feTurbulence type="turbulence" baseFrequency="0.01 0.1"
                  numOctaves="1" result="turbulence" seed="53"/>
              <feDisplacementMap in2="turbulence" in="SourceGraphic"
                  scale="100" xChannelSelector="R" yChannelSelector="B"/>
            </filter>
  
          <image id="blueMoon" xlinkHref={Logo} width="100%" height="100%" filter="url(#displacementFilter)"></image>
          </svg> */}
        </Container>
        )
    }
}

// function AnimateBaseFrequency() {
//     //   var baseFrequency = "0.01 .1";
//       var bfx = 0.01;
//       var bfy = .001;
//     //   frames += .25;
//       frames += 0.25;
//       bfx += 0.001 * Math.cos(frames * rad);
//       bfy += 0.005 * Math.sin(frames * rad);
    
//       bf = bfx.toString() + ' ' + bfy.toString();
//     //   img.setAttributeNS(null, 'baseFrequency', bf);

//       img.setAttributeNS(null, 'stdDeviation', value);

//       value -= 1;
    
//      animation = requestAnimationFrame(AnimateBaseFrequency);

//      if(value === 0) {
//         cancelAnimationFrame(animation);
//       }
//     }
    
//     animation = requestAnimationFrame(AnimateBaseFrequency);