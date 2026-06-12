import{a as kt,la as ai,oa as si}from"./chunk-UNFVUBM2.js";import{A as ni,a as At,c as Ft,d as Pt,f as Nt,g as Lt,m as Bt,q as Ht,u as Vt}from"./chunk-524KQQJQ.js";import{a as li,b as di,c as ci,d as mi}from"./chunk-ZO2KHBRB.js";import{c as St,d as xt,f as It,g as Ne,h as Mt,i as Ot,j as Yt,k as Xt,l as ri}from"./chunk-7AKA75AX.js";import{$ as P,$b as Dt,$d as Ut,Ab as vt,Ac as We,B as gt,Bb as j,C as y,Cb as fe,Cd as ze,Db as $,Eb as we,Ec as pe,Fa as u,Fb as Ce,Gb as I,Gd as jt,Ha as U,Hb as M,Ia as Q,Ka as Oe,Na as J,Nb as L,Ob as wt,Pb as O,Pd as Je,Qb as oe,Ra as R,Rb as De,S as T,Sa as ue,Ta as c,Tb as Ct,Ud as Se,Wa as g,X as yt,Xa as q,Y as K,Z as le,Zd as Gt,ae as qt,ba as s,bc as S,be as $t,dd as ge,de as Qt,e as x,eb as Ye,f as ae,fa as de,ga as ce,gb as B,gc as Re,h as ft,hc as ke,i as _t,ib as H,id as Fe,ie as Wt,ja as te,je as Zt,ka as me,ke as Kt,l as se,lc as Rt,le as Jt,md as Tt,me as ei,n as pt,na as ie,nb as N,ne as ti,oa as he,ob as m,oe as ii,pb as h,pc as Ae,pd as Ze,q as _,qb as F,qd as Et,r as Z,rb as Xe,sb as bt,sd as Pe,ta as Me,ua as E,ub as Y,ue as oi,vb as X,wa as D,wb as k,xb as ve,xc as ne,xd as Le,yc as _e,yd as Ke,z as Qe,zb as V,zc as b,zd as zt}from"./chunk-GJJPXCX3.js";import{a as be,i as ut}from"./chunk-NUMHA4AJ.js";var Po=(()=>{class i{http=s(ge);isLoggedIn=new x;hostServer=pe.hostServer;host=this.hostServer+"/api/Users";find(e){return this.http.get(this.hostServer+"/rest/user/authentication-details/",{params:e}).pipe(_(t=>t.data),y(t=>{throw t}))}get(e){return this.http.get(`${this.host}/${e}`).pipe(_(t=>t.data),y(t=>{throw t}))}save(e){return this.http.post(this.host+"/",e).pipe(_(t=>t.data),y(t=>{throw t}))}login(e){return this.isLoggedIn.next(!0),this.http.post(this.hostServer+"/rest/user/login",e).pipe(_(t=>t.authentication),y(t=>{throw t}))}getLoggedInState(){return this.isLoggedIn.asObservable()}changePassword(e){return this.http.get(this.hostServer+"/rest/user/change-password?current="+e.current+"&new="+e.new+"&repeat="+e.repeat).pipe(_(t=>t.user),y(t=>{throw t.error}))}resetPassword(e){return this.http.post(this.hostServer+"/rest/user/reset-password",e).pipe(_(t=>t.user),y(t=>{throw t}))}whoAmI(e){let t=e&&e.length>0?`?fields=${e.join(",")}`:"";return this.http.get(this.hostServer+"/rest/user/whoami"+t).pipe(_(o=>o.user),y(o=>{throw o}))}oauthLogin(e){return this.http.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token="+e)}saveLastLoginIp(){return this.http.get(this.hostServer+"/rest/saveLoginIp").pipe(_(e=>e),y(e=>{throw e}))}deluxeStatus(){return this.http.get(this.hostServer+"/rest/deluxe-membership").pipe(_(e=>e.data),y(e=>{throw e}))}upgradeToDeluxe(e,t){return this.http.post(this.hostServer+"/rest/deluxe-membership",{paymentMode:e,paymentId:t}).pipe(_(o=>o.data),y(o=>{throw o}))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=K({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ai=["input"],Fi=["formField"],Pi=["*"],Be=class{source;value;constructor(n,e){this.source=n,this.value=e}},Ni={provide:ri,useExisting:yt(()=>zi),multi:!0},hi=new P("MatRadioGroup"),Li=new P("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),zi=(()=>{class i{_changeDetector=s(ne);_value=null;_name=s(Ke).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new ie;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;constructor(){}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Be(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["mat-radio-group"]],contentQueries:function(t,o,r){if(t&1&&we(r,He,5),t&2){let a;I(a=M())&&(o._radios=a)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",b],required:[2,"required","required",b],disabledInteractive:[2,"disabledInteractive","disabledInteractive",b]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[S([Ni,{provide:hi,useExisting:i}])]})}return i})(),He=(()=>{class i{_elementRef=s(D);_changeDetector=s(ne);_focusMonitor=s(ze);_radioDispatcher=s(di);_defaultOptions=s(Li,{optional:!0});_ngZone=s(he);_renderer=s(Oe);_uniqueId=s(Ke).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new ie;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Se();_injector=s(te);constructor(){s(Tt).load(Zt);let e=s(hi,{optional:!0}),t=s(new Ae("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=We(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Be(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let o=this._inputElement?.nativeElement;o&&(o.setAttribute("tabindex",t+""),this._previousTabIndex=t,U(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===o&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===o&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-radio-button"]],viewQuery:function(t,o){if(t&1&&Ce(Ai,5)(Fi,7,D),t&2){let r;I(r=M())&&(o._inputElement=r.first),I(r=M())&&(o._rippleTrigger=r.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,o){t&1&&V("focus",function(){return o._inputElement.nativeElement.focus()}),t&2&&(Ye("id",o.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),L("mat-primary",o.color==="primary")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("mat-mdc-radio-checked",o.checked)("mat-mdc-radio-disabled",o.disabled)("mat-mdc-radio-disabled-interactive",o.disabledInteractive)("_mat-animation-noopable",o._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",b],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:We(e)],checked:[2,"checked","checked",b],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",b],required:[2,"required","required",b],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",b]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:Pi,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,o){t&1&&(fe(),m(0,"div",2,0)(2,"div",3)(3,"div",4),V("click",function(a){return o._onTouchTargetClick(a)}),h(),m(4,"input",5,1),V("change",function(a){return o._onInputInteraction(a)}),h(),m(6,"div",6),F(7,"div",7)(8,"div",8),h(),m(9,"div",9),F(10,"div",10),h()(),m(11,"label",11),$(12),h()()),t&2&&(N("labelPosition",o.labelPosition),u(2),L("mdc-radio--disabled",o.disabled),u(2),N("id",o.inputId)("checked",o.checked)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),Ye("name",o.name)("value",o.value)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),u(5),N("matRippleTrigger",o._rippleTrigger.nativeElement)("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0),u(2),N("for",o.inputId))},dependencies:[Wt,mi],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return i})(),nn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ue({type:i});static \u0275inj=le({imports:[Jt,He,Le]})}return i})();var Hi=[[["caption"]],[["colgroup"],["col"]],"*"],Vi=["caption","colgroup, col","*"];function ji(i,n){i&1&&$(0,2)}function Gi(i,n){i&1&&(m(0,"thead",0),k(1,1),h(),m(2,"tbody",0),k(3,2)(4,3),h(),m(5,"tfoot",0),k(6,4),h())}function Ui(i,n){i&1&&k(0,1)(1,2)(2,3)(3,4)}var G=new P("CDK_TABLE");var je=(()=>{class i{template=s(Q);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["","cdkCellDef",""]]})}return i})(),Ge=(()=>{class i{template=s(Q);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["","cdkHeaderCellDef",""]]})}return i})(),Ue=(()=>{class i{template=s(Q);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["","cdkFooterCellDef",""]]})}return i})(),re=(()=>{class i{_table=s(G,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,o,r){if(t&1&&we(r,je,5)(r,Ge,5)(r,Ue,5),t&2){let a;I(a=M())&&(o.cell=a.first),I(a=M())&&(o.headerCell=a.first),I(a=M())&&(o.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",b],stickyEnd:[2,"stickyEnd","stickyEnd",b]}})}return i})(),Te=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}},_i=(()=>{class i extends Te{constructor(){super(s(re),s(D))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[g]})}return i})(),pi=(()=>{class i extends Te{constructor(){let e=s(re),t=s(D);super(e,t);let o=e._table?._getCellRole();o&&t.nativeElement.setAttribute("role",o)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["cdk-footer-cell"],["td","cdk-footer-cell",""]],hostAttrs:[1,"cdk-footer-cell"],features:[g]})}return i})(),gi=(()=>{class i extends Te{constructor(){let e=s(re),t=s(D);super(e,t);let o=e._table?._getCellRole();o&&t.nativeElement.setAttribute("role",o)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[g]})}return i})();var tt=(()=>{class i{template=s(Q);_differs=s(_e);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Ee?e.headerCell.template:this instanceof Ie?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,features:[Me]})}return i})(),Ee=(()=>{class i extends tt{_table=s(G,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(Q),s(_e))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",b]},features:[g,Me]})}return i})(),Ie=(()=>{class i extends tt{_table=s(G,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(Q),s(_e))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",b]},features:[g,Me]})}return i})(),qe=(()=>{class i extends tt{_table=s(G,{optional:!0});when;constructor(){super(s(Q),s(_e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[g]})}return i})(),W=(()=>{class i{_viewContainer=s(J);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["","cdkCellOutlet",""]]})}return i})(),it=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&k(0,0)},dependencies:[W],encapsulation:2})}return i})(),ot=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["cdk-footer-row"],["tr","cdk-footer-row",""]],hostAttrs:["role","row",1,"cdk-footer-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&k(0,0)},dependencies:[W],encapsulation:2})}return i})(),nt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&k(0,0)},dependencies:[W],encapsulation:2})}return i})(),yi=(()=>{class i{templateRef=s(Q);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["ng-template","cdkNoDataRow",""]]})}return i})(),ui=["top","bottom","left","right"],et=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,t=!0,o=!0,r,a,l){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=o,this.direction=r,this._positionListener=a,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(n);let t=[];for(let o of n)o.nodeType===o.ELEMENT_NODE&&t.push(o,...Array.from(o.children));U({write:()=>{for(let o of t)this._removeStickyStyle(o,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,t,o=!0,r=!0){if(!n.length||!this._isBrowser||!(e.some(z=>z)||t.some(z=>z))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=n[0],l=a.children.length,d=this.direction==="rtl",f=d?"right":"left",p=d?"left":"right",v=e.lastIndexOf(!0),w=t.indexOf(!0),C,ct,mt;r&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...t]}),U({earlyRead:()=>{C=this._getCellWidths(a,o),ct=this._getStickyStartColumnPositions(C,e),mt=this._getStickyEndColumnPositions(C,t)},write:()=>{for(let z of n)for(let A=0;A<l;A++){let ht=z.children[A];e[A]&&this._addStickyStyle(ht,f,ct[A],A===v),t[A]&&this._addStickyStyle(ht,p,mt[A],A===w)}this._positionListener&&C.some(z=>!!z)&&(this._positionListener.stickyColumnsUpdated({sizes:v===-1?[]:C.slice(0,v+1).map((z,A)=>e[A]?z:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:w===-1?[]:C.slice(w).map((z,A)=>t[A+w]?z:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,t){if(!this._isBrowser)return;let o=t==="bottom"?n.slice().reverse():n,r=t==="bottom"?e.slice().reverse():e,a=[],l=[],d=[];U({earlyRead:()=>{for(let f=0,p=0;f<o.length;f++){if(!r[f])continue;a[f]=p;let v=o[f];d[f]=this._isNativeHtmlTable?Array.from(v.children):[v];let w=this._retrieveElementSize(v).height;p+=w,l[f]=w}},write:()=>{let f=r.lastIndexOf(!0);for(let p=0;p<o.length;p++){if(!r[p])continue;let v=a[p],w=p===f;for(let C of d[p])this._addStickyStyle(C,t,v,w)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:a,elements:d}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:a,elements:d})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&U({write:()=>{let t=n.querySelector("tfoot");t&&(e.some(o=>!o)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let o of e)n.style[o]="",n.classList.remove(this._borderCellCss[o]);ui.some(o=>e.indexOf(o)===-1&&n.style[o])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,t,o){n.classList.add(this._stickCellCss),o&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${t}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},t=0;for(let o of ui)n.style[o]&&(t+=e[o]);return t?`${t}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],o=n.children;for(let r=0;r<o.length;r++){let a=o[r];t.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(n,e){let t=[],o=0;for(let r=0;r<n.length;r++)e[r]&&(t[r]=o,o+=n[r]);return t}_getStickyEndColumnPositions(n,e){let t=[],o=0;for(let r=n.length;r>0;r--)e[r]&&(t[r]=o,o+=n[r]);return t}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let t=n.getBoundingClientRect(),o={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(n,o),this._resizeObserver.observe(n,{box:"border-box"})),o}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(o=>!e.has(o));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(n){let e=!1;for(let t of n){let o=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};o.width!==this._elemSizeCache.get(t.target)?.width&&qi(t.target)&&(e=!0),this._elemSizeCache.set(t.target,o)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function qi(i){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(n=>i.classList.contains(n))}var xe=new P("STICKY_POSITIONING_LISTENER");var rt=(()=>{class i{viewContainer=s(J);elementRef=s(D);constructor(){let e=s(G);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["","rowOutlet",""]]})}return i})(),at=(()=>{class i{viewContainer=s(J);elementRef=s(D);constructor(){let e=s(G);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["","headerRowOutlet",""]]})}return i})(),st=(()=>{class i{viewContainer=s(J);elementRef=s(D);constructor(){let e=s(G);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["","footerRowOutlet",""]]})}return i})(),lt=(()=>{class i{viewContainer=s(J);elementRef=s(D);constructor(){let e=s(G);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["","noDataRowOutlet",""]]})}return i})(),dt=(()=>{class i{_differs=s(_e);_changeDetectorRef=s(ne);_elementRef=s(D);_dir=s(Pe,{optional:!0});_platform=s(Fe);_viewRepeater;_viewportRuler=s(Ft);_injector=s(te);_virtualScrollViewport=s(Pt,{optional:!0,host:!0});_positionListener=s(xe,{optional:!0})||s(xe,{optional:!0,skipSelf:!0});_document=s(me);_data;_renderedRange;_onDestroy=new x;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new x;_footerRowStickyUpdates=new x;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new x;_dataStream=new x;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new ie;viewChange=new ae({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){s(new Ae("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,o)=>this.trackBy?this.trackBy(o.dataIndex,o.data):o)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(T(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Ot:new ci,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Ne(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(o,r,a)=>this._getEmbeddedViewArgs(o.item,a),o=>o.item.data,o=>{o.operation===Mt.INSERTED&&o.context&&this._renderCellTemplateForItem(o.record.item.rowDef,o.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(o=>{let r=t.get(o.currentIndex);r.context.$implicit=o.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let o=fi(this._headerRowOutlet,"thead");o&&(o.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let o=fi(this._footerRowOutlet,"tfoot");o&&(o.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),o=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...o],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,a)=>{this._addStickyColumnStyles([r],this._headerRowDefs[a])}),this._rowDefs.forEach(r=>{let a=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===r&&a.push(t[l]);this._addStickyColumnStyles(a,r)}),o.forEach((r,a)=>{this._addStickyColumnStyles([r],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),o=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<t;r++){let a=this._data[r],l=this._getRenderRowsForData(a,r,o.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let d=0;d<l.length;d++){let f=l[d],p=this._cachedRenderRowsMap.get(f.data);p.has(f.rowDef)?p.get(f.rowDef).push(f):p.set(f.rowDef,[f]),e.push(f)}}return e}_getRenderRowsForData(e,t,o){return this._getRowDefs(e,t).map(a=>{let l=o&&o.has(a)?o.get(a):[];if(l.length){let d=l.shift();return d.dataIndex=t,d}else return{data:e,rowDef:a,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ve(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Ve(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ve(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ve(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,l)=>{let d=!!l.getColumnsDiff();return a||d},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let o=this._headerRowDefs.reduce(e,!1);o&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),t||o||r}_switchDataSource(e){this._data=[],Ne(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Ne(this.dataSource)?e=this.dataSource.connect(this):pt(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=se(this.dataSource)),this._renderChangeSubscription=Z([e,this.viewChange]).pipe(T(this._onDestroy)).subscribe(([t,o])=>{this._data=t||[],this._renderedRange=o,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let o=Array.from(t?.columns||[]).map(l=>{let d=this._columnDefsByName.get(l);return d}),r=o.map(l=>l.sticky),a=o.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let o=0;o<e.viewContainer.length;o++){let r=e.viewContainer.get(o);t.push(r.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let o=[];if(this.multiTemplateDataRows)o=this._rowDefs.filter(r=>!r.when||r.when(t,e));else{let r=this._rowDefs.find(a=>a.when&&a.when(t,e))||this._defaultRowDef;r&&o.push(r)}return o.length,o}_getEmbeddedViewArgs(e,t){let o=e.rowDef,r={$implicit:e.data};return{templateRef:o.template,context:r,index:t}}_renderRow(e,t,o,r={}){let a=e.viewContainer.createEmbeddedView(t.template,r,o);return this._renderCellTemplateForItem(t,r),a}_renderCellTemplateForItem(e,t){for(let o of this._getCellTemplates(e))W.mostRecentCellOutlet&&W.mostRecentCellOutlet._viewContainer.createEmbeddedView(o,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,o=e.length;t<o;t++){let a=e.get(t).context;a.count=o,a.first=t===0,a.last=t===o-1,a.even=t%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[t].dataIndex,a.renderIndex=t):a.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let o=this._columnDefsByName.get(t);return e.extractCellTemplate(o)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,o)=>t||o.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new et(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:se()).pipe(T(this._onDestroy)).subscribe(o=>{this._stickyStyler.direction=o,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?_t:ft;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(gt(0,t),T(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(o,r)=>this._measureRangeSize(o,r)}),Z([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(T(this._onDestroy)).subscribe(([o,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let l=r.elements[a];if(l){let d=r.offsets[a],f=o!==0?Math.max(o-d,d):-d;for(let p of l)p.style.top=`${-f}px`}}}),Z([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(T(this._onDestroy)).subscribe(([o,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let l=r.elements[a];if(l)for(let d of l)d.style.bottom=`${o+r.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let o=this._noDataRowOutlet.viewContainer;if(t){let r=o.createEmbeddedView(e.templateRef),a=r.rootNodes[0];if(r.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let l=a.querySelectorAll(e._cellSelector);for(let d=0;d<l.length;d++)l[d].classList.add(...e._cellClassNames)}}else o.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let o=this.viewChange.value,r=this._rowOutlet.viewContainer;e.start<o.start||e.end>o.end;let a=e.start-o.start,l=e.end-e.start,d,f;for(let w=0;w<l;w++){let C=r.get(w+a);if(C&&C.rootNodes.length){d=f=C.rootNodes[0];break}}for(let w=l-1;w>-1;w--){let C=r.get(w+a);if(C&&C.rootNodes.length){f=C.rootNodes[C.rootNodes.length-1];break}}let p=d?.getBoundingClientRect?.(),v=f?.getBoundingClientRect?.();return p&&v?v.bottom-p.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,o,r){if(t&1&&we(r,yi,5)(r,re,5)(r,qe,5)(r,Ee,5)(r,Ie,5),t&2){let a;I(a=M())&&(o._noDataRow=a.first),I(a=M())&&(o._contentColumnDefs=a),I(a=M())&&(o._contentRowDefs=a),I(a=M())&&(o._contentHeaderRowDefs=a),I(a=M())&&(o._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,o){t&2&&L("cdk-table-fixed-layout",o.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",b],fixedLayout:[2,"fixedLayout","fixedLayout",b],recycleRows:[2,"recycleRows","recycleRows",b]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[S([{provide:G,useExisting:i},{provide:xe,useValue:null}])],ngContentSelectors:Vi,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,o){t&1&&(fe(Hi),$(0),$(1,1),B(2,ji,1,0),B(3,Gi,7,0)(4,Ui,4,0)),t&2&&(u(2),H(o._isServer?2:-1),u(),H(o._isNativeHtmlTable?3:4))},dependencies:[at,rt,lt,st],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return i})();function Ve(i,n){return i.concat(Array.from(n))}function fi(i,n){let e=n.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let o=t.nodeType===1?t.nodeName:null;if(o===e)return t;if(o==="TABLE")break;t=t.parentNode}return null}var bi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ue({type:i});static \u0275inj=le({imports:[Nt]})}return i})();var $i=[[["caption"]],[["colgroup"],["col"]],"*"],Qi=["caption","colgroup, col","*"];function Yi(i,n){i&1&&$(0,2)}function Xi(i,n){i&1&&(m(0,"thead",0),k(1,1),h(),m(2,"tbody",2),k(3,3)(4,4),h(),m(5,"tfoot",0),k(6,5),h())}function Wi(i,n){i&1&&k(0,1)(1,3)(2,4)(3,5)}var vi=(()=>{class i extends dt{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275cmp=R({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,o){t&2&&L("mat-table-fixed-layout",o.fixedLayout)},exportAs:["matTable"],features:[S([{provide:dt,useExisting:i},{provide:G,useExisting:i},{provide:xe,useValue:null}]),g],ngContentSelectors:Qi,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,o){t&1&&(fe($i),$(0),$(1,1),B(2,Yi,1,0),B(3,Xi,7,0)(4,Wi,4,0)),t&2&&(u(2),H(o._isServer?2:-1),u(),H(o._isNativeHtmlTable?3:4))},dependencies:[at,rt,lt,st],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return i})(),wi=(()=>{class i extends je{static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275dir=c({type:i,selectors:[["","matCellDef",""]],features:[S([{provide:je,useExisting:i}]),g]})}return i})(),Ci=(()=>{class i extends Ge{static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275dir=c({type:i,selectors:[["","matHeaderCellDef",""]],features:[S([{provide:Ge,useExisting:i}]),g]})}return i})(),Hn=(()=>{class i extends Ue{static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275dir=c({type:i,selectors:[["","matFooterCellDef",""]],features:[S([{provide:Ue,useExisting:i}]),g]})}return i})(),Di=(()=>{class i extends re{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275dir=c({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[S([{provide:re,useExisting:i}]),g]})}return i})(),Ri=(()=>{class i extends _i{static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275dir=c({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[g]})}return i})(),Vn=(()=>{class i extends pi{static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275dir=c({type:i,selectors:[["mat-footer-cell"],["td","mat-footer-cell",""]],hostAttrs:[1,"mat-mdc-footer-cell","mdc-data-table__cell"],features:[g]})}return i})(),ki=(()=>{class i extends gi{static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275dir=c({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[g]})}return i})();var Si=(()=>{class i extends Ee{static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275dir=c({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",b]},features:[S([{provide:Ee,useExisting:i}]),g]})}return i})(),jn=(()=>{class i extends Ie{static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275dir=c({type:i,selectors:[["","matFooterRowDef",""]],inputs:{columns:[0,"matFooterRowDef","columns"],sticky:[2,"matFooterRowDefSticky","sticky",b]},features:[S([{provide:Ie,useExisting:i}]),g]})}return i})(),xi=(()=>{class i extends qe{static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275dir=c({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[S([{provide:qe,useExisting:i}]),g]})}return i})(),Ti=(()=>{class i extends it{static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275cmp=R({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[S([{provide:it,useExisting:i}]),g],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&k(0,0)},dependencies:[W],encapsulation:2})}return i})(),Gn=(()=>{class i extends ot{static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275cmp=R({type:i,selectors:[["mat-footer-row"],["tr","mat-footer-row",""]],hostAttrs:["role","row",1,"mat-mdc-footer-row","mdc-data-table__row"],exportAs:["matFooterRow"],features:[S([{provide:ot,useExisting:i}]),g],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&k(0,0)},dependencies:[W],encapsulation:2})}return i})(),Ei=(()=>{class i extends nt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=E(i)))(o||i)}})();static \u0275cmp=R({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[S([{provide:nt,useExisting:i}]),g],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,o){t&1&&k(0,0)},dependencies:[W],encapsulation:2})}return i})();var Un=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ue({type:i});static \u0275inj=le({imports:[bi,Le]})}return i})(),Zi=9007199254740991,$e=class extends It{_data;_renderData=new ae([]);_filter=new ae("");_internalPageChanges=new x;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(n){n=Array.isArray(n)?n:[],this._data.next(n),this._renderChangesSubscription||this._filterData(n)}get filter(){return this._filter.value}set filter(n){this._filter.next(n),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(n){this._sort=n,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(n){this._paginator=n,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(n,e)=>{let t=n[e];if(Et(t)){let o=Number(t);return o<Zi?o:t}return t};sortData=(n,e)=>{let t=e.active,o=e.direction;return!t||o==""?n:n.sort((r,a)=>{let l=this.sortingDataAccessor(r,t),d=this.sortingDataAccessor(a,t),f=typeof l,p=typeof d;f!==p&&(f==="number"&&(l+=""),p==="number"&&(d+=""));let v=0;return l!=null&&d!=null?l>d?v=1:l<d&&(v=-1):l!=null?v=1:d!=null&&(v=-1),v*(o=="asc"?1:-1)})};filterPredicate=(n,e)=>{let t=e.trim().toLowerCase();return Object.values(n).some(o=>`${o}`.toLowerCase().includes(t))};constructor(n=[]){super(),this._data=new ae(n),this._updateChangeSubscription()}_updateChangeSubscription(){let n=this._sort?Qe(this._sort.sortChange,this._sort.initialized):se(null),e=this._paginator?Qe(this._paginator.page,this._internalPageChanges,this._paginator.initialized):se(null),t=this._data,o=Z([t,this._filter]).pipe(_(([l])=>this._filterData(l))),r=Z([o,n]).pipe(_(([l])=>this._orderData(l))),a=Z([r,e]).pipe(_(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=a.subscribe(l=>this._renderData.next(l))}_filterData(n){return this.filteredData=this.filter==null||this.filter===""?n:n.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(n){return this.sort?this.sortData(n.slice(),this.sort):n}_pageData(n){if(!this.paginator)return n;let e=this.paginator.pageIndex*this.paginator.pageSize;return n.slice(e,e+this.paginator.pageSize)}_updatePaginator(n){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=n,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,o=Math.min(e.pageIndex,t);o!==e.pageIndex&&(e.pageIndex=o,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var Xn=(()=>{class i{_document=s(me);attachEnterKeyHandler(e,t,o){let r=this._document.getElementById(e),a=this._document.getElementById(t);r.addEventListener("keyup",function(l){l.preventDefault(),l.keyCode===13&&!a.disabled&&o()})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=K({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ii=(()=>{class i{http=s(ge);hostServer=pe.hostServer;host=this.hostServer+"/api/Addresss";get(){return this.http.get(this.host).pipe(_(e=>e.data),y(e=>{throw e}))}getById(e){return this.http.get(`${this.host}/${e}`).pipe(_(t=>t.data),y(t=>{throw t}))}save(e){return this.http.post(this.host+"/",e).pipe(_(t=>t.data),y(t=>{throw t}))}put(e,t){return this.http.put(`${this.host}/${e}`,t).pipe(_(o=>o.data),y(o=>{throw o}))}del(e){return this.http.delete(`${this.host}/${e}`).pipe(_(t=>t.data),y(t=>{throw t}))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=K({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ki(i,n){i&1&&(m(0,"h1"),O(1),Re(2,"translate"),h()),i&2&&(u(),oe(ke(2,1,"TITLE_SELECT_ADDRESS")))}function Ji(i,n){i&1&&(m(0,"h1"),O(1),Re(2,"translate"),h()),i&2&&(u(),oe(ke(2,1,"MY_SAVED_ADRESSES")))}function eo(i,n){i&1&&F(0,"mat-header-cell",15)}function to(i,n){if(i&1){let e=ve();m(0,"mat-cell")(1,"mat-radio-button",16),V("click",function(){let o=de(e).$implicit,r=j(2);return ce(r.emitSelectionToParent(o.id))})("change",function(o){let r=de(e).$implicit,a=j(2);return ce(o?a.selection.toggle(r):null)}),h()()}if(i&2){let e=n.$implicit,t=j(2);u(),N("checked",t.selection.isSelected(e))}}function io(i,n){i&1&&F(0,"mat-header-cell",15)}function oo(i,n){if(i&1&&(m(0,"mat-cell"),O(1),h()),i&2){let e=n.$implicit;u(),De(" ",e==null?null:e.fullName," ")}}function no(i,n){i&1&&F(0,"mat-header-cell",15)}function ro(i,n){if(i&1&&(m(0,"mat-cell"),O(1),h()),i&2){let e=n.$implicit;u(),Ct(" ",e==null?null:e.streetAddress,", ",e==null?null:e.city,", ",e==null?null:e.state,", ",e==null?null:e.zipCode," ")}}function ao(i,n){i&1&&F(0,"mat-header-cell",15)}function so(i,n){if(i&1&&(m(0,"mat-cell"),O(1),h()),i&2){let e=n.$implicit;u(),De(" ",e==null?null:e.country," ")}}function lo(i,n){i&1&&F(0,"mat-header-cell",15)}function co(i,n){if(i&1&&(m(0,"mat-cell")(1,"button",17),F(2,"i",18),h()()),i&2){let e=n.$implicit;u(),N("routerLink",Dt("/address/edit/",e.id))}}function mo(i,n){i&1&&F(0,"mat-header-cell",15)}function ho(i,n){if(i&1){let e=ve();m(0,"mat-cell")(1,"button",19),V("click",function(){let o=de(e).$implicit,r=j(2);return ce(r.deleteAddress(o.id))}),F(2,"i",20),h()()}}function uo(i,n){i&1&&F(0,"mat-header-row")}function fo(i,n){if(i&1){let e=ve();m(0,"mat-row",21),V("click",function(){let o=de(e),r=o.$implicit,a=o.$implicit,l=j(2);return l.selection.toggle(r),ce(l.emitSelectionToParent(a.id))}),h()}}function _o(i,n){if(i&1&&(m(0,"mat-table",2),Y(1,5),q(2,eo,1,0,"mat-header-cell",6)(3,to,2,1,"mat-cell",7),X(),Y(4,8),q(5,io,1,0,"mat-header-cell",6)(6,oo,2,1,"mat-cell",7),X(),Y(7,9),q(8,no,1,0,"mat-header-cell",6)(9,ro,2,4,"mat-cell",7),X(),Y(10,10),q(11,ao,1,0,"mat-header-cell",6)(12,so,2,1,"mat-cell",7),X(),Y(13,11),q(14,lo,1,0,"mat-header-cell",6)(15,co,3,2,"mat-cell",7),X(),Y(16,12),q(17,mo,1,0,"mat-header-cell",6)(18,ho,3,0,"mat-cell",7),X(),q(19,uo,1,0,"mat-header-row",13)(20,fo,1,0,"mat-row",14),h()),i&2){let e=j();N("dataSource",e.dataSource),u(19),N("matHeaderRowDef",e.displayedColumns),u(),N("matRowDefColumns",e.displayedColumns)}}function po(i,n){i&1&&(m(0,"div",3)(1,"button",22)(2,"mat-icon"),O(3,"add"),h(),m(4,"span"),O(5),Re(6,"translate"),h()()()),i&2&&(u(5),oe(ke(6,1,"ADD_NEW_ADDRESS")))}function go(i,n){if(i&1){let e=ve();m(0,"button",23),V("click",function(){de(e);let o=j();return ce(o.chooseAddress())}),m(1,"mat-icon"),O(2,"navigate_next"),h(),m(3,"span",24),O(4),Re(5,"translate"),h()()}if(i&2){let e=j();N("disabled",e.addressId===void 0),u(4),oe(ke(5,2,"LABEL_CONTINUE"))}}kt.add(ai,si);var Dr=(()=>{class i{addressService=s(Ii);translate=s(Ut);router=s(St);ngZone=s(he);snackBarHelperService=s(ni);emitSelection=new ie;allowEdit=!1;addNewAddressDiv=!0;showNextButton=!1;addressId=void 0;displayedColumns=["Name","Address","Country"];selection=new li(!1,[]);storedAddresses;dataSource;confirmation;error;addressExist=!1;ngOnInit(){this.allowEdit?this.displayedColumns.push("Edit","Remove"):this.displayedColumns.unshift("Selection"),this.load()}load(){this.addressService.get().subscribe({next:e=>{this.addressExist=e.length,this.storedAddresses=e,this.dataSource=new $e(this.storedAddresses)},error:e=>{this.snackBarHelperService.open(e.error?.error,"errorBar"),console.log(e)}})}emitSelectionToParent(e){this.selection.hasValue()?(this.emitSelection.emit(e),this.addressId=e):(this.emitSelection.emit(void 0),this.addressId=void 0)}chooseAddress(){sessionStorage.setItem("addressId",this.addressId),this.ngZone.run(()=>ut(this,null,function*(){return yield this.router.navigate(["/delivery-method"])}))}deleteAddress(e){this.addressService.del(e).subscribe({next:()=>{this.error=null,this.translate.get("ADDRESS_REMOVED").subscribe({next:t=>{this.snackBarHelperService.open(t,"confirmBar")},error:t=>{this.snackBarHelperService.open(t,"confirmBar")}}),this.load()},error:t=>{this.snackBarHelperService.open(t.error?.error,"errorBar"),console.log(t)}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["app-address"]],inputs:{allowEdit:"allowEdit",addNewAddressDiv:"addNewAddressDiv",showNextButton:"showNextButton"},outputs:{emitSelection:"emitSelection"},decls:7,vars:6,consts:[["appearance","outlined",1,"mat-elevation-z6"],[1,"mdc-card"],[1,"address-table",3,"dataSource"],[1,"add-new-address"],["mat-raised-button","","mat-button","","color","primary","aria-label","Proceed to payment selection",1,"btn","btn-next",3,"disabled"],["matColumnDef","Selection"],["class","header-hidden",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","Name"],["matColumnDef","Address"],["matColumnDef","Country"],["matColumnDef","Edit"],["matColumnDef","Remove"],[4,"matHeaderRowDef"],[3,"click",4,"matRowDef","matRowDefColumns"],[1,"header-hidden"],[3,"click","change","checked"],["mat-icon-button","",3,"routerLink"],[1,"far","fa-edit"],["mat-icon-button","",3,"click"],[1,"far","fa-trash-alt"],[3,"click"],["mat-raised-button","","mat-button","","color","primary","aria-label","Add a new address","routerLink","/address/create",1,"btn","btn-new-address"],["mat-raised-button","","mat-button","","color","primary","aria-label","Proceed to payment selection",1,"btn","btn-next",3,"click","disabled"],["translate",""]],template:function(t,o){t&1&&(m(0,"mat-card",0)(1,"div",1),B(2,Ki,3,3,"h1")(3,Ji,3,3,"h1"),B(4,_o,21,3,"mat-table",2),B(5,po,7,3,"div",3),B(6,go,6,4,"button",4),h()()),t&2&&(L("div-boundary",!o.addNewAddressDiv),u(2),H(o.showNextButton?2:3),u(2),H(o.addressExist?4:-1),u(),H(o.addNewAddressDiv?5:-1),u(),H(o.showNextButton?6:-1))},dependencies:[oi,ii,Qt,qt,vi,Di,Ci,Ri,wi,ki,He,Kt,xt,Si,Ti,xi,Ei,ti,ei,Xt,Yt,$t],styles:[`.btn-new-address[_ngcontent-%COMP%]{display:block;margin-left:0;margin-right:auto}.btn-next[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:0;margin-top:-2.5rem}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.heading[_ngcontent-%COMP%]{background:#0003;font-size:x-large}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:.625rem 1.25rem}.div-boundary[_ngcontent-%COMP%]{border:1px solid rgba(255,255,255,.3);border-radius:5px;box-shadow:0 0!important}.mdc-card[_ngcontent-%COMP%]{border:0}mat-table[_ngcontent-%COMP%]{border-bottom:1px solid var(--theme-background-light);border-top:1px solid var(--theme-background-light)}mat-cell[_ngcontent-%COMP%]{padding:0!important}.header-hidden[_ngcontent-%COMP%]{display:none}svg[_ngcontent-%COMP%]{font-size:12.5px}.address-table[_ngcontent-%COMP%]{width:100%}.mat-column-Selection[_ngcontent-%COMP%], .mat-column-Name[_ngcontent-%COMP%]{width:20%}.mat-column-Address[_ngcontent-%COMP%]{width:40%}.mat-column-Country[_ngcontent-%COMP%]{width:20%}.mat-column-Edit[_ngcontent-%COMP%], .mat-column-Remove[_ngcontent-%COMP%]{text-align:right;width:48px}.mat-column-Address[_ngcontent-%COMP%]{word-break:break-word}.add-new-address[_ngcontent-%COMP%]{margin-top:1.25rem}



`]})}return i})();var Mr=(()=>{class i{http=s(ge);hostServer=pe.hostServer;host=this.hostServer+"/api/Recycles";find(e){return this.http.get(this.host+"/",{params:e}).pipe(_(t=>t.data),y(t=>{throw t}))}save(e){return this.http.post(this.host+"/",e).pipe(_(t=>t.data),y(t=>{throw t}))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=K({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var bo=["tooltip"],vo=20;var wo=new P("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(te);return()=>Bt(i,{scrollThrottle:vo})}}),Co=new P("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Mi="tooltip-panel",Do={passive:!0},Ro=8,ko=8,So=24,xo=200,Zr=(()=>{class i{_elementRef=s(D);_ngZone=s(he);_platform=s(Fe);_ariaDescriber=s(Gt);_focusMonitor=s(ze);_dir=s(Pe);_injector=s(te);_viewContainerRef=s(J);_mediaMatcher=s(jt);_document=s(me);_renderer=s(Oe);_animationsDisabled=Se();_defaultOptions=s(Co,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=To;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Je(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Je(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Ze(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Ze(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new x;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Ro}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(T(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(t);this._detach(),this._portal=this._portal||new Lt(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=o.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(T(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof D)return this._overlayRef;this._detach()}let t=this._injector.get(At).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${Mi}`,r=Ht(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(T(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Vt(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(wo)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(T(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(T(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(T(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(T(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,o=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(be(be({},o.main),r.main)),this._addOffset(be(be({},o.fallback),r.fallback))])}_addOffset(e){let t=ko,o=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=o?-t:t:e.originX==="end"&&(e.offsetX=o?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"||t=="below"?o={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={originX:"end",originY:"center"});let{x:r,y:a}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:r,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"?o={overlayX:"center",overlayY:"bottom"}:t=="below"?o={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={overlayX:"start",overlayY:"center"});let{x:r,y:a}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:r,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),U(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:o,originY:r}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=o==="end"?"left":"right":a=o==="start"?"left":"right":a=t==="bottom"&&r==="top"?"above":"below",a!==this._currentPosition){let l=this._overlayRef;if(l){let d=`${this._cssClassPrefix}-${Mi}-`;l.removePanelClass(d+this._currentPosition),l.addPanelClass(d+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],o=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),o=this._elementRef.nativeElement;t!==o&&!o.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Do))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,o=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),(e==="on"||!t.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||U({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!zt(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=c({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,o){t&2&&L("mat-mdc-tooltip-disabled",o.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),To=(()=>{class i{_changeDetectorRef=s(ne);_elementRef=s(D);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Se();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new x;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>So&&e.width>=xo}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,o=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:o),t.classList.add(e?o:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=R({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(t,o){if(t&1&&Ce(bo,7),t&2){let r;I(r=M())&&(o._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,o){t&1&&V("mouseleave",function(a){return o._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,o){t&1&&(Xe(0,"div",1,0),vt("animationend",function(a){return o._handleAnimationEnd(a)}),Xe(2,"div",2),O(3),bt()()),t&2&&(wt(o.tooltipClass),L("mdc-tooltip--multiline",o._isMultiline),u(3),oe(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return i})();var ia=new P("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>s(Rt)}),ye="Method not implemented",Oi=class{locale;_localeChanges=new x;localeChanges=this._localeChanges;setTime(n,e,t,o){throw new Error(ye)}getHours(n){throw new Error(ye)}getMinutes(n){throw new Error(ye)}getSeconds(n){throw new Error(ye)}parseTime(n,e){throw new Error(ye)}addSeconds(n,e){throw new Error(ye)}getValidDateOrNull(n){return this.isDateInstance(n)&&this.isValid(n)?n:null}deserialize(n){return n==null||this.isDateInstance(n)&&this.isValid(n)?n:this.invalid()}setLocale(n){this.locale=n,this._localeChanges.next()}compareDate(n,e){return this.getYear(n)-this.getYear(e)||this.getMonth(n)-this.getMonth(e)||this.getDate(n)-this.getDate(e)}compareTime(n,e){return this.getHours(n)-this.getHours(e)||this.getMinutes(n)-this.getMinutes(e)||this.getSeconds(n)-this.getSeconds(e)}sameDate(n,e){if(n&&e){let t=this.isValid(n),o=this.isValid(e);return t&&o?!this.compareDate(n,e):t==o}return n==e}sameTime(n,e){if(n&&e){let t=this.isValid(n),o=this.isValid(e);return t&&o?!this.compareTime(n,e):t==o}return n==e}clampDate(n,e,t){return e&&this.compareDate(n,e)<0?e:t&&this.compareDate(n,t)>0?t:n}},oa=new P("mat-date-formats");export{Zr as a,Po as b,zi as c,He as d,nn as e,vi as f,wi as g,Ci as h,Hn as i,Di as j,Ri as k,Vn as l,ki as m,Si as n,jn as o,xi as p,Ti as q,Gn as r,Ei as s,Un as t,$e as u,ia as v,Oi as w,oa as x,Xn as y,Ii as z,Dr as A,Mr as B};
