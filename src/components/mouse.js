import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import {TweenLite, TimelineLite, Power1, Power3} from 'gsap/TweenMax'

let MouseContainer = styled.div`
  position: fixed;
  height: 45px;
  width: 45px;
  top: -15px;
  z-index: 1600000;
  pointer-events: none;
  display: none;
  stroke: none;
  fill: #ed6d2d;
  

  svg {
    z-index: 1600000;
    fill: inherit;
    position: absolute;
    pointer-events: none;
  }

  .mouse-inner {
    transform: scale(0.3);
  }

  #Ebene_1 {
    transform: scale(0.9);
    overflow: visible;
  }


  #Ebene_2 {
    position: absolute;
    fill: #ed6d2d;
    transform: scale(0);
  }

  @media(min-width: 992px) {
    display: block;
  }
`


class Mouse extends React.PureComponent {
    constructor(props){
        super(props);
    }

  
    componentDidMount(){
        document.addEventListener('mousemove', this.mousePosition);
    }

    componentWillReceiveProps(nextProps){
      

        switch(nextProps.currentHover) {
            case 'infiniteSliderIsNotZoomed': 
            this.hoverInfiniteSliderNotZoomed();
            break;
            case 'infiniteSliderIsZoomed':
            this.hoverInfiniteSliderIsZoomed(); 
            case 'link':
            this.hoverLink();
            break; 
            case 'infiniteSliderIsHovered':
            this.infiniteSliderIsHovered();
            break;
            default:
            this.hoverIndex();            
        }
    }

    // document.querySelector('.main-background').addEventListener('mouseenter', ()=>{
    //   TweenLite.to(this.mouse,0.25,{fill: 'black'})
    // });

    hoverInfiniteSliderNotZoomed() {

        let time = 0.5;

        TweenLite.to('.mouse-inner', time, {scale: 1, stroke: 'none'});
        TweenLite.to('.mouse', time, {left: '-10', fill: 'white'});
        TweenLite.to('.cls-2', time, {stroke: '#ed6d2d'});

        var circle = document.getElementById("Ebene_2");
        this.tl = new TimelineLite();

        this.tl
            .to(circle, 0, {rotation:360, scale: 1, ease:Power1.easeInOut})
            .to(circle, 0.5, {rotation:0, scale:1, stroke: '#ed6d2d', display: 'block'})
            .to(circle, 0.5, {scale: 0.8})
            .to(circle, 0, {scale: 0})

    }

    hoverInfiniteSliderIsZoomed() {
        let time = 0.5;

        setTimeout(()=>{
            TweenLite.to('.mouse-inner', time, {scale: 1, stroke: 'none'});
            TweenLite.to('.mouse', time, {left: '-10', fill: 'white'});
            TweenLite.to('.cls-2', time, {stroke: '#ed6d2d'});
        },10)
    }

    infiniteSliderIsHovered() {
      let time = 0.5;

      setTimeout(()=>{
          TweenLite.to('.mouse-inner', time, {scale: 1, stroke: 'none'});
          TweenLite.to('.mouse', time, {left: '-10', fill: 'white'});
          TweenLite.to('.cls-2', time, {stroke: 'transparent'});
      },10)
  }

    hoverIndex(){
        let time = 0.5;

        TweenLite.to(document.getElementById("Ebene_2"), 0, {display: 'none'});

        TweenLite.to('.mouse-inner', time, {scale: 0.3, stroke: 'none'});
        TweenLite.to('.mouse', time, {fill: '#ed6d2d'});
        TweenLite.to('.cls-2', time, {stroke: 'none'});       
    }

    hoverLink(){
        let time = 0.5;

        TweenLite.to(document.getElementById("Ebene_2"), 0, {display: 'none'});

        TweenLite.to('.mouse-inner', time, {scale: 1, stroke: '#ed6d2d', strokeWidth: '2px'});
        TweenLite.to('.mouse', time, {fill: 'transparent'});
        TweenLite.to('.cls-2', 0, {stroke: 'none', fill: 'none'}); 
          
    }


    // document.querySelector('.footer').addEventListener('mouseenter', this.mouseEnterLink);
    // document.querySelector('.footer').addEventListener('mouseleave', this.mouseOutLink);

    // const mouseEnterLink = (e) => {
    //     const mouse = document.querySelector('.mouse-inner');
    //     const mouseLoader = document.querySelector('#Ebene_2');
    
    //     TweenLite.to(mouse, 0.2, {fill: 'transparent', stroke: 'black', strokeWidth:'2px', scale: 1.5});
    //     TweenLite.to(mouseLoader, 0, {scale: 0});
    
    //   }
    
    //   const mouseOutLink = (e) => {
    //     const mouse = document.querySelector('.mouse-inner');
    //     const mouseLoader = document.querySelector('#Ebene_2');
    
    //     TweenLite.to(mouse, 0.2, {fill: 'black', stroke: 'transparent', strokeWidth:'0px', scale: 1});
    //     TweenLite.to(mouseLoader, 0.2, {scale: 0.8});
    
    //   }
    
    
      mousePosition(e) {
        const x = e.clientX;
        const y = e.clientY;
        const mouse = document.querySelector('.mouse');
    
        TweenLite.to(mouse, 0.3, {x: x, y: y});
      }

      render(){

        return(
            <MouseContainer className='mouse'>
                <div className='mouse-inner'>
                <svg id="Ebene_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.1 170.1"><path className="st0" d="M145.3,27.1C129.9,11.6,108.6,2,85,2c-23.5,0-44.8,9.6-60.2,25"/></svg>

                <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 170.1"><title>Drag_Buttontest</title><path  className="cls-1" d="M85,170.1A85.05,85.05,0,1,0,0,85a85,85,0,0,0,85,85.1"/><polyline className="cls-2" points="100.3 127.8 142.1 85 100.3 42.2"/><polyline className="cls-2" points="69.7 127.8 28 85 69.7 42.2"/>            
                </svg>
                </div>
            </MouseContainer>
        )

      }
    }



export default Mouse;