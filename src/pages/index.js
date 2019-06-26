import React from "react"
import { Link } from "gatsby"
import Logo from "../images/AnnaGengerLogo.svg"
import { graphql } from "gatsby"
import styled from "styled-components"
import _ from 'lodash'
import posed from 'react-pose'
import Mouse from '../components/mouse'

import PerfectScrollbar from "react-perfect-scrollbar"


import {TweenLite, Power1, Power3} from 'gsap/TweenMax'

import { Controller, Scene } from 'react-scrollmagic'


import SEO from "../components/seo"

import InfiniteSlider from "../components/infiniteslider"
import AboutPage from "../components/about-page"

import PlusButton from '../images/Plus_Button.svg'
import MinusButton from '../images/Minus_Button.svg'

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


const Transition = posed.div({
  preEnter: {
    x: 0,
    opacity: 1,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      // delay: 600,
      duration: 600,
      ease: 'easeInOut'
      },

      // applyAtEnd: { zIndex: 1 },
  },
    exit: { 
      x: 0,
      opacity: 1,
    transition: {
      duration: 600,
      ease: 'easeInOut'
      },
      
  },
})

const Drawer = posed.div({
  openIndex: {
    x: '-10%',
    // applyAtStart: {
    //   position: 'fixed',
    // },
    transition: {
      duration: 600,
      ease: 'easeInOut'
      },
  },
    closedIndex: { 
      x: 0,
      // applyAtEnd: {
      //   position: 'static',
      // },
    transition: {
      duration: 600,
      ease: 'easeInOut'
      },
      
  },
});


let BackgroundImage = styled.img`
  position: fixed;
  // display: none;
  z-index: -1;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%;
  margin: 0;
`

let BackgroundImage2 = styled.img`
  position: fixed;
  top: 50%; // required as well.
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  pointer-events: none;
  opacity: 0;
  transition-duration: 2s;
  z-index: 800;
`

let ProjectDiv = styled.div`

  position: fixed ;
  -webkit-overflow-scrolling: touch;
  width: 100vw;
  height: 100%;
  background-color: transparent;
  z-index: 800 !important;
  overflow-y: scroll ;
  overflow-x: hidden;

  @media(min-width: 992px) {
    position: relative;
    overflow: auto;
  }

`

const StyledLink = styled(Link)`
  position: fixed;
`

const Overlay = posed.div({
  open: {
    applyAtStart: { display: 'inline-block' },
    opacity: 0.7,
    transition: {ease: 'easeInOut', duration: 300 },
  },
  closed: {
    applyAtEnd: { display: 'none' },
    transition: {ease: 'easeInOut', duration: 300 },
    opacity: 0
  }
});

const StyledOverlay = styled(Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  background: black;
  height: 100vh;
  width: 100%;
  z-index: 990;
`

const About = styled.div`
  position: fixed;
  height: 50px;
  bottom: -150px;
  right: 35px;
  margin-bottom: 35px;
  z-index: 990;

  img {
    height: 100%;
  }

  @media(min-width: 992px) {
    height: 75px;
  }
`
const AboutMinus = posed.div({
  openAbout: {
    x: '0',
    applyAtStart: { display: 'block' },
    transition: {ease: 'easeInOut', duration: 600 },
  },
  closedAbout: {
    x: '400%',
    transition: {ease: 'easeInOut', duration: 600 },
  }
});

const StyledAboutMinus = styled(AboutMinus)`
  position: fixed;
  display: none;
  // font-family: 'Cormorant-Bold';
  // display: flex;
  height: 50px;
  // font-size: 36px;
  // color: white;
  bottom: 0;
  right: 35px;
  margin-bottom: 35px;
  // margin-right: -130px;
  // transform-origin: bottom left;
  // transform: rotateZ(-90deg);
  z-index: 999;

  img {
    height: 100%;
  }

  @media(min-width: 992px) {
    height: 75px;
  }
`

const SpacerTop = styled.div`
  position: relative;
  height: 100vh;
  background: transparent
`

const Spacer = styled.div`
  position: relative;
  height: 100px;
  background: transparent
`

const CornerSnipTop = styled.div`
  clip-path: 
  polygon(
    3% 0%,     /* top left */
    97% 0%,    /* top right */
    100% 100%,  /* bottom right */
    100% 100%,  /* bottom right */
    0% 100%,   /* bottom left */
    0 100%      /* bottom left */
  );

  position: relative;
  text-align: center;
  color: white;
  font-family: 'Cormorant-Bold';
  font-size: 36px;
  background-color: rgb(200,0,0);
  height: 50px;
  width: 100%;
`
const CornerSnipBottom = styled.div`
clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%);

  position: relative;
  text-align: center;
  color: white;
  font-family: 'Cormorant-Bold';
  font-size: 36px;
  background-color: rgb(200,0,0);
  height: 50px;
  width: 100%;
`
const Projects = styled.div`
  background-color: rgb(200,0,0);
  color: white;
  padding: 0 0 25px 0;
  font-family: 'Cormorant-Bold';
  font-size: 32px;
  text-align: center;
`




class IndexPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      collections: [],
      aboutIsOpen: false,
      currentHover: 'index',
      isChrome: false,
      sliderIsOpen: false
    }

    this.counter = 0;

    this.infiniteScroll = React.createRef();

    this.allCollections = [];

    this.handleScroll = _.throttle(this.handleScroll.bind(this), 250);

    this.mouseEnterLink = this.mouseEnterLink.bind(this);

    this.targetElement = null;

    this.windowWidth = null;

    this.windowHeight = null;

  }

  componentWillMount(){

    let collectionFetchData = function(data) {
      // this.projectName = data.title.text;
      // this.projectYear = data.year.text;
      // this.projectTechnique = data.technique.text;
      this.projectName = '';
      this.projectYear = '';
      this.projectTechnique = '';
      this.images = data.image_gallery;
    }

    this.allCollections = [];

    this.props.data.allPrismicImagegallery.edges.forEach((item) => {
      
      this.allCollections.push(new collectionFetchData(item.node.data));

    });

    this.setState({
      collections: [...this.allCollections, ...this.allCollections, ...this.allCollections]
    });


  }

  componentDidMount() {


    this.container = this.infiniteScroll;

    TweenLite.to(this.backgroundImageRef1,5,{ opacity: 1, ease:Power3.easeInOut})

    setTimeout(() => {
      TweenLite.to(document.querySelector('.spacer-top'),1,{height: '0',ease:Power3.easeInOut, 
      onComplete: () => {
        document.querySelector('body').style.position = "absolute";
        TweenLite.to(this.aboutButtonRef,1,{y: -150,ease:Power3.easeInOut});
      }
    });

    },3000);

    this.windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    this.windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


    this.detectBrowser();


  document.querySelectorAll('.can-click').forEach((item)=>{
    item.addEventListener('mouseenter',this.mouseEnterLink);
    item.addEventListener('mouseleave',this.mouseLeaveLink);
  });

  //Add event listener to Window

  window.addEventListener('scroll', this.handleScroll);

  this.targetElement = document.querySelector('.infinite-scrll');

}

componentWillUnmount() {

  clearAllBodyScrollLocks();
}

  detectBrowser() {

    var sBrowser, sUsrAg = navigator.userAgent;

    // The order matters here, and this may report false positives for unlisted browsers.
    
    if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
      // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
      sBrowser = "Opera";
      //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf("Trident") > -1) {
      sBrowser = "Microsoft Internet Explorer";
      // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
      sBrowser = "Microsoft Edge";
      // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Chrome") > -1) {
      sBrowser = "Google Chrome or Chromium";
      this.setState({
        isChrome: true
      });
      // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
      // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
      sBrowser = "unknown";
    }
    
    // alert("You are using: " + sBrowser);    
  }


  handleScroll = () => {

    let container = document.querySelector('.infinite-scroll');
    let pageHeight = container.scrollHeight;
    let windowHeight = this.windowHeight;
    let scrollAmount = window.scrollY;


    if(this.windowWidth >= 992) {
      pageHeight = container.scrollHeight;
      windowHeight = window.innerHeight;
      scrollAmount = window.scrollY;
    } else {

      return
      // pageHeight = container.scrollHeight;
      // windowHeight = window.innerHeight;
      // scrollAmount = container.scrollTop;
    }

    if(scrollAmount >= pageHeight - windowHeight - 500 && scrollAmount <= pageHeight - windowHeight) {


        // this.counter ++;

        this.setState(prevState => ({
          collections: [...prevState.collections, ...this.allCollections]
        }));

      }
    }




handleAboutPageClick = () => {

  this.setState(prevState => ({
    aboutIsOpen: !prevState.aboutIsOpen
  }));

  if(this.state.aboutIsOpen) {
    enableBodyScroll(this.targetElement);
  } else {
    disableBodyScroll(this.targetElement);
  }


}

mouseEnterInfinitySlider = (e) => {

  this.setState({
    currentHover: e
  })

}

mouseLeaveInfinitySlider = () => {

  this.setState({
    currentHover: 'index'
  })

}

mouseEnterLink = (e) => {

  this.setState({
    currentHover: 'link'
  })

}

mouseLeaveLink = () => {
  this.setState({
    currentHover: 'index'
  })

}

_handleClick = () => {
  
  this.setState(prevState => ({
    sliderIsOpen: !prevState.sliderIsOpen
  }))

  if(this.windowWidth >= 992) return;

  if(this.state.sliderIsOpen) {
    enableBodyScroll(document.querySelector('.block-slider'));
  } else {
    disableBodyScroll(document.querySelector('.block-slider'));
  }


}


  render(){

    return(
      <Transition>
          <Mouse currentHover={this.state.currentHover}/>

        <About ref={div => this.aboutButtonRef = div} className="can-click" onClick={this.handleAboutPageClick} style={this.state.sliderIsOpen ? {display:'none'} : {display:'block'}}>
          <img src={PlusButton}/>
        </About>

        <StyledAboutMinus className="can-click" pose={this.state.aboutIsOpen ? 'openAbout' : 'closedAbout'} onClick={this.handleAboutPageClick}>
          <img src={MinusButton}/>
      </StyledAboutMinus>

      <SpacerTop className="spacer-top"/>
 
      <BackgroundImage ref={div => this.backgroundImageRef1 = div} src={Logo}/>
 
      <Drawer  pose={this.state.aboutIsOpen ? 'openIndex' : 'closedIndex'}> 
      <SEO title="Anna Genger" keywords={[`Anna`, `Genger`, `Projects`]} />
      {/* <CornerSnipTop/> */}
      <ProjectDiv  className={'infinite-scroll'} ref={this.infiniteScroll}>
        {
          this.state.collections.map((item, index) => {
            return (
            <InfiniteSlider handleClick={this._handleClick} mouseEnterLink={this.mouseEnterLink} mouseLeaveLink={this.mouseLeaveLink} isChrome={this.state.isChrome} mouseLeave={this.mouseLeaveInfinitySlider} mouseEnter={this.mouseEnterInfinitySlider} key={index} backgroundColor='white' number={index} data={item}/>
              )
          })
        }
      </ProjectDiv>
      {/* <CornerSnipBottom/> */}
      </Drawer>
      {/* <Spacer/> */}
      <StyledOverlay onClick={this.handleAboutPageClick} pose={this.state.aboutIsOpen ? 'open' : 'closed'}/>
      <AboutPage open={this.state.aboutIsOpen}/>
      </Transition>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query ImageGalleries {
    allPrismicImagegallery {
      edges {
        node {
          id
          uid
          data {
            title {
              text
            }
            year {
              text
            }
            technique {
              text
            }
            image_gallery {
              image {
                alt
                url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

// export const pageQuery = graphql`
//   query ImageGalleries {
//     allPrismicImagegallery {
//       edges {
//         node {
//           id
//           uid
//           data {
//             title {
//               text
//             }
//             year {
//               text
//             }
//             technique {
//               text
//             }
//             image_gallery {
//               image_caption {
//                 text
//               }
//               image {
//                 alt
//                 url
//                 localFile {
//                   childImageSharp {
//                     fluid(maxWidth: 1000) {
//                       ...GatsbyImageSharpFluid_withWebp
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

