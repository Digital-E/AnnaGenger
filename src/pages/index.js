import React from "react"
import { Link } from "gatsby"
import Logo from "../images/AnnaGengerLogo.svg"
import { graphql } from "gatsby"
import styled from "styled-components"
import _ from 'lodash'
import posed from 'react-pose'
import Mouse from '../components/mouse'
import BackgroundWarp from '../components/backgroundwarp'

import {TweenLite, Power3} from 'gsap/TweenMax'



import SEO from "../components/seo"

import InfiniteSlider from "../components/infiniteslider"
import AboutPage from "../components/about-page"

import PlusButton from '../images/Plus_Button.svg'
import MinusButton from '../images/Minus_Button.svg'

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'


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
  padding-top: 100vh;

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
    height: 100px;
  }
`
const AboutMinus = posed.div({
  openAbout: {
    x: '0',
    applyAtStart: { visibility: 'visible' },
    transition: {ease: 'easeInOut', duration: 600 },
  },
  closedAbout: {
    x: '400%',
    transition: {ease: 'easeInOut', duration: 600 },
  }
});

const StyledAboutMinus = styled(AboutMinus)`
  position: fixed;
  visibility: hidden;
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
    height: 100px;
  }
`

const SpacerTop = styled.div`
  position: relative;
  height: 100vh;
  background: transparent
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
      sliderIsOpen: false,
      isMobile: true
    }

    this.counter = 0;

    this.infiniteScroll = React.createRef();

    this.allCollections = [];

    this.handleScroll = _.throttle(this.handleScroll.bind(this), 250);

    this.resizeBrowser = _.debounce(this.resizeBrowser.bind(this), 250);

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


    setTimeout(() => {
      document.querySelector('.spacer-top').style.display = 'none';
      TweenLite.to(document.querySelector('.infinite-scroll'),3,{ paddingTop: window.innerHeight / 1.3 ,ease:Power3.easeInOut, 
      onComplete: () => {
        document.querySelector('body').style.position = "absolute";
        document.querySelector('body').style.overflow = "scroll";
        TweenLite.to(this.aboutButtonRef,1,{y: -150,ease:Power3.easeInOut});
      }
    });

    },5000);


    this.resizeBrowser();
    this.detectBrowser();


  document.querySelectorAll('.can-click').forEach((item)=>{
    item.addEventListener('mouseenter',this.mouseEnterLink);
    item.addEventListener('mouseleave',this.mouseLeaveLink);
  });

  //Add event listener to Window

  window.addEventListener('scroll', this.handleScroll);

  this.targetElement = document.querySelector('.infinite-scrll');


  window.addEventListener('resize', () => {
      this.resizeBrowser();
  });  

}

componentWillUnmount() {

  clearAllBodyScrollLocks();
}

resizeBrowser() {
  this.windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  this.windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  window.mobileAndTabletcheck();

  if(window.mobileAndTabletcheck() === true) {
    this.setState({
      isMobile: true
    });
  } else {
    this.setState({
      isMobile: false
    });
  }

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

    }

    if(scrollAmount >= pageHeight - windowHeight - 500 && scrollAmount <= pageHeight - windowHeight) {

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
         <Mouse isMobile={this.state.isMobile} currentHover={this.state.currentHover}/>


        <About ref={div => this.aboutButtonRef = div} className="can-click" onClick={this.handleAboutPageClick} style={this.state.sliderIsOpen ? {display:'none'} : {display:'block'}}>
          <img src={PlusButton}/>
        </About>

        <StyledAboutMinus className="can-click" pose={this.state.aboutIsOpen ? 'openAbout' : 'closedAbout'} onClick={this.handleAboutPageClick}>
          <img src={MinusButton}/>
        </StyledAboutMinus>

      <SpacerTop className="spacer-top"/>

      <BackgroundWarp />

      <Drawer  pose={this.state.aboutIsOpen ? 'openIndex' : 'closedIndex'}> 
      <SEO title="Anna Genger" keywords={[`Anna`, `Genger`, `Projects`]} />

      <ProjectDiv className={'infinite-scroll'} ref={this.infiniteScroll}>
        {
          this.state.collections.map((item, index) => {
            return (
            <InfiniteSlider isMobile={this.state.isMobile} handleClick={this._handleClick} mouseEnterLink={this.mouseEnterLink} mouseLeaveLink={this.mouseLeaveLink} isChrome={this.state.isChrome} mouseLeave={this.mouseLeaveInfinitySlider} mouseEnter={this.mouseEnterInfinitySlider} key={index} backgroundColor='white' number={index} data={item}/>
              )
          })
        }
      </ProjectDiv>

      </Drawer>

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
                      ...GatsbyImageSharpFluid_withWebp_noBase64
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

