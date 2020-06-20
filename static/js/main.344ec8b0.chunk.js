(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__29rGE",card:"Cards_card__yTsXs",infected:"Cards_infected__Pupu1",recovered:"Cards_recovered__3IXmc",deaths:"Cards_deaths__2ebYv"}},203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a(6),u=a.n(o),s=a(10),i=a(16),l=a(44),d=a(32),p=a.n(d),m="https://covid19.mathdro.id/api",f=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m,"global"===t?a=m:t&&(a="".concat(m,"/countries/").concat(t)),e.prev=2,e.next=5,p.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(m,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(m,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),h=a(74),E=a.n(h),g=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,d=e.country,p=Object(n.useState)({}),m=Object(i.a)(p,2),f=m[0],b=m[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=a?r.a.createElement(l.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(d)}}}):null,g=f[0]?r.a.createElement(l.b,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:E.a.container},d?h:g)},y=a(225),x=a(224),_=a(75),C=a.n(_);function O(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,b();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(y.a,{className:C.a.formControl},r.a.createElement(x.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"global"},"Global"),o.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))}var j=a(221),w=a(226),k=a(222),D=a(223),S=a(33),N=a.n(S),I=a(34),U=a.n(I),J=a(13),V=a.n(J);function B(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:V.a.container},r.a.createElement(j.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(j.a,{item:!0,xs:12,md:3,component:w.a,className:U()(V.a.card,V.a.infected)},r.a.createElement(k.a,null,r.a.createElement(D.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(D.a,{variant:"h5",component:"h2"},r.a.createElement(N.a,{start:0,end:a.value,duration:2.75,separator:","})),r.a.createElement(D.a,{color:"textSecondary"},"Updated as of ",new Date(o).toDateString()),r.a.createElement(D.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19."))),r.a.createElement(j.a,{item:!0,xs:12,md:3,component:w.a,className:U()(V.a.card,V.a.recovered)},r.a.createElement(k.a,null,r.a.createElement(D.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(D.a,{variant:"h5",component:"h2"},r.a.createElement(N.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(D.a,{color:"textSecondary"},"Updated as of ",new Date(o).toDateString()),r.a.createElement(D.a,{variant:"body2",component:"p"},"Number of recoveries from COVID-19."))),r.a.createElement(j.a,{item:!0,xs:12,md:3,component:w.a,className:U()(V.a.card,V.a.deaths)},r.a.createElement(k.a,null,r.a.createElement(D.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(D.a,{variant:"h5",component:"h2"},r.a.createElement(N.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(D.a,{color:"textSecondary"},"Updated as of ",new Date(o).toDateString()),r.a.createElement(D.a,{variant:"body2",component:"p"},"Number of deaths caused by COVID-19."))))):"Loading..."}var P=a(46),A=a.n(P),G=a(80),R=a.n(G);function X(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),d=l[0],p=l[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,f();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=function(){var e=Object(s.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:a=e.sent,c(a),p(t),console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:A.a.container},r.a.createElement("img",{className:A.a.image,src:R.a,alt:"COVID-19"}),r.a.createElement(B,{data:a,country:d}),r.a.createElement(O,{handleCountryChange:m}),r.a.createElement(g,{data:a,country:d}))}Object(c.render)(r.a.createElement(X,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__3I7D2",image:"App_image__qf4JC"}},74:function(e,t,a){e.exports={container:"Chart_container__aE5jS"}},75:function(e,t,a){e.exports={container:"CountryPicker_container__2gArY",formControl:"CountryPicker_formControl__skJhJ"}},80:function(e,t,a){e.exports=a.p+"static/media/covid19.d7265326.png"},83:function(e,t,a){e.exports=a(203)}},[[83,1,2]]]);
//# sourceMappingURL=main.344ec8b0.chunk.js.map