(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(e,t,n){"use strict";n.r(t);var i=n(36),o=n.n(i),a=n(5),A=n.n(a),l=n(0),r=n.n(l),s=n(77),c=n(166),d=n.n(c),m=n(148),p=n(162),E=n.n(p),u=n(41),g=n(159),h=m.a.div.withConfig({displayName:"mouse__MouseContainer",componentId:"e64rj6-0"})(["position:fixed;height:45px;width:45px;top:-15px;z-index:1600000;pointer-events:none;display:none;stroke:none;fill:#ed6d2d;svg{z-index:1600000;fill:inherit;position:absolute;pointer-events:none;}.mouse-inner{transform:scale(0.3);}#Ebene_1{transform:scale(0.9);overflow:visible;}#Ebene_2{position:absolute;fill:#ed6d2d;transform:scale(0);}@media(min-width:992px){display:block;}"]),f=function(e){function t(t){return e.call(this,t)||this}A()(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("mousemove",this.mousePosition)},n.componentWillReceiveProps=function(e){switch(e.currentHover){case"infiniteSliderIsNotZoomed":this.hoverInfiniteSliderNotZoomed();break;case"infiniteSliderIsZoomed":this.hoverInfiniteSliderIsZoomed();case"link":this.hoverLink();break;case"infiniteSliderIsHovered":this.infiniteSliderIsHovered();break;default:this.hoverIndex()}},n.hoverInfiniteSliderNotZoomed=function(){g.d.to(".mouse-inner",.5,{scale:1,stroke:"none"}),g.d.to(".mouse",.5,{left:"-10",fill:"white"}),g.d.to(".cls-2",.5,{stroke:"#ed6d2d"});var e=document.getElementById("Ebene_2");this.tl=new g.c,this.tl.to(e,0,{rotation:360,scale:1,ease:g.a.easeInOut}).to(e,.5,{rotation:0,scale:1,stroke:"#ed6d2d",display:"block"}).to(e,.5,{scale:.8}).to(e,0,{scale:0})},n.hoverInfiniteSliderIsZoomed=function(){setTimeout(function(){g.d.to(".mouse-inner",.5,{scale:1,stroke:"none"}),g.d.to(".mouse",.5,{left:"-10",fill:"white"}),g.d.to(".cls-2",.5,{stroke:"#ed6d2d"})},10)},n.infiniteSliderIsHovered=function(){setTimeout(function(){g.d.to(".mouse-inner",.5,{scale:1,stroke:"none"}),g.d.to(".mouse",.5,{left:"-10",fill:"white"}),g.d.to(".cls-2",.5,{stroke:"transparent"})},10)},n.hoverIndex=function(){g.d.to(document.getElementById("Ebene_2"),0,{display:"none"}),g.d.to(".mouse-inner",.5,{scale:.3,stroke:"none"}),g.d.to(".mouse",.5,{fill:"#ed6d2d"}),g.d.to(".cls-2",.5,{stroke:"none"})},n.hoverLink=function(){g.d.to(document.getElementById("Ebene_2"),0,{display:"none"}),g.d.to(".mouse-inner",.5,{scale:1,stroke:"#ed6d2d",strokeWidth:"2px"}),g.d.to(".mouse",.5,{fill:"transparent"}),g.d.to(".cls-2",0,{stroke:"none",fill:"none"})},n.mousePosition=function(e){var t=e.clientX,n=e.clientY,i=document.querySelector(".mouse");g.d.to(i,.3,{x:t,y:n})},n.render=function(){return r.a.createElement(h,{className:"mouse"},r.a.createElement("div",{className:"mouse-inner"},r.a.createElement("svg",{id:"Ebene_2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 170.1 170.1"},r.a.createElement("path",{className:"st0",d:"M145.3,27.1C129.9,11.6,108.6,2,85,2c-23.5,0-44.8,9.6-60.2,25"})),r.a.createElement("svg",{id:"Ebene_1","data-name":"Ebene 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 170 170.1"},r.a.createElement("title",null,"Drag_Buttontest"),r.a.createElement("path",{className:"cls-1",d:"M85,170.1A85.05,85.05,0,1,0,0,85a85,85,0,0,0,85,85.1"}),r.a.createElement("polyline",{className:"cls-2",points:"100.3 127.8 142.1 85 100.3 42.2"}),r.a.createElement("polyline",{className:"cls-2",points:"69.7 127.8 28 85 69.7 42.2"}))))},t}(r.a.PureComponent),B=(n(182),n(156)),Q=(n(1),n(183)),w=n.n(Q),I=n(184),b=n.n(I),y=n(187),x=n.n(y),C=(Object(m.a)(b.a).withConfig({displayName:"infiniteslider__StyledPerfectScrollbar",componentId:"gz8hkq-0"})(["position:relative;width:100%;height:100%;display:flex;flex-direction:row;overflow-x:scroll;z-index:999;cursor:pointer !important;.ps__rail-x{display:none;}.ps__rail-y{display:none;}div:nth-child(1){display:none !important;width:auto !important;}"]),m.a.div.withConfig({displayName:"infiniteslider__StyledInfiniteScroll",componentId:"gz8hkq-1"})(["position:relative;overflow-y:hidden;width:100%;height:100%;display:flex;flex-direction:row;z-index:1;cursor:pointer !important;div:nth-child(1){display:none !important;height:0px;}}"]),Object(m.a)(w.a).withConfig({displayName:"infiniteslider__StyledImg",componentId:"gz8hkq-2"})(["width:100%;height:100%;margin:0 75px;padding:0;"])),v=(m.a.img.withConfig({displayName:"infiniteslider__StyledBasicImg",componentId:"gz8hkq-3"})(["height:100%;margin:0 25px;padding:0;"]),u.b.div({open:{position:"fixed",top:function(e){return e.windowWidth>=992?e.windowHeight/2-175-25:e.windowHeight/2-75-25},scale:1.6,transition:{ease:[.08,.69,.2,.99],duration:300},flip:!0},closed:{applyAtStart:{scale:1},scale:1,position:"static",top:"auto",transition:{ease:"easeInOut",duration:300},flip:!0}})),k=Object(m.a)(v).withConfig({displayName:"infiniteslider__StyledZoomDiv",componentId:"gz8hkq-4"})(["height:150px;width:100%;z-index:999;@media(min-width:992px){height:350px;}"]),N=m.a.div.withConfig({displayName:"infiniteslider__PerfectScrollbarHolder",componentId:"gz8hkq-5"})(["position:relative;height:150px;margin-bottom:150px;font-family:'Cormorant-Regular';@media(min-width:992px){height:350px;}"]),S=u.b.div({open:{applyAtStart:{display:"block"},opacity:1,transition:{ease:"easeInOut",duration:300}},closed:{applyAtEnd:{display:"none"},transition:{ease:"easeInOut",duration:300},opacity:0}}),M=Object(m.a)(S).withConfig({displayName:"infiniteslider__StyledFrame",componentId:"gz8hkq-6"})(["position:fixed;top:0;left:0;right:0;bottom:0;display:none;background:",";transform:translateZ(0) translateY(-50%);height:200vh;z-index:-1;"],function(e){return e.backgroundColor}),L=u.b.div({open:{opacity:1,transition:{ease:[.08,.69,.2,.99],duration:300}},closed:{opacity:0,transition:{ease:[.08,.69,.2,.99],duration:300}}}),G=Object(m.a)(L).withConfig({displayName:"infiniteslider__StyledDescription",componentId:"gz8hkq-7"})(["font-family:'Cormorant-Bold';position:absolute;margin-top:-25px;display:flex;width:100%;font-size:14px;@media(min-width:992px){margin-top:-25px;font-size:20px;}"]),D=m.a.div.withConfig({displayName:"infiniteslider__Title",componentId:"gz8hkq-8"})(["margin-left:25px;"]),j=m.a.div.withConfig({displayName:"infiniteslider__Year",componentId:"gz8hkq-9"})(["margin-left:25px;"]),R=u.b.div({open:{opacity:1,transition:{ease:[.08,.69,.2,.99],duration:300}},closed:{opacity:0,transition:{ease:[.08,.69,.2,.99],duration:300}}}),H=Object(m.a)(R).withConfig({displayName:"infiniteslider__StyledCloseButton",componentId:"gz8hkq-10"})(["margin-left:25px;margin-top:35px;font-size:14px;@media(min-width:992px){font-size:20px;}"]),z=m.a.div.withConfig({displayName:"infiniteslider__ImageInfo",componentId:"gz8hkq-11"})(["margin-left:25px;"]),Z=function(e){function t(t){var n;return(n=e.call(this,t)||this).zoomIn=function(){n.windowWidth>=992&&(n.props.containerClassName?document.querySelector(n.props.containerClassName).addEventListener("scroll",n.zoomOut):window.addEventListener("scroll",n.zoomOut)),n.setState({isZoomed:!0})},n.zoomOut=function(){n.props.containerClassName?document.querySelector(n.props.containerClassName).removeEventListener("scroll",n.zoomOut):window.removeEventListener("scroll",n.zoomOut),n.setState({isZoomed:!1})},n.toggleZoom=function(){return n.state.isZoomed?n.zoomOut():n.zoomIn()},n._onTouchStart=function(e){n.touchMoved=!1},n._onTouchMove=function(e){n.touchMoved=!0},n._onTouchEnd=function(e){if(1!=n.touchMoved){if(n.state.isZoomed)return;n.toggleZoom()}},n._handleTitleChange=function(e,t){n.setState({imageInfo:e}),n.toggleBlur(t)},n.toggleBlur=function(e){var t=n.state.blurred,i=t[e];t[e]=!i,n.setState({blurred:t})},n.mouseEnter=function(){n.windowWidth<=992||(n.state.isZoomed?n.props.mouseEnter("infiniteSliderIsZoomed"):n.props.mouseEnter("infiniteSliderIsHovered"))},n.mouseLeave=function(){n.props.mouseLeave(),clearInterval(n.interval)},n.mouseClick=function(){n.state.isZoomed||(n.props.mouseEnter("infiniteSliderIsNotZoomed"),setTimeout(function(){n.toggleZoom()},500))},n.state={allData:null,initAllData:null,isZoomed:!1,scrollDirection:null,imageInfo:null,blurred:[],isInWindow:!1},n.counter=0,n.initPageScroll=0,n.interval=null,n.direction=null,n.displayData=[],n.windowHeight=null,n.windowWidth=null,n.touchMoved=null,n.handleSliderScroll=E.a.throttle(n.handleSliderScroll.bind(o()(n)),200),n._handleTitleChange=n._handleTitleChange.bind(o()(n)),n.mouse=null,n}A()(t,e);var n=t.prototype;return n.componentWillMount=function(){},n.componentDidMount=function(){var e=this;this.mouse=document.querySelector(".mouse"),this.setState({allData:this.props.data,initAllData:this.props.data}),this.windowHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0),this.windowWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0),setTimeout(function(){window.innerWidth>=992&&(window.addEventListener("scroll",this.handleSliderScroll),this.flkty.on("dragMove",function(e){var t=e.clientX,n=e.clientY,i=document.querySelector(".mouse");g.d.to(i,0,{x:t,y:n})}))}.bind(this),750);var t=Math.floor(10*Math.random());Math.random()>.5&&(t=-t),setTimeout(function(){e.flkty.applyForce(t),e.flkty.startAnimation(),e.flkty.dragEnd()},3500);var n=[];this.props.data.images.forEach(function(e){n.push({blurred:!1})}),this.setState({blurred:n}),setTimeout(function(){var t=function(e,t){var n=this;e.forEach(function(e){console.log(e.intersectionRatio),0===e.intersectionRatio||n.setState({isInWindow:!0})})}.bind(e);new IntersectionObserver(t,{root:null,rootMargin:"0px",threshold:[0,1]}).observe(e.newRef)},1e3)},n.handleSliderScroll=function(){var e=this,t=this.initPageScroll,n=(document.querySelector(".flickity-slider"),1*Math.random());this.props.isSafari||window&&1==this.state.isInWindow&&(window.scrollY>=t?this.props.number%2==0?(this.flkty.applyForce(n),this.flkty.startAnimation(),this.flkty.dragEnd(),this.setState({scrollDirection:"left"})):(this.flkty.applyForce(-n),this.flkty.startAnimation(),this.flkty.dragEnd(),this.setState({scrollDirection:"right"})):window.scrollY<=t&&(this.props.number%2==0?(this.flkty.applyForce(-n),this.flkty.startAnimation(),this.flkty.dragEnd(),this.setState({scrollDirection:"right"})):(this.flkty.applyForce(n),this.flkty.startAnimation(),this.flkty.dragEnd(),this.setState({scrollDirection:"left"}))),this.initPageScroll=window.scrollY,setTimeout(function(){e.setState({scrollDirection:null})},1e3))},n.render=function(){var e=this;this.flkty&&this.flkty.startAnimation();var t=this.state,n=t.allData,i=(t.initAllData,{prevNextButtons:!1,pageDots:!1,freeScroll:!0,wrapAround:!this.props.isSafari,lazyLoad:!0,freeScrollFriction:.03,cellAlign:"left"});return r.a.createElement(N,{ref:function(t){return e.newRef=t},className:this.state.isZoomed?"open-holder":"closed-holder",onTouchStart:this._onTouchStart,onTouchEnd:this._onTouchEnd,onTouchMove:this._onTouchMove},r.a.createElement(k,{windowHeight:this.windowHeight,windowWidth:this.windowWidth,pose:this.state.isZoomed?"open":"closed"},null!=n?r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{pose:this.state.isZoomed?"open":"closed"},r.a.createElement(D,null,this.state.allData.projectName),r.a.createElement(j,null,this.state.allData.projectYear),r.a.createElement(z,null,this.state.imageInfo)),r.a.createElement("div",{style:{width:"100%",height:"100%"},onClick:this.mouseClick,onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave},r.a.createElement(x.a,{flickityRef:function(t){return e.flkty=t},ref:function(t){return e.sliderRef=t},className:this.state.scrollDirection?"right"==this.state.scrollDirection?"infinite-slider scrolling-right":"infinite-slider scrolling-left":"infinite-slider",elementType:"div",options:i},n.images.map(function(t,n){var i;return i=window.innerWidth>992?350*t.image.localFile.childImageSharp.fluid.aspectRatio:150*t.image.localFile.childImageSharp.fluid.aspectRatio,r.a.createElement("div",{key:n,className:0==e.state.blurred[n]?"blurred image-to-blur":"image-to-blur",onMouseEnter:function(){e._handleTitleChange(t.image_caption.text,n)},onMouseLeave:function(){e._handleTitleChange(null,n)}},r.a.createElement(C,{className:"slider-image",style:{width:i},alt:t.image_caption.text,ref:function(t){return e.imageRef=t},fluid:t.image.localFile.childImageSharp.fluid}))})))):r.a.createElement("div",null),r.a.createElement(M,{backgroundColor:this.props.backgroundColor,pose:this.state.isZoomed?"open":"closed"}),r.a.createElement(H,{className:"can-click",onClick:this.toggleZoom,pose:this.state.isZoomed?"open":"closed"},"close")))},t}(r.a.PureComponent),T=(n(26),n(40),n(83),n(58),n(39),n(202),n(84),n(204)),O=n(205),F=u.b.div({openDrawer:{applyAtStart:{position:"fixed"},opacity:1,x:function(e){return e.windowWidth>=992?"5%":"0%"},transition:{duration:600,ease:"easeInOut"}},closedDrawer:{x:"100%",opacity:1,transition:{duration:600,ease:"easeInOut"}}}),P=m.a.div.withConfig({displayName:"about-page__BackgroundImage",componentId:"lkoifp-0"})(["position:relative;width:50%;margin:0 auto;z-index:-1;img{display:block;width:100%;margin:0 auto;}"]),_=m.a.div.withConfig({displayName:"about-page__AboutDiv",componentId:"lkoifp-1"})(["-webkit-overflow-scrolling:touch;text-transform:lowercase;overflow-y:scroll;width:100vw;height:100vh;background-color:white;overflow-x:hidden;z-index:999;font-size:24px;line-height:26px;@media(min-width:992px){display:block;font-size:42px;line-height:40px;}"]),U=m.a.div.withConfig({displayName:"about-page__About",componentId:"lkoifp-2"})(["font-family:'Cormorant-Regular';margin-top:150px;"]),Y=m.a.div.withConfig({displayName:"about-page__Biographie",componentId:"lkoifp-3"})([""]),W=m.a.div.withConfig({displayName:"about-page__MainTitle",componentId:"lkoifp-4"})(["font-family:Cormorant-Regular;margin-bottom:25px;"]),q=(m.a.div.withConfig({displayName:"about-page__SubTitle",componentId:"lkoifp-5"})(["font-family:Cormorant-Regular;"]),m.a.ul.withConfig({displayName:"about-page__List",componentId:"lkoifp-6"})(["list-style:none;padding-left:0;li:nth-child(1){margin-bottom:25px;}@media(min-width:992px){}"])),J=m.a.li.withConfig({displayName:"about-page__ListTitle",componentId:"lkoifp-7"})(["font-family:Cormorant-Regular;"]),X=m.a.li.withConfig({displayName:"about-page__ListItem",componentId:"lkoifp-8"})([""]),K=m.a.span.withConfig({displayName:"about-page__Date",componentId:"lkoifp-9"})(["font-family:Cormorant-Regular;"]),V=m.a.div.withConfig({displayName:"about-page__Container",componentId:"lkoifp-10"})(["width:90%;margin:0 auto;@media(min-width:992px){width:70%;}"]),$=(m.a.div.withConfig({displayName:"about-page__CornerSnipLeft",componentId:"lkoifp-11"})(["clip-path:polygon(100% 0,100% 0,100% 100%,0 100%,0 5%);background-color:white;height:100vh;width:50px;"]),m.a.div.withConfig({displayName:"about-page__Footer",componentId:"lkoifp-12"})(["position:relative;display:flex;flex-direction:column;justify-content:left;align-items:center;bottom:0;height:120px;width:100%;color:#ed6d2d !important;font-family:'Cormorant-Bold';font-size:18px;z-index:999;@media(min-width:992px){flex-direction:row;font-size:32px;}"])),ee=m.a.div.withConfig({displayName:"about-page__Socials",componentId:"lkoifp-13"})(["display:none;position:fixed;right:0;top:50%;margin-right:-240px;transform-origin:left bottom;transform:rotateZ(-90deg) translateY(-50%);overflow:hidden;color:#ed6d2d !important;font-family:'Cormorant-Bold';font-size:24px;span:nth-child(1){margin-left:15px;}@media(min-width:992px){display:block;margin-right:-195px;flex-direction:row;font-size:32px;}"]),te=function(e){function t(t){var n;return(n=e.call(this,t)||this).addElements=function(){n.setState(function(e){return{collections:[].concat(e.collections,n.allCollections)}})},n.handleScroll=function(){n.handleThrottledScroll()},n.handleThrottledScroll=function(){n.container.scrollHeight-window.scrollY==0&&n.addElements()},n.mouseEnterLink=function(e){if(n.setState({currentHover:"link"}),0!=e.target.children.length){var t=e.target.children[0].classList.value.split("").splice(-1,1).join("");1==n.dynamicLink[t]&&(n.dynamicLink[t]=!1,O.a.timeline().add({targets:".ml"+t+" .letter",translateY:[0,-100],translateZ:0,opacity:[1,0],easing:"easeInExpo",duration:350,delay:function(e,t){return 300+30*t}}).add({targets:".ml"+t+" .letter",translateY:[100,0],opacity:[0,1],easing:"easeOutExpo",duration:300,delay:function(e,t){return 100+30*t},complete:function(){return n.dynamicLink[t]=!0}}))}},n.mouseLeaveLink=function(){n.setState({currentHover:"index"})},n.state={collections:[]},n.allCollections=[],n.handleScroll=n.handleScroll.bind(o()(n)),n.handleThrottledScroll=E.a.throttle(n.handleThrottledScroll.bind(o()(n)),200),n.windowWidth=null,n.mouseEnterLink=n.mouseEnterLink.bind(o()(n)),n.dynamicLink=[!0,!0,!0],n}A()(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=new function(e){this.projectName="",this.projectYear="",this.images=Object.values(e)}(this.props.data);this.allCollections=[e],this.setState({collections:this.allCollections})},n.componentDidMount=function(){var e=this;this.container=this.infiniteScroll,this.windowWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0),this.mouse=document.querySelector(".mouse"),window.addEventListener("scroll",this.handleScroll),setTimeout(function(){e.aboutRef.style.opacity=1},500),document.querySelectorAll(".ml0,.ml1,.ml2").forEach(function(e){e.children[0].innerHTML=e.children[0].innerHTML.replace(/([^\x00-\x80]|\w)/g,"<span class='letter'>$&</span>")}),document.querySelectorAll(".can-click").forEach(function(t){t.addEventListener("mouseenter",e.mouseEnterLink),t.addEventListener("mouseleave",e.mouseLeaveLink)})},n.render=function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:function(t){return e.aboutRef=t},style:{opacity:0}},r.a.createElement(F,{windowWidth:this.windowWidth,style:{position:"fixed",top:0,zIndex:995,display:"flex"},pose:this.props.open?"openDrawer":"closedDrawer"},r.a.createElement(_,{className:"infinite-scrll",ref:function(t){return e.infiniteScroll=t},onClick:this.props.onClick},r.a.createElement(P,null,r.a.createElement("img",{src:d.a})),r.a.createElement(U,null,r.a.createElement(Y,null,r.a.createElement(V,null,r.a.createElement(W,null,"vita"),r.a.createElement(W,null,"anna genger, 1978, de"),r.a.createElement(q,null,r.a.createElement(X,null,r.a.createElement(K,null,"• 2005–2007")," ma painting, royal college of art, london"),r.a.createElement(X,null,r.a.createElement(K,null,"• 2001–2005")," ba fine art (sculpture), slade school of fine art, london"),r.a.createElement(X,null,r.a.createElement(K,null,"• 2000–2001")," foundation diploma in art and design, central saint martins college of art"))),r.a.createElement(V,null,r.a.createElement(q,null,r.a.createElement(J,null,"exhibitions ",r.a.createElement("br",null),"solo exhibitions"),r.a.createElement(X,null,r.a.createElement(K,null,"• 2017")," „ANNA GENGER“, GALERIE APLANAT, HAMBURG, GERMANY"),r.a.createElement(X,null,r.a.createElement(K,null,"• 2016")," „BIRDS OF PREY“, GALERIE BIESENBACH, KÖLN, GERMANY"),r.a.createElement(X,null,r.a.createElement(K,null,"• 2014")," „BERNICE BOBS HER HAIR“, GALERIE BIESENBACH, KÖLN, GERMANY"),r.a.createElement(X,null,r.a.createElement(K,null,"• 06.05–15.05.2016")," HILDEGUNDE VON MER / GENGER&GLUNZ MEERBUSCH, GERMANY"),r.a.createElement(X,null,r.a.createElement(K,null,"• 12.02–14.02.2016")," KEINE FARBE SCHWARZ, FREITAGSSALON, HAMBURG"),r.a.createElement(X,null,r.a.createElement(K,null,"• 24.07–31.07.2015")," ANOTHER SUMMER OF PAPER, GALERIE BIESENBACH, COLOGNE"))))),r.a.createElement(V,null,r.a.createElement($,{className:"footer"},r.a.createElement("span",{className:"can-click-parent"},"website by ",r.a.createElement("span",{className:"can-click"},r.a.createElement("span",{className:"ml0"},r.a.createElement("a",{href:"https://karlanders.io",target:"_blank"},"Karl Anders")))),r.a.createElement("span",{className:"socials-mobile"},r.a.createElement("span",null,r.a.createElement("a",{href:"https://www.instagram.com/annagenger/",target:"_blank"},"instagram"))),r.a.createElement("span",{className:"socials-mobile"},r.a.createElement("span",null,r.a.createElement("a",{href:"https://www.instagram.com/annagenger/",target:"_blank"},"facebook"))))),r.a.createElement(ee,null,r.a.createElement("span",{className:"can-click"},r.a.createElement("span",{className:"ml1"},r.a.createElement("a",{href:"https://www.instagram.com/annagenger/",target:"_blank"},"instagram"))),r.a.createElement("span",{className:"can-click"},r.a.createElement("span",{className:"ml2"},r.a.createElement("a",{href:"https://www.instagram.com/annagenger/",target:"_blank"},"facebook"))))))))},t}(r.a.Component),ne=function(e){return r.a.createElement(s.b,{query:"3003619329",render:function(t){return r.a.createElement(te,Object.assign({data:t},e))},data:T})},ie=n(206),oe=n.n(ie),ae=n(207),Ae=n.n(ae);n.d(t,"pageQuery",function(){return Qe});var le=u.b.div({preEnter:{x:0,opacity:1},enter:{opacity:1,x:0,transition:{duration:600,ease:"easeInOut"}},exit:{x:0,opacity:1,transition:{duration:600,ease:"easeInOut"}}}),re=u.b.div({openIndex:{x:"-10%",transition:{duration:600,ease:"easeInOut"}},closedIndex:{x:0,transition:{duration:600,ease:"easeInOut"}}}),se=m.a.img.withConfig({displayName:"pages__BackgroundImage",componentId:"sc-1el2we6-0"})(["position:fixed;z-index:-1;top:50%;left:50%;opacity:0;transform:translate(-50%,-50%);width:100%;height:100%;margin:0;"]),ce=(m.a.img.withConfig({displayName:"pages__BackgroundImage2",componentId:"sc-1el2we6-1"})(["position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:50%;pointer-events:none;opacity:0;transition-duration:2s;z-index:800;"]),m.a.div.withConfig({displayName:"pages__ProjectDiv",componentId:"sc-1el2we6-2"})(["-webkit-overflow-scrolling:touch;position:relative !important;width:100vw;height:100%;background-color:transparent;z-index:800 !important;"])),de=(Object(m.a)(s.a).withConfig({displayName:"pages__StyledLink",componentId:"sc-1el2we6-3"})(["position:fixed;"]),u.b.div({open:{applyAtStart:{display:"inline-block"},opacity:.7,transition:{ease:"easeInOut",duration:300}},closed:{applyAtEnd:{display:"none"},transition:{ease:"easeInOut",duration:300},opacity:0}})),me=Object(m.a)(de).withConfig({displayName:"pages__StyledOverlay",componentId:"sc-1el2we6-4"})(["position:fixed;top:0;left:0;right:0;bottom:0;display:none;background:black;height:100vh;width:100%;z-index:990;"]),pe=m.a.div.withConfig({displayName:"pages__About",componentId:"sc-1el2we6-5"})(["position:fixed;height:50px;bottom:0;right:35px;margin-bottom:35px;z-index:990;img{height:100%;}@media(min-width:992px){height:75px;}"]),Ee=u.b.div({openAbout:{x:"0",transition:{ease:"easeInOut",duration:600}},closedAbout:{x:"400%",transition:{ease:"easeInOut",duration:600}}}),ue=Object(m.a)(Ee).withConfig({displayName:"pages__StyledAboutMinus",componentId:"sc-1el2we6-6"})(["position:fixed;height:50px;bottom:0;right:35px;margin-bottom:35px;z-index:999;img{height:100%;}@media(min-width:992px){height:75px;}"]),ge=m.a.div.withConfig({displayName:"pages__SpacerTop",componentId:"sc-1el2we6-7"})(["position:relative;height:100vh;background:transparent"]),he=(m.a.div.withConfig({displayName:"pages__Spacer",componentId:"sc-1el2we6-8"})(["position:relative;height:100px;background:transparent"]),m.a.div.withConfig({displayName:"pages__Container",componentId:"sc-1el2we6-9"})(["position:relative;background:transparent;"])),fe=m.a.div.withConfig({displayName:"pages__ContainerTop",componentId:"sc-1el2we6-10"})([""]),Be=(m.a.div.withConfig({displayName:"pages__CornerSnipTop",componentId:"sc-1el2we6-11"})(["clip-path:polygon( 3% 0%,97% 0%,100% 100%,100% 100%,0% 100%,0 100%       );position:relative;text-align:center;color:white;font-family:'Cormorant-Bold';font-size:36px;background-color:rgb(200,0,0);height:50px;width:100%;"]),m.a.div.withConfig({displayName:"pages__CornerSnipBottom",componentId:"sc-1el2we6-12"})(["clip-path:polygon(0 0,100% 0,97% 100%,3% 100%);position:relative;text-align:center;color:white;font-family:'Cormorant-Bold';font-size:36px;background-color:rgb(200,0,0);height:50px;width:100%;"]),m.a.div.withConfig({displayName:"pages__Projects",componentId:"sc-1el2we6-13"})(["background-color:rgb(200,0,0);color:white;padding:0 0 25px 0;font-family:'Cormorant-Bold';font-size:32px;text-align:center;"]),function(e){function t(t){var n;return(n=e.call(this,t)||this).handleScroll=function(){console.log("scrolled");var e=document.querySelector(".infinite-scroll").scrollHeight,t=window.innerHeight,i=window.scrollY;console.log({pageHeight:e,scrollAmount:i,windowHeight:t}),i>=e-t-100&&i<=e-t&&(n.counter++,n.setState(function(e){return{collections:[].concat(e.collections,n.allCollections)}}))},n.handleAboutPageClick=function(){n.setState(function(e){return{aboutIsOpen:!e.aboutIsOpen}})},n.mouseEnterInfinitySlider=function(e){n.setState({currentHover:e})},n.mouseLeaveInfinitySlider=function(){n.setState({currentHover:"index"})},n.mouseEnterLink=function(e){n.setState({currentHover:"link"})},n.mouseLeaveLink=function(){n.setState({currentHover:"index"})},n.state={collections:[],aboutIsOpen:!1,currentHover:"index",isSafari:!1},n.counter=0,n.infiniteScroll=r.a.createRef(),n.allCollections=[],n.handleScroll=E.a.throttle(n.handleScroll.bind(o()(n)),250),n.mouseEnterLink=n.mouseEnterLink.bind(o()(n)),n}A()(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=this,t=function(e){this.projectName=e.title.text,this.projectYear=e.year.text,this.projectTechnique=e.technique.text,this.images=e.image_gallery};this.allCollections=[],this.props.data.allPrismicImagegallery.edges.forEach(function(n){e.allCollections.push(new t(n.node.data))}),this.setState({collections:[].concat(this.allCollections,this.allCollections,this.allCollections)})},n.componentDidMount=function(){var e=this;this.container=this.infiniteScroll,g.d.to(this.backgroundImageRef1,5,{opacity:1,ease:g.b.easeInOut}),setTimeout(function(){g.d.to(document.querySelector(".spacer-top"),1,{height:"0",ease:g.b.easeInOut,onComplete:function(){document.querySelector("body").style.position="absolute"}})},2500),this.detectBrowser(),document.querySelectorAll(".can-click").forEach(function(t){t.addEventListener("mouseenter",e.mouseEnterLink),t.addEventListener("mouseleave",e.mouseLeaveLink)}),window.addEventListener("scroll",this.handleScroll)},n.detectBrowser=function(){var e=navigator.userAgent;e.indexOf("Firefox")>-1||(e.indexOf("Opera")>-1||e.indexOf("OPR")>-1||(e.indexOf("Trident")>-1||(e.indexOf("Edge")>-1||(e.indexOf("Chrome")>-1||e.indexOf("Safari")>-1&&("Apple Safari",this.setState({isSafari:!0}))))))},n.render=function(){var e=this;return r.a.createElement(le,null,r.a.createElement(f,{currentHover:this.state.currentHover}),r.a.createElement(pe,{className:"can-click",onClick:this.handleAboutPageClick},r.a.createElement("img",{src:oe.a})),r.a.createElement(ue,{className:"can-click",pose:this.state.aboutIsOpen?"openAbout":"closedAbout",onClick:this.handleAboutPageClick},r.a.createElement("img",{src:Ae.a})),r.a.createElement(ge,{className:"spacer-top"}),r.a.createElement(fe,{className:"main-background"},r.a.createElement(se,{ref:function(t){return e.backgroundImageRef1=t},src:d.a})),r.a.createElement(re,{style:{overflow:"hidden"},pose:this.state.aboutIsOpen?"openIndex":"closedIndex"},r.a.createElement(B.a,{title:"Anna Genger",keywords:["Anna","Genger","Projects"]}),r.a.createElement(he,null,r.a.createElement(ce,{className:"infinite-scroll",ref:this.infiniteScroll},this.state.collections.map(function(t,n){return r.a.createElement(Z,{isSafari:e.state.isSafari,mouseLeave:e.mouseLeaveInfinitySlider,mouseEnter:e.mouseEnterInfinitySlider,key:n,backgroundColor:"white",number:n,data:t})})))),r.a.createElement(me,{onClick:this.handleAboutPageClick,pose:this.state.aboutIsOpen?"open":"closed"}),r.a.createElement(ne,{open:this.state.aboutIsOpen}))},t}(r.a.Component)),Qe=(t.default=Be,"2940251212")},156:function(e,t,n){"use strict";var i=n(157),o=n(0),a=n.n(o),A=n(1),l=n.n(A),r=n(161),s=n.n(r);function c(e){var t=e.description,n=e.lang,o=e.meta,A=e.keywords,l=e.title,r=i.data.site,c=t||r.siteMetadata.description;return a.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s",meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(A.length>0?{name:"keywords",content:A.join(", ")}:[]).concat(o)},a.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/blotter.min.js",type:"text/javascript"}),a.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/materials/liquidDistortMaterial.min.js"}))}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=c},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Anna Genger",description:"",author:""}}}}},166:function(e,t,n){e.exports=n.p+"static/AnnaGengerLogo-cbba4df2b6a4ffd3be24b911f096a433.svg"},204:function(e){e.exports={data:{imageone:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAANABQDAREAAhEBAxEB/8QAFgAAAwAAAAAAAAAAAAAAAAAABAcJ/8QAFwEAAwEAAAAAAAAAAAAAAAAAAgMEAf/aAAwDAQACEAMQAAABkGmlykpsbHPA6QWKMwv/xAAbEAEAAQUBAAAAAAAAAAAAAAAEAwABAgUGNP/aAAgBAQABBQI2+jAofTaygdgXEyvTWCJ47f/EACURAAIAAwYHAAAAAAAAAAAAAAECAAMxESFRYYGRBBASM0FCcf/aAAgBAwEBPwF5wVjLIp7Z2YQ4VruoUxGG2lR5h+AZ2LIwsOt+kT+9NymPZvyDEUJHwx//xAAiEQABAgQHAQAAAAAAAAAAAAABAAIDMUGBEBEhYXKR4fH/2gAIAQIBAT8BELMBwNvUA4UPRv8AUXCs91C1hs4jCc1//8QAIxAAAgICAQIHAAAAAAAAAAAAAQIDEQAxIhIhBBBBcnOBkf/aAAgBAQAGPwIJLEzRJ0hnQ8gexPA7A91k46yTxeHZGsCSReaMA6urDjo08ZqSNwVYeuKFZZFvsyNYOhv6yf5XH41eXTHK6LulYgXn/8QAGxABAQEAAwEBAAAAAAAAAAAAAREhADFBEGH/2gAIAQEAAT8hld01QRABWYOhxCQWbvMdNT6IKvjxENMA+Oufpw1axBWFwPD5sxHUDtg9s5//2gAMAwEAAgADAAAAEPFwv//EABsRAQEAAwEBAQAAAAAAAAAAAAERACExUWEQ/9oACAEDAQE/EElIAhNILxwU0NUSYgodCM4hER0noTQtxc9lsejd0eG9/MkMsBTUBhWFYAsLOfhaALUgWBedgF+Gf//EAB0RAQEAAQUBAQAAAAAAAAAAAAERIQAxQVFhELH/2gAIAQIBAT8QQ2FzZuX1hXyTnM04NB6wIoElJsZDhGTQ0CkFBPMWY6/dJW7rs2qVhxl2+IRAwhQYdF4y491//8QAGhABAQEBAQEBAAAAAAAAAAAAAREhADFRQf/aAAgBAQABPxAiaJt21fANGA9BSce3PAHYg46prIs44hKgDEcQ8AAChYUdwBBlAzA4whhbDC/Z978HdHkIwwVmze//2Q==",aspectRatio:1.5005861664712778,src:"/AnnaGenger/static/b35e67ee23d725d573e6063bd1ab1570/e3107/img-about-1.jpg",srcSet:"/AnnaGenger/static/b35e67ee23d725d573e6063bd1ab1570/92b76/img-about-1.jpg 375w,\n/AnnaGenger/static/b35e67ee23d725d573e6063bd1ab1570/76e6e/img-about-1.jpg 750w,\n/AnnaGenger/static/b35e67ee23d725d573e6063bd1ab1570/e3107/img-about-1.jpg 1280w",sizes:"(max-width: 1280px) 100vw, 1280px"}}},imagetwo:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAANABQDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACAkK/8QAFgEBAQEAAAAAAAAAAAAAAAAABgUE/9oADAMBAAIQAxAAAAEHh27p1T6FNBuZ+ArrobomNLD/AP/EABoQAAIDAQEAAAAAAAAAAAAAAAMFAgQGAQf/2gAIAQEAAQUC897Wkk8zLK2fX00NtnnomsDy+P4zGzSHxLf/xAAoEQACAQMDAwIHAAAAAAAAAAABAhEDEjEABCEFE0EyUQYUIkJScbH/2gAIAQMBAT8B+FqkbbcUyquor3OrRFrInPM4Ct4PnGuq06D916Btpu9QAIgFzQc+eRBwOPGtr3lpkENNx9atOF99dGRmXcqr2XwG4mQo/Y940RToJ8v2+5DM17sZlvxH2xgcnVaiiuQuIHr+o8ici3+a/8QAKBEAAgECBAQHAQAAAAAAAAAAAQIDERIABCExIkFRYQUGExQyQoGS/9oACAECAQE/AfNCOM5lpkuqYAgK1+sjnl3IH7jKPIk8UciC4CIkltACQNtt66HE/t2YG4fGnAwpuemlceKusZhkKX2AkCtNyex6YEsmZmvqIxooUCpop2ZuG7+RiKeSRAzWgm6vpi1dGI2JbkNdcf/EACMQAAICAQMFAQEBAAAAAAAAAAEDAgQRBRITABQhMUEiBmH/2gAIAQEABj8CuKsOCCdSbNM84kZ9pXG2JyD9ycY9DyfXVGvqZa+QcpYlcbyjgk+Ul4gZFPHHyvdjztPSWzRSsEUVL3L1JNaMBF1jC+ODIjxnOcZ/X+ddstwRstBsZ8e/9Tir2N8PA4o/R96XZdqliu6zTShnZpWlOILMd0Vsk6QYdxMpchJlg/OtU/naes6lbr1LFdkH2G4bLutNo2SJCJMfwWbRj2Bn31//xAAZEAEBAQEBAQAAAAAAAAAAAAABESEAMUH/2gAIAQEAAT8hwKEpLZysWMXKPIcfeM0vICliuTj1uoc8KTroA8HTjLocpg7kA273gYjBgvaQqQCc+wraGrILxGgT3//aAAwDAQACAAMAAAAQLGQ//8QAGhEBAQADAQEAAAAAAAAAAAAAAREAITFBUf/aAAgBAwEBPxA1nCuplADsKENlsNTUrgYpLlFAQG1UA1X17eGWh0+OMVFQsAzsUajzPZgUwZXiAgaAhBmB0pUqMEQMqw2PVz//xAAbEQEBAQEBAQEBAAAAAAAAAAABESEAMVFBYf/aAAgBAgEBPxAcIJEi+YxddL9PXYW2rL4ILRm1DORRwAvIZ7j9J7pepzQqR0XdGqifwl6bkSFiIJAVr6GN95DlgFeWjYoeovgGd//EABgQAQEAAwAAAAAAAAAAAAAAAAERADFB/9oACAEBAAE/EGcEMAqxDEnQW3MEpmDtWzhAJIonljMqAVVcOhwO3NQhLknmKib3f5itoRgVcgPbGIIlaJH/2Q==",aspectRatio:1.5005861664712778,src:"/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/e3107/img-about-2.jpg",srcSet:"/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/92b76/img-about-2.jpg 375w,\n/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/76e6e/img-about-2.jpg 750w,\n/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/e3107/img-about-2.jpg 1280w",sizes:"(max-width: 1280px) 100vw, 1280px"}}},imagethree:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAANABQDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACAkK/8QAFgEBAQEAAAAAAAAAAAAAAAAABgUE/9oADAMBAAIQAxAAAAEHh27p1T6FNBuZ+ArrobomNLD/AP/EABoQAAIDAQEAAAAAAAAAAAAAAAMFAgQGAQf/2gAIAQEAAQUC897Wkk8zLK2fX00NtnnomsDy+P4zGzSHxLf/xAAoEQACAQMDAwIHAAAAAAAAAAABAhEDEjEABCEFE0EyUQYUIkJScbH/2gAIAQMBAT8B+FqkbbcUyquor3OrRFrInPM4Ct4PnGuq06D916Btpu9QAIgFzQc+eRBwOPGtr3lpkENNx9atOF99dGRmXcqr2XwG4mQo/Y940RToJ8v2+5DM17sZlvxH2xgcnVaiiuQuIHr+o8ici3+a/8QAKBEAAgECBAQHAQAAAAAAAAAAAQIDERIABCExIkFRYQUGExQyQoGS/9oACAECAQE/AfNCOM5lpkuqYAgK1+sjnl3IH7jKPIk8UciC4CIkltACQNtt66HE/t2YG4fGnAwpuemlceKusZhkKX2AkCtNyex6YEsmZmvqIxooUCpop2ZuG7+RiKeSRAzWgm6vpi1dGI2JbkNdcf/EACMQAAICAQMFAQEBAAAAAAAAAAEDAgQRBRITABQhMUEiBmH/2gAIAQEABj8CuKsOCCdSbNM84kZ9pXG2JyD9ycY9DyfXVGvqZa+QcpYlcbyjgk+Ul4gZFPHHyvdjztPSWzRSsEUVL3L1JNaMBF1jC+ODIjxnOcZ/X+ddstwRstBsZ8e/9Tir2N8PA4o/R96XZdqliu6zTShnZpWlOILMd0Vsk6QYdxMpchJlg/OtU/naes6lbr1LFdkH2G4bLutNo2SJCJMfwWbRj2Bn31//xAAZEAEBAQEBAQAAAAAAAAAAAAABESEAMUH/2gAIAQEAAT8hwKEpLZysWMXKPIcfeM0vICliuTj1uoc8KTroA8HTjLocpg7kA273gYjBgvaQqQCc+wraGrILxGgT3//aAAwDAQACAAMAAAAQLGQ//8QAGhEBAQADAQEAAAAAAAAAAAAAAREAITFBUf/aAAgBAwEBPxA1nCuplADsKENlsNTUrgYpLlFAQG1UA1X17eGWh0+OMVFQsAzsUajzPZgUwZXiAgaAhBmB0pUqMEQMqw2PVz//xAAbEQEBAQEBAQEBAAAAAAAAAAABESEAMVFBYf/aAAgBAgEBPxAcIJEi+YxddL9PXYW2rL4ILRm1DORRwAvIZ7j9J7pepzQqR0XdGqifwl6bkSFiIJAVr6GN95DlgFeWjYoeovgGd//EABgQAQEAAwAAAAAAAAAAAAAAAAERADFB/9oACAEBAAE/EGcEMAqxDEnQW3MEpmDtWzhAJIonljMqAVVcOhwO3NQhLknmKib3f5itoRgVcgPbGIIlaJH/2Q==",aspectRatio:1.5005861664712778,src:"/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/e3107/img-about-2.jpg",srcSet:"/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/92b76/img-about-2.jpg 375w,\n/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/76e6e/img-about-2.jpg 750w,\n/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/e3107/img-about-2.jpg 1280w",sizes:"(max-width: 1280px) 100vw, 1280px"}}},imagefour:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAANABQDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACAkK/8QAFgEBAQEAAAAAAAAAAAAAAAAABgUE/9oADAMBAAIQAxAAAAEHh27p1T6FNBuZ+ArrobomNLD/AP/EABoQAAIDAQEAAAAAAAAAAAAAAAMFAgQGAQf/2gAIAQEAAQUC897Wkk8zLK2fX00NtnnomsDy+P4zGzSHxLf/xAAoEQACAQMDAwIHAAAAAAAAAAABAhEDEjEABCEFE0EyUQYUIkJScbH/2gAIAQMBAT8B+FqkbbcUyquor3OrRFrInPM4Ct4PnGuq06D916Btpu9QAIgFzQc+eRBwOPGtr3lpkENNx9atOF99dGRmXcqr2XwG4mQo/Y940RToJ8v2+5DM17sZlvxH2xgcnVaiiuQuIHr+o8ici3+a/8QAKBEAAgECBAQHAQAAAAAAAAAAAQIDERIABCExIkFRYQUGExQyQoGS/9oACAECAQE/AfNCOM5lpkuqYAgK1+sjnl3IH7jKPIk8UciC4CIkltACQNtt66HE/t2YG4fGnAwpuemlceKusZhkKX2AkCtNyex6YEsmZmvqIxooUCpop2ZuG7+RiKeSRAzWgm6vpi1dGI2JbkNdcf/EACMQAAICAQMFAQEBAAAAAAAAAAEDAgQRBRITABQhMUEiBmH/2gAIAQEABj8CuKsOCCdSbNM84kZ9pXG2JyD9ycY9DyfXVGvqZa+QcpYlcbyjgk+Ul4gZFPHHyvdjztPSWzRSsEUVL3L1JNaMBF1jC+ODIjxnOcZ/X+ddstwRstBsZ8e/9Tir2N8PA4o/R96XZdqliu6zTShnZpWlOILMd0Vsk6QYdxMpchJlg/OtU/naes6lbr1LFdkH2G4bLutNo2SJCJMfwWbRj2Bn31//xAAZEAEBAQEBAQAAAAAAAAAAAAABESEAMUH/2gAIAQEAAT8hwKEpLZysWMXKPIcfeM0vICliuTj1uoc8KTroA8HTjLocpg7kA273gYjBgvaQqQCc+wraGrILxGgT3//aAAwDAQACAAMAAAAQLGQ//8QAGhEBAQADAQEAAAAAAAAAAAAAAREAITFBUf/aAAgBAwEBPxA1nCuplADsKENlsNTUrgYpLlFAQG1UA1X17eGWh0+OMVFQsAzsUajzPZgUwZXiAgaAhBmB0pUqMEQMqw2PVz//xAAbEQEBAQEBAQEBAAAAAAAAAAABESEAMVFBYf/aAAgBAgEBPxAcIJEi+YxddL9PXYW2rL4ILRm1DORRwAvIZ7j9J7pepzQqR0XdGqifwl6bkSFiIJAVr6GN95DlgFeWjYoeovgGd//EABgQAQEAAwAAAAAAAAAAAAAAAAERADFB/9oACAEBAAE/EGcEMAqxDEnQW3MEpmDtWzhAJIonljMqAVVcOhwO3NQhLknmKib3f5itoRgVcgPbGIIlaJH/2Q==",aspectRatio:1.5005861664712778,src:"/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/e3107/img-about-2.jpg",srcSet:"/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/92b76/img-about-2.jpg 375w,\n/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/76e6e/img-about-2.jpg 750w,\n/AnnaGenger/static/4ba9fd8c5a4f8d596ce7460822d06e7b/e3107/img-about-2.jpg 1280w",sizes:"(max-width: 1280px) 100vw, 1280px"}}}}}},206:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1Mi41IDUyLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUyLjUgNTIuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNFRDZEMkQ7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNi4yLDUyLjVjMTQuNSwwLDI2LjItMTEuOCwyNi4yLTI2LjNTNDAuOCwwLDI2LjIsMFMwLDExLjgsMCwyNi4zUzExLjgsNTIuNSwyNi4yLDUyLjUiLz4KPC9nPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSIyNi4zIiB4Mj0iNDIuNSIgeTI9IjI2LjMiLz4KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjI2LjIiIHkxPSI0Mi41IiB4Mj0iMjYuMiIgeTI9IjEwLjEiLz4KPC9zdmc+Cg=="},207:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1Mi41IDUyLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUyLjUgNTIuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFRDZEMkQ7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNi4yLDUyLjVjMTQuNSwwLDI2LjItMTEuOCwyNi4yLTI2LjNTNDAuOCwwLDI2LjIsMFMwLDExLjgsMCwyNi4zUzExLjgsNTIuNSwyNi4yLDUyLjUiLz4KPC9nPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSIyNi4zIiB4Mj0iNDIuNSIgeTI9IjI2LjMiLz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-d1ac8bed6850ce2725be.js.map