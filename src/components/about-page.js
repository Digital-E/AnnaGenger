import React from "react"
import Logo from "../images/AnnaGengerLogoAbout.svg"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import _ from 'lodash'
import posed from 'react-pose'

import anime from '../../node_modules/animejs'


const Drawer = posed.div({
      openDrawer: {
        // applyAtStart: { display: 'inline-block' },
        applyAtStart: { position: 'fixed' },
        opacity: 1,
        x: (props) => {return props.windowWidth >= 992 ? '5%' : '0%'},
        // position: 'fixed',
        transition: {
          // delay: 600,
          duration: 600,
          ease: 'easeInOut'
          },
    
          // applyAtEnd: { zIndex: 1 },
      },
        closedDrawer: { 
          // applyAtEnd: { display: 'none' },
          x: '100%',
          opacity: 1,
          // position: 'fixed',
        transition: {
          duration: 600,
          ease: 'easeInOut'
          },
          
      },
});


let BackgroundImage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 50%;
  margin: 35px auto;
  z-index: -1;

  img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }

  @media(min-width: 992px) {
    margin: 0 auto;
  }
`

let AboutDiv = styled.div`

-webkit-overflow-scrolling: touch;

  // clip-path: 
  // polygon(
  //   0% 2%,     /* top left */
  //   3% 0%,     /* top left */
  //   97% 0%,    /* top right */
  //   100% 2%,   /* top right */
  //   100% 100%,  /* bottom right */
  //   100% 100%,  /* bottom right */
  //   0% 100%,   /* bottom left */
  //   0 100%      /* bottom left */
  // );

  text-transform: lowercase;

  // position: fixed !important;
  overflow-y: scroll;
  width: 100vw;
  height: 100vh;
  // top: 100vh;
  background-color: white;
  overflow-x: hidden;
  z-index: 999;
  // display: none;
  font-size: 24px;
  line-height: 26px;

  @media(min-width: 992px) {
    display: block;
    font-size: 42px;
    line-height: 40px;
  }
`

const About = styled.div`
  font-family: 'Cormorant-Regular';
  margin-top: 50px;

  @media(min-width: 992px) {
    margin-top: 150px;
  }
`

const Biographie = styled.div``

const MainTitle = styled.div`
  font-family: Cormorant-Regular;
  margin-bottom: 25px;
`
const SubTitle = styled.div`
  font-family: Cormorant-Regular;
`

const List = styled.ul`
  list-style: none;
  padding-left: 0;


  // li:nth-child(1) {
  //   // margin-left: -25px;
  //   margin-bottom: 25px;
  // }

  @media(min-width: 992px) {

  }
`

const ListTitle = styled.li`
  font-family: Cormorant-Regular;
  list-style: none;
`

const ListItem = styled.li`

`

const Date = styled.span`
  font-family: Cormorant-Regular;
`

const Container = styled.div`
  width: 70%;
  margin: 0 auto;

  @media(min-width: 992px) {
    width: 70%;
  }
`

const CornerSnipLeft = styled.div`

  clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%, 0 5%);

  background-color: white;
  height: 100vh;
  width: 50px;
`

const Footer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  bottom: 0;
  height: 120px;
  width: 100%; 
  // color: #FF6600 !important;
  color: black !important;
  font-family: 'Cormorant-Bold';
  font-size: 18px;
  z-index: 999;
  margin-bottom: 100px;

  @media(min-width: 992px) {
    flex-direction: row;
    font-size: 32px;
    margin-bottom: 0;
  }

`

const Socials = styled.div`
    display: none;
    position: fixed;
    right: 0;
    top: 50%;
    margin-right: -240px;
    transform-origin: left bottom;
    transform: rotateZ(-90deg) translateY(-50%);
    overflow: hidden;
    color: black !important;
    font-family: 'Cormorant-Bold';
    font-size: 24px;

    span:nth-child(1) {
      margin-left: 15px;
    }

    @media(min-width: 992px) {
      display: block;
      margin-right: -205px;
      font-size: 32px;
    }
`



class AboutPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      collections: [],
    }

    this.allCollections = [];

    this.dataArray = [];

    this.handleScroll = this.handleScroll.bind(this);
    this.handleThrottledScroll = _.throttle(this.handleThrottledScroll.bind(this), 200);

    this.windowWidth = null;


    this.mouseEnterLink = this.mouseEnterLink.bind(this);

    this.dynamicLink = [true, true, true];
    

  }

  componentWillMount(){

    let collectionFetchData = function(data) {
      this.projectName = "";
      this.projectYear = "";
      this.images = Object.values(data);
    }


    let collectionData = new collectionFetchData(this.props.data);

    this.allCollections = [collectionData];

    this.setState({
      collections: this.allCollections
    });


  }

  componentDidMount() {

    Object.keys(this.props.data.prismicAboutpage.data).forEach((item, index)=>{
      let value = Object.values(this.props.data.prismicAboutpage.data)[index];
      this.dataArray.push({title: item, value: value});
    });

    this.container = this.infiniteScroll;

    this.windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    this.mouse = document.querySelector('.mouse');

    window.addEventListener('scroll', this.handleScroll);


    setTimeout(()=>{
      this.aboutRef.style.opacity = 1;
    }, 500);

  // Wrap every letter in a span
  document.querySelectorAll('.ml0,.ml1,.ml2').forEach(function(item){

    item.children[0].innerHTML = item.children[0].innerHTML.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
  
  });
  
  document.querySelectorAll('.can-click').forEach((item)=>{
    item.addEventListener('mouseenter',this.mouseEnterLink);
    item.addEventListener('mouseleave',this.mouseLeaveLink);
  })

  }

  addElements = () => {
    
    this.setState(prevState => ({
      collections: [...prevState.collections, ...this.allCollections]
    }));

  }

  handleScroll = () => {

    this.handleThrottledScroll();

}

handleThrottledScroll = () => {

  if(this.container.scrollHeight - window.scrollY  == 0  ) {

    this.addElements();


  }
  
}

mouseEnterLink = (e) => {

  this.setState({
    currentHover: 'link'
  });

  if(e.target.children.length == 0) return;

  let number = e.target.children[0].classList.value.split('').splice(-1,1).join('');

  if(this.dynamicLink[number] != true) return;

  this.dynamicLink[number] = false;

  anime.timeline()
  .add({
    targets: `.ml${number} .letter`,
    translateY: [0,-100],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 350,
    delay: function(el, i) {
      return 300 + 30 * i;
    }
  }).add({
    targets: `.ml${number} .letter`,
    translateY: [100,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 300,
    delay: function(el, i) {
      return 100 + 30 * i;
    },
    complete: () => this.dynamicLink[number] = true
  });

}

mouseLeaveLink = () => {
  this.setState({
    currentHover: 'index'
  })

}

  render(){

    // console.log(this.dataArray);

    return(
      <>
      <div ref={div => this.aboutRef = div} style={{opacity: 0}}>
      <Drawer windowWidth={this.windowWidth} style={{position: 'fixed', top: 0, zIndex: 995, display: 'flex'}}  pose={this.props.open ? 'openDrawer' : 'closedDrawer'}>
      {/* <CornerSnipLeft/> */}
      <AboutDiv className={'infinite-scrll'} ref={div => this.infiniteScroll = div} onClick={this.props.onClick}>
      <BackgroundImage>
        <img src={Logo}/>
      </BackgroundImage>
      <About>
        <Biographie>
          <Container>
          <MainTitle>
            vita
          </MainTitle>
          <MainTitle>
            anna genger, 1978, de
          </MainTitle>
          </Container>

          {this.dataArray ? this.dataArray.map(item => (
              <Container>
                <ListTitle>{item.title.split('_').join(' ') === 'bio' ? '' : item.title.split('_').join(' ')}</ListTitle>
                  <List>
                    {item.value.map((item, index) => (
                      <ListItem key={index} dangerouslySetInnerHTML={{__html: item.list_element.text}}/>
                    ))
                    }
                  </List>
              </Container>
          ))
          :
          <div></div>
          }
        </Biographie>
      </About>
      <Container>
      <Footer className={'footer'}>
          <span className="can-click-parent"><span className="small">website by </span><span className="can-click"><span className="ml0"><a href="https://karlanders.io" target="_blank">Karl Anders</a></span></span></span>
          <span className="socials-mobile"><span><a href="mailto: anna@annagenger.com" target="_blank">contact</a></span></span>
          <span className="socials-mobile"><span><a href="https://www.instagram.com/annagenger/" target="_blank">facebook</a></span></span>
        </Footer>
      </Container>
      <Socials>
          <span className="can-click"><span className="ml1"><a href="https://www.instagram.com/annagenger/" target="_blank">instagram</a></span></span>
          <span className="can-click"><span className="ml2"><a href="mailto: anna@annagenger.com" target="_blank">contact</a></span></span>
      </Socials>
      </AboutDiv>
      </Drawer>
      </div>
      </>
    )
  }
}


export default (props) => (
    <StaticQuery
    query={graphql`
    query aboutpage {
      prismicAboutpage {
        data {
          bio {
            list_element {
              text
            }
          }
          solo_exhibitions {
            list_element {
              text
            }
          }
          selected_group_exhibitions {
            list_element {
              text
            }
          }
          awards {
            list_element {
              text
            }
          }
          scholarships {
            list_element {
              text
            }
          }
          residences {
            list_element {
              text
            }
          } 
          books_and_catalogues {
            list_element {
              text
            }
          }
          articles {
            list_element {
              text
            }
          }
          radio {
            list_element {
              text
            }
          }            
        }
      }
    }
    `}
    render={data => (
        <AboutPage data={data} {...props}/>
    )}
  />
)
