(this["webpackJsonpayan-app"]=this["webpackJsonpayan-app"]||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(6),r=c.n(a),i=(c(12),c(5),c(3)),j=c.n(i),d=c(7),o=c(4),l=c(0),h=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(o.a)(a,2),i=r[0],h=r[1],u=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covidactnow.org/v2/countries.json?apiKey=0f3cf27e1dc84a8c9de97e5347b6e9d4");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c[0].lastUpdatedDate),s(c[0].actuals),h(c[0].lastUpdatedDate),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u()}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:" Covid-19 USA STATS"}),Object(l.jsxs)("h5",{className:"Date",children:[" Last update ",Object(l.jsx)("span",{children:i})]}),Object(l.jsxs)("div",{className:"covidData",children:[Object(l.jsx)("h2",{children:"Total cases"})," ",Object(l.jsx)("span",{children:c.cases})]}),Object(l.jsxs)("div",{className:"covidData",children:[Object(l.jsx)("h2",{children:"Total deaths"})," ",Object(l.jsx)("span",{children:c.deaths})]}),Object(l.jsxs)("div",{className:"covidData",children:[Object(l.jsx)("h2",{children:"New cases"})," ",Object(l.jsx)("span",{children:c.newCases})]}),Object(l.jsxs)("div",{className:"covidData",children:[Object(l.jsx)("h2",{children:"New deaths"})," ",Object(l.jsx)("span",{children:c.newDeaths})]})]})},u=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(h,{})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),b()},5:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.c5560e41.chunk.js.map