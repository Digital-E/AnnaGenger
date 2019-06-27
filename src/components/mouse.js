import React from 'react'

import styled from 'styled-components'
import {TweenLite, TimelineLite, Power1 } from 'gsap/TweenMax'

import cursorIdle from '../images/cursor-idle.svg'

import cursorDrag from '../images/cursor-drag.svg'

let MouseContainer = styled.div`
  position: fixed;
  height: 175px;
  width: 175px;
  top: -15px;
  left: -55px;
  z-index: 1600000;
  pointer-events: none;

  img {
    height: 100%;
    width: 100%;
  }
`


class Mouse extends React.PureComponent {
    constructor(props){
        super(props);

        this.state = {
          cursorIdle: false,
        }
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


    hoverInfiniteSliderNotZoomed() {


    }

    hoverInfiniteSliderIsZoomed() {


    }

    infiniteSliderIsHovered() {

      this.setState({
        cursorIdle: false
      });

  }

    hoverIndex(){

        this.setState({
          cursorIdle: true
        });
    }

    hoverLink(){

        this.setState({
          cursorIdle: false
        });
          
    }
    
    
      mousePosition(e) {
        const x = e.clientX;
        const y = e.clientY;
        const mouse = document.querySelector('.mouse');
    
        TweenLite.to(mouse, 0.3, {x: x, y: y});
      }

      render(){

        
        return(
            <MouseContainer  className={this.props.isMobile ? 'mouse mouse-invisible' : 'mouse'}>
                  <img src={this.state.cursorIdle ? cursorIdle : cursorDrag}/>
            </MouseContainer>
        )

      }
    }



export default Mouse;