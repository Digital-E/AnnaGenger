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
  position: relative;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%,-50%);
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


  li:nth-child(1) {
    // margin-left: -25px;
    margin-bottom: 25px;
  }

  @media(min-width: 992px) {

  }
`

const ListTitle = styled.li`
  font-family: Cormorant-Regular;
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
  color: #FF6600 !important;
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
    color: #FF6600 !important;
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


    // let collectionData = new collectionFetchData(this.props.data);

    // this.props.data.map((data) => {
    //   return allCollections.push(new collectionFetchData(data));
    // });

    let collectionData = new collectionFetchData(this.props.data);

    this.allCollections = [collectionData];

    this.setState({
      collections: this.allCollections
    });


  }

  componentDidMount() {

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
        <List>
              <ListItem>
                <Date>• 2005–2007</Date>	ma	painting,	royal	college	of	art, london
              </ListItem>
              <ListItem>
                <Date>• 2001–2005</Date>	ba	fine	art	(sculpture), slade	school of fine art, london
              </ListItem>
              <ListItem>
                <Date>• 2000–2001</Date>	foundation diploma	in art and design, central saint martins college of	art
              </ListItem>
        </List>
        </Container>

        <Container>
        <List>
          <ListTitle>exhibitions <br/>solo exhibitions</ListTitle>
              <ListItem>
                <Date>• 2017</Date>	„ANNA GENGER“, GALERIE APLANAT, HAMBURG, GERMANY
              </ListItem>
              <ListItem>
                <Date>• 2016</Date>	„BIRDS OF PREY“, GALERIE BIESENBACH, KÖLN, GERMANY
              </ListItem>
              <ListItem>
                <Date>• 2014</Date>	„BERNICE BOBS HER HAIR“, GALERIE BIESENBACH, KÖLN, GERMANY
              </ListItem>

            <ListTitle>SELECTED GROUP EXHIBITIONS</ListTitle>

              <ListItem>
                <Date>• 06.05–15.05.2016</Date>	HILDEGUNDE VON MER / GENGER&GLUNZ MEERBUSCH, GERMANY
              </ListItem>
              <ListItem>
                <Date>• 12.02 -14.02.2016</Date>	GENGER&GLUNZ, HUSAVIK, ICELAND
              </ListItem>              
              <ListItem>
                <Date>• 12.02–14.02.2016</Date>	KEINE FARBE SCHWARZ, FREITAGSSALON, HAMBURG
              </ListItem>
              <ListItem>
                <Date>• 24.07–31.07.2015</Date>	ANOTHER SUMMER OF PAPER, GALERIE BIESENBACH, COLOGNE
              </ListItem>
              <ListItem>
                <Date>• 12.06.2015–18.06.2015</Date> DIE KARTEN LIEGEN AUF DEM TISCH, FREITAGSSALON, HAMBURG, ANNA GENGER, VIVIANE GERNAERT
              </ListItem>
              <ListItem>
                <Date>• 2014</Date>	„STEFAN SANDROCK“, GALERIE FEINKUNSTKRÜGER, HAMBURG
              </ListItem>
              <ListItem>
                <Date>• 2013</Date>	„SUMMER OF PAPER“, GALERIE BIESENBACH, KÖLN "WARIS AND ROSE", THE AGENCY GALLERY, LONDON
              </ListItem>
              <ListItem>
                <Date>• 2012</Date>	„STILLSTEHENDE SACHEN“ AUS DER SAMMLUNG SØR RUSCHE, MUSEUM ABTEI LIESBORN <br/>DES KREISES WARENDORF, WADERSLOH-LIESBORN
              </ListItem>
              <ListItem>
                <Date>• 2011</Date>	BEYOND DECEPTION, GALLERI ERIK STEEN, OSLO <br/>HERBSTZEITLOSE, STRZELSKI GALERIE, STUTTGART <br/>CORRESPONDENCE ART, A&D GALLERY, LONDON
              </ListItem>
              <ListItem>
                <Date>• 2010</Date>	ROT: ANNA GENGER, DAVID JONES, SIMON SCHUBERT, CHRISTINE SCHULZ UND VERONIKA VEIT, UPSTAIRS BERLIN, BERLIN <br/>
                                    2. EBERHARD-DIETZSCH-KUNSTPREIS 2010, GERAER BANK, GERA <br/>
                                    LUST2010, BAZONNALE, WEIMAR <br/>
                                    DRAW ME A…, PABLO ALONSO, ANNA GENGER, ANSELM REYLE, SIMON SCHUBERT, DIAMANTIS SOTIROPOULOS, FRANK STELLA, ANDY WARHOL, TOM WESSELMANN
              </ListItem>
              <ListItem>
                <Date>• 2009</Date>	THE BASIS OF OPTIMISM, KUNSTRAUM T27, BERLIN <br/>
                                    MANATURE, MENSCH UND NATUR, ALTE POST, “48 STUNDEN NEUKÖLLN”, 11. KUNST- UND <br/>
                                    KULTURFESTIVAL BERLIN, BERLIN
              </ListItem>
              <ListItem>
                <Date>• 2008</Date>	ANNA GENGER: BROKEN HEART’S TANGO FOR TWO IN ARTRMXCOLOGNE VOL.01, <br/>
                                    COLOGNE TALES OF FLAMES, PROJEKTRAUM, KÜNSTLERHAUS BETHANIEN, BERLIN <br/>
                                    PAPER8, UPSTAIRS BERLIN, BERLIN
              </ListItem>
        </List>
        </Container>

        <Container>
        <List>

            <ListTitle>Awards</ListTitle>

              <ListItem>
                <Date>• 2003</Date>	AUDREY WYKEHAM PRIZE
              </ListItem>
        </List>

        </Container>

        <Container>
        <List>

            <ListTitle>SCHOLARSHIPS</ListTitle>

              <ListItem>
                <Date>• 2007</Date>	RÉSIDENCES SECONDAIRES, PARC SAINT LÉGER, CENTRE D’ART CONTEMPORAIN, POUGUES-LES-EAUX
              </ListItem>
        </List>

        </Container>  

        <Container>
        <List>

            <ListTitle>RESIDENCES</ListTitle>

              <ListItem>
                <Date>• JANUARY/FEBRUARY 2016</Date>	FJÚK ART CENTRE, HUSAVIK, ICELAND
              </ListItem>
              <ListItem>
                <Date>• JANUARY/FEBRUARY 2017</Date>	NELIMARKKA MUSEUM, ALJÄRVI FINLAND
              </ListItem>
        </List>

        </Container>

        <Container>
        <List>

            <ListTitle>BOOKS AND CATALOGUES</ListTitle>

              <ListItem>
                <Date>• 2009</Date>	MANATURE, MENSCH UND NATUR, “48 STUNDEN NEUKÖLLN”, 11. KUNST- UND KULTURFESTIVAL BERLIN, BERLIN 2009
              </ListItem>
              <ListItem>
                <Date>• 2007</Date>	16/ART WORKS, BANK OF AMERICA, FRANKFURT AM MAIN 2007 <br/>
                                    DECADENCE, DECAY & THE DEMIMONDE, EDITED BY BEN AUSTIN, LONDON 2007 <br/>
                                    BLOOD, SWEAT ‘N TEARS, UPSTAIRS BERLIN, BERLIN 2007 <br/>
                                    THE GREAT EXHIBITION 2007, ROYAL COLLEGE OF ART, LONDON 2007
              </ListItem>
              <ListItem>
                <Date>• 2006</Date>	SOLITUDE. LONDON ARTISTS TODAY, UPSTAIRS BERLIN, BERLIN 2006
              </ListItem>
              <ListItem>
                <Date>• 2005</Date>	MORPHO EUGENIA, GALLERIA D’ARTE CONTEMPORANEA DELLA REPUBBLICA DI SAN MARINO, SAN MARINO
              </ListItem>
        </List>

        </Container>

        <Container>
        <List>

            <ListTitle>Articles</ListTitle>

              <ListItem>
                <Date>• 2009</Date>	VANESSA PÉREZ, ZONA DE TALENTOS, IN: EL UNIVERSAL.COM.MX, 12. APRIL 2009 <br/>
                                    ERNÖ HORVATH, WELTENTRÄUME VON ANNE GENGER, IN: DIE WELT, 3. APRIL 2009 <br/>
                                    THEA HEROLD, WURMLÖCHER, IN: TAGESSPIEGEL, 21. MÄRZ 2009 <br/>
                                    WRITER NAME UNPUBLISHED, OUT OF TUNE, CHERRIES AND PRUNE, IN: ARTREVIEW, JANUAR & FEBRUAR 2009
              </ListItem>
              <ListItem>
                <Date>• 2008</Date> „ART OFF SHOW“ IN KÖLN, IN: WDR.DE, 24. AUGUST 2008 <br/>
                                    HANNA STYRIE, SPIELWIESEN FÜR DIE KUNST, IN: KÖLNISCHE RUNDSCHAU, 23. AUGUST 2008
              </ListItem>
              <ListItem>
                <Date>• 2007</Date> FREIRE BARNES, YOUNG MASTERS, IN: BON MAGAZINE, HERBSTAUSGABE 2007 <br/>
                                    CHRISTIAN HERCHENRÖDER, DER MARKT LÄSST DIE MUSKELN SPIELEN, IN: HANDELSBLATT, 5.-7. OKTOBER 2007 <br/>
                                    JULIA SIEPMANN, KUNST-GESCHICHTE AM GRENZÜBERGANG, IN: WELT AM SONNTAG, 30. SEPTEMBER 2007 <br/>
                                    DESTINATION NEWS, ‚CELEBRATION’ AND ‚WARNING’ OF EXCESS THROUGH ART, IN: REDCARNATIONHOTELS.COM, 28.9.07 <br/>
                                    ARIFA AKBAR, COLLECTORS DECLARE RCA’S CLASS OF 2007 ITS ‘BEST DEGREE SHOW IN YEARS’, IN: THE INDEPENDENT, 15. JUNI 2007
              </ListItem>
              <ListItem>
                <Date>• 2006</Date>	ANNA GENGER, IN: ARTISTS & ILLUSTRATORS 2006 <br/>
                                    GERHARD CHARLES RUMP, LONDONER EINSAMKEITEN IN DER GALERIE „UPSTAIRS“, IN: DIE WELT, 10. MÄRZ 2006 <br/>
                                    KATRIN WITTNEVEN, JUGEND-STIL, IN: DER TAGESSPIEGEL, 4. FEBRUAR 2006 <br/>
                                    CHRISTIANE MEIXNER, JUNGE KUNST AUS LONDON, IN: BERLINER MORGENPOST, 27. JANUAR 2006 <br/>
                                    UPSTAIRS BERLIN, IN: GALLERY GUIDE EUROPE, JANUAR 2006 <br/>
                                    SOLITUDE: YOUNG LONDON ARTISTS, IN: CONTEMPORARY, JANUAR 2006
              </ListItem>
        </List>

        </Container>   

                <Container>
        <List>

            <ListTitle>Radio</ListTitle>

              <ListItem>
                <Date>• 2009</Date> BARBARA WIEGAND, GALERIENRUNDGANG, IN: INFORADIO RBB, 24. MÄRZ 2009
              </ListItem>

        </List>

        </Container>                                           

        </Biographie>
      </About>
      <Container>
      <Footer className={'footer'}>
          <span className="can-click-parent">website by <span className="can-click"><span className="ml0"><a href="https://karlanders.io" target="_blank">Karl Anders</a></span></span></span>
          <span className="socials-mobile"><span><a href="https://www.instagram.com/annagenger/" target="_blank">instagram</a></span></span>
          <span className="socials-mobile"><span><a href="https://www.instagram.com/annagenger/" target="_blank">facebook</a></span></span>
        </Footer>
      </Container>
      <Socials>
          <span className="can-click"><span className="ml1"><a href="https://www.instagram.com/annagenger/" target="_blank">instagram</a></span></span>
          <span className="can-click"><span className="ml2"><a href="https://www.instagram.com/annagenger/" target="_blank">facebook</a></span></span>
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
    query {
      imageone: file(relativePath: { eq: "img-about-1.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imagetwo: file(relativePath: { eq: "img-about-2.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imagethree: file(relativePath: { eq: "img-about-2.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imagefour: file(relativePath: { eq: "img-about-2.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
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
