(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(e,t,n){"use strict";n.r(t);var i=n(36),a=n.n(i),o=n(5),l=n.n(o),r=n(0),s=n.n(r),c=n(77),d=n(166),m=n.n(d),u=n(148),E=n(162),p=n.n(E),h=n(41),g=n(159),I=u.a.div.withConfig({displayName:"mouse__MouseContainer",componentId:"e64rj6-0"})(["position:fixed;height:45px;width:45px;top:-15px;z-index:1600000;pointer-events:none;display:none;stroke:none;fill:#ed6d2d;svg{z-index:1600000;fill:inherit;position:absolute;pointer-events:none;}.mouse-inner{transform:scale(0.3);}#Ebene_1{transform:scale(0.9);overflow:visible;}#Ebene_2{position:absolute;fill:#ed6d2d;transform:scale(0);}@media(min-width:992px){display:block;}"]),f=function(e){function t(t){return e.call(this,t)||this}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("mousemove",this.mousePosition)},n.componentWillReceiveProps=function(e){switch(e.currentHover){case"infiniteSliderIsNotZoomed":this.hoverInfiniteSliderNotZoomed();break;case"infiniteSliderIsZoomed":this.hoverInfiniteSliderIsZoomed();case"link":this.hoverLink();break;case"infiniteSliderIsHovered":this.infiniteSliderIsHovered();break;default:this.hoverIndex()}},n.hoverInfiniteSliderNotZoomed=function(){g.d.to(".mouse-inner",.5,{scale:1,stroke:"none"}),g.d.to(".mouse",.5,{left:"-10",fill:"white"}),g.d.to(".cls-2",.5,{stroke:"#ed6d2d"});var e=document.getElementById("Ebene_2");this.tl=new g.c,this.tl.to(e,0,{rotation:360,scale:1,ease:g.a.easeInOut}).to(e,.5,{rotation:0,scale:1,stroke:"#ed6d2d",display:"block"}).to(e,.5,{scale:.8}).to(e,0,{scale:0})},n.hoverInfiniteSliderIsZoomed=function(){setTimeout(function(){g.d.to(".mouse-inner",.5,{scale:1,stroke:"none"}),g.d.to(".mouse",.5,{left:"-10",fill:"white"}),g.d.to(".cls-2",.5,{stroke:"#ed6d2d"})},10)},n.infiniteSliderIsHovered=function(){setTimeout(function(){g.d.to(".mouse-inner",.5,{scale:1,stroke:"none"}),g.d.to(".mouse",.5,{left:"-10",fill:"white"}),g.d.to(".cls-2",.5,{stroke:"transparent"})},10)},n.hoverIndex=function(){g.d.to(document.getElementById("Ebene_2"),0,{display:"none"}),g.d.to(".mouse-inner",.5,{scale:.3,stroke:"none"}),g.d.to(".mouse",.5,{fill:"#ed6d2d"}),g.d.to(".cls-2",.5,{stroke:"none"})},n.hoverLink=function(){g.d.to(document.getElementById("Ebene_2"),0,{display:"none"}),g.d.to(".mouse-inner",.5,{scale:1,stroke:"#ed6d2d",strokeWidth:"2px"}),g.d.to(".mouse",.5,{fill:"transparent"}),g.d.to(".cls-2",0,{stroke:"none",fill:"none"})},n.mousePosition=function(e){var t=e.clientX,n=e.clientY,i=document.querySelector(".mouse");g.d.to(i,.3,{x:t,y:n})},n.render=function(){return s.a.createElement(I,{className:"mouse"},s.a.createElement("div",{className:"mouse-inner"},s.a.createElement("svg",{id:"Ebene_2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 170.1 170.1"},s.a.createElement("path",{className:"st0",d:"M145.3,27.1C129.9,11.6,108.6,2,85,2c-23.5,0-44.8,9.6-60.2,25"})),s.a.createElement("svg",{id:"Ebene_1","data-name":"Ebene 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 170 170.1"},s.a.createElement("title",null,"Drag_Buttontest"),s.a.createElement("path",{className:"cls-1",d:"M85,170.1A85.05,85.05,0,1,0,0,85a85,85,0,0,0,85,85.1"}),s.a.createElement("polyline",{className:"cls-2",points:"100.3 127.8 142.1 85 100.3 42.2"}),s.a.createElement("polyline",{className:"cls-2",points:"69.7 127.8 28 85 69.7 42.2"}))))},t}(s.a.PureComponent),N=n(167),S=n.n(N),A=(n(185),n(156)),w=(n(1),n(186)),R=n.n(w),y=n(187),L=n.n(y),b=(Object(u.a)(S.a).withConfig({displayName:"infiniteslider__StyledPerfectScrollbar",componentId:"gz8hkq-0"})(["position:relative;width:100%;height:100%;display:flex;flex-direction:row;overflow-x:scroll;z-index:999;cursor:pointer !important;.ps__rail-x{display:none;}.ps__rail-y{display:none;}div:nth-child(1){display:none !important;width:auto !important;}"]),u.a.div.withConfig({displayName:"infiniteslider__StyledInfiniteScroll",componentId:"gz8hkq-1"})(["position:relative;overflow-y:hidden;width:100%;height:100%;display:flex;flex-direction:row;z-index:1;cursor:pointer !important;div:nth-child(1){display:none !important;height:0px;}}"]),Object(u.a)(R.a).withConfig({displayName:"infiniteslider__StyledImg",componentId:"gz8hkq-2"})(["width:100%;height:100%;margin:0 75px;padding:0;"])),T=(u.a.img.withConfig({displayName:"infiniteslider__StyledBasicImg",componentId:"gz8hkq-3"})(["height:100%;margin:0 25px;padding:0;"]),h.b.div({open:{position:"fixed",top:function(e){return e.windowWidth>=992?e.windowHeight/2-175-25:e.windowHeight/2-75-25},scale:1.6,transition:{ease:[.08,.69,.2,.99],duration:300},flip:!0},closed:{applyAtStart:{scale:1},scale:1,position:"static",top:"auto",transition:{ease:"easeInOut",duration:300},flip:!0}})),C=Object(u.a)(T).withConfig({displayName:"infiniteslider__StyledZoomDiv",componentId:"gz8hkq-4"})(["height:150px;width:100%;z-index:999;@media(min-width:992px){height:350px;}"]),O=u.a.div.withConfig({displayName:"infiniteslider__PerfectScrollbarHolder",componentId:"gz8hkq-5"})(["position:relative;height:150px;margin-bottom:150px;font-family:'Cormorant-Regular';@media(min-width:992px){height:350px;}"]),v=h.b.div({open:{applyAtStart:{display:"block"},opacity:1,transition:{ease:"easeInOut",duration:300}},closed:{applyAtEnd:{display:"none"},transition:{ease:"easeInOut",duration:300},opacity:0}}),x=Object(u.a)(v).withConfig({displayName:"infiniteslider__StyledFrame",componentId:"gz8hkq-6"})(["position:fixed;top:0;left:0;right:0;bottom:0;display:none;background:",";transform:translateZ(0) translateY(-50%);height:200vh;z-index:-1;"],function(e){return e.backgroundColor}),k=h.b.div({open:{opacity:1,transition:{ease:[.08,.69,.2,.99],duration:300}},closed:{opacity:0,transition:{ease:[.08,.69,.2,.99],duration:300}}}),M=Object(u.a)(k).withConfig({displayName:"infiniteslider__StyledDescription",componentId:"gz8hkq-7"})(["font-family:'Cormorant-Bold';position:absolute;margin-top:-25px;display:flex;width:100%;font-size:14px;@media(min-width:992px){margin-top:-25px;font-size:20px;}"]),D=u.a.div.withConfig({displayName:"infiniteslider__Title",componentId:"gz8hkq-8"})(["margin-left:25px;"]),U=u.a.div.withConfig({displayName:"infiniteslider__Year",componentId:"gz8hkq-9"})(["margin-left:25px;"]),H=h.b.div({open:{opacity:1,transition:{ease:[.08,.69,.2,.99],duration:300}},closed:{opacity:0,transition:{ease:[.08,.69,.2,.99],duration:300}}}),G=Object(u.a)(H).withConfig({displayName:"infiniteslider__StyledCloseButton",componentId:"gz8hkq-10"})(["margin-left:25px;margin-top:35px;font-size:14px;@media(min-width:992px){font-size:20px;}"]),B=u.a.div.withConfig({displayName:"infiniteslider__ImageInfo",componentId:"gz8hkq-11"})(["margin-left:25px;"]),_=function(e){function t(t){var n;return(n=e.call(this,t)||this).zoomIn=function(){n.props.handleClick(),n.windowWidth>=992&&(n.props.containerClassName?document.querySelector(n.props.containerClassName).addEventListener("scroll",n.zoomOut):window.addEventListener("scroll",n.zoomOut)),n.setState({isZoomed:!0})},n.zoomOut=function(){n.props.handleClick(),n.props.containerClassName?document.querySelector(n.props.containerClassName).removeEventListener("scroll",n.zoomOut):window.removeEventListener("scroll",n.zoomOut),n.setState({isZoomed:!1})},n.toggleZoom=function(){return n.state.isZoomed?n.zoomOut():n.zoomIn()},n._onTouchStart=function(e){n.touchMoved=!1},n._onTouchMove=function(e){n.touchMoved=!0},n._onTouchEnd=function(e){if(1!=n.touchMoved){if(n.state.isZoomed)return;n.toggleZoom()}},n._handleTitleChange=function(e,t){n.toggleBlur(t)},n.toggleBlur=function(e){var t=n.state.blurred,i=t[e];t[e]=!i,n.setState({blurred:t}),n.forceUpdate()},n.mouseEnter=function(){n.windowWidth<=992||(n.state.isZoomed?n.props.mouseEnter("infiniteSliderIsZoomed"):n.props.mouseEnter("infiniteSliderIsHovered"))},n.mouseLeave=function(){n.props.mouseLeave(),clearInterval(n.interval)},n.mouseClick=function(){n.state.isZoomed||(n.props.mouseEnter("infiniteSliderIsNotZoomed"),setTimeout(function(){n.toggleZoom()},500))},n.state={allData:null,initAllData:null,isZoomed:!1,scrollDirection:null,imageInfo:null,blurred:[],isInWindow:!1},n.counter=0,n.initPageScroll=0,n.interval=null,n.direction=null,n.displayData=[],n.windowHeight=null,n.windowWidth=null,n.touchMoved=null,n.windowMobile=null,n.handleSliderScroll=p.a.throttle(n.handleSliderScroll.bind(a()(n)),100),n._handleTitleChange=n._handleTitleChange.bind(a()(n)),n.mouse=null,n}l()(t,e);var n=t.prototype;return n.componentWillMount=function(){},n.componentDidUpdate=function(){this.flkty&&this.flkty.startAnimation()},n.componentDidMount=function(){var e=this;this.mouse=document.querySelector(".mouse"),this.setState({allData:this.props.data,initAllData:this.props.data}),this.windowHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0),this.windowWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0),setTimeout(function(){this.windowWidth<=992||!1===this.props.isChrome&&this.windowWidth>=992||(window.addEventListener("scroll",this.handleSliderScroll),this.flkty.on("dragMove",function(e){var t=e.clientX,n=e.clientY,i=document.querySelector(".mouse");g.d.to(i,0,{x:t,y:n})}))}.bind(this),750);var t=[];this.props.data.images.forEach(function(e){t.push({blurred:!1})}),this.setState({blurred:t}),setTimeout(function(){var t=function(e,t){var n=this;e.forEach(function(e){0===e.intersectionRatio?n.setState({isInWindow:!1}):n.setState({isInWindow:!0})})}.bind(e);new IntersectionObserver(t,{root:null,rootMargin:"0px",threshold:[0,.1]}).observe(e.newRef)},1e3)},n.handleSliderScroll=function(){var e,t=this,n=this.initPageScroll;e=this.windowWidth>=992?1*Math.random():.2*Math.random();!0===this.state.isInWindow&&(window.scrollY>=n?this.props.number%2==0?(this.flkty.applyForce(e),this.flkty.startAnimation(),this.flkty.dragEnd(),this.setState({scrollDirection:"left"})):(this.flkty.applyForce(-e),this.flkty.startAnimation(),this.flkty.dragEnd(),this.setState({scrollDirection:"right"})):window.scrollY<=n&&(this.props.number%2==0?(this.flkty.applyForce(-e),this.flkty.startAnimation(),this.flkty.dragEnd(),this.setState({scrollDirection:"right"})):(this.flkty.applyForce(e),this.flkty.startAnimation(),this.flkty.dragEnd(),this.setState({scrollDirection:"left"}))),this.initPageScroll=window.scrollY,setTimeout(function(){t.setState({scrollDirection:null})},1e3))},n.render=function(){var e=this,t={prevNextButtons:!1,pageDots:!1,freeScroll:!0,wrapAround:!(!1===this.props.isChrome&&this.windowWidth>=992),lazyLoad:!0,freeScrollFriction:.03,cellAlign:"left"},n=this.state,i=n.allData;n.initAllData;return s.a.createElement(O,{ref:function(t){return e.newRef=t},className:this.state.isZoomed?"open-holder block-slider":"closed-holder block-slider",onTouchStart:this._onTouchStart,onTouchEnd:this._onTouchEnd,onTouchMove:this._onTouchMove},s.a.createElement(C,{windowHeight:this.windowHeight,windowWidth:this.windowWidth,pose:this.state.isZoomed?"open":"closed"},null!=i?s.a.createElement(s.a.Fragment,null,s.a.createElement(M,{pose:this.state.isZoomed?"open":"closed"},s.a.createElement(D,null,this.state.allData.projectName),s.a.createElement(U,null,this.state.allData.projectYear),s.a.createElement(B,null,this.state.imageInfo)),s.a.createElement("div",{style:{width:"100vw",height:"100%"},onClick:this.mouseClick,onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave},s.a.createElement(L.a,{flickityRef:function(t){return e.flkty=t},ref:function(t){return e.sliderRef=t},className:this.state.scrollDirection?"right"==this.state.scrollDirection?"infinite-slider scrolling-right":"infinite-slider scrolling-left":"infinite-slider",elementType:"div",options:t},i.images.map(function(t,n){var i;return i=window.innerWidth>992?350*t.image.localFile.childImageSharp.fluid.aspectRatio:150*t.image.localFile.childImageSharp.fluid.aspectRatio,s.a.createElement("div",{key:n,className:!1===e.state.blurred[n]?"blurred image-to-blur":"image-to-blur",onMouseEnter:function(){e._handleTitleChange(null,n)},onMouseLeave:function(){e._handleTitleChange(null,n)}},s.a.createElement(b,{className:"slider-image",style:{width:i},ref:function(t){return e.imageRef=t},fluid:t.image.localFile.childImageSharp.fluid}))})))):s.a.createElement("div",null),s.a.createElement(x,{backgroundColor:this.props.backgroundColor,pose:this.state.isZoomed?"open":"closed"}),s.a.createElement(G,{pose:this.state.isZoomed?"open":"closed"},s.a.createElement("span",{onMouseEnter:this.props.mouseEnterLink,onMouseLeave:this.props.mouseLeaveLink,className:"can-click",onClick:this.toggleZoom},"close"))))},t}(s.a.PureComponent),P=(n(26),n(40),n(83),n(58),n(39),n(202),n(84),n(204)),z=n(205),Z=h.b.div({openDrawer:{applyAtStart:{position:"fixed"},opacity:1,x:function(e){return e.windowWidth>=992?"5%":"0%"},transition:{duration:600,ease:"easeInOut"}},closedDrawer:{x:"100%",opacity:1,transition:{duration:600,ease:"easeInOut"}}}),j=u.a.div.withConfig({displayName:"about-page__BackgroundImage",componentId:"lkoifp-0"})(["position:relative;width:50%;margin:35px auto;z-index:-1;img{display:block;width:100%;margin:0 auto;}@media(min-width:992px){margin:0 auto;}"]),W=u.a.div.withConfig({displayName:"about-page__AboutDiv",componentId:"lkoifp-1"})(["-webkit-overflow-scrolling:touch;text-transform:lowercase;overflow-y:scroll;width:100vw;height:100vh;background-color:white;overflow-x:hidden;z-index:999;font-size:24px;line-height:26px;@media(min-width:992px){display:block;font-size:42px;line-height:40px;}"]),F=u.a.div.withConfig({displayName:"about-page__About",componentId:"lkoifp-2"})(["font-family:'Cormorant-Regular';margin-top:50px;@media(min-width:992px){margin-top:150px;}"]),K=u.a.div.withConfig({displayName:"about-page__Biographie",componentId:"lkoifp-3"})([""]),Y=u.a.div.withConfig({displayName:"about-page__MainTitle",componentId:"lkoifp-4"})(["font-family:Cormorant-Regular;margin-bottom:25px;"]),V=(u.a.div.withConfig({displayName:"about-page__SubTitle",componentId:"lkoifp-5"})(["font-family:Cormorant-Regular;"]),u.a.ul.withConfig({displayName:"about-page__List",componentId:"lkoifp-6"})(["list-style:none;padding-left:0;li:nth-child(1){margin-bottom:25px;}@media(min-width:992px){}"])),J=u.a.li.withConfig({displayName:"about-page__ListTitle",componentId:"lkoifp-7"})(["font-family:Cormorant-Regular;"]),q=u.a.li.withConfig({displayName:"about-page__ListItem",componentId:"lkoifp-8"})([""]),X=u.a.span.withConfig({displayName:"about-page__Date",componentId:"lkoifp-9"})(["font-family:Cormorant-Regular;"]),Q=u.a.div.withConfig({displayName:"about-page__Container",componentId:"lkoifp-10"})(["width:70%;margin:0 auto;@media(min-width:992px){width:70%;}"]),$=(u.a.div.withConfig({displayName:"about-page__CornerSnipLeft",componentId:"lkoifp-11"})(["clip-path:polygon(100% 0,100% 0,100% 100%,0 100%,0 5%);background-color:white;height:100vh;width:50px;"]),u.a.div.withConfig({displayName:"about-page__Footer",componentId:"lkoifp-12"})(["position:relative;display:flex;flex-direction:column;justify-content:left;align-items:center;bottom:0;height:120px;width:100%;color:#ed6d2d !important;font-family:'Cormorant-Bold';font-size:18px;z-index:999;margin-bottom:100px;@media(min-width:992px){flex-direction:row;font-size:32px;margin-bottom:0;}"])),ee=u.a.div.withConfig({displayName:"about-page__Socials",componentId:"lkoifp-13"})(["display:none;position:fixed;right:0;top:50%;margin-right:-240px;transform-origin:left bottom;transform:rotateZ(-90deg) translateY(-50%);overflow:hidden;color:#ed6d2d !important;font-family:'Cormorant-Bold';font-size:24px;span:nth-child(1){margin-left:15px;}@media(min-width:992px){display:block;margin-right:-205px;font-size:32px;}"]),te=function(e){function t(t){var n;return(n=e.call(this,t)||this).addElements=function(){n.setState(function(e){return{collections:[].concat(e.collections,n.allCollections)}})},n.handleScroll=function(){n.handleThrottledScroll()},n.handleThrottledScroll=function(){n.container.scrollHeight-window.scrollY==0&&n.addElements()},n.mouseEnterLink=function(e){if(n.setState({currentHover:"link"}),0!=e.target.children.length){var t=e.target.children[0].classList.value.split("").splice(-1,1).join("");1==n.dynamicLink[t]&&(n.dynamicLink[t]=!1,z.a.timeline().add({targets:".ml"+t+" .letter",translateY:[0,-100],translateZ:0,opacity:[1,0],easing:"easeInExpo",duration:350,delay:function(e,t){return 300+30*t}}).add({targets:".ml"+t+" .letter",translateY:[100,0],opacity:[0,1],easing:"easeOutExpo",duration:300,delay:function(e,t){return 100+30*t},complete:function(){return n.dynamicLink[t]=!0}}))}},n.mouseLeaveLink=function(){n.setState({currentHover:"index"})},n.state={collections:[]},n.allCollections=[],n.handleScroll=n.handleScroll.bind(a()(n)),n.handleThrottledScroll=p.a.throttle(n.handleThrottledScroll.bind(a()(n)),200),n.windowWidth=null,n.mouseEnterLink=n.mouseEnterLink.bind(a()(n)),n.dynamicLink=[!0,!0,!0],n}l()(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=new function(e){this.projectName="",this.projectYear="",this.images=Object.values(e)}(this.props.data);this.allCollections=[e],this.setState({collections:this.allCollections})},n.componentDidMount=function(){var e=this;this.container=this.infiniteScroll,this.windowWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0),this.mouse=document.querySelector(".mouse"),window.addEventListener("scroll",this.handleScroll),setTimeout(function(){e.aboutRef.style.opacity=1},500),document.querySelectorAll(".ml0,.ml1,.ml2").forEach(function(e){e.children[0].innerHTML=e.children[0].innerHTML.replace(/([^\x00-\x80]|\w)/g,"<span class='letter'>$&</span>")}),document.querySelectorAll(".can-click").forEach(function(t){t.addEventListener("mouseenter",e.mouseEnterLink),t.addEventListener("mouseleave",e.mouseLeaveLink)})},n.render=function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{ref:function(t){return e.aboutRef=t},style:{opacity:0}},s.a.createElement(Z,{windowWidth:this.windowWidth,style:{position:"fixed",top:0,zIndex:995,display:"flex"},pose:this.props.open?"openDrawer":"closedDrawer"},s.a.createElement(W,{className:"infinite-scrll",ref:function(t){return e.infiniteScroll=t},onClick:this.props.onClick},s.a.createElement(j,null,s.a.createElement("img",{src:m.a})),s.a.createElement(F,null,s.a.createElement(K,null,s.a.createElement(Q,null,s.a.createElement(Y,null,"vita"),s.a.createElement(Y,null,"anna genger, 1978, de"),s.a.createElement(V,null,s.a.createElement(q,null,s.a.createElement(X,null,"• 2005–2007")," ma painting, royal college of art, london"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2001–2005")," ba fine art (sculpture), slade school of fine art, london"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2000–2001")," foundation diploma in art and design, central saint martins college of art"))),s.a.createElement(Q,null,s.a.createElement(V,null,s.a.createElement(J,null,"exhibitions ",s.a.createElement("br",null),"solo exhibitions"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2017")," „ANNA GENGER“, GALERIE APLANAT, HAMBURG, GERMANY"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2016")," „BIRDS OF PREY“, GALERIE BIESENBACH, KÖLN, GERMANY"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2014")," „BERNICE BOBS HER HAIR“, GALERIE BIESENBACH, KÖLN, GERMANY"),s.a.createElement(J,null,"SELECTED GROUP EXHIBITIONS"),s.a.createElement(q,null,s.a.createElement(X,null,"• 06.05–15.05.2016")," HILDEGUNDE VON MER / GENGER&GLUNZ MEERBUSCH, GERMANY"),s.a.createElement(q,null,s.a.createElement(X,null,"• 12.02 -14.02.2016")," GENGER&GLUNZ, HUSAVIK, ICELAND"),s.a.createElement(q,null,s.a.createElement(X,null,"• 12.02–14.02.2016")," KEINE FARBE SCHWARZ, FREITAGSSALON, HAMBURG"),s.a.createElement(q,null,s.a.createElement(X,null,"• 24.07–31.07.2015")," ANOTHER SUMMER OF PAPER, GALERIE BIESENBACH, COLOGNE"),s.a.createElement(q,null,s.a.createElement(X,null,"• 12.06.2015–18.06.2015")," DIE KARTEN LIEGEN AUF DEM TISCH, FREITAGSSALON, HAMBURG, ANNA GENGER, VIVIANE GERNAERT"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2014")," „STEFAN SANDROCK“, GALERIE FEINKUNSTKRÜGER, HAMBURG"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2013"),' „SUMMER OF PAPER“, GALERIE BIESENBACH, KÖLN "WARIS AND ROSE", THE AGENCY GALLERY, LONDON'),s.a.createElement(q,null,s.a.createElement(X,null,"• 2012")," „STILLSTEHENDE SACHEN“ AUS DER SAMMLUNG SØR RUSCHE, MUSEUM ABTEI LIESBORN ",s.a.createElement("br",null),"DES KREISES WARENDORF, WADERSLOH-LIESBORN"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2011")," BEYOND DECEPTION, GALLERI ERIK STEEN, OSLO ",s.a.createElement("br",null),"HERBSTZEITLOSE, STRZELSKI GALERIE, STUTTGART ",s.a.createElement("br",null),"CORRESPONDENCE ART, A&D GALLERY, LONDON"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2010")," ROT: ANNA GENGER, DAVID JONES, SIMON SCHUBERT, CHRISTINE SCHULZ UND VERONIKA VEIT, UPSTAIRS BERLIN, BERLIN ",s.a.createElement("br",null),"2. EBERHARD-DIETZSCH-KUNSTPREIS 2010, GERAER BANK, GERA ",s.a.createElement("br",null),"LUST2010, BAZONNALE, WEIMAR ",s.a.createElement("br",null),"DRAW ME A…, PABLO ALONSO, ANNA GENGER, ANSELM REYLE, SIMON SCHUBERT, DIAMANTIS SOTIROPOULOS, FRANK STELLA, ANDY WARHOL, TOM WESSELMANN"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2009")," THE BASIS OF OPTIMISM, KUNSTRAUM T27, BERLIN ",s.a.createElement("br",null),"MANATURE, MENSCH UND NATUR, ALTE POST, “48 STUNDEN NEUKÖLLN”, 11. KUNST- UND ",s.a.createElement("br",null),"KULTURFESTIVAL BERLIN, BERLIN"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2008")," ANNA GENGER: BROKEN HEART’S TANGO FOR TWO IN ARTRMXCOLOGNE VOL.01, ",s.a.createElement("br",null),"COLOGNE TALES OF FLAMES, PROJEKTRAUM, KÜNSTLERHAUS BETHANIEN, BERLIN ",s.a.createElement("br",null),"PAPER8, UPSTAIRS BERLIN, BERLIN"))),s.a.createElement(Q,null,s.a.createElement(V,null,s.a.createElement(J,null,"Awards"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2003")," AUDREY WYKEHAM PRIZE"))),s.a.createElement(Q,null,s.a.createElement(V,null,s.a.createElement(J,null,"SCHOLARSHIPS"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2007")," RÉSIDENCES SECONDAIRES, PARC SAINT LÉGER, CENTRE D’ART CONTEMPORAIN, POUGUES-LES-EAUX"))),s.a.createElement(Q,null,s.a.createElement(V,null,s.a.createElement(J,null,"RESIDENCES"),s.a.createElement(q,null,s.a.createElement(X,null,"• JANUARY/FEBRUARY 2016")," FJÚK ART CENTRE, HUSAVIK, ICELAND"),s.a.createElement(q,null,s.a.createElement(X,null,"• JANUARY/FEBRUARY 2017")," NELIMARKKA MUSEUM, ALJÄRVI FINLAND"))),s.a.createElement(Q,null,s.a.createElement(V,null,s.a.createElement(J,null,"BOOKS AND CATALOGUES"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2009")," MANATURE, MENSCH UND NATUR, “48 STUNDEN NEUKÖLLN”, 11. KUNST- UND KULTURFESTIVAL BERLIN, BERLIN 2009"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2007")," 16/ART WORKS, BANK OF AMERICA, FRANKFURT AM MAIN 2007 ",s.a.createElement("br",null),"DECADENCE, DECAY & THE DEMIMONDE, EDITED BY BEN AUSTIN, LONDON 2007 ",s.a.createElement("br",null),"BLOOD, SWEAT ‘N TEARS, UPSTAIRS BERLIN, BERLIN 2007 ",s.a.createElement("br",null),"THE GREAT EXHIBITION 2007, ROYAL COLLEGE OF ART, LONDON 2007"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2006")," SOLITUDE. LONDON ARTISTS TODAY, UPSTAIRS BERLIN, BERLIN 2006"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2005")," MORPHO EUGENIA, GALLERIA D’ARTE CONTEMPORANEA DELLA REPUBBLICA DI SAN MARINO, SAN MARINO"))),s.a.createElement(Q,null,s.a.createElement(V,null,s.a.createElement(J,null,"Articles"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2009")," VANESSA PÉREZ, ZONA DE TALENTOS, IN: EL UNIVERSAL.COM.MX, 12. APRIL 2009 ",s.a.createElement("br",null),"ERNÖ HORVATH, WELTENTRÄUME VON ANNE GENGER, IN: DIE WELT, 3. APRIL 2009 ",s.a.createElement("br",null),"THEA HEROLD, WURMLÖCHER, IN: TAGESSPIEGEL, 21. MÄRZ 2009 ",s.a.createElement("br",null),"WRITER NAME UNPUBLISHED, OUT OF TUNE, CHERRIES AND PRUNE, IN: ARTREVIEW, JANUAR & FEBRUAR 2009"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2008")," „ART OFF SHOW“ IN KÖLN, IN: WDR.DE, 24. AUGUST 2008 ",s.a.createElement("br",null),"HANNA STYRIE, SPIELWIESEN FÜR DIE KUNST, IN: KÖLNISCHE RUNDSCHAU, 23. AUGUST 2008"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2007")," FREIRE BARNES, YOUNG MASTERS, IN: BON MAGAZINE, HERBSTAUSGABE 2007 ",s.a.createElement("br",null),"CHRISTIAN HERCHENRÖDER, DER MARKT LÄSST DIE MUSKELN SPIELEN, IN: HANDELSBLATT, 5.-7. OKTOBER 2007 ",s.a.createElement("br",null),"JULIA SIEPMANN, KUNST-GESCHICHTE AM GRENZÜBERGANG, IN: WELT AM SONNTAG, 30. SEPTEMBER 2007 ",s.a.createElement("br",null),"DESTINATION NEWS, ‚CELEBRATION’ AND ‚WARNING’ OF EXCESS THROUGH ART, IN: REDCARNATIONHOTELS.COM, 28.9.07 ",s.a.createElement("br",null),"ARIFA AKBAR, COLLECTORS DECLARE RCA’S CLASS OF 2007 ITS ‘BEST DEGREE SHOW IN YEARS’, IN: THE INDEPENDENT, 15. JUNI 2007"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2006")," ANNA GENGER, IN: ARTISTS & ILLUSTRATORS 2006 ",s.a.createElement("br",null),"GERHARD CHARLES RUMP, LONDONER EINSAMKEITEN IN DER GALERIE „UPSTAIRS“, IN: DIE WELT, 10. MÄRZ 2006 ",s.a.createElement("br",null),"KATRIN WITTNEVEN, JUGEND-STIL, IN: DER TAGESSPIEGEL, 4. FEBRUAR 2006 ",s.a.createElement("br",null),"CHRISTIANE MEIXNER, JUNGE KUNST AUS LONDON, IN: BERLINER MORGENPOST, 27. JANUAR 2006 ",s.a.createElement("br",null),"UPSTAIRS BERLIN, IN: GALLERY GUIDE EUROPE, JANUAR 2006 ",s.a.createElement("br",null),"SOLITUDE: YOUNG LONDON ARTISTS, IN: CONTEMPORARY, JANUAR 2006"))),s.a.createElement(Q,null,s.a.createElement(V,null,s.a.createElement(J,null,"Radio"),s.a.createElement(q,null,s.a.createElement(X,null,"• 2009")," BARBARA WIEGAND, GALERIENRUNDGANG, IN: INFORADIO RBB, 24. MÄRZ 2009"))))),s.a.createElement(Q,null,s.a.createElement($,{className:"footer"},s.a.createElement("span",{className:"can-click-parent"},"website by ",s.a.createElement("span",{className:"can-click"},s.a.createElement("span",{className:"ml0"},s.a.createElement("a",{href:"https://karlanders.io",target:"_blank"},"Karl Anders")))),s.a.createElement("span",{className:"socials-mobile"},s.a.createElement("span",null,s.a.createElement("a",{href:"https://www.instagram.com/annagenger/",target:"_blank"},"instagram"))),s.a.createElement("span",{className:"socials-mobile"},s.a.createElement("span",null,s.a.createElement("a",{href:"https://www.instagram.com/annagenger/",target:"_blank"},"facebook"))))),s.a.createElement(ee,null,s.a.createElement("span",{className:"can-click"},s.a.createElement("span",{className:"ml1"},s.a.createElement("a",{href:"https://www.instagram.com/annagenger/",target:"_blank"},"instagram"))),s.a.createElement("span",{className:"can-click"},s.a.createElement("span",{className:"ml2"},s.a.createElement("a",{href:"https://www.instagram.com/annagenger/",target:"_blank"},"facebook"))))))))},t}(s.a.Component),ne=function(e){return s.a.createElement(c.b,{query:"3003619329",render:function(t){return s.a.createElement(te,Object.assign({data:t},e))},data:P})},ie=n(206),ae=n.n(ie),oe=n(207),le=n.n(oe),re=n(208);n.d(t,"pageQuery",function(){return Ne});var se=h.b.div({preEnter:{x:0,opacity:1},enter:{opacity:1,x:0,transition:{duration:600,ease:"easeInOut"}},exit:{x:0,opacity:1,transition:{duration:600,ease:"easeInOut"}}}),ce=h.b.div({openIndex:{x:"-10%",transition:{duration:600,ease:"easeInOut"}},closedIndex:{x:0,transition:{duration:600,ease:"easeInOut"}}}),de=u.a.img.withConfig({displayName:"pages__BackgroundImage",componentId:"sc-1el2we6-0"})(["position:fixed;z-index:-1;top:50%;left:50%;opacity:0;transform:translate(-50%,-50%);width:100%;height:100%;margin:0;"]),me=(u.a.img.withConfig({displayName:"pages__BackgroundImage2",componentId:"sc-1el2we6-1"})(["position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:50%;pointer-events:none;opacity:0;transition-duration:2s;z-index:800;"]),u.a.div.withConfig({displayName:"pages__ProjectDiv",componentId:"sc-1el2we6-2"})(["position:fixed;-webkit-overflow-scrolling:touch;width:100vw;height:100%;background-color:transparent;z-index:800 !important;overflow-y:scroll;overflow-x:hidden;@media(min-width:992px){position:relative;overflow:auto;}"])),ue=(Object(u.a)(c.a).withConfig({displayName:"pages__StyledLink",componentId:"sc-1el2we6-3"})(["position:fixed;"]),h.b.div({open:{applyAtStart:{display:"inline-block"},opacity:.7,transition:{ease:"easeInOut",duration:300}},closed:{applyAtEnd:{display:"none"},transition:{ease:"easeInOut",duration:300},opacity:0}})),Ee=Object(u.a)(ue).withConfig({displayName:"pages__StyledOverlay",componentId:"sc-1el2we6-4"})(["position:fixed;top:0;left:0;right:0;bottom:0;display:none;background:black;height:100vh;width:100%;z-index:990;"]),pe=u.a.div.withConfig({displayName:"pages__About",componentId:"sc-1el2we6-5"})(["position:fixed;height:50px;bottom:-150px;right:35px;margin-bottom:35px;z-index:990;img{height:100%;}@media(min-width:992px){height:75px;}"]),he=h.b.div({openAbout:{x:"0",applyAtStart:{display:"block"},transition:{ease:"easeInOut",duration:600}},closedAbout:{x:"400%",transition:{ease:"easeInOut",duration:600}}}),ge=Object(u.a)(he).withConfig({displayName:"pages__StyledAboutMinus",componentId:"sc-1el2we6-6"})(["position:fixed;display:none;height:50px;bottom:0;right:35px;margin-bottom:35px;z-index:999;img{height:100%;}@media(min-width:992px){height:75px;}"]),Ie=u.a.div.withConfig({displayName:"pages__SpacerTop",componentId:"sc-1el2we6-7"})(["position:relative;height:100vh;background:transparent"]),fe=(u.a.div.withConfig({displayName:"pages__Spacer",componentId:"sc-1el2we6-8"})(["position:relative;height:100px;background:transparent"]),u.a.div.withConfig({displayName:"pages__CornerSnipTop",componentId:"sc-1el2we6-9"})(["clip-path:polygon( 3% 0%,97% 0%,100% 100%,100% 100%,0% 100%,0 100%       );position:relative;text-align:center;color:white;font-family:'Cormorant-Bold';font-size:36px;background-color:rgb(200,0,0);height:50px;width:100%;"]),u.a.div.withConfig({displayName:"pages__CornerSnipBottom",componentId:"sc-1el2we6-10"})(["clip-path:polygon(0 0,100% 0,97% 100%,3% 100%);position:relative;text-align:center;color:white;font-family:'Cormorant-Bold';font-size:36px;background-color:rgb(200,0,0);height:50px;width:100%;"]),u.a.div.withConfig({displayName:"pages__Projects",componentId:"sc-1el2we6-11"})(["background-color:rgb(200,0,0);color:white;padding:0 0 25px 0;font-family:'Cormorant-Bold';font-size:32px;text-align:center;"]),function(e){function t(t){var n;return(n=e.call(this,t)||this).handleScroll=function(){var e=document.querySelector(".infinite-scroll"),t=e.scrollHeight,i=n.windowHeight,a=window.scrollY;n.windowWidth>=992&&(t=e.scrollHeight,i=window.innerHeight,(a=window.scrollY)>=t-i-500&&a<=t-i&&n.setState(function(e){return{collections:[].concat(e.collections,n.allCollections)}}))},n.handleAboutPageClick=function(){n.setState(function(e){return{aboutIsOpen:!e.aboutIsOpen}}),n.state.aboutIsOpen?Object(re.enableBodyScroll)(n.targetElement):Object(re.disableBodyScroll)(n.targetElement)},n.mouseEnterInfinitySlider=function(e){n.setState({currentHover:e})},n.mouseLeaveInfinitySlider=function(){n.setState({currentHover:"index"})},n.mouseEnterLink=function(e){n.setState({currentHover:"link"})},n.mouseLeaveLink=function(){n.setState({currentHover:"index"})},n._handleClick=function(){n.setState(function(e){return{sliderIsOpen:!e.sliderIsOpen}}),n.windowWidth>=992||(n.state.sliderIsOpen?Object(re.enableBodyScroll)(document.querySelector(".block-slider")):Object(re.disableBodyScroll)(document.querySelector(".block-slider")))},n.state={collections:[],aboutIsOpen:!1,currentHover:"index",isChrome:!1,sliderIsOpen:!1},n.counter=0,n.infiniteScroll=s.a.createRef(),n.allCollections=[],n.handleScroll=p.a.throttle(n.handleScroll.bind(a()(n)),250),n.mouseEnterLink=n.mouseEnterLink.bind(a()(n)),n.targetElement=null,n.windowWidth=null,n.windowHeight=null,n}l()(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=this,t=function(e){this.projectName="",this.projectYear="",this.projectTechnique="",this.images=e.image_gallery};this.allCollections=[],this.props.data.allPrismicImagegallery.edges.forEach(function(n){e.allCollections.push(new t(n.node.data))}),this.setState({collections:[].concat(this.allCollections,this.allCollections,this.allCollections)})},n.componentDidMount=function(){var e=this;this.container=this.infiniteScroll,g.d.to(this.backgroundImageRef1,5,{opacity:1,ease:g.b.easeInOut}),setTimeout(function(){g.d.to(document.querySelector(".spacer-top"),1,{height:"0",ease:g.b.easeInOut,onComplete:function(){document.querySelector("body").style.position="absolute",g.d.to(e.aboutButtonRef,1,{y:-150,ease:g.b.easeInOut})}})},3e3),this.windowWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0),this.windowHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0),this.detectBrowser(),document.querySelectorAll(".can-click").forEach(function(t){t.addEventListener("mouseenter",e.mouseEnterLink),t.addEventListener("mouseleave",e.mouseLeaveLink)}),window.addEventListener("scroll",this.handleScroll),this.targetElement=document.querySelector(".infinite-scrll")},n.componentWillUnmount=function(){Object(re.clearAllBodyScrollLocks)()},n.detectBrowser=function(){var e=navigator.userAgent;e.indexOf("Firefox")>-1||(e.indexOf("Opera")>-1||e.indexOf("OPR")>-1||(e.indexOf("Trident")>-1||(e.indexOf("Edge")>-1||(e.indexOf("Chrome")>-1?("Google Chrome or Chromium",this.setState({isChrome:!0})):e.indexOf("Safari")))))},n.render=function(){var e=this;return s.a.createElement(se,null,s.a.createElement(f,{currentHover:this.state.currentHover}),s.a.createElement(pe,{ref:function(t){return e.aboutButtonRef=t},className:"can-click",onClick:this.handleAboutPageClick,style:this.state.sliderIsOpen?{display:"none"}:{display:"block"}},s.a.createElement("img",{src:ae.a})),s.a.createElement(ge,{className:"can-click",pose:this.state.aboutIsOpen?"openAbout":"closedAbout",onClick:this.handleAboutPageClick},s.a.createElement("img",{src:le.a})),s.a.createElement(Ie,{className:"spacer-top"}),s.a.createElement(de,{ref:function(t){return e.backgroundImageRef1=t},src:m.a}),s.a.createElement(ce,{pose:this.state.aboutIsOpen?"openIndex":"closedIndex"},s.a.createElement(A.a,{title:"Anna Genger",keywords:["Anna","Genger","Projects"]}),s.a.createElement(me,{className:"infinite-scroll",ref:this.infiniteScroll},this.state.collections.map(function(t,n){return s.a.createElement(_,{handleClick:e._handleClick,mouseEnterLink:e.mouseEnterLink,mouseLeaveLink:e.mouseLeaveLink,isChrome:e.state.isChrome,mouseLeave:e.mouseLeaveInfinitySlider,mouseEnter:e.mouseEnterInfinitySlider,key:n,backgroundColor:"white",number:n,data:t})}))),s.a.createElement(Ee,{onClick:this.handleAboutPageClick,pose:this.state.aboutIsOpen?"open":"closed"}),s.a.createElement(ne,{open:this.state.aboutIsOpen}))},t}(s.a.Component)),Ne=(t.default=fe,"3879996086")},156:function(e,t,n){"use strict";var i=n(157),a=n(0),o=n.n(a),l=n(1),r=n.n(l),s=n(161),c=n.n(s);function d(e){var t=e.description,n=e.lang,a=e.meta,l=e.keywords,r=e.title,s=i.data.site,d=t||s.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s",meta:[{name:"description",content:d},{property:"og:title",content:r},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:d}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(a)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.arrayOf(r.a.object),keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},t.a=d},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Anna Genger",description:"",author:""}}}}},166:function(e,t,n){e.exports=n.p+"static/AnnaGengerLogo-cbba4df2b6a4ffd3be24b911f096a433.svg"},204:function(e){e.exports={data:{imageone:null,imagetwo:null,imagethree:null,imagefour:null}}},206:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1Mi41IDUyLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUyLjUgNTIuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNFRDZEMkQ7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNi4yLDUyLjVjMTQuNSwwLDI2LjItMTEuOCwyNi4yLTI2LjNTNDAuOCwwLDI2LjIsMFMwLDExLjgsMCwyNi4zUzExLjgsNTIuNSwyNi4yLDUyLjUiLz4KPC9nPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSIyNi4zIiB4Mj0iNDIuNSIgeTI9IjI2LjMiLz4KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjI2LjIiIHkxPSI0Mi41IiB4Mj0iMjYuMiIgeTI9IjEwLjEiLz4KPC9zdmc+Cg=="},207:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1Mi41IDUyLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUyLjUgNTIuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFRDZEMkQ7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNi4yLDUyLjVjMTQuNSwwLDI2LjItMTEuOCwyNi4yLTI2LjNTNDAuOCwwLDI2LjIsMFMwLDExLjgsMCwyNi4zUzExLjgsNTIuNSwyNi4yLDUyLjUiLz4KPC9nPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSIyNi4zIiB4Mj0iNDIuNSIgeTI9IjI2LjMiLz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-5833aa75e1a69c381486.js.map