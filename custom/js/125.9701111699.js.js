(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{"./src/modals/Settings/AutoDisconnection/index.js":function(e,t,n){"use strict";n.r(t);var o=n("../../node_modules/redux/es/redux.js"),r=n("../../node_modules/react-redux/es/index.js"),i=n("../../node_modules/prop-types/index.js"),a=n.n(i),s=n("../../node_modules/react/index.js"),c=n.n(s),l=n("./src/data/index.ts"),u=n("../../node_modules/react-intl/lib/index.es.js"),d=n("../../node_modules/redux-form/es/reduxForm.js"),p=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),f=n("../blockchain-info-components/src/index.js");function _objectWithoutProperties(e,t){if(null==e)return{};var n,o,r=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function _templateObject5(){var e=_taggedTemplateLiteral(["\n  height: 56px;\n  font-weight: 600;\n  margin-top: 24px;\n"]);return _templateObject5=function _templateObject5(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral(["\n  margin-top: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: ",";\n"]);return _templateObject4=function _templateObject4(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral(["\n  font-size: 24px;\n  font-weight: 600;\n  margin-top: 12px;\n  color: ",";\n"]);return _templateObject3=function _templateObject3(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  margin-top: 24px;\n"]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n  position: absolute;\n  border: none;\n  > span {\n    &:hover {\n      cursor: pointer;\n    }\n  }\n  z-index: 99;\n"]);return _templateObject=function _templateObject(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var m=Object(p.d)(f.y)(_templateObject()),b=Object(p.d)(f.w)(_templateObject2()),h=Object(p.d)(f.P)(_templateObject3(),(function(e){return e.theme.grey800})),y=Object(p.d)(f.P)(_templateObject4(),(function(e){return e.theme.grey800})),O=Object(p.d)(f.e)(_templateObject5()),_=function AutoDisconnection(e){var t=e.duration,n=e.position,o=e.total,r=_objectWithoutProperties(e,["duration","position","total"]).handleCancel;return c.a.createElement(f.v,{size:"small",position:n,total:o},c.a.createElement(m,{onClick:r}),c.a.createElement(b,null,c.a.createElement(f.q,{name:"alert-filled",color:"orange600",size:"40px"}),c.a.createElement(h,null,c.a.createElement(u.b,{id:"modals.autodisconnection.title",defaultMessage:"Are you still there?"})),c.a.createElement(y,null,c.a.createElement(u.b,{id:"modals.autodisconnection.foryoursafety1",defaultMessage:"You've been inactive for {duration} minutes. For your safety, you'll be logged out of your Wallet shortly.",values:{duration:t}})),c.a.createElement(O,{nature:"primary",size:"16px",fullwidth:!0,onClick:r},c.a.createElement(u.b,{defaultMessage:"Keep Me Logged In",id:"modals.autodisconnection.keeploggedin"}))))};_.propTypes={payload:a.a.shape({duration:a.a.number.isRequired,handleCancel:a.a.func,handleClick:a.a.func})};var j=Object(d.a)({form:"autoDisconnection"})(_),g=n("./src/providers/ModalEnhancer/index.tsx");function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(AutoDisconnectionContainer,e);var t=function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var o=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}(AutoDisconnectionContainer);function AutoDisconnectionContainer(e){var n;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AutoDisconnectionContainer),(n=t.call(this,e)).timeout=void 0,n.onSubmit=n.onSubmit.bind(_assertThisInitialized(n)),n.handleCancel=n.handleCancel.bind(_assertThisInitialized(n)),n}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(AutoDisconnectionContainer,[{key:"componentDidMount",value:function componentDidMount(){this.timeout=setTimeout(this.onSubmit,1e4)}},{key:"componentWillUnmount",value:function componentWillUnmount(){clearTimeout(this.timeout)}},{key:"onSubmit",value:function onSubmit(){this.props.authActions.logout(),this.props.modalActions.closeModal()}},{key:"handleCancel",value:function handleCancel(){clearTimeout(this.timeout),this.props.authActions.startLogoutTimer(),this.props.modalActions.closeModal()}},{key:"render",value:function render(){return c.a.createElement(j,_extends({},this.props,{onSubmit:this.onSubmit,handleCancel:this.handleCancel}))}}]),AutoDisconnectionContainer}(c.a.PureComponent);v.defaultProps={duration:0},v.propTypes={duration:a.a.number};var x=Object(o.d)(Object(g.a)("AutoDisconnection"),Object(r.c)(void 0,(function mapDispatchToProps(e){return{authActions:Object(o.b)(l.b.auth,e),modalActions:Object(o.b)(l.b.modals,e)}})));t.default=x(v)},"./src/providers/ModalEnhancer/index.tsx":function(e,t,n){"use strict";var o=n("./src/data/index.ts"),r=n("../../node_modules/redux/es/redux.js"),i=n("../../node_modules/react-redux/es/index.js"),a=n("../../node_modules/ramda/es/equals.js"),s=n("../../node_modules/react/index.js"),c=n.n(s),l=n("../../node_modules/react-dom/index.js"),u=n.n(l),__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const d=Object(i.c)(e=>({modals:o.f.modals.getModals(e)}),e=>({close:Object(r.d)(e,o.b.modals.closeModal),closeAll:Object(r.d)(e,o.b.modals.closeAllModals),update:Object(r.d)(e,o.b.modals.updateModalOptions)}));t.a=(e,t={})=>n=>d(class extends s.PureComponent{constructor(){super(...arguments),this.state={},this.handleClose=()=>{t.transition?(this.setState({userClickedOutside:!0}),setTimeout(()=>{this.props.close(),this.setState({userClickedOutside:!1})},t.transition)):this.props.close()},this.handleClick=e=>{const t=u.a.findDOMNode(this.node);t&&!this.props.disableOutsideClose&&Object(a.a)(t.children[0],e.target)&&this.handleClose()},this.onKeyPressed=e=>{27!==(e||window.event).keyCode||t.preventEscapeClose||this.handleClose()}}render(){const t=this.props,{modals:o}=t,r=__rest(t,["modals"]),i=o.filter(t=>t.type===e),setRef=e=>{e&&(this.node=e,e.focus())};return i.length?c.a.createElement("div",null,i.map((t,i)=>c.a.createElement("div",{key:`${e}:${i}`,onKeyDown:this.onKeyPressed,onMouseDown:this.handleClick,ref:setRef,tabIndex:0},c.a.createElement(n,Object.assign({ref:this.node,position:o.indexOf(t)+1,total:o.length},this.state,t.options,t.props,r))))):null}})}}]);