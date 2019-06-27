import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import posed from "react-pose"
import _ from 'lodash'
import Flickity from 'react-flickity-component'

import {TweenLite} from "gsap/TweenMax"

require('intersection-observer')


const StyledInfiniteScroll = styled.div`
  position: relative;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  z-index: 1;
  cursor: pointer !important;

  div:nth-child(1) {
    display: none !important;
    height: 0px;
  }
  
  }
`


const StyledImg = styled(Img)`
    width: 100%;
    height: 100%;
    margin: 0 75px;
    padding: 0;
`

const StyledBasicImg = styled.img`
    height: 100%;
    margin: 0 25px;
    padding: 0;
`;

const ZoomDiv = posed.div({
    'open': {
    //  applyAtStart: { scale: 2 },
     position:'fixed',
     top: (props) => { return props.windowWidth >= 992 ? (props.windowHeight / 2) - 175 - 25 : (props.windowHeight / 2) - 75 - 25 },
     scale: 1.6,
    //  height: (props) => { return props.windowHeight },
     transition: {ease: [0.08, 0.69, 0.2, 0.99], duration: 300 },
     flip: true,
    },

    'closed': {
     applyAtStart: { scale: 1 },
    //  applyAtEnd: { scale: 1 },
     scale: 1,
     position:'static',
     top: 'auto',
     transition: {ease: 'easeInOut', duration: 300 },
     flip: true
    }
});

const StyledZoomDiv = styled(ZoomDiv)`
    height: 150px; 
    width: 100%; 
    z-index: 999;

    @media(min-width: 992px) {
        height: 350px; 
    }
`

const Holder = styled.div`
    position: relative;
    height: 150px;
    margin-bottom: 150px;
    font-family: 'Cormorant-Regular';
    // border-top: 1px solid black;
    // border-bottom: 1px solid black;
    // padding: 25px 0;

    @media(min-width: 992px) {
        height: 350px; 
    }  
`

const Frame = posed.div({
    open: {
      applyAtStart: { display: 'block' },
      opacity: 1,
      transition: {ease: 'easeInOut', duration: 300 },
    },
    closed: {
      applyAtEnd: { display: 'none' },
      transition: {ease: 'easeInOut', duration: 300 },
      opacity: 0
    }
  });

const StyledFrame = styled(Frame)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    background: ${props => props.backgroundColor};
    transform: translateZ(0) translateY(-50%);
    height: 200vh;
    z-index: -1;
`;

const Description = posed.div({

    'open': {
        //  x: 0,
         opacity: 1,
         transition: {ease: [0.08, 0.69, 0.2, 0.99], duration: 300 },
        },
    
        'closed': {
        //  x: '-100%',
         opacity: 0,
         transition: {ease: [0.08, 0.69, 0.2, 0.99], duration: 300 },
        }

})

const StyledDescription = styled(Description)`
  font-family: 'Cormorant-Bold';
  position: absolute;
  margin-top: -25px;
  display: flex;
  width: 100%;
  font-size: 14px;

    @media(min-width: 992px) {
        margin-top: -25px;
        font-size: 20px;
    }
`


const Title = styled.div`
  margin-left: 25px;
`

const Year = styled.div`
    margin-left: 25px;
`

const CloseButton = posed.div({
    'open': {
        //  x: 0,
         opacity: 1,
         transition: {ease: [0.08, 0.69, 0.2, 0.99], duration: 300 },
        },
    
        'closed': {
        //  x: '-100%',
         opacity: 0,
         transition: {ease: [0.08, 0.69, 0.2, 0.99], duration: 300 },
        }
});

const StyledCloseButton = styled(CloseButton)`
    margin-left: 25px;
    margin-top: 35px;
    font-size: 14px;

    @media(min-width: 992px) {
        font-size: 20px;
    }
`

const ImageInfo = styled.div`
    margin-left: 25px;
`



class InfiniteSlider extends React.PureComponent {
    constructor(props){
        super(props);

        this.state = {
            allData: null,
            initAllData: null,
            isZoomed: false,
            scrollDirection: null,
            imageInfo: null,
            blurred: [],
            isInWindow: false
        }

        this.counter = 0;

        this.initPageScroll = 0;

        this.interval = null;

        this.direction = null;

        this.displayData = [];

        this.windowHeight = null;

        this.windowWidth = null;

        this.touchMoved = null;

        this.windowMobile = null;

        this.handleSliderScroll = _.throttle(this.handleSliderScroll.bind(this), 100);

        this._handleTitleChange =  this._handleTitleChange.bind(this);

        this.mouse = null;   

    }

    componentWillMount(){

    }

    componentDidUpdate(){
        if(this.flkty) {
            this.flkty.startAnimation();
        }
    }

    componentDidMount(){

        this.mouse = document.querySelector('.mouse');


        this.setState({
            allData: this.props.data,
            initAllData: this.props.data,
        });

        this.windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        this.windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        
        setTimeout(function() {

            if(this.props.isMobile) {

                return 

                // this.windowMobile = document.querySelector('.infinite-scroll');

                // this.windowMobile.addEventListener('scroll', this.handleSliderScroll);

            }

            // if(this.props.isChrome === false && this.windowWidth >= 992) return;

                window.addEventListener('scroll',this.handleSliderScroll);
    
                this.flkty.on('dragMove', function(mouseVector) {
                 
                    const x = mouseVector.clientX;
                    const y = mouseVector.clientY;
                    const mouse = document.querySelector('.mouse');
              
              
                    TweenLite.to(mouse, 0, {x: x, y: y});
    
                });


          }.bind(this),750);

        //   let random = Math.floor(Math.random()*100);
        //   let minusOrPlus = Math.random();

        //   if(minusOrPlus > 0.5) random = -random;

        //   setTimeout(() => {
        //     this.flkty.applyForce(random);
        //     this.flkty.startAnimation();
        //     this.flkty.dragEnd();
        //   },3500)  
          

          let blurredArray = [];

          this.props.data.images.forEach((item)=>{
              blurredArray.push({
                  blurred: false
            });
          }) 

          this.setState({
              blurred: blurredArray
          });

          setTimeout( () => {


            var callback = function(entries, observer) { 
                entries.forEach(entry => {

                    // console.log(
                    // entry.boundingClientRect,
                    // entry.intersectionRatio,
                    // entry.intersectionRect,
                    // entry.isIntersecting,
                    // entry.rootBounds,
                    // entry.target,
                    // entry.time,
                    // )

                    if(entry.intersectionRatio === 0) {
                        this.setState({
                            isInWindow: false
                        })  
                    } else {
                        this.setState({
                            isInWindow: true
                        })                       
                    }
                });
              }.bind(this);

            var options = {
                root: null,
                rootMargin: '0px',
                threshold: [0, 0.1]
              }
              
              var observer = new IntersectionObserver(callback, options);
    
              observer.observe(this.newRef);
          },1000);


       
          


    }


    handleSliderScroll() {

        let initPageScroll = this.initPageScroll;

        let speed;

        if(this.windowWidth >= 992) {
            speed = Math.random() * 1;
        } else {
            speed = Math.random() * 0.2;
        }


        let desktop = true;

        // this.windowWidth >= 992 && window ? desktop = true : desktop = false;
        

        if (this.state.isInWindow === true) {
  
          if((desktop ? window.scrollY : this.windowMobile.scrollTop) >= initPageScroll) {

            if(this.props.number % 2 == 0) {
                
                this.flkty.applyForce(speed);
                this.flkty.startAnimation();
                this.flkty.dragEnd();

                this.setState({
                    scrollDirection: 'left'
                })

            } else {
                this.flkty.applyForce(-speed);
                this.flkty.startAnimation();
                this.flkty.dragEnd();

                this.setState({
                    scrollDirection: 'right'
                })

            }
    
          } else if ((desktop ? window.scrollY : this.windowMobile.scrollTop) <= initPageScroll ) {

            if(this.props.number % 2 == 0) {

                this.flkty.applyForce(-speed);
                this.flkty.startAnimation();
                this.flkty.dragEnd();

                this.setState({
                    scrollDirection: 'right'
                })


            } else {

                this.flkty.applyForce(speed);
                this.flkty.startAnimation();
                this.flkty.dragEnd();

                this.setState({
                    scrollDirection: 'left'
                })

            }

    
          }
    
          desktop ? (this.initPageScroll = window.scrollY) : (this.initPageScroll = this.windowMobile.scrollTop);

          setTimeout(()=>{
              this.setState({
                  scrollDirection: null
              })
          },1000);

        }
   
        


    }

    zoomIn = () => {

        this.props.handleClick();

        if(this.windowWidth >= 992) {

            if(this.props.containerClassName) {
                document.querySelector(this.props.containerClassName).addEventListener('scroll', this.zoomOut);
            } else {
                window.addEventListener('scroll', this.zoomOut);
            }

        }
    

        this.setState({
            isZoomed: true
        });
        
      }
    
    zoomOut = () => {

        this.props.handleClick();

        if(this.props.containerClassName) {
            document.querySelector(this.props.containerClassName).removeEventListener('scroll', this.zoomOut);
        } else {
            window.removeEventListener('scroll', this.zoomOut);
        }
        
            this.setState({
                isZoomed: false
            });

      };

    toggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn());


    _onTouchStart = (e) => {

        this.touchMoved = false;

    }

    _onTouchMove = (e) => {

        this.touchMoved = true;

    }

    _onTouchEnd = (e) => {

        if(this.touchMoved != true ) {

            if(this.state.isZoomed) {
                return
            }

            this.toggleZoom();

        }

    }

    _handleTitleChange = (e, index) => {

        // this.setState({
        //     imageInfo: e
        // });

        this.toggleBlur(index);

    }

    toggleBlur = (index) => {

        let blurredImage = this.state.blurred;

        let bool = blurredImage[index];

        blurredImage[index] = !bool;

        this.setState({
            blurred: blurredImage
        });

        this.forceUpdate()
    }

    mouseEnter = () => {

        if(this.windowWidth <= 992) {
            return
        }

        if(this.state.isZoomed) {
            this.props.mouseEnter('infiniteSliderIsZoomed');
        } else {
            this.props.mouseEnter('infiniteSliderIsHovered');
        }
    
        // if(this.state.isZoomed) {
        //     return
      
        // let startTime = new Date().getTime();
        // let currentTime;
      
      
        // this.interval = setInterval( () => {
            
        //         let currentTime = new Date().getTime();
              
      
        //         if(currentTime - startTime > 1000) {
        //             this.toggleZoom();
        //             clearInterval(this.interval);
                    
        //         }
      
        //     },100);
      
      }
      
      mouseLeave = () => {

        this.props.mouseLeave();
      
        clearInterval(this.interval);
    
      
      }

      mouseClick = () => {

        if(this.state.isZoomed) return
        
        this.props.mouseEnter('infiniteSliderIsNotZoomed');
        setTimeout(()=>{
            this.toggleZoom();
        },500)
      }

    


    render(){

        const flickityOptions = {

            prevNextButtons: false,   
            pageDots: false,
            freeScroll: true,
            wrapAround: this.props.isChrome === false && this.windowWidth >= 992 ? false : true,
            lazyLoad: true,
            freeScrollFriction: 0.03,
            cellAlign: 'left',
        }

        const {allData, initAllData} = this.state;



       
        return (
            <Holder ref={div => this.newRef = div} className={this.state.isZoomed ? 'open-holder block-slider' : 'closed-holder block-slider' } onTouchStart={this._onTouchStart} onTouchEnd={this._onTouchEnd} onTouchMove={this._onTouchMove}>
            <StyledZoomDiv  windowHeight={this.windowHeight} windowWidth={this.windowWidth} pose={this.state.isZoomed ? 'open' : 'closed' }>
            { allData != null ?

            <>
            <StyledDescription pose={this.state.isZoomed ? 'open' : 'closed' }>
                 <Title>
                    {this.state.allData.projectName}
                </Title> 

                <Year>
                    {this.state.allData.projectYear}
                </Year>

                <ImageInfo>
                    {this.state.imageInfo}
                </ImageInfo>
            </StyledDescription> 

            <div style={{width: '100vw', height:'100%'}} onClick={this.mouseClick} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                    <Flickity
                    flickityRef={c => this.flkty = c}
                    ref={ div => this.sliderRef = div }
                    className={this.state.scrollDirection ? (this.state.scrollDirection == 'right' ? 'infinite-slider scrolling-right' : 'infinite-slider scrolling-left') : 'infinite-slider' } // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    >
                    {
                        allData.images.map((item, index) => { 

                            let width;

                            if(window.innerWidth > 992) {
                                width = item.image.localFile.childImageSharp.fluid.aspectRatio * 350;
                            } else {
                                width = item.image.localFile.childImageSharp.fluid.aspectRatio * 150;
                            }
                        
                            return (
                            // <img className="slider-image" ref={img => this.imageRef = img} key={index} src={item.image.localFile.childImageSharp.fluid.src}/>
                            // <div key={index} className={this.state.blurred[index] == false ? 'blurred image-to-blur' : 'image-to-blur'} onMouseEnter={() => {this._handleTitleChange(item.image_caption.text, index)}} onMouseLeave={() => {this._handleTitleChange(null, index)}}>
                            <div key={index} className={this.state.blurred[index] === false ? 'blurred image-to-blur' : 'image-to-blur'} onMouseEnter={() => {this._handleTitleChange(null, index)}} onMouseLeave={() => {this._handleTitleChange(null, index)}}>
                            <StyledImg className="slider-image" 
                                        style={{width: width }}
                                        // alt={item.image_caption.text}
                            ref={img => this.imageRef = img} fluid={item.image.localFile.childImageSharp.fluid}/>
                            </div>
                            )
                        })
                    }

                    </Flickity>
            </div>
            </>

                    :

                    <div></div>





            }
            <StyledFrame backgroundColor={this.props.backgroundColor} pose={this.state.isZoomed ? 'open' : 'closed' }/>
            <StyledCloseButton  pose={this.state.isZoomed ? 'open' : 'closed' }>
                <span onMouseEnter={this.props.mouseEnterLink} onMouseLeave={this.props.mouseLeaveLink} className="can-click" onClick={this.toggleZoom}>close</span>
            </StyledCloseButton> 
            </StyledZoomDiv>
            </Holder>
        )
    }
}

export default InfiniteSlider
