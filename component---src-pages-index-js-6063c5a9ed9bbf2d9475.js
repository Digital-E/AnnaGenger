(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(n,t,e){"use strict";e.r(t);e(80),e(57),e(37),e(167);var A=e(36),i=e.n(A),o=e(5),a=e.n(o),r=e(161),l=e.n(r),c=e(0),s=e.n(c),d=e(77),u=e(168),m=e.n(u),h=e(148),p=e(162),g=e.n(p),f=e(41),E=e(164),b=(e(178),e(156)),w=(e(1),e(179)),x=e.n(w),v=e(180),y=e.n(v),I=e(183),B=e.n(I);function j(){var n=l()(["\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    z-index: 999;\n    margin-bottom: 15px;\n    margin-left: 15px;\n"]);return j=function(){return n},n}function N(){var n=l()(["\n    margin-left: 25px;\n"]);return N=function(){return n},n}function C(){var n=l()(["\n  margin-left: 25px;\n"]);return C=function(){return n},n}function Q(){var n=l()(["\n  font-family: 'Cormorant-Bold';\n  position: absolute;\n  margin-top: -25px;\n  display: flex;\n  width: 100%;\n"]);return Q=function(){return n},n}function S(){var n=l()(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: none;\n    background: ",";\n    transform: translateZ(0) translateY(-50%);\n    height: 200vh;\n    z-index: -1;\n"]);return S=function(){return n},n}function D(){var n=l()(["\n    position: relative;\n    height: 150px;\n    margin: 150px 0;\n    font-family: 'Cormorant-Regular';\n    // border-top: 1px solid black;\n    // border-bottom: 1px solid black;\n    // padding: 25px 0;\n\n    @media(min-width: 992px) {\n        height: 350px; \n    }\n    \n"]);return D=function(){return n},n}function G(){var n=l()(["\n    height: 150px; \n    width: 100%; \n    z-index: 999;\n\n    @media(min-width: 992px) {\n        height: 350px; \n    }\n"]);return G=function(){return n},n}function M(){var n=l()(["\n    height: 100%;\n    margin: 0 25px;\n    padding: 0;\n"]);return M=function(){return n},n}function R(){var n=l()(["\n    width: 100%;\n    height: 100%;\n    margin: 0 75px;\n    padding: 0;\n"]);return R=function(){return n},n}function Y(){var n=l()(["\n  position: relative;\n  overflow-y: hidden;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  z-index: 1;\n  cursor: pointer !important;\n\n  div:nth-child(1) {\n    display: none !important;\n    height: 0px;\n  }\n  \n  }\n"]);return Y=function(){return n},n}function k(){var n=l()(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n  z-index: 999;\n  cursor: pointer !important;\n\n  .ps__rail-x {\n      display: none;\n  }\n\n  .ps__rail-y {\n    display: none;\n}\n  \n  div:nth-child(1) {\n    display: none !important;\n    width: auto !important;\n  }\n"]);return k=function(){return n},n}Object(h.a)(y.a)(k()),h.a.div(Y()),Object(h.a)(x.a)(R()),h.a.img(M());var L=f.b.div({open:{position:"fixed",top:function(n){return n.windowWidth>=992?n.windowHeight/2-175-25:n.windowHeight/2-75-25},scale:1.5,transition:{ease:[.08,.69,.2,.99],duration:300},flip:!0},closed:{applyAtStart:{scale:1},scale:1,position:"static",top:"auto",transition:{ease:"easeInOut",duration:300},flip:!0}}),O=Object(h.a)(L)(G()),T=h.a.div(D()),P=f.b.div({open:{applyAtStart:{display:"block"},opacity:1,transition:{ease:"easeInOut",duration:300}},closed:{applyAtEnd:{display:"none"},transition:{ease:"easeInOut",duration:300},opacity:0}}),z=Object(h.a)(P)(S(),function(n){return n.backgroundColor}),Z=f.b.div({open:{opacity:1,transition:{ease:[.08,.69,.2,.99],duration:300}},closed:{opacity:0,transition:{ease:[.08,.69,.2,.99],duration:300}}}),H=Object(h.a)(Z)(Q()),F=h.a.div(C()),U=h.a.div(N()),W=f.b.div({open:{opacity:1,transition:{ease:[.08,.69,.2,.99],duration:300}},closed:{opacity:0,transition:{ease:[.08,.69,.2,.99],duration:300}}}),V=Object(h.a)(W)(j()),X=function(n){function t(t){var e;return(e=n.call(this,t)||this).handleScroll=function(){e.handleThrottledScroll()},e.handleThrottledScroll=function(){},e.zoomIn=function(){e.windowWidth>=992&&document.querySelector(e.props.containerClassName).addEventListener("scroll",e.zoomOut),e.setState({isZoomed:!0})},e.zoomOut=function(){document.querySelector(e.props.containerClassName).removeEventListener("scroll",e.zoomOut),e.setState({isZoomed:!1})},e.toggleZoom=function(){return e.state.isZoomed?e.zoomOut():e.zoomIn()},e.mouseEnter=function(){if(!(e.windowWidth<=992)){E.c.to(".mouse-inner",.2,{scale:1}),E.c.to(".mouse",.2,{left:"-48px",fill:"white"}),E.c.to(".cls-2",.2,{stroke:"red"});var n=document.getElementById("Ebene_2");(new E.b).to(n,.5,{rotation:-360,scale:1,stroke:"red"}).to(n,.5,{rotation:360,scale:1,ease:E.a.easeInOut}).to(n,.5,{scale:.9});var t=(new Date).getTime();e.interval=setInterval(function(){var n=(new Date).getTime();console.log(n),n-t>1e3&&(e.toggleZoom(),clearInterval(e.interval))},100)}},e.mouseLeave=function(){clearInterval(e.interval),E.c.to(".mouse-inner",.2,{scale:.3,stroke:"none"}),E.c.to(".mouse",.2,{left:"-18px"}),E.c.to(".cls-2",.2,{stroke:"none"})},e._onTouchStart=function(n){e.touchMoved=!1},e._onTouchMove=function(n){e.touchMoved=!0},e._onTouchEnd=function(n){if(1!=e.touchMoved){if(e.state.isZoomed)return;e.toggleZoom()}},e.state={allData:null,initAllData:null,isZoomed:!1,scrollDirection:null},e.counter=0,e.initPageScroll=0,e.interval=null,e.direction=null,e.displayData=[],e.windowHeight=null,e.windowWidth=null,e.touchMoved=null,e.handleSliderScroll=g.a.throttle(e.handleSliderScroll.bind(i()(e)),200),e.handleThrottledScroll=g.a.throttle(e.handleThrottledScroll.bind(i()(e)),300),e.mouse=null,e}a()(t,n);var e=t.prototype;return e.componentWillMount=function(){},e.componentDidMount=function(){this.mouse=document.querySelector(".mouse"),this.setState({allData:this.props.data,initAllData:this.props.data}),this.windowHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0),this.windowWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0),setTimeout(function(){this.flkty.resize(),window.innerWidth>=992&&(document.querySelector(".infinite-scroll").addEventListener("scroll",this.handleSliderScroll),this.flkty.on("dragMove",function(n){var t=n.clientX,e=n.clientY,A=document.querySelector(".mouse");E.c.to(A,0,{x:t,y:e})}))}.bind(this),250)},e.handleSliderScroll=function(){var n=this,t=this.initPageScroll,e=(document.querySelector(".flickity-slider"),document.querySelector(".infinite-scroll")),A=1*Math.random();e&&(e.scrollTop>=t?this.props.number%2==0?(this.flkty.applyForce(A),this.flkty.startAnimation(),this.flkty.dragEnd(),this.setState({scrollDirection:"left"})):(this.flkty.applyForce(-A),this.flkty.startAnimation(),this.flkty.dragEnd(),this.setState({scrollDirection:"right"})):e.scrollTop<=t&&(this.props.number%2==0?(this.flkty.applyForce(-A),this.flkty.startAnimation(),this.flkty.dragEnd(),this.setState({scrollDirection:"right"})):(this.flkty.applyForce(A),this.flkty.startAnimation(),this.flkty.dragEnd(),this.setState({scrollDirection:"left"}))),this.initPageScroll=e.scrollTop,setTimeout(function(){n.setState({scrollDirection:null})},1e3))},e.render=function(){var n=this,t=this.state,e=t.allData;t.initAllData;return s.a.createElement(T,{"data-scene":!0,className:this.state.isZoomed?"open-holder":"closed-holder",onTouchStart:this._onTouchStart,onTouchEnd:this._onTouchEnd,onTouchMove:this._onTouchMove,onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave},s.a.createElement(O,{windowHeight:this.windowHeight,windowWidth:this.windowWidth,pose:this.state.isZoomed?"open":"closed"},s.a.createElement(H,{pose:this.state.isZoomed?"open":"closed"},s.a.createElement(F,null,"Supersplash"),s.a.createElement(U,null,"2019")),null!=e?s.a.createElement(B.a,{flickityRef:function(t){return n.flkty=t},ref:function(t){return n.sliderRef=t},className:this.state.scrollDirection?"right"==this.state.scrollDirection?"infinite-slider scrolling-right":"infinite-slider scrolling-left":"infinite-slider",elementType:"div",options:{prevNextButtons:!1,pageDots:!1,freeScroll:!0,wrapAround:!0,imagesLoaded:!0,freeScrollFriction:.03}},e.images.map(function(t,e){return s.a.createElement("img",{className:"slider-image",ref:function(t){return n.imageRef=t},key:e,src:t.childImageSharp.fluid.src})})):s.a.createElement("div",null),s.a.createElement(z,{backgroundColor:this.props.backgroundColor,pose:this.state.isZoomed?"open":"closed"})),s.a.createElement(V,{onClick:this.toggleZoom,pose:this.state.isZoomed?"open":"closed"},"CLOSE"))},t}(s.a.Component),J=(e(26),e(205));function K(){var n=l()(["\n  width: 70%;\n  margin: 0 auto;\n"]);return K=function(){return n},n}function q(){var n=l()(["\n  font-family: Cormorant-Bold;\n"]);return q=function(){return n},n}function _(){var n=l()(["\n  margin: 15px 0;\n"]);return _=function(){return n},n}function $(){var n=l()(["\n  font-family: Cormorant-Bold;\n  font-size: 24px;\n"]);return $=function(){return n},n}function nn(){var n=l()(["\n  list-style: none;\n  font-size: 24px;\n  padding-left: 0;\n\n  li:nth-child(1) {\n    // margin-left: -25px;\n    margin-bottom: 25px;\n  }\n"]);return nn=function(){return n},n}function tn(){var n=l()(["\n  font-family: Cormorant-Italic;\n  font-size: 24px;\n  margin-bottom: 25px;\n  margin-top: 25px;\n"]);return tn=function(){return n},n}function en(){var n=l()(["\n  font-family: Cormorant-Bold;\n  font-size: 36px;\n"]);return en=function(){return n},n}function An(){var n=l()([""]);return An=function(){return n},n}function on(){var n=l()(["\n  font-family: 'Cormorant-Regular';\n  margin-top: 150px;\n"]);return on=function(){return n},n}function an(){var n=l()(["\n\n-webkit-overflow-scrolling: touch;\n\n  // clip-path: \n  // polygon(\n  //   0% 2%,     /* top left */\n  //   3% 0%,     /* top left */\n  //   97% 0%,    /* top right */\n  //   100% 2%,   /* top right */\n  //   100% 100%,  /* bottom right */\n  //   100% 100%,  /* bottom right */\n  //   0% 100%,   /* bottom left */\n  //   0 100%      /* bottom left */\n  // );\n\n  // position: fixed !important;\n  overflow-y: scroll;\n  width: 100vw;\n  height: 100vh;\n  // top: 100vh;\n  background-color: white;\n  overflow-x: hidden;\n  z-index: 999;\n  // display: none;\n\n  @media(min-width: 992px) {\n    display: block;\n  }\n"]);return an=function(){return n},n}function rn(){var n=l()(["\n  display: block;\n  position: sticky;\n  top: 50%; // required as well.\n  transform: translateY(-50%);\n  z-index: -1;\n  width: 70%;\n  margin: 450px auto 0;\n  padding: 0;\n"]);return rn=function(){return n},n}function ln(){var n=l()(["\n  position: relative;\n  display: inline-block;\n  // top: 50%;\n  // left: 50%;\n  // transform: translate(-50%,-50%);\n  width: 100%;\n  margin: 0 auto;\n\n  img {\n    display: block;\n    width: 40%;\n    margin: 0 auto;\n  }\n"]);return ln=function(){return n},n}var cn=f.b.div({openDrawer:{applyAtStart:{position:"fixed"},opacity:1,x:function(n){return n.windowWidth>=992?"5%":"0%"},transition:{duration:600,ease:"easeInOut"}},closedDrawer:{x:"100%",opacity:1,transition:{duration:600,ease:"easeInOut"}}}),sn=h.a.div(ln()),dn=(h.a.img(rn()),h.a.div(an())),un=h.a.div(on()),mn=h.a.div(An()),hn=h.a.div(en()),pn=(h.a.div(tn()),h.a.ul(nn())),gn=h.a.li($()),fn=h.a.li(_()),En=h.a.span(q()),bn=h.a.div(K()),wn=function(n){function t(t){var e;return(e=n.call(this,t)||this).addElements=function(){e.setState(function(n){return{collections:[].concat(n.collections,e.allCollections)}})},e.handleScroll=function(){e.handleThrottledScroll()},e.handleThrottledScroll=function(){e.container.scrollHeight-window.scrollY==0&&(e.addElements(),console.log("end of page!"))},e.state={collections:[]},e.allCollections=[],e.handleScroll=e.handleScroll.bind(i()(e)),e.handleThrottledScroll=g.a.throttle(e.handleThrottledScroll.bind(i()(e)),200),e.windowWidth=null,e}a()(t,n);var e=t.prototype;return e.componentWillMount=function(){var n=new function(n){this.projectName="",this.projectYear="",this.images=Object.values(n)}(this.props.data);console.log(n),this.allCollections=[n],this.setState({collections:this.allCollections})},e.componentDidMount=function(){var n=this;this.container=this.infiniteScroll,this.windowWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0),this.mouse=document.querySelector(".mouse"),document.querySelector(".infinite-scrll").addEventListener("mouseenter",function(){E.c.to(n.mouse,.25,{fill:"black"})}),console.log(this.props),window.addEventListener("scroll",this.handleScroll)},e.render=function(){var n=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(cn,{windowWidth:this.windowWidth,style:{position:"fixed",top:0},pose:this.props.open?"openDrawer":"closedDrawer"},s.a.createElement(dn,{className:"infinite-scrll",ref:function(t){return n.infiniteScroll=t},onClick:this.props.onClick},s.a.createElement(sn,null,s.a.createElement("img",{src:m.a})),s.a.createElement(un,null,s.a.createElement(mn,null,s.a.createElement(bn,null,s.a.createElement(hn,null,"biographie"),s.a.createElement(pn,null,s.a.createElement(fn,null,s.a.createElement(En,null,"2005 – 2007")," ma painting, royal college of art, london"),s.a.createElement(fn,null,s.a.createElement(En,null,"2001 – 2005")," ba fine art (sculpture), slade school of fine art, london"),s.a.createElement(fn,null,s.a.createElement(En,null,"2000 – 2001")," foundation diploma in art and design, central saint martins college of art"))),s.a.createElement(X,{backgroundColor:"white",containerClassName:".infinite-scrll",number:1,ref:this.infiniteScroll,data:this.state.collections[0]}),s.a.createElement(bn,null,s.a.createElement(pn,null,s.a.createElement(gn,null,"Solo Exhibitions"),s.a.createElement(fn,null,s.a.createElement(En,null,"2017")," „ANNA GENGER“, GALERIE APLANAT, HAMBURG, GERMANY"),s.a.createElement(fn,null,s.a.createElement(En,null,"2016")," „BIRDS OF PREY“, GALERIE BIESENBACH, KÖLN, GERMANY"),s.a.createElement(fn,null,s.a.createElement(En,null,"2014")," „BERNICE BOBS HER HAIR“, GALERIE BIESENBACH, KÖLN, GERMANY"),s.a.createElement(gn,null,"Solo Exhibitions"),s.a.createElement(fn,null,s.a.createElement(En,null,"06.05 -15.05.2016")," HILDEGUNDE VON MER / GENGER&GLUNZ MEERBUSCH, GERMANY"),s.a.createElement(fn,null,s.a.createElement(En,null,"12.02 -14.02.2016")," KEINE FARBE SCHWARZ, FREITAGSSALON, HAMBURG"),s.a.createElement(fn,null,s.a.createElement(En,null,"24. -31.07.2015")," ANOTHER SUMMER OF PAPER, GALERIE BIESENBACH, COLOGNE"))))))))},t}(s.a.Component),xn=function(n){return s.a.createElement(d.b,{query:"3003619329",render:function(t){return s.a.createElement(wn,Object.assign({data:t},n))},data:J})},vn=e(206),yn=e.n(vn),In=e(207),Bn=e.n(In);function jn(){var n=l()(["\n  background-color: rgb(200,0,0);\n  color: white;\n  font-family: 'Cormorant-Bold';\n  font-size: 36px;\n  text-align: center;\n"]);return jn=function(){return n},n}function Nn(){var n=l()(["\n  clip-path: \n  polygon(\n    3% 0%,     /* top left */\n    97% 0%,    /* top right */\n    100% 100%,  /* bottom right */\n    100% 100%,  /* bottom right */\n    0% 100%,   /* bottom left */\n    0 100%      /* bottom left */\n  );\n\n  position: relative;\n  text-align: center;\n  color: white;\n  font-family: 'Cormorant-Bold';\n  font-size: 36px;\n  background-color: rgb(200,0,0);\n  height: 50px;\n  width: 100%;\n"]);return Nn=function(){return n},n}function Cn(){var n=l()(["\n  position: relative;\n  height: 100vh;\n  background: transparent;\n"]);return Cn=function(){return n},n}function Qn(){var n=l()(["\n  position: relative;\n  height: 100vh;\n  background: rgb(200,0,0);\n"]);return Qn=function(){return n},n}function Sn(){var n=l()(["\n  position: relative;\n  height: 100vh;\n  background: transparent\n"]);return Sn=function(){return n},n}function Dn(){var n=l()(["\n  position: fixed;\n  // font-family: 'Cormorant-Bold';\n  // display: flex;\n  height: 50px;\n  // font-size: 36px;\n  // color: white;\n  bottom: 0;\n  left: 50%;\n  margin-left: -22.5px;\n  margin-bottom: 35px;\n  // margin-right: -130px;\n  // transform-origin: bottom left;\n  // transform: rotateZ(-90deg);\n  z-index: 999;\n\n  img {\n    height: 45px;\n  }\n"]);return Dn=function(){return n},n}function Gn(){var n=l()(["\n  position: absolute;\n  // font-family: 'Cormorant-Bold';\n  // display: flex;\n  height: 50px;\n  // font-size: 36px;\n  // color: white;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: 35px;\n  // margin-right: -130px;\n  // margin-right: 35px;\n  // transform-origin: bottom left;\n  // transform: rotateZ(-90deg);\n  z-index: 999;\n\n  img {\n    height: 45px;\n    // margin-right: 15px;\n  }\n"]);return Gn=function(){return n},n}function Mn(){var n=l()(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: none;\n  background: black;\n  // transform: translateZ(0) translateY(-50%);\n  height: 100vh;\n  width: 100%;\n  // z-index: 995;\n"]);return Mn=function(){return n},n}function Rn(){var n=l()(["\n  position: fixed;\n"]);return Rn=function(){return n},n}function Yn(){var n=l()(["\n\n-webkit-overflow-scrolling: touch;\n\n  // clip-path: \n  // polygon(\n  //   0% 2%,     /* top left */\n  //   3% 0%,     /* top left */\n  //   97% 0%,    /* top right */\n  //   100% 2%,   /* top right */\n  //   100% 100%,  /* bottom right */\n  //   100% 100%,  /* bottom right */\n  //   0% 100%,   /* bottom left */\n  //   0 100%      /* bottom left */\n  // );\n\n  position: relative !important;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  width: 100vw;\n  height: 100vh;\n  // width: 100%;\n  // height: 100%;\n  // margin-top: 100vh;\n  // top: 100vh;\n  background-color: transparent;\n  // background-color: transparent;\n  // z-index: -1;\n\n"]);return Yn=function(){return n},n}function kn(){var n=l()(["\n  position: absolute;\n  top: 50%; // required as well.\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 70%;\n  // margin: 450px auto 0;\n  // margin: 0 auto;\n  // padding: 0;\n  // z-index: 0;\n  pointer-events: none;\n"]);return kn=function(){return n},n}function Ln(){var n=l()(["\n  position: fixed;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  width: 70%;\n  margin: 0;\n"]);return Ln=function(){return n},n}function On(){var n=l()(["\n  position: fixed;\n  height: 45px;\n  width: 45px;\n  top: -4px;\n  left: -18px;\n  z-index: 1600000;\n  pointer-events: none;\n  display: none;\n  stroke: none;\n  fill: white\n  \n\n  svg {\n    z-index: 1600000;\n    fill: inherit;\n    position: absolute;\n    pointer-events: none;\n  }\n\n  .mouse-inner {\n    transform: scale(0.3);\n  }\n\n  #Ebene_1 {\n    transform: scale(0.9);\n  }\n\n  #Ebene_2 {\n    fill: #c80000;\n    transform: scale(1);\n  }\n\n  @media(min-width: 992px) {\n    display: block;\n  }\n"]);return On=function(){return n},n}e.d(t,"query",function(){return tt});var Tn=f.b.div({preEnter:{x:0,opacity:1},enter:{opacity:1,x:0,transition:{duration:600,ease:"easeInOut"}},exit:{x:0,opacity:1,transition:{duration:600,ease:"easeInOut"}}}),Pn=f.b.div({openIndex:{x:"-10%",transition:{duration:600,ease:"easeInOut"}},closedIndex:{x:0,transition:{duration:600,ease:"easeInOut"}}}),zn=h.a.div(On()),Zn=h.a.img(Ln()),Hn=h.a.img(kn()),Fn=(f.b.div({openedAbout:{x:"-10%",transition:{ease:"easeInOut",duration:600}},closedAbout:{x:"0",transition:{ease:"easeInOut",duration:600}}}),h.a.div(Yn())),Un=(Object(h.a)(d.a)(Rn()),f.b.div({open:{applyAtStart:{display:"inline-block"},opacity:.7,transition:{ease:"easeInOut",duration:300}},closed:{applyAtEnd:{display:"none"},transition:{ease:"easeInOut",duration:300},opacity:0}})),Wn=Object(h.a)(Un)(Mn()),Vn=h.a.div(Gn()),Xn=f.b.div({openAbout:{y:"0",transition:{ease:"easeInOut",duration:600}},closedAbout:{y:"200%",transition:{ease:"easeInOut",duration:600}}}),Jn=Object(h.a)(Xn)(Dn()),Kn=(h.a.div(Sn()),h.a.div(Qn())),qn=h.a.div(Cn()),_n=h.a.div(Nn()),$n=h.a.div(jn()),nt=function(n){function t(t){var e;return(e=n.call(this,t)||this).mousePosition=function(n){var t=n.clientX,e=n.clientY,A=document.querySelector(".mouse");E.c.to(A,.1,{x:t,y:e})},e.addElements=function(){},e.handleScroll=function(){e.handleThrottledScroll()},e.handleThrottledScroll=function(){},e.handleAboutPageClick=function(){e.setState(function(n){return{aboutIsOpen:!n.aboutIsOpen}})},e.state={collections:[],aboutIsOpen:!1},e.counter=0,e.infiniteScroll=s.a.createRef(),e.allCollections=[],e.handleScroll=e.handleScroll.bind(i()(e)),e.handleThrottledScroll=g.a.throttle(e.handleThrottledScroll.bind(i()(e)),200),e}a()(t,n);var e=t.prototype;return e.componentWillMount=function(){var n=new function(n){this.projectName="",this.projectYear="",this.images=Object.values(n)}(this.props.data);this.allCollections=[n,n,n],this.setState({collections:this.allCollections})},e.componentDidMount=function(){var n=this;this.container=this.infiniteScroll,this.mouse=document.querySelector(".mouse"),document.addEventListener("mousemove",this.mousePosition),document.querySelector(".infinite-scroll").addEventListener("mouseover",function(){E.c.to(n.mouse,.25,{fill:"white"})})},e.render=function(){return s.a.createElement(Tn,null,s.a.createElement(zn,{className:"mouse"},s.a.createElement("div",{className:"mouse-inner"},s.a.createElement("svg",{id:"Ebene_2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 170.1 170.1"},s.a.createElement("path",{class:"st0",d:"M145.3,27.1C129.9,11.6,108.6,2,85,2c-23.5,0-44.8,9.6-60.2,25"})),s.a.createElement("svg",{id:"Ebene_1","data-name":"Ebene 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 170 170.1"},s.a.createElement("title",null,"Drag_Buttontest"),s.a.createElement("path",{className:"cls-1",d:"M85,170.1A85.05,85.05,0,1,0,0,85a85,85,0,0,0,85,85.1"}),s.a.createElement("polyline",{className:"cls-2",points:"100.3 127.8 142.1 85 100.3 42.2"}),s.a.createElement("polyline",{className:"cls-2",points:"69.7 127.8 28 85 69.7 42.2"})))),s.a.createElement(Jn,{pose:this.state.aboutIsOpen?"openAbout":"closedAbout",onClick:this.handleAboutPageClick},s.a.createElement("img",{src:Bn.a})),s.a.createElement(qn,null,s.a.createElement(Zn,{src:m.a})),s.a.createElement(_n,null),s.a.createElement($n,null,"projects"),s.a.createElement(Pn,{style:{height:"100vh"},pose:this.state.aboutIsOpen?"openIndex":"closedIndex"},s.a.createElement(b.a,{title:"Anna Genger",keywords:["Anna","Genger","Projects"]}),s.a.createElement(Kn,null,s.a.createElement(Vn,{onClick:this.handleAboutPageClick},s.a.createElement("img",{src:yn.a})),s.a.createElement(Hn,{src:m.a}),s.a.createElement(Fn,{id:"pin2",className:"infinite-scroll",ref:this.infiniteScroll,onScroll:this.handleScroll},this.state.collections.map(function(n,t){return s.a.createElement(X,{key:t,backgroundColor:"rgb(200,0,0)",containerClassName:".infinite-scroll",number:t,data:n})})))),s.a.createElement(Wn,{onClick:this.handleAboutPageClick,pose:this.state.aboutIsOpen?"open":"closed"}),s.a.createElement(xn,{open:this.state.aboutIsOpen}))},t}(s.a.Component),tt=(t.default=nt,"43190398")},156:function(n,t,e){"use strict";var A=e(157),i=e(0),o=e.n(i),a=e(1),r=e.n(a),l=e(160),c=e.n(l);function s(n){var t=n.description,e=n.lang,i=n.meta,a=n.keywords,r=n.title,l=A.data.site,s=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:e},title:r,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:r},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:s}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(i)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.arrayOf(r.a.object),keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},t.a=s},157:function(n){n.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},168:function(n,t,e){n.exports=e.p+"static/AnnaGengerLogo-06a42dae5a8d635685ea470d1995a339.svg"},205:function(n){n.exports={data:{imageone:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABT3ZIGQuE/8QAGxABAAEFAQAAAAAAAAAAAAAAAQIAAxARITH/2gAIAQEAAQUCJaSZRc4+4//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABoQAAICAwAAAAAAAAAAAAAAAAABETEQQVH/2gAIAQEAAT8htEdEChZiWtn/2gAMAwEAAgADAAAAEMAf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EGR//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGxABAAICAwAAAAAAAAAAAAAAAQAREFEhQaH/2gAIAQEAAT8QCpEOycsQjbAikTZPRgJQif/Z",aspectRatio:1.5005861664712778,src:"/AnnaGenger/static/b35e67ee23d725d573e6063bd1ab1570/c108b/img-about-1.jpg",srcSet:"/AnnaGenger/static/b35e67ee23d725d573e6063bd1ab1570/4cd1e/img-about-1.jpg 375w,\n/AnnaGenger/static/b35e67ee23d725d573e6063bd1ab1570/9f583/img-about-1.jpg 750w,\n/AnnaGenger/static/b35e67ee23d725d573e6063bd1ab1570/c108b/img-about-1.jpg 1280w",sizes:"(max-width: 1280px) 100vw, 1280px"}}},imagetwo:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABA6VXCfo2R//EABsQAAICAwEAAAAAAAAAAAAAAAIDAAEREyEy/9oACAEBAAEFAk+UdjKGyCAvMsdZf//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAEDAQE/AYf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAgEBPwGn/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAECECEx/9oACAEBAAY/Ajb6OKbP/8QAGhABAQEBAAMAAAAAAAAAAAAAAREAIUFRcf/aAAgBAQABPyGLFncqDv7gHB571JLO6WrFPGZlBv/aAAwDAQACAAMAAAAQXP8A/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAwEBPxBbBD//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EJwt/8QAGhABAQEBAAMAAAAAAAAAAAAAAREhADFBgf/aAAgBAQABPxCvnDH4cixVDVy80OIYT28IuFWdKIAYhzmUEV3Qe//Z",aspectRatio:1.5005861664712778,src:"/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/c108b/img-about-2.jpg",srcSet:"/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/4cd1e/img-about-2.jpg 375w,\n/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/9f583/img-about-2.jpg 750w,\n/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/c108b/img-about-2.jpg 1280w",sizes:"(max-width: 1280px) 100vw, 1280px"}}},imagethree:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABA6VXCfo2R//EABsQAAICAwEAAAAAAAAAAAAAAAIDAAEREyEy/9oACAEBAAEFAk+UdjKGyCAvMsdZf//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAEDAQE/AYf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAgEBPwGn/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAECECEx/9oACAEBAAY/Ajb6OKbP/8QAGhABAQEBAAMAAAAAAAAAAAAAAREAIUFRcf/aAAgBAQABPyGLFncqDv7gHB571JLO6WrFPGZlBv/aAAwDAQACAAMAAAAQXP8A/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAwEBPxBbBD//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EJwt/8QAGhABAQEBAAMAAAAAAAAAAAAAAREhADFBgf/aAAgBAQABPxCvnDH4cixVDVy80OIYT28IuFWdKIAYhzmUEV3Qe//Z",aspectRatio:1.5005861664712778,src:"/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/c108b/img-about-2.jpg",srcSet:"/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/4cd1e/img-about-2.jpg 375w,\n/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/9f583/img-about-2.jpg 750w,\n/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/c108b/img-about-2.jpg 1280w",sizes:"(max-width: 1280px) 100vw, 1280px"}}},imagefour:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABA6VXCfo2R//EABsQAAICAwEAAAAAAAAAAAAAAAIDAAEREyEy/9oACAEBAAEFAk+UdjKGyCAvMsdZf//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAEDAQE/AYf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAgEBPwGn/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAECECEx/9oACAEBAAY/Ajb6OKbP/8QAGhABAQEBAAMAAAAAAAAAAAAAAREAIUFRcf/aAAgBAQABPyGLFncqDv7gHB571JLO6WrFPGZlBv/aAAwDAQACAAMAAAAQXP8A/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAwEBPxBbBD//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EJwt/8QAGhABAQEBAAMAAAAAAAAAAAAAAREhADFBgf/aAAgBAQABPxCvnDH4cixVDVy80OIYT28IuFWdKIAYhzmUEV3Qe//Z",aspectRatio:1.5005861664712778,src:"/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/c108b/img-about-2.jpg",srcSet:"/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/4cd1e/img-about-2.jpg 375w,\n/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/9f583/img-about-2.jpg 750w,\n/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/c108b/img-about-2.jpg 1280w",sizes:"(max-width: 1280px) 100vw, 1280px"}}}}}},206:function(n,t){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1Mi41IDUyLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUyLjUgNTIuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRjAwMDA7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNi4yLDUyLjVjMTQuNSwwLDI2LjItMTEuOCwyNi4yLTI2LjNTNDAuOCwwLDI2LjIsMFMwLDExLjgsMCwyNi4zUzExLjgsNTIuNSwyNi4yLDUyLjUiLz4KPC9nPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSIyNi4zIiB4Mj0iNDIuNSIgeTI9IjI2LjMiLz4KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjI2LjIiIHkxPSI0Mi41IiB4Mj0iMjYuMiIgeTI9IjEwLjEiLz4KPC9zdmc+Cg=="},207:function(n,t){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1Mi41IDUyLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUyLjUgNTIuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRjAwMDA7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNi4yLDUyLjVjMTQuNSwwLDI2LjItMTEuOCwyNi4yLTI2LjNTNDAuOCwwLDI2LjIsMFMwLDExLjgsMCwyNi4zUzExLjgsNTIuNSwyNi4yLDUyLjUiLz4KPC9nPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSIyNi4zIiB4Mj0iNDIuNSIgeTI9IjI2LjMiLz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-6063c5a9ed9bbf2d9475.js.map