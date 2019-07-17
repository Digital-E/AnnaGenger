import React from 'react'
import Logo from "../images/AnnaGengerLogo.svg"
import styled from 'styled-components'

import MorphSVGPlugin  from '../greensock-js-shockingly-green/src/bonus-files-for-npm-users/MorphSVGPlugin'

import {TweenMax, TimelineMax, Power3, Power2} from 'gsap/TweenMax'

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

    .st0 {
        fill:none;
    }
`

const Cover = styled.div`
    position: fixed;
    background-color: white;
    height: 100vh;
    width: 100vw;
    z-index: 999;
    top: 0%;
    opacity: 0;

    transition-duration: 0.5s;

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


        }

    componentDidMount(){

        setTimeout(()=>{
          this.coverRef.classList.add('opacity-logo');
        },0);

        let shapeIndex = 0;
        setTimeout(()=>{

            TweenMax.to("#start", 5, {morphSVG:{shape: "#end", shapeIndex: shapeIndex }, ease: Power2.easeInOut }); 

          },500); 

    }


    render() {

        return (
        <Container>
            <Cover ref={div => this.coverRef = div}>
                {/* <BackgroundImage src={Logo}/> */}

                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 587 410.9">
                <path id="end" className="st0" d="M155.9,131.9c-13.3,0-25.4,5-36.3,15.1c5.5-5.1,9.2-7.7,11.1-7.7c0.8,0,1.2,0.5,1.2,1.5
                    c0,6.2-10.5,25.3-31.4,57.5c13.3-20.3,20-32.6,20-36.9c0-1-0.4-1.5-1.2-1.5c-4.3,0-18.4,12.8-42.2,38.5
                    c20.9-22.6,37.4-47.5,49.5-74.9C138.8,96,144.8,70.2,144.8,46c0-6.2-0.4-12.1-1.2-17.8c3.7,25.4,7.9,38.2,12.6,38.2
                    c4.5,0,8.6-12.7,12.3-38.2c-0.8,5.7-1.2,11.7-1.2,17.8c0,24.2,6,50,18.2,77.4c12.1,27.4,28.6,52.4,49.5,74.9
                    c-23.6-25.6-37.7-38.5-42.5-38.5c-0.8,0-1.2,0.6-1.2,1.8c0,4.5,6.3,16.7,18.8,36.6c-20.3-32.2-30.5-51.4-30.5-57.5
                    c0-1,0.4-1.5,1.2-1.5c1.6,0,5.2,2.6,10.8,7.7C180.9,136.9,169,131.9,155.9,131.9z M147.7,95.7c-5.2,14.5-12.2,27.6-20.8,39.5
                    c8.6-11.9,18.2-17.8,28.6-17.8c10.7,0,20.3,6,28.9,17.8c-8.6-11.9-15.5-25.1-20.8-39.5c-5.2-14.5-7.7-27.7-7.5-39.8
                    c0,8-0.1,13.3-0.3,16c0,2.7,0,2.7,0,0c-0.2-3.3-0.3-8.6-0.3-16C155.6,68,153,81.3,147.7,95.7z M287.6,163c-1,0-1.5,0.8-1.5,2.5
                    c0,3.9,3.3,12.6,9.8,26.2c-9.2-19.1-13.8-36.2-13.8-51.4c0-15.4,4.6-26.2,13.8-32.3c-5.1,1.6-9,2.5-11.7,2.5c-4.3,0-7.3-1.9-9.1-5.7
                    c-1.7-3.8-3.2-10.9-4.5-21.4c-4.5,15-8.6,22.5-12.3,22.5c-3.1,0-8-3.9-14.8-11.7c4.3,9.8,6.5,16.5,6.5,20c0,2.9-1.2,4.8-3.5,5.8
                    c-2.4,1-6.4,1.6-12.2,1.8c9.2,2.1,13.8,9.4,13.8,22.2c0,12.7-4.6,28.6-13.8,47.7c6.6-13.5,9.8-22.3,9.8-26.2c0-1.6-0.5-2.5-1.5-2.5
                    c-3.7,0-13.2,9.5-28.6,28.6c15.4-19.1,23.1-39.9,23.1-62.5s-7.7-42.9-23.1-60.9c15.4,18.1,24.8,27.1,28.3,27.1
                    c0.8,0,1.2-0.6,1.2-1.8c0-3.7-3.5-12.1-10.5-25.2c10,18.1,15.1,28.9,15.1,32.6c0,0.6-0.2,0.9-0.6,0.9c-1.9,0-6.7-4.6-14.4-13.8
                    c8.6,10.3,13.6,16.3,15.1,18.2h-0.6L233.8,88c8.8,7.2,15.4,10.8,19.7,10.8c3.7,0,7-2.5,9.8-7.4c2.9-4.9,6.4-13.5,10.5-25.8
                    c0.4,11.1,1.2,19,2.3,23.7c1.1,4.7,3.1,7.1,6,7.1c4.1,0,12.5-6.2,25.2-18.5c-10.5,15.6-15.7,25.4-15.7,29.5c0,3.5,2.8,5.2,8.3,5.2
                    c3.5,0,8.9-0.7,16.3-2.2c-15.4,5.5-23.1,15.7-23.1,30.5s7.7,31.7,23.1,50.8C300.8,172.5,291.3,163,287.6,163z M373.4,163
                    c-1,0-1.5,0.8-1.5,2.5c0,3.9,3.3,12.6,9.8,26.2c-9.2-19.1-13.8-36.2-13.8-51.4c0-15.4,4.6-26.2,13.8-32.3c-5.1,1.6-9,2.5-11.7,2.5
                    c-4.3,0-7.3-1.9-9.1-5.7c-1.7-3.8-3.2-10.9-4.5-21.4c-4.5,15-8.6,22.5-12.3,22.5c-3.1,0-8-3.9-14.8-11.7c4.3,9.8,6.5,16.5,6.5,20
                    c0,2.9-1.2,4.8-3.5,5.8c-2.4,1-6.4,1.6-12.2,1.8c9.2,2.1,13.8,9.4,13.8,22.2c0,12.7-4.6,28.6-13.8,47.7c6.6-13.5,9.8-22.3,9.8-26.2
                    c0-1.6-0.5-2.5-1.5-2.5c-3.7,0-13.2,9.5-28.6,28.6c15.4-19.1,23.1-39.9,23.1-62.5s-7.7-42.9-23.1-60.9
                    c15.4,18.1,24.8,27.1,28.3,27.1c0.8,0,1.2-0.6,1.2-1.8c0-3.7-3.5-12.1-10.5-25.2c10,18.1,15.1,28.9,15.1,32.6c0,0.6-0.2,0.9-0.6,0.9
                    c-1.9,0-6.7-4.6-14.4-13.8c8.6,10.3,13.6,16.3,15.1,18.2h-0.6L319.6,88c8.8,7.2,15.4,10.8,19.7,10.8c3.7,0,7-2.5,9.8-7.4
                    c2.9-4.9,6.4-13.5,10.5-25.8c0.4,11.1,1.2,19,2.3,23.7c1.1,4.7,3.1,7.1,6,7.1c4.1,0,12.5-6.2,25.2-18.5
                    c-10.5,15.6-15.7,25.4-15.7,29.5c0,3.5,2.8,5.2,8.3,5.2c3.5,0,8.9-0.7,16.3-2.2c-15.4,5.5-23.1,15.7-23.1,30.5s7.7,31.7,23.1,50.8
                    C386.7,172.5,377.1,163,373.4,163z M467.9,107c0,0.8,0.4,1.2,1.2,1.2c2.3,0,8.8-3.2,19.7-9.5c-13.5,9.2-20.3,19.7-20.3,31.4
                    c0,11.5,6.8,22.2,20.3,32c-12.1-7.8-18.8-11.7-20-11.7l-0.3,0.3c0,1,7.2,8.3,21.5,21.8c-11.5-10.5-18.2-16.5-20-18.2l25.2,21.5
                    c-14.6-13.3-21.8-20.3-21.8-20.9l0.3-0.3c0.8,0,10,6.8,27.7,20.3c-14.2-11.3-22.6-16.9-25.2-16.9c-0.4,0-0.6,0.2-0.6,0.6
                    c0,2.9,8.6,13.5,25.8,32c-17.6-17.6-27.4-26.5-29.2-26.5c-0.4,0-0.6,0.3-0.6,0.9c0,2.1,5.1,11.7,15.4,28.9
                    c-17.4-22.2-26.4-33.2-26.8-33.2c0,0.4,3.3,5.1,9.8,14.2c-8.6-9.4-15.2-14.2-19.7-14.2c-3.5,0-7,2.5-10.5,7.5s-8,13.6-13.5,25.7
                    c1.6-10.3,2.5-17.6,2.5-22.2c0-5.7-1.3-8.6-4-8.6c-3.5,0-12.5,7.4-27.1,22.2c11.1-16,16.6-25.9,16.6-29.8c0-2.3-1.4-3.4-4.3-3.4
                    c-3.7,0-11.8,2.4-24.3,7.1c17.8-10.7,26.8-16.9,26.8-18.8c0-0.8-1.1-1.2-3.4-1.2c-3.1,0-9.6,0.9-19.7,2.8c18-5.1,27.1-8.2,27.1-9.2
                    s-6-1.5-17.8-1.5c16.4-1.2,24.6-2.4,24.6-3.4c0-0.6-3.6-1.6-10.8-3.1c7.8,0.8,13,1.2,15.7,1.2c2.3,0,3.4-0.3,3.4-0.9
                    s-1.4-1.8-4.3-3.7c5.3,2.3,9,3.4,11.1,3.4c2.5,0,4.2-1.9,5.2-5.8c1,2.9,2.2,4.3,3.4,4.3c1.4,0,4.7-2.3,9.8-6.8
                    c-1.4,2.1-2.3,3.3-2.5,3.7h0.3c0.4,0,5.1-5.6,14.2-16.9c-6.4,5.7-10.2,8.6-11.4,8.6c-0.2,0-0.3-0.2-0.3-0.6c0-1.4,3.2-7.8,9.5-19.1
                    c-6.6,10.1-10.4,15.1-11.4,15.1c-0.4,0-0.6-0.3-0.6-0.9c0-2,1.8-8.7,5.5-20c-6,12.3-10,18.5-12,18.5c-2.5,0-4.7-7.3-6.8-21.8
                    c-1,14.6-3,21.8-5.8,21.8c-2.5,0-7.6-5.7-15.4-17.2c5.1,11.3,7.7,18.4,7.7,21.2c0,2.1-0.9,3.1-2.8,3.1c-2.3,0-7.1-1.9-14.5-5.8
                    c7.2,5.1,10.8,8.4,10.8,9.8c0,0.6-0.5,0.9-1.5,0.9c-3.7,0-13.4-3.6-29.2-10.8c9,2.3,15.6,3.4,19.7,3.4c5.3,0,8-2,8-6.2
                    c0-4.5-3.8-14.3-11.4-29.2c12.1,14.6,20.3,21.8,24.6,21.8c2.7,0,4.9-2.6,6.8-7.7c1.4-4.5,2.9-12.3,4.3-23.4
                    c1.4,19.5,3.2,29.2,5.2,29.2s5.9-9.4,11.7-28.3c-2.7,13.7-4,22.6-4,26.5c0,2.3,0.4,3.4,1.2,3.4c2,0,7.9-8.2,17.5-24.6
                    c-7.2,15.8-10.8,25-10.8,27.7c0,0.8,0.2,1.2,0.6,1.2c2,0,9-6.3,20.9-18.8C473.6,96.1,467.9,104.7,467.9,107z M465.1,141.7
                    c-5.7,0-8.6-1.4-8.6-4.3c0-3.9,4.6-9.4,13.8-16.6c-10.9,8.4-17,12.6-18.5,12.6c-0.4,0-0.6-0.2-0.6-0.6c0-0.8,1.1-3.1,3.4-6.8
                    c-6.2,6-10.5,8.9-13,8.9c-2.3,0-4.9-1.9-7.8-5.8c0.4,6-1.1,8.9-4.6,8.9c-2.3,0-6.6-1-13-3.1c5.3,3.1,8,5.5,8,7.1
                    c0,2.3-5.1,5.3-15.4,9c10.3-0.6,15.4,0.2,15.4,2.5c0,1.9-2.7,5.7-8,11.5c7.4-5.1,12.1-7.7,14.2-7.7c1.8,0,2.8,1.8,2.8,5.5
                    c0,1.6-0.1,3.8-0.3,6.5c3.5-8,6.4-12,8.6-12c1.8,0,4.7,2.9,8.6,8.6c-1.4-4.3-2.2-7.3-2.2-8.9c0-2,1.1-2.9,3.4-2.5
                    c1.8,0.4,5.3,2,10.5,4.6c-4.7-4.7-7.1-8.1-7.1-10.2c0-2.7,5.2-5.2,15.7-7.7C468.5,141.6,466.8,141.7,465.1,141.7z M51.5,236.7
                    c5.7,0,10.6-3.7,14.5-11.1c3.3-6.6,6.9-18.3,10.8-35.1c1.6,15.2,3.5,25.8,5.5,32c2,7.2,5,10.8,8.9,10.8c5.7,0,17-9.8,33.8-29.5
                    c-10.7,20.3-16,33.5-16,39.7c0,5.7,3.8,8.6,11.4,8.6c5.9,0,15.8-1.7,29.5-5.2c-23,9.8-36.5,14.8-40.6,14.8c-0.8,0-1.2-0.2-1.2-0.6
                    c0-1.6,6.5-6.4,19.4-14.2c-11.9,5.5-19.8,8.3-23.7,8.3c-3.3,0-4.9-1.8-4.9-5.3c0-4.5,3.8-15,11.4-31.3c-12.1,16-20.2,24-24.3,24
                    c-2.5,0-4.4-2.7-5.8-8.2c-1.2-4.7-2.4-12.9-3.4-24.7c-3.1,13.3-6,22.6-8.6,27.7c-2.9,5.7-6.4,8.6-10.5,8.6
                    c-5.1,0-13.6-4.7-25.5-14.2c9.6,15.2,14.5,25.6,14.5,31.4c0,4.3-2.1,7.8-6.4,10.5c-4.2,2.7-11.5,5.3-21.6,8
                    c10.3,2.1,17.5,4.2,21.7,6.5s6.3,5.6,6.3,10.2c0,5.5-4.3,15.8-12.9,30.8c11.9-10.3,20.3-15.4,25.2-15.4c3.9,0,7.1,2.7,9.7,8.2
                    c2.6,5.4,5.3,14.7,8.2,27.8c1.6-12.5,3.4-21.2,5.2-26.2c2-5.7,4.9-8.6,8.6-8.6c4.9,0,14.2,6.3,27.7,18.8
                    c-10.3-16.2-15.4-26.9-15.4-32c0-5.3,5.5-8,16.6-8c3.3,0,7.3,0,12,0c-17.4-3.9-31.1-5.8-40.9-5.8c-10.1,0-14.6,2.2-13.5,6.5
                    c-1-4.3-1.5-8.2-1.5-11.7s0.5-5.9,1.5-7.4c-1,1.2,5.3,1.8,19.1,1.8c13.5,0,32.1-0.6,55.7-1.8c-23.6,1.4-35.4,10.4-35.4,26.8
                    c0,16.2,11.8,37.1,35.4,62.8c-23.6-25.6-36.6-38.5-39.1-38.5c-0.4,0-0.6,0.2-0.6,0.6c0,2.9,8.4,15.5,25.2,37.8
                    C117.2,337.8,107,323,107,320.3c0-0.2,0.1-0.3,0.3-0.3c1.8,0,9.9,7.9,24.3,23.7c-16.6-15.6-26.9-23.4-30.8-23.4
                    c-2.1,0-3.1,1.7-3.1,5.2c0,5.3,3.1,17.7,9.2,37.2c-11.5-23.4-19.1-35.1-22.8-35.1s-6.2,13.7-7.4,41.2c-3.7-16.6-7.2-28.2-10.5-34.8
                    c-3.5-7.4-8-11.1-13.5-11.1c-6.8,0-18.6,6.6-35.4,19.7c12.1-19,18.2-32,18.2-39c0-5.7-3-10-9.1-12.9s-16.3-5.3-30.6-7.4
                    c14.4-3.9,24.3-7.5,29.8-10.7c6.4-3.7,9.5-8.5,9.5-14.4c0-7.4-6.3-20.6-18.8-39.6C33,230.7,44.7,236.7,51.5,236.7z M195.5,258.3
                    c2.9,5.5,6.7,8.3,11.4,8.3c5.1,0,13.7-3.6,25.8-10.8c-11.1,13.7-16.6,23.3-16.6,28.6c0,3.9,2.3,7.2,6.8,9.8
                    c3.9,2.5,10.9,5.2,20.9,8.3c-17.2-1.8-34.3-2.8-51.1-2.8s-30.6,0.9-41.2,2.8c6.4,0.2,10.9,0.8,13.5,1.8c2.7,1,4,2.9,4,5.5
                    c0,3.5-2.9,10.4-8.6,20.6c8-7.2,13.6-10.8,16.9-10.8c2.5,0,4.6,1.8,6.5,5.3s3.8,9.5,5.8,17.8c2-10.3,4.2-17.3,6.3-21.2
                    c2.2-3.9,5.6-5.8,10.3-5.8c3.5,0,8.6,1.3,15.4,4c-7.8-5.4-11.7-8.8-11.7-10.4c0-0.4,0.5-0.7,1.5-0.7c3.7,0,13.7,3.7,30.2,11.1
                    c-4.7-1-8.8-1.5-12.3-1.5c-12.3,0-21,2.8-26,8.3s-9.8,17-14.3,34.5c-2.9-12.1-5.4-20.5-7.7-25.2c-2.9-5.3-6.3-8-10.2-8
                    c-4.9,0-13.5,4.9-25.8,14.8c9-13.9,13.5-23.6,13.5-28.9c0-4.3-2.2-7.7-6.6-10.2c-4.4-2.5-11.8-4.9-22.3-7.4
                    c10.7-2.3,18.2-4.6,22.6-7.1c4.4-2.5,6.6-5.8,6.6-10.2c0-5.5-4.3-15.2-12.9-28.9c12.3,9.8,20.8,14.8,25.5,14.8c3.9,0,7.1-2.7,9.5-8
                    c2-4.5,4.2-12.8,6.5-24.9C190.4,244.5,193,253.3,195.5,258.3z M186.8,285.7c12.9,0,24.7,2.6,35.4,7.7c-12.3-8.2-18.5-13.8-18.5-16.9
                    c0-2.3,2.7-4.9,8-8c-4.5,0.6-8,0.9-10.5,0.9c-4.3,0-7.4-0.8-9.4-2.3s-3.7-4.4-5.4-8.5c-1.6,4.1-3.4,6.9-5.2,8.5
                    c-1.8,1.5-4.9,2.3-9.2,2.3c-2.5,0-5.8-0.3-10.2-0.9c5.3,3.1,8,5.7,8,8c0,3.1-6.2,8.7-18.5,16.9C162.1,288.2,173.9,285.7,186.8,285.7
                    z M301.6,330c-1,0-1.5,0.8-1.5,2.5c0,3.9,3.3,12.6,9.8,26.2c-9.2-19.1-13.8-36.2-13.8-51.4c0-15.4,4.6-26.2,13.8-32.3
                    c-5.1,1.6-9,2.5-11.7,2.5c-4.3,0-7.3-1.9-9.1-5.7c-1.7-3.8-3.2-10.9-4.5-21.4c-4.5,15-8.6,22.5-12.3,22.5c-3.1,0-8-3.9-14.8-11.7
                    c4.3,9.8,6.5,16.5,6.5,20c0,2.9-1.2,4.8-3.5,5.8c-2.4,1-6.4,1.6-12.2,1.8c9.2,2.1,13.8,9.4,13.8,22.2c0,12.7-4.6,28.6-13.8,47.7
                    c6.6-13.5,9.8-22.3,9.8-26.2c0-1.6-0.5-2.5-1.5-2.5c-3.7,0-13.2,9.5-28.6,28.6c15.4-19.1,23.1-39.9,23.1-62.5s-7.7-42.9-23.1-60.9
                    c15.4,18.1,24.8,27.1,28.3,27.1c0.8,0,1.2-0.6,1.2-1.8c0-3.7-3.5-12.1-10.5-25.2c10,18.1,15.1,28.9,15.1,32.6c0,0.6-0.2,0.9-0.6,0.9
                    c-1.9,0-6.7-4.6-14.4-13.8c8.6,10.3,13.6,16.3,15.1,18.2h-0.6L247.8,255c8.8,7.2,15.4,10.8,19.7,10.8c3.7,0,7-2.5,9.8-7.4
                    c2.9-4.9,6.4-13.5,10.5-25.8c0.4,11.1,1.2,19,2.3,23.7c1.1,4.7,3.1,7.1,6,7.1c4.1,0,12.5-6.2,25.2-18.5
                    c-10.5,15.6-15.7,25.4-15.7,29.5c0,3.5,2.8,5.2,8.3,5.2c3.5,0,8.9-0.7,16.3-2.2c-15.4,5.5-23.1,15.7-23.1,30.5s7.7,31.7,23.1,50.8
                    C314.8,339.5,305.3,330,301.6,330z M389,338.9c0-3.5,1.6-5.2,4.7-5.2c2.7,0,7.4,1.4,14.1,4.3c-11.3-7.6-16.9-12.1-16.9-13.5
                    c0-0.2,0.3-0.3,0.9-0.3c2,0,7.4,1.8,16,5.5c-9.6-4.1-15.3-6.6-16.9-7.4l15.7,7.4c-7.8-2.5-13.1-3.7-16.1-3.7c-3.2,0-4.7,1.6-4.5,4.7
                    c0.2,2.9,2,8.2,5.5,15.9c-7.2-8.8-12.1-13.2-14.8-13.2c-3.1,0-5.6,6.4-7.7,19.1c-2.3-8.6-4.7-14.6-7.4-17.8
                    c-2.7-3.3-6.8-4.9-12.3-4.9c-4.5,0-11.6,1.2-21.2,3.7c9.4-7.5,14.2-13.4,14.2-17.7c0-3.5-2.2-7.1-6.5-10.8
                    c-4.3-3.8-11.6-8.7-21.8-14.8c11.9,3.7,19.5,5.5,22.8,5.5c2.3,0,3.4-0.6,3.4-1.8c0-2.7-7.7-11.6-23.1-26.8
                    c13.9,10.5,22.3,15.7,24.9,15.7c1,0,1.5-0.6,1.5-1.8c0-3.3-5.6-14.8-16.9-34.5c13.1,15.2,22.3,22.8,27.4,22.8
                    c3.9,0,7.1-3.6,9.5-10.8c2.3-6.4,4.7-17.5,7.4-33.5c1.8,16,3.7,27.1,5.5,33.2c2,7.2,4.6,10.8,7.7,10.8c4.3,0,12.2-7.8,23.7-23.4
                    l-16.9,30.5l16.9-30.5c-9.6,17.4-15.2,26.2-16.6,26.2c-0.2,0-0.3-0.2-0.3-0.6c0-3.3,5.6-17.7,16.9-43.4
                    c-8.4,19.7-12.6,31.9-12.6,36.6c0,1.2,0.3,1.8,0.9,1.8c3.5,0,13.7-12.8,30.8-38.5c-17,25.6-25.5,48.8-25.5,69.5s8.5,35.2,25.5,43.4
                    c-11.9-0.2-20.7,1-26.5,3.7c-6.4,2.9-11.9,8.7-16.6,17.5c-3.9,7.6-8.6,20.7-14.2,39.4c-2.3-26.5-5.3-40.2-9.2-41.2
                    c-3.9-0.8-12,10.2-24.3,32.9c6.8-20.5,10.2-33.4,10.2-38.8c0-3.3-1.1-4.9-3.4-4.9c-3.3,0-11.3,5.2-24,15.7
                    c15.2-15.6,24.7-23.4,28.3-23.4c1,0,1.5,0.6,1.5,1.8c0,3.3-3.3,10.5-9.8,21.5c9-14,13.9-20.9,14.8-20.9c0.2,0,0.3,0.2,0.3,0.6
                    c0,1.8-3.7,11.7-11.1,29.5c8.2-17.2,12.9-25.8,14.2-25.8c0.2,0,0.3,0.4,0.3,1.2c0,2.7-2.4,12.9-7.1,30.8c7.2-19.1,12-28.6,14.5-28.6
                    s4.5,11.1,6.2,33.2c2.7-23.4,6-35.1,10.2-35.1c3.3,0,9.4,7.3,18.5,21.8C392.5,354.3,389,343.4,389,338.9z M389,305.5
                    c0-4.7,5.8-8.6,17.5-11.9c-11.7-1.8-17.5-5-17.5-9.4c0-3.5,3.3-10.3,9.8-20.4c-8,6.6-13.5,9.8-16.6,9.8c-2.7,0-4.8-1.8-6.3-5.5
                    c-1.5-3.6-3-9.8-4.5-18.5c-1.6,8.7-3.2,14.8-4.6,18.1c-1.8,4-4,5.9-6.5,5.9c-3.3,0-8.8-3.4-16.6-10.2c5.9,10,8.9,16.8,8.9,20.4
                    c0,2.8-1.4,5-4.1,6.6c-2.7,1.5-7.2,2.9-13.5,4.1c11.7,2.8,17.5,6.5,17.5,11c0,3.7-3.3,10.5-9.8,20.4c7.6-5.5,13-8.3,16.3-8.3
                    c2.7,0,4.8,1.8,6.3,5.4s3,9.7,4.5,18.3c1.8-8.6,3.6-14.7,5.4-18.3c1.7-3.6,4-5.4,6.9-5.4c3.3,0,8.7,2.8,16.3,8.3
                    C392.2,316.2,389,309.4,389,305.5z M479.2,258.3c2.9,5.5,6.7,8.3,11.4,8.3c5.1,0,13.7-3.6,25.8-10.8c-11.1,13.7-16.6,23.3-16.6,28.6
                    c0,3.9,2.3,7.2,6.8,9.8c3.9,2.5,10.9,5.2,20.9,8.3c-17.2-1.8-34.3-2.8-51.1-2.8c-16.8,0-30.6,0.9-41.2,2.8
                    c6.4,0.2,10.9,0.8,13.5,1.8c2.7,1,4,2.9,4,5.5c0,3.5-2.9,10.4-8.6,20.6c8-7.2,13.6-10.8,16.9-10.8c2.5,0,4.6,1.8,6.5,5.3
                    c1.8,3.5,3.8,9.5,5.8,17.8c2-10.3,4.2-17.3,6.3-21.2c2.2-3.9,5.6-5.8,10.3-5.8c3.5,0,8.6,1.3,15.4,4c-7.8-5.4-11.7-8.8-11.7-10.4
                    c0-0.4,0.5-0.7,1.5-0.7c3.7,0,13.7,3.7,30.2,11.1c-4.7-1-8.8-1.5-12.3-1.5c-12.3,0-21,2.8-26,8.3s-9.8,17-14.3,34.5
                    c-2.9-12.1-5.4-20.5-7.7-25.2c-2.9-5.3-6.3-8-10.2-8c-4.9,0-13.5,4.9-25.8,14.8c9-13.9,13.5-23.6,13.5-28.9c0-4.3-2.2-7.7-6.6-10.2
                    s-11.8-4.9-22.3-7.4c10.7-2.3,18.2-4.6,22.6-7.1s6.6-5.8,6.6-10.2c0-5.5-4.3-15.2-12.9-28.9c12.3,9.8,20.8,14.8,25.5,14.8
                    c3.9,0,7.1-2.7,9.5-8c2-4.5,4.2-12.8,6.5-24.9C474.1,244.5,476.7,253.3,479.2,258.3z M470.5,285.7c12.9,0,24.7,2.6,35.4,7.7
                    c-12.3-8.2-18.5-13.8-18.5-16.9c0-2.3,2.7-4.9,8-8c-4.5,0.6-8,0.9-10.5,0.9c-4.3,0-7.4-0.8-9.4-2.3s-3.7-4.4-5.4-8.5
                    c-1.6,4.1-3.4,6.9-5.2,8.5c-1.8,1.5-4.9,2.3-9.2,2.3c-2.5,0-5.8-0.3-10.2-0.9c5.3,3.1,8,5.7,8,8c0,3.1-6.2,8.7-18.5,16.9
                    C445.8,288.2,457.6,285.7,470.5,285.7z M537.9,262.3c1.4,0,2.2-1.9,2.2-5.8c0-4.7-1-11.8-3.1-21.2c4.1,18.1,6.2,29.4,6.2,34.2
                    c0,1.4-0.2,2.2-0.6,2.2c-1,0-2.9-3.5-5.5-10.5c3.5,8.8,5.5,14.1,6.2,15.7c-0.2-0.8-2.1-6-5.5-15.7c3.9,4.5,7.3,6.8,10.2,6.8
                    c3.5,0,7.9-2.8,13.2-8.3c4.7-4.9,12-13.9,21.8-27.1c-9.8,18.9-14.8,30.3-14.8,34.2c0,1,0.3,1.5,0.9,1.5c1.8,0,6.5-4.8,13.8-14.5
                    c-15.8,12.5-26.3,21.7-31.4,27.5c-5.1,5.8-9.5,13.3-13.2,22.3c0.6-0.4,1.2-0.6,1.8-0.6c2.5,0,3.7,4,3.7,12c0,10.1-1.8,24.6-5.5,43.7
                    c1.6-9.2,2.5-16.3,2.5-21.2c0-7.4-2-9.2-5.8-5.5c-3.9,3.5-9.5,12.4-16.9,26.8c9.8-19.1,14.8-39.9,14.8-62.5s-4.9-42.9-14.8-60.9
                    C527.8,253.2,534.4,262.3,537.9,262.3z"/>
                <path id="start" d="M137.9,125L126,161h-15.3l38.9-114.6h17.8L206.5,161h-15.8l-12.2-36H137.9z M175.4,113.5l-11.2-33
                    c-2.5-7.5-4.2-14.3-6-20.9h-0.3c-1.7,6.8-3.6,13.8-5.8,20.7l-11.2,33.1H175.4z M222.4,101c0-8.5-0.2-15.5-0.7-22.3h13.3l0.8,13.6
                    h0.3c4.1-7.8,13.6-15.5,27.2-15.5c11.4,0,29.1,6.8,29.1,35V161h-15v-47.4c0-13.3-4.9-24.3-19-24.3c-9.9,0-17.5,7-20.1,15.3
                    c-0.7,1.9-1,4.4-1,7V161h-15V101z M316.7,101c0-8.5-0.2-15.5-0.7-22.3h13.3l0.9,13.6h0.3c4.1-7.8,13.6-15.5,27.2-15.5
                    c11.4,0,29.1,6.8,29.1,35V161h-15v-47.4c0-13.3-4.9-24.3-19-24.3c-9.9,0-17.5,7-20.1,15.3c-0.7,1.9-1,4.4-1,7V161h-15V101z
                    M456.6,161l-1.2-10.4h-0.5c-4.6,6.5-13.4,12.2-25.2,12.2c-16.7,0-25.2-11.7-25.2-23.6c0-19.9,17.7-30.8,49.5-30.6V107
                    c0-6.8-1.9-19-18.7-19c-7.7,0-15.6,2.4-21.4,6.1l-3.4-9.9c6.8-4.4,16.7-7.3,27-7.3c25.2,0,31.3,17.2,31.3,33.7v30.8
                    c0,7.1,0.3,14.1,1.4,19.7H456.6z M454.4,119.1c-16.3-0.3-34.8,2.6-34.8,18.5c0,9.7,6.5,14.3,14.1,14.3c10.7,0,17.5-6.8,19.9-13.8
                    c0.5-1.5,0.8-3.2,0.8-4.8V119.1z M130.6,326c-6.6,2.4-19.7,6.3-35.2,6.3c-17.3,0-31.6-4.4-42.8-15.1c-9.9-9.5-16-24.8-16-42.7
                    c0.2-34.2,23.6-59.2,62-59.2c13.3,0,23.6,2.9,28.6,5.3l-3.6,12.1c-6.1-2.7-13.8-4.9-25.3-4.9c-27.9,0-46.1,17.3-46.1,46.1
                    c0,29.1,17.5,46.2,44.2,46.2c9.7,0,16.3-1.4,19.7-3.1v-34.2H92.9v-11.9h37.7V326z M161.9,292.6c0.3,20.2,13.3,28.6,28.2,28.6
                    c10.7,0,17.2-1.9,22.8-4.2l2.5,10.7c-5.3,2.4-14.3,5.1-27.4,5.1c-25.3,0-40.5-16.7-40.5-41.5c0-24.8,14.6-44.4,38.6-44.4
                    c26.9,0,34,23.6,34,38.8c0,3.1-0.3,5.4-0.5,7H161.9z M205.8,281.9c0.2-9.5-3.9-24.3-20.7-24.3c-15.1,0-21.8,13.9-23,24.3H205.8z
                    M238.8,271c0-8.5-0.2-15.5-0.7-22.3h13.3l0.8,13.6h0.3c4.1-7.8,13.6-15.5,27.2-15.5c11.4,0,29.1,6.8,29.1,35v49.1h-15v-47.4
                    c0-13.3-4.9-24.3-19-24.3c-9.9,0-17.5,7-20.1,15.3c-0.7,1.9-1,4.4-1,7v49.5h-15V271z M404,248.8c-0.3,6-0.7,12.6-0.7,22.6v47.8
                    c0,18.9-3.7,30.4-11.7,37.6c-8,7.5-19.5,9.9-29.9,9.9c-9.9,0-20.7-2.4-27.4-6.8l3.7-11.4c5.4,3.4,13.9,6.5,24.1,6.5
                    c15.3,0,26.5-8,26.5-28.7v-9.2h-0.3c-4.6,7.6-13.4,13.8-26.2,13.8c-20.4,0-35-17.3-35-40.1c0-27.9,18.2-43.7,37.1-43.7
                    c14.3,0,22.1,7.5,25.7,14.3h0.3l0.7-12.4H404z M388.5,281.2c0-2.5-0.2-4.8-0.8-6.8c-2.7-8.7-10-15.8-20.9-15.8
                    c-14.3,0-24.5,12.1-24.5,31.1c0,16.1,8.2,29.6,24.3,29.6c9.2,0,17.5-5.8,20.7-15.3c0.9-2.6,1.2-5.4,1.2-8V281.2z M436.5,292.6
                    c0.3,20.2,13.3,28.6,28.2,28.6c10.7,0,17.2-1.9,22.8-4.2l2.5,10.7c-5.3,2.4-14.3,5.1-27.4,5.1c-25.3,0-40.5-16.7-40.5-41.5
                    c0-24.8,14.6-44.4,38.6-44.4c26.9,0,34,23.6,34,38.8c0,3.1-0.3,5.4-0.5,7H436.5z M480.3,281.9c0.2-9.5-3.9-24.3-20.7-24.3
                    c-15.1,0-21.8,13.9-23,24.3H480.3z M513.3,274.4c0-9.7-0.2-18-0.7-25.7h13.1l0.5,16.1h0.7c3.7-11,12.8-18,22.8-18
                    c1.7,0,2.9,0.2,4.2,0.5v14.1c-1.5-0.3-3.1-0.5-5.1-0.5c-10.5,0-18,8-20.1,19.2c-0.3,2-0.7,4.4-0.7,7v43.9h-14.8V274.4z"/>
                </svg>
            </Cover>
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