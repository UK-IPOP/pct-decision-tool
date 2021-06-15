(function(e){function t(t){for(var s,o,a=t[0],c=t[1],l=t[2],d=0,p=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},r={app:0},i=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/pct-decision-tool/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-4",attrs:{id:"app"}},[n("decision-tool")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{id:"tool"}},[e.current_question?n("div",["track"==e.current_question?n("div",{staticClass:"text-center"},[n("h3",[e._v("Procalcitonin-Guided Antibiotic Prescribing Decision Tool")]),n("p",[e._v(" Use this tool to guide antibiotic prescribing for Lower Respiratory Tract Infection (LRTI) and Sepsis patients based on procalcitonin (PCT) lab values. ")])]):e._e(),this.questions[this.current_question].warning?n("p",{staticClass:"text-center text-warning"},[e._v(" "+e._s(this.questions[this.current_question].warning)+" ")]):e._e(),n("question",e._b({on:{increase:e.handleAnswer}},"question",e.selectedQuestion,!1)),"track"!=e.current_question?n("div",[n("b-row",{staticClass:"quarter d-flex justify-content-center"},[n("b-col",{staticClass:"d-flex justify-content-center align-items-center",attrs:{cols:"6"}},[n("b-button",{attrs:{pill:"",block:"",variant:"primary"},on:{click:function(t){e.current_question="track"}}},[n("b-icon",{attrs:{icon:"skip-backward-fill"}})],1)],1)],1)],1):e._e()],1):n("div",[n("result",{attrs:{answers:e.chosen_answers}})],1)])},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"d-flex justify-content-center align-items-center"},[n("h5",{staticClass:"text-center"},[e._v(e._s(e.number)+". "+e._s(e.text))])]),2==e.options.length?n("div",[2==e.options.length?n("b-row",{staticClass:"quarter d-flex"},e._l(e.options,(function(t){return n("b-col",{key:t.id,staticClass:"d-flex justify-content-center align-items-center"},[n("b-button",{attrs:{pill:"",variant:"primary"},on:{click:function(n){return e.$emit("increase",t)}}},[e._v(" "+e._s(t)+" ")])],1)})),1):e._e()],1):4==e.options.length?n("div",[n("b-row",{staticClass:"quarter d-flex"},e._l(e.options.slice(0,2),(function(t){return n("b-col",{key:t.id,staticClass:"d-flex justify-content-center align-items-center"},[n("b-button",{attrs:{pill:"",variant:"primary"},on:{click:function(n){return e.$emit("increase",t)}}},[e._v(" "+e._s(t)+" ")])],1)})),1),n("b-row",{staticClass:"quarter d-flex"},e._l(e.options.slice(2,4),(function(t){return n("b-col",{key:t.id,staticClass:"d-flex justify-content-center align-items-center"},[n("b-button",{attrs:{pill:"",variant:"primary"},on:{click:function(n){return e.$emit("increase",t)}}},[e._v(" "+e._s(t)+" ")])],1)})),1)],1):e._e()],1)},l=[],u={name:"Question",props:["number","text","options"]},d=u,p=(n("db3a"),n("2877")),f=Object(p["a"])(d,c,l,!1,null,"7ab31f3e",null),g=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"text-left justify-content-left"},[n("b-col",[n("h3",[n("small",[e._v("Result:")]),n("br"),"danger"==e.processedAnswers.color?n("span",[n("span",{staticClass:"text-danger"},[e._v("Antibiotics "+e._s(e.processedAnswers.result))])]):e._e(),"warning"==e.processedAnswers.color?n("span",[n("span",{staticClass:"text-warning"},[e._v("Antibiotics "+e._s(e.processedAnswers.result))])]):e._e(),"info"==e.processedAnswers.color?n("span",[n("span",{staticClass:"text-info"},[e._v("Antibiotics "+e._s(e.processedAnswers.result))])]):e._e(),"success"==e.processedAnswers.color?n("span",[n("span",{staticClass:"text-success"},[e._v("Antibiotics "+e._s(e.processedAnswers.result))])]):e._e()]),e._l(e.processedAnswers.messages,(function(t){return n("ul",{key:t.index,staticClass:"text-left"},[n("li",[e._v(e._s(t))])])}))],2)],1),n("b-row",{staticClass:"pt-2"},[n("b-col",{attrs:{cols:"6"}},[n("h3",{staticClass:"text-center text-warning"},[e._v(" "+e._s(e.caution.title.toUpperCase())+" ")]),n("h5",{staticClass:"text-left"},[e._v(e._s(e.caution.header))]),e._l(e.caution.bullets,(function(t){return n("ul",{key:t.index},[n("li",[e._v(e._s(t))])])}))],2),n("b-col",{attrs:{cols:"6"}},[n("h3",{staticClass:"text-center text-danger"},[e._v(" "+e._s(e.warning.title.toUpperCase())+" ")]),n("h5",{staticClass:"text-left"},[e._v(e._s(e.warning.header))]),n("ul",[n("li",[e._v(e._s(e.warning.header2))]),e._l(e.warning.bullets,(function(t){return n("ul",{key:t.index,staticClass:"pl-3"},[n("li",[e._v(e._s(t))])])}))],2)])],1),n("b-row",{staticClass:"d-flex justify-content-center pt-2"},[n("b-col",{staticClass:"d-flex justify-content-center align-items-center",attrs:{cols:"6"}},[n("b-button",{attrs:{pill:"",block:"",variant:"primary"},on:{click:function(t){return e.reloadPage()}}},[n("b-icon",{attrs:{icon:"arrow-clockwise"}}),e._v(" RESTART ")],1)],1)],1)],1)},b=[],_=(n("99af"),n("bc3a")),m=n("ed18");m.config();var v={name:"Result",props:["answers"],data:function(){return{possibleResults:{high_acuity:{firstRange:{result:"Strongly Discouraged",color:"danger",messages:["If clinically unstable, consider overruling recommendation."]},secondRange:{result:"Discouraged",color:"warning",messages:["If clinically unstable, consider overruling recommendation."]},thirdRange:{result:"Encouraged",color:"info",messages:["Repeat test every 2-3 days and use algorithm to evaluate discontinuation.","If PCT rising or not decreasing, consider treatment failure. Consider expanding antibiotic coverage and further evaluation."]},fourthRange:{result:"Strongly Encouraged",color:"success",messages:["Repeat test every 2-3 days and use algorithm to evaluate discontinuation.","If PCT rising or not decreasing, consider treatment failure. Consider expanding antibiotic coverage and further evaluation."]}},low_acuity:{firstRange:{result:"Strongly Discouraged",color:"danger",messages:["Consider alternate diagnosis.","Repeat PCT in 6-24 hours if no clinical imporvement.","If immunosupressed or high risk consider overrule."]},secondRange:{result:"Discouraged",color:"warning",messages:["Consider alternate diagnosis.","Repeat PCT in 6-24 hours if no clinical imporvement.","If immunosupressed or high risk consider overrule."]},thirdRange:{result:"Encouraged",color:"info",messages:["Repeat test every 2-3 days and use algorithm to evaluate discontinuation.","If PCT rising or not decreasing, consider treatment failure. Consider expanding antibiotic coverage and further evaluation."]},fourthRange:{result:"Strongly Encouraged",color:"success",messages:["Repeat test every 2-3 days and use algorithm to evaluate discontinuation.","If PCT rising or not decreasing, consider treatment failure. Consider expanding antibiotic coverage and further evaluation."]}}},caution:{title:"Slow",header:"Non-bacterial causes of PCT elevation",bullets:["Massive stress","Malaria","Systemic vasculitis","Agents that stimulate cytokines","End-stage renal disease","Immunocompromised"]},warning:{title:"Stop",header:"Do NOT use PCT for these patients",header2:"Chronic infections (including but not limited to):",bullets:["Osteomyelitis","Abscess","Subacute endocarditis"]}}},methods:{reloadPage:function(){window.location.reload()}},computed:{processedAnswers:function(){var e,t=this.answers.track,n="",s="";return"LRTI high-acuity or Sepsis"===t?(n="high_acuity",e=this.answers.high_acuity,"<0.25 or drop by >90%"===e?s="firstRange":"0.25 - 0.49 or drop by >80%"===e?s="secondRange":"0.50 - 0.99"===e?s="thirdRange":">1.00"===e&&(s="fourthRange")):"LRTI low/moderate-acuity"===t?(n="low_acuity",e=this.answers.low_acuity,"<0.10 or drop by >90%"===e?s="firstRange":"0.10 - 0.24 or drop by >80%"===e?s="secondRange":"0.25 - 0.50"===e?s="thirdRange":">0.50"===e&&(s="fourthRange")):console.log("BADDD"),this.possibleResults[n][s]}},mounted:function(){var e="";e="LRTI high-acuity or Sepsis"===this.answers.track?this.answers.high_acuity:this.answers.low_acuity;var t="https://ipop-rest-api.herokuapp.com/pct/update"+"?track=".concat(this.answers.track,"&level=").concat(e);_.get(encodeURI(t))}},y=v,w=(n("92a8"),Object(p["a"])(y,h,b,!1,null,"e8227600",null)),x=w.exports,C={components:{Question:g,Result:x},name:"DecisionTool",data:function(){return{current_question:"track",chosen_answers:{},questions:{track:{number:1,text:"What best describes the patient's disease state?",options:["LRTI low/moderate-acuity","LRTI high-acuity or Sepsis"]},low_acuity:{number:2,text:"What range does the current procalictonin level fall in? (ng/ml)",options:["<0.10 or drop by >90%","0.10 - 0.24 or drop by >80%","0.25 - 0.50",">0.50"]},high_acuity:{number:2,text:"What range does the current procalictonin level fall in? (ng/ml)",options:["<0.25 or drop by >90%","0.25 - 0.49 or drop by >80%","0.50 - 0.99",">1.00"],warning:"**Algorithm only recommended on Day 2+ for Sepsis patients.***"}}}},methods:{handleAnswer:function(e){this.chosen_answers[this.current_question]=e,this.current_question="LRTI high-acuity or Sepsis"===e?"high_acuity":"LRTI low/moderate-acuity"===e?"low_acuity":null}},computed:{selectedQuestion:function(){return this.questions[this.current_question]}}},R=C,k=(n("c8f0"),Object(p["a"])(R,o,a,!1,null,"38f86622",null)),T=k.exports,A={name:"App",components:{DecisionTool:T}},j=A,q=Object(p["a"])(j,r,i,!1,null,null,null),P=q.exports,S=n("5f5b"),I=n("b1e0");n("f9e3"),n("2dd8");s["default"].use(S["a"]),s["default"].use(I["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(P)}}).$mount("#app")},"92a8":function(e,t,n){"use strict";n("a676")},a676:function(e,t,n){},c8f0:function(e,t,n){"use strict";n("eb9e")},db3a:function(e,t,n){"use strict";n("decb")},decb:function(e,t,n){},eb9e:function(e,t,n){}});
//# sourceMappingURL=app.2a0f7c2b.js.map