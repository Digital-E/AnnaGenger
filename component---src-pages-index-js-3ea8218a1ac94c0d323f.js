(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(t,n,e){"use strict";e.r(n);e(76),e(56),e(38),e(166);var i=e(7),a=e.n(i),o=e(157),r=e.n(o),l=e(0),c=e.n(l),s=(e(147),e(168)),d=e.n(s),u=e(158),p=e(150),h=e(35),m=e.n(h),g=(e(4),e(169)),f=e.n(g),w=e(170),y=e.n(w),b=e(183);e(173),e(184);function v(){var t=r()(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: none;\n    background: rgb(235,51,35);\n    transform: translateZ(0) translateY(-50%);\n    height: 100vh;\n    z-index: -1;\n"]);return v=function(){return t},t}function x(){var t=r()(["\n    position: relative;\n    height: 300px;\n    margin: 200px 0;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    padding: 25px 0;\n"]);return x=function(){return t},t}function I(){var t=r()(["\n    height: 300px; \n    width: 100%; \n    z-index: 999;\n"]);return I=function(){return t},t}function E(){var t=r()(["\n    height: 100%;\n    margin: 0 25px;\n    padding: 0;\n"]);return E=function(){return t},t}function H(){var t=r()(["\n    width: 100%;\n    height: 100%;\n    margin: 0 75px;\n    padding: 0;\n"]);return H=function(){return t},t}function z(){var t=r()(["\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  z-index: 1;\n  cursor: pointer !important;\n\n  div:nth-child(1) {\n    display: none !important;\n    height: 0px;\n  }\n  \n  }\n"]);return z=function(){return t},t}function S(){var t=r()(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n  z-index: 999;\n  cursor: pointer !important;\n\n  .ps__rail-x {\n      display: none;\n  }\n\n  .ps__rail-y {\n    display: none;\n}\n  \n  div:nth-child(1) {\n    display: none !important;\n    width: auto !important;\n  }\n"]);return S=function(){return t},t}e(187).a,Object(u.a)(y.a)(S());var M=u.a.div(z()),Z=(Object(u.a)(f.a)(H()),u.a.img(E())),D=b.a.div({open:{position:"fixed",top:function(t){return t.windowHeight/2-150},scale:2,transition:{ease:[.08,.69,.2,.99],duration:600},flip:!0},closed:{applyAtStart:{scale:1},position:"relative",top:"auto",transition:{ease:[.08,.69,.2,.99],duration:300},flip:!0}}),j=Object(u.a)(D)(I()),k=u.a.div(x()),A=b.a.div({open:{applyAtStart:{display:"block"},opacity:1},closed:{applyAtEnd:{display:"none"},opacity:0}}),R=Object(u.a)(A)(v()),G=function(t){function n(n){var e;return(e=t.call(this,n)||this).zoomIn=function(){window.addEventListener("scroll",e.zoomOut),e.setState({isZoomed:!0})},e.zoomOut=function(){window.removeEventListener("scroll",e.zoomOut),e.setState({isZoomed:!1})},e.toggleZoom=function(){return e.state.isZoomed?e.zoomOut():e.zoomIn()},e.state={allData:null,initAllData:null,isZoomed:!1},e.counter=0,e.displayData=[],e.windowHeight=null,e.addElements=e.addElements.bind(m()(e)),e.handleScrollLeft=e.handleScrollLeft.bind(m()(e)),e.handleScrollRight=e.handleScrollRight.bind(m()(e)),e}a()(n,t);var e=n.prototype;return e.componentWillMount=function(){this.setState({allData:this.props.data,initAllData:this.props.data})},e.componentDidMount=function(){var t=this;console.log(this.sliderRef),this.windowHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0),window.addEventListener("resize",function(){t.windowHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0)}),setTimeout(function(){t.addElements(),t.addElements()},1e3)},e.addElements=function(){var t=this;this.setState(function(n){return{allData:[].concat(t.state.initAllData,n.allData)}})},e.handleScrollLeft=function(){console.log("hello")},e.handleScrollRight=function(){this.counter++,this.addElements()},e.render=function(){var t=this,n=this.state,e=n.allData;n.initAllData;return c.a.createElement(k,{style:this.state.isZoomed?{zIndex:999}:{zIndex:1}},c.a.createElement(j,{windowHeight:this.windowHeight,pose:this.state.isZoomed?"open":"closed",onClick:this.toggleZoom},c.a.createElement(M,{ref:function(n){return t.sliderRef=n},onReachLeft:this.handleScrollLeft,onReachRight:this.handleScrollRight,horizontal:!0},e.map(function(t,n){return c.a.createElement(Z,{key:n,src:t.childImageSharp.fluid.src})})),c.a.createElement(R,{pose:this.state.isZoomed?"open":"closed"})))},n}(c.a.Component);e(182);function L(){var t=r()(["\n  position: relative;\n"]);return L=function(){return t},t}function P(){var t=r()(["\n  clip-path: \n  polygon(\n    0% 2%,     /* top left */\n    3% 0%,     /* top left */\n    97% 0%,    /* top right */\n    100% 2%,   /* top right */\n    100% 100%,  /* bottom right */\n    100% 100%,  /* bottom right */\n    0% 100%,   /* bottom left */\n    0 100%      /* bottom left */\n  );\n  position: relative;\n  z-index: 990;\n  height: 100%;\n  width: 100%;\n  top: 100vh;\n  background-color: rgb(235,51,35);\n  padding-top: 20px;\n  // overflow-x: hidden;\n"]);return P=function(){return t},t}function C(){var t=r()(["\n  display: block;\n  position: sticky;\n  top: 50%; // required as well.\n  transform: translateY(-50%);\n  z-index: -1;\n  width: 70%;\n  margin: 450px auto 0;\n  padding: 0\n"]);return C=function(){return t},t}function O(){var t=r()(["\n  position: fixed;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  width: 70%;\n  margin: 0;\n"]);return O=function(){return t},t}e.d(n,"query",function(){return W});var N=u.a.img(O()),T=u.a.img(C()),J=u.a.div(P()),F=(u.a.div(L()),function(t){function n(n){var e;return(e=t.call(this,n)||this).state={collections:[]},e}a()(n,t);var e=n.prototype;return e.componentWillMount=function(){console.log(this.props.data);var t;t=Object.values(this.props.data),this.setState({collections:t})},e.componentDidMount=function(){console.log(this.state)},e.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{title:"Anna Genger",keywords:["Anna","Genger","Projects"]}),c.a.createElement(N,{src:d.a}),c.a.createElement(J,null,c.a.createElement(T,{src:d.a}),c.a.createElement(G,{data:this.state.collections}),c.a.createElement(G,{data:this.state.collections}),c.a.createElement(G,{data:this.state.collections})))},n}(c.a.Component)),W=(n.default=F,"2458443462")},147:function(t,n,e){"use strict";e.d(n,"b",function(){return d});var i=e(0),a=e.n(i),o=e(4),r=e.n(o),l=e(33),c=e.n(l);e.d(n,"a",function(){return c.a});e(148);var s=a.a.createContext({}),d=function(t){return a.a.createElement(s.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},148:function(t,n,e){var i;t.exports=(i=e(149))&&i.default||i},149:function(t,n,e){"use strict";e.r(n);e(34);var i=e(0),a=e.n(i),o=e(4),r=e.n(o),l=e(55),c=e(2),s=function(t){var n=t.location,e=c.default.getResourcesForPathnameSync(n.pathname);return e?a.a.createElement(l.a,Object.assign({location:n,pageResources:e},e.json)):null};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},n.default=s},150:function(t,n,e){"use strict";var i=e(151),a=e(0),o=e.n(a),r=e(4),l=e.n(r),c=e(153),s=e.n(c);function d(t){var n=t.description,e=t.lang,a=t.meta,r=t.keywords,l=t.title,c=i.data.site,d=n||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:e},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},n.a=d},151:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},168:function(t,n){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1ODcgNDEwLjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU4NyA0MTAuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmb250LWZhbWlseTonSEVyZXRpY2EnO30KCS5zdDF7Zm9udC1zaXplOjIwMHB4O30KPC9zdHlsZT4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAxMDUuMTIxMSAxNzIuNDk3NikiPjx0c3BhbiB4PSIwIiB5PSIwIiBjbGFzcz0ic3QwIHN0MSI+QW5uYTwvdHNwYW4+PHRzcGFuIHg9Ii05MS4yIiB5PSIxNjciIGNsYXNzPSJzdDAgc3QxIj5HZW5nZXI8L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-3ea8218a1ac94c0d323f.js.map