(this.webpackJsonptouchlearn=this.webpackJsonptouchlearn||[]).push([[37],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"hexToRgb",(function(){return r.g})),n.d(t,"rgbToHex",(function(){return r.k})),n.d(t,"hslToRgb",(function(){return r.h})),n.d(t,"decomposeColor",(function(){return r.b})),n.d(t,"recomposeColor",(function(){return r.j})),n.d(t,"getContrastRatio",(function(){return r.e})),n.d(t,"getLuminance",(function(){return r.f})),n.d(t,"emphasize",(function(){return r.c})),n.d(t,"fade",(function(){return r.d})),n.d(t,"darken",(function(){return r.a})),n.d(t,"lighten",(function(){return r.i})),n.d(t,"createMuiTheme",(function(){return i.a})),n.d(t,"unstable_createMuiStrictModeTheme",(function(){return u})),n.d(t,"createStyles",(function(){return o.a})),n.d(t,"makeStyles",(function(){return s.a})),n.d(t,"responsiveFontSizes",(function(){return O})),n.d(t,"styled",(function(){return E.a})),n.d(t,"easing",(function(){return _.c})),n.d(t,"duration",(function(){return _.b})),n.d(t,"useTheme",(function(){return m.a})),n.d(t,"withStyles",(function(){return y.a})),n.d(t,"withTheme",(function(){return I})),n.d(t,"createGenerateClassName",(function(){return x.a})),n.d(t,"jssPreset",(function(){return T.a})),n.d(t,"ServerStyleSheets",(function(){return j.a})),n.d(t,"StylesProvider",(function(){return w.b})),n.d(t,"MuiThemeProvider",(function(){return N.a})),n.d(t,"ThemeProvider",(function(){return N.a}));var r=n(35),i=n(70),a=n(98);function u(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return i.a.apply(void 0,[Object(a.a)({unstable_strictMode:!0},e)].concat(n))}var o=n(420),s=n(421),c=n(2),l=n(67),f=n(23);function d(e){return String(parseFloat(e)).length===String(e).length}function p(e){return parseFloat(e)}function h(e){return function(t,n){var r=String(t).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(r===n)return t;var i=p(t);if("px"!==r)if("em"===r)i=p(t)*p(e);else if("rem"===r)return i=p(t)*p(e),t;var a=i;if("px"!==n)if("em"===n)a=i/p(e);else{if("rem"!==n)return t;a=i/p(e)}return parseFloat(a.toFixed(5))+n}}function v(e){var t=e.size,n=e.grid,r=t-t%n,i=r+n;return t-r<i-t?r:i}function M(e){var t=e.lineHeight;return e.pixels/(t*e.htmlFontSize)}function b(e){var t=e.cssProperty,n=e.min,r=e.max,i=e.unit,a=void 0===i?"rem":i,u=e.breakpoints,o=void 0===u?[600,960,1280]:u,s=e.transform,c=void 0===s?null:s,l=Object(f.a)({},t,"".concat(n).concat(a)),d=(r-n)/o[o.length-1];return o.forEach((function(e){var r=n+d*e;null!==c&&(r=c(r)),l["@media (min-width:".concat(e,"px)")]=Object(f.a)({},t,"".concat(Math.round(1e4*r)/1e4).concat(a))})),l}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.breakpoints,r=void 0===n?["sm","md","lg"]:n,i=t.disableAlign,a=void 0!==i&&i,u=t.factor,o=void 0===u?2:u,s=t.variants,f=void 0===s?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:s,p=Object(c.a)({},e);p.typography=Object(c.a)({},p.typography);var O=p.typography,E=h(O.htmlFontSize),_=r.map((function(e){return p.breakpoints.values[e]}));return f.forEach((function(e){var t=O[e],n=parseFloat(E(t.fontSize,"rem"));if(!(n<=1)){var r=n,i=1+(r-1)/o,u=t.lineHeight;if(!d(u)&&!a)throw new Error(Object(l.a)(6));d(u)||(u=parseFloat(E(u,"rem"))/parseFloat(n));var s=null;a||(s=function(e){return v({size:e,grid:M({pixels:4,lineHeight:u,htmlFontSize:O.htmlFontSize})})}),O[e]=Object(c.a)({},t,b({cssProperty:"fontSize",min:i,max:r,unit:"rem",breakpoints:_,transform:s}))}})),p}var E=n(399),_=n(68),m=n(287),y=n(61),S=n(323),g=n(69),I=Object(S.b)({defaultTheme:g.a}),x=n(146),T=n(94),j=n(685),w=n(151),N=n(686)},198:function(e,t,n){"use strict";var r;t.__esModule=!0,t.default=t.Context=void 0;var i=((r=n(0))&&r.__esModule?r:{default:r}).default.createContext(null);t.Context=i;var a=i;t.default=a},243:function(e,t,n){"use strict";var r;t.__esModule=!0,t.default=t.Context=void 0;var i=((r=n(0))&&r.__esModule?r:{default:r}).default.createContext(null);t.Context=i;var a=i;t.default=a},252:function(e,t,n){"use strict";n.r(t);var r=n(288);n.d(t,"default",(function(){return r.a}))},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(145),i=(n(0),n(69));function a(){return Object(r.a)()||i.a}},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),i=n(381);function a(e,t){return r.useMemo((function(){return null==e&&null==t?null:function(n){Object(i.a)(e,n),Object(i.a)(t,n)}}),[e,t])}},319:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},323:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var r=n(2),i=n(10),a=n(0),u=n.n(a),o=(n(14),n(25)),s=n.n(o),c=n(145);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=function(e){var n=u.a.forwardRef((function(n,a){var o=n.innerRef,s=Object(i.a)(n,["innerRef"]),l=Object(c.a)()||t;return u.a.createElement(e,Object(r.a)({theme:l,ref:o||a},s))}));return s()(n,e),n};return n}var f=l();t.a=f},335:function(e,t,n){"use strict";t.__esModule=!0,t.useFirebase=function(){return(0,r.useContext)(i.default)},t.default=t.withFirebase=void 0;var r=n(0),i=o(n(243)),a=o(n(338));t.withFirebase=a.default;var u=o(n(339));function o(e){return e&&e.__esModule?e:{default:e}}t.default=u.default},338:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=a(n(243)),i=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=function(e){return function(t){return i.default.createElement(r.default.Consumer,null,(function(n){return i.default.createElement(e,u({},n,t))}))}};t.default=o,e.exports=t.default},339:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;a(n(14));var r=a(n(0)),i=a(n(243));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.firebaseApp,n=e.children;return r.default.createElement(i.default.Provider,{value:{firebaseApp:t}},n)};u.propTypes={};var o=u;t.default=o,e.exports=t.default},343:function(e,t,n){"use strict";t.__esModule=!0,t.SET_IS_MINI_SWITCH_VISIBILITY=t.SET_IS_MOBILE_MENU_OPEN=t.SET_IS_MENU_OPEN=t.SET_IS_MINI_MODE=t.SET_IS_AUTH_MENU_OPEN=void 0;t.SET_IS_AUTH_MENU_OPEN="SET_IS_AUTH_MENU_OPEN";t.SET_IS_MINI_MODE="SET_IS_MINI_MODE";t.SET_IS_MENU_OPEN="SET_IS_MENU_OPEN";t.SET_IS_MOBILE_MENU_OPEN="SET_IS_MOBILE_MENU_OPEN";t.SET_IS_MINI_SWITCH_VISIBILITY="SET_IS_MINI_SWITCH_VISIBILITY"},381:function(e,t,n){"use strict";function r(e,t){"function"===typeof e?e(t):e&&(e.current=t)}n.d(t,"a",(function(){return r}))},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),i="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;function a(e){var t=r.useRef(e);return i((function(){t.current=e})),r.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}},399:function(e,t,n){"use strict";var r=n(2),i=n(684),a=n(69);t.a=function(e){var t=Object(i.a)(e);return function(e,n){return t(e,Object(r.a)({defaultTheme:a.a},n))}}},400:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(0)),i=(s(n(14)),s(n(198))),a=s(n(252)),u=n(401),o=s(n(402));function s(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e){var t=e.appConfig,n=e.children,s=e.persistKey,c=void 0===s?"menu":s,f=(t||{}).menu,d=f.initialAuthMenuOpen,p=f.initialMiniMode,h=f.initialMenuOpen,v=f.initialMobileMenuOpen,M=f.initialMiniSwitchVisibility,b=f.useWindowWatcher,O=JSON.parse(localStorage.getItem(c)),E=(0,r.useReducer)(o.default,l({isAuthMenuOpen:d,isMiniMode:p,isMenuOpen:h,isMobileMenuOpen:v,isMiniSwitchVisibility:M},O)),_=E[0],m=E[1],y={toggleThis:function(e,t){void 0===t&&(t=null),"isAuthMenuOpen"===e?m((0,u.setIsAuthMenuOpen)(null!==t?t:!_.isAuthMenuOpen)):"isMiniMode"===e?m((0,u.setIsMiniMode)(null!==t?t:!_.isMiniMode)):"isMenuOpen"===e?m((0,u.setIsMenuOpen)(null!==t?t:!_.isMenuOpen)):"isMobileMenuOpen"===e?m((0,u.setIsMobileMenuOpen)(null!==t?t:!_.isMobileMenuOpen)):"isMiniSwitchVisibility"===e&&m((0,u.setIsMiniSwitchVisibility)(null!==t?t:!_.isMiniSwitchVisibility))},isAuthMenuOpen:_.isAuthMenuOpen,isMiniMode:_.isMiniMode,isMenuOpen:_.isMenuOpen,isMobileMenuOpen:_.isMobileMenuOpen,isMiniSwitchVisibility:_.isMiniSwitchVisibility},S=(0,a.default)("(min-width:600px)");return(0,r.useEffect)((function(){try{localStorage.setItem(c,JSON.stringify(_))}catch(e){console.warn(e)}}),[_,c]),(0,r.useEffect)((function(){b&&(S||(y.setMenuOpen(!1),y.setMiniMode(!1)))}),[S,y,b]),r.default.createElement(i.default.Provider,{value:l({isDesktop:S},y)},n)};f.propTypes={};var d=f;t.default=d,e.exports=t.default},401:function(e,t,n){"use strict";t.__esModule=!0,t.setIsAuthMenuOpen=function(e){return{type:r.SET_IS_AUTH_MENU_OPEN,payload:e}},t.setIsMiniMode=function(e){return{type:r.SET_IS_MINI_MODE,payload:e}},t.setIsMenuOpen=function(e){return{type:r.SET_IS_MENU_OPEN,payload:e}},t.setIsMobileMenuOpen=function(e){return{type:r.SET_IS_MOBILE_MENU_OPEN,payload:e}},t.setIsMiniSwitchVisibility=function(e){return{type:r.SET_IS_MINI_SWITCH_VISIBILITY,payload:e}};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=r?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(343));function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}},402:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){void 0===e&&(e={});var n=t.type,i=t.payload;switch(n){case r.SET_IS_AUTH_MENU_OPEN:return a(a({},e),{},{isAuthMenuOpen:i});case r.SET_IS_MINI_MODE:return a(a({},e),{},{isMiniMode:i});case r.SET_IS_MENU_OPEN:return a(a({},e),{},{isMenuOpen:i});case r.SET_IS_MOBILE_MENU_OPEN:return a(a({},e),{},{isMobileMenuOpen:i});case r.SET_IS_MINI_SWITCH_VISIBILITY:return a(a({},e),{},{isMiniSwitchVisibility:i});default:return e}};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=r?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(343));function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}e.exports=t.default},420:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(683);function i(e){return Object(r.a)(e)}},421:function(e,t,n){"use strict";var r=n(2),i=n(148),a=n(69);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)(e,Object(r.a)({defaultTheme:a.a},t))}},422:function(e,t,n){"use strict";t.__esModule=!0,t.useMenu=function(){return(0,r.useContext)(i.default)},t.default=t.withMenu=void 0;var r=n(0),i=o(n(198)),a=o(n(429));t.withMenu=a.default;var u=o(n(400));function o(e){return e&&e.__esModule?e:{default:e}}t.default=u.default},423:function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.apply(this,r),t.apply(this,r)}}),(function(){}))}n.d(t,"a",(function(){return r}))},429:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=a(n(198)),i=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=function(e){return function(t){return i.default.createElement(r.default.Consumer,null,(function(n){return i.default.createElement(e,u({},n,t))}))}};t.default=o,e.exports=t.default},430:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var r=function(e){return e.scrollTop};function i(e,t){var n=e.timeout,r=e.style,i=void 0===r?{}:r;return{duration:i.transitionDuration||"number"===typeof n?n:n[t.mode]||0,delay:i.transitionDelay}}},431:function(e,t,n){"use strict";var r=n(10),i=n(2),a=n(0),u=(n(14),n(49)),o=n(61),s=a.forwardRef((function(e,t){var n=e.classes,o=e.className,s=e.component,c=void 0===s?"div":s,l=e.square,f=void 0!==l&&l,d=e.elevation,p=void 0===d?1:d,h=e.variant,v=void 0===h?"elevation":h,M=Object(r.a)(e,["classes","className","component","square","elevation","variant"]);return a.createElement(c,Object(i.a)({className:Object(u.default)(n.root,o,"outlined"===v?n.outlined:n["elevation".concat(p)],!f&&n.rounded),ref:t},M))}));t.a=Object(o.a)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),Object(i.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(s)},496:function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=i.a.createContext(null)},500:function(e,t,n){"use strict";n.r(t);var r=n(728);n.d(t,"default",(function(){return r.a}))},642:function(e,t,n){"use strict";var r=n(20),i=n(13),a=(n(14),n(0)),u=n.n(a),o=n(66),s=n.n(o),c=!1,l=n(496),f="unmounted",d="exited",p="entering",h="entered",v="exiting",M=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var i,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(i=d,r.appearStatus=p):i=h:i=t.unmountOnExit||t.mountOnEnter?f:d,r.state={status:i},r.nextCallback=null,r}Object(i.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===f?{status:d}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==p&&n!==h&&(t=p):n!==p&&n!==h||(t=v)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===p?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===d&&this.setState({status:f})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[s.a.findDOMNode(this),r],a=i[0],u=i[1],o=this.getTimeouts(),l=r?o.appear:o.enter;!e&&!n||c?this.safeSetState({status:h},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,u),this.safeSetState({status:p},(function(){t.props.onEntering(a,u),t.onTransitionEnd(l,(function(){t.safeSetState({status:h},(function(){t.props.onEntered(a,u)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:s.a.findDOMNode(this);t&&!c?(this.props.onExit(r),this.safeSetState({status:v},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:d},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:d},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:s.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],u=i[1];this.props.addEndListener(a,u)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===f)return null;var t=this.props,n=t.children,i=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(r.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return u.a.createElement(l.a.Provider,{value:null},"function"===typeof n?n(e,i):u.a.cloneElement(u.a.Children.only(n),i))},t}(u.a.Component);function b(){}M.contextType=l.a,M.propTypes={},M.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},M.UNMOUNTED=f,M.EXITED=d,M.ENTERING=p,M.ENTERED=h,M.EXITING=v;t.a=M},683:function(e,t,n){"use strict";function r(e){return e}n.d(t,"a",(function(){return r}))},684:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(2),i=n(10),a=n(0),u=n.n(a),o=n(49),s=(n(14),n(25)),c=n.n(s),l=n(148);function f(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function d(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.name,s=Object(i.a)(n,["name"]);var d,p=a,h="function"===typeof t?function(e){return{root:function(n){return t(Object(r.a)({theme:e},n))}}}:{root:t},v=Object(l.a)(h,Object(r.a)({Component:e,name:a||e.displayName,classNamePrefix:p},s));t.filterProps&&(d=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var M=u.a.forwardRef((function(t,n){var a=t.children,s=t.className,c=t.clone,l=t.component,p=Object(i.a)(t,["children","className","clone","component"]),h=v(t),M=Object(o.default)(h.root,s),b=p;if(d&&(b=f(b,d)),c)return u.a.cloneElement(a,Object(r.a)({className:Object(o.default)(a.props.className,M)},b));if("function"===typeof a)return a(Object(r.a)({className:M},b));var O=l||e;return u.a.createElement(O,Object(r.a)({ref:n,className:M},b),a)}));return c()(M,e),M}}},685:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(2),i=n(319),a=n(36),u=n(0),o=n.n(u),s=n(12),c=n(151),l=n(146),f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(i.a)(this,e),this.options=t}return Object(a.a)(e,[{key:"collect",value:function(e){var t=new Map;this.sheetsRegistry=new s.SheetsRegistry;var n=Object(l.a)();return o.a.createElement(c.b,Object(r.a)({sheetsManager:t,serverGenerateClassName:n,sheetsRegistry:this.sheetsRegistry},this.options),e)}},{key:"toString",value:function(){return this.sheetsRegistry?this.sheetsRegistry.toString():""}},{key:"getStyleElement",value:function(e){return o.a.createElement("style",Object(r.a)({id:"jss-server-side",key:"jss-server-side",dangerouslySetInnerHTML:{__html:this.toString()}},e))}}]),e}()},686:function(e,t,n){"use strict";var r=n(2),i=n(0),a=n.n(i),u=(n(14),n(73)),o=n(145),s=n(74);t.a=function(e){var t=e.children,n=e.theme,i=Object(o.a)(),c=a.a.useMemo((function(){var e=null===i?n:function(e,t){return"function"===typeof t?t(e):Object(r.a)({},e,t)}(i,n);return null!=e&&(e[s.a]=null!==i),e}),[n,i]);return a.a.createElement(u.a.Provider,{value:c},t)}},732:function(e,t,n){"use strict";var r=n(0),i=n(66),a=(n(14),n(381)),u=n(297);var o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,s=r.forwardRef((function(e,t){var n=e.children,s=e.container,c=e.disablePortal,l=void 0!==c&&c,f=e.onRendered,d=r.useState(null),p=d[0],h=d[1],v=Object(u.a)(r.isValidElement(n)?n.ref:null,t);return o((function(){l||h(function(e){return e="function"===typeof e?e():e,i.findDOMNode(e)}(s)||document.body)}),[s,l]),o((function(){if(p&&!l)return Object(a.a)(t,p),function(){Object(a.a)(t,null)}}),[t,p,l]),o((function(){f&&(p||l)&&f()}),[f,p,l]),l?r.isValidElement(n)?r.cloneElement(n,{ref:v}):n:p?i.createPortal(n,p):p}));t.a=s},739:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=u(n(0)),i=u(n(740)),a=n(50);function u(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=((0,a.useConfig)().appConfig||{}).menu||{},n=t.MenuHeader,u=t.MenuContent;return r.default.createElement(i.default,null,n&&r.default.createElement(n,null),u&&r.default.createElement(u,null))};t.default=o,e.exports=t.default},740:function(e,t,n){"use strict";(function(r){var i=n(95);t.__esModule=!0,t.default=void 0;f(n(14));var a=f(n(0)),u=f(n(500)),o=f(n(49)),s=n(170),c=n(422),l=n(195);function f(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=r.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),h=(0,s.makeStyles)((function(e){var t;return{toolbar:d({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),drawerPaper:(t={height:"100vh",width:240},i(t,e.breakpoints.up("md"),{position:"relative"}),i(t,"transition",e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})),t),drawerPaperOpen:{height:"100vh",position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:i({height:"100vh",overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing(1)},e.breakpoints.up("sm"),{width:9*e.spacing(1)}),hide:{display:"none"}}})),v=function(e){var t=e.children,n=(e.width,h()),r=(0,l.useTheme)().isRTL,i=(0,c.useMenu)()||{},s=i.toggleThis,f=i.isDesktop,d=i.isMiniMode,v=i.isMenuOpen,M=i.isMobileMenuOpen,b=function(){s("isMobileMenuOpen")};return a.default.createElement("div",{style:{boxSizing:"content-box"}},a.default.createElement(u.default,{disableBackdropTransition:!p,disableDiscovery:p,variant:f?"permanent":"temporary",onClose:b,anchor:f?r?"right":"left":void 0,classes:{paper:f?(0,o.default)(n.drawerPaperOpen,!v&&n.drawerPaperClose,!d&&!v&&n.hide):n.drawerPaper},open:f?!!v:!!M,onOpen:b,ModalProps:{keepMounted:!0}},t))};v.propTypes={};var M=v;t.default=M,e.exports=t.default}).call(this,n(207))},970:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.children;var t=((0,i.useFirebase)()||{}).firebaseApp;return r.default.cloneElement(r.default.createElement(a.default,null),{firebaseApp:t})};var r=u(n(0)),i=n(335),a=u(n(739));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}}]);
//# sourceMappingURL=37.c43905aa.chunk.js.map