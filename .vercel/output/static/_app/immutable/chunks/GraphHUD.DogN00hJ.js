import{s as $}from"./scheduler.B1XGPk8y.js";import{S as A,i as G,e as b,k as v,s as E,c as p,a as k,l as U,f as L,d,q as h,g as B,h as g,m as w,n as m,v as S,o as _,u as T,p as q,t as I,b as N,j as V}from"./index.Dql_17GW.js";import{P as j,B as z}from"./PaneNavigation.DEIuv5zT.js";import{B as C}from"./BlockQuote.CyR8CSdF.js";function D(o){let t,e;return t=new C({props:{content:o[2]}}),{c(){v(t.$$.fragment)},l(l){U(t.$$.fragment,l)},m(l,n){w(t,l,n),e=!0},p(l,n){const r={};n&4&&(r.content=l[2]),t.$set(r)},i(l){e||(m(t.$$.fragment,l),e=!0)},o(l){_(t.$$.fragment,l),e=!1},d(l){q(t,l)}}}function P(o){let t,e,l;return e=new z({props:{xs:!0,outline:!0,$$slots:{default:[H]},$$scope:{ctx:o}}}),{c(){t=b("a"),v(e.$$.fragment),this.h()},l(n){t=p(n,"A",{href:!0,class:!0});var r=k(t);U(e.$$.fragment,r),r.forEach(d),this.h()},h(){h(t,"href",o[3]),h(t,"class","block mt-6")},m(n,r){B(n,t,r),w(e,t,null),l=!0},p(n,r){const u={};r&96&&(u.$$scope={dirty:r,ctx:n}),e.$set(u),(!l||r&8)&&h(t,"href",n[3])},i(n){l||(m(e.$$.fragment,n),l=!0)},o(n){_(e.$$.fragment,n),l=!1},d(n){n&&d(t),q(e)}}}function H(o){let t,e;return{c(){t=b("span"),e=I(o[5])},l(l){t=p(l,"SPAN",{});var n=k(t);e=N(n,o[5]),n.forEach(d)},m(l,n){B(l,t,n),g(t,e)},p(l,n){n&32&&V(e,l[5])},d(l){l&&d(t)}}}function Q(o){let t,e,l,n,r,u;l=new j({props:{title:o[0],subtitle:o[1],closeUrl:o[4]}});let a=o[2]&&D(o),i=o[3]&&P(o);return{c(){t=b("div"),e=b("div"),v(l.$$.fragment),n=E(),a&&a.c(),r=E(),i&&i.c(),this.h()},l(s){t=p(s,"DIV",{class:!0});var f=k(t);e=p(f,"DIV",{class:!0});var c=k(e);U(l.$$.fragment,c),n=L(c),a&&a.l(c),r=L(c),i&&i.l(c),c.forEach(d),f.forEach(d),this.h()},h(){h(e,"class","bg-bg-darkest/70 backdrop-blur-sm p-4 border border-bprimary/80"),h(t,"class","pointer-events-auto fixed z-20 top-0 right-0 p-4 pl-20 md:p-8 w-full md:w-fit h-fit min-w-80 max-w-128")},m(s,f){B(s,t,f),g(t,e),w(l,e,null),g(e,n),a&&a.m(e,null),g(e,r),i&&i.m(e,null),u=!0},p(s,[f]){const c={};f&1&&(c.title=s[0]),f&2&&(c.subtitle=s[1]),f&16&&(c.closeUrl=s[4]),l.$set(c),s[2]?a?(a.p(s,f),f&4&&m(a,1)):(a=D(s),a.c(),m(a,1),a.m(e,r)):a&&(S(),_(a,1,1,()=>{a=null}),T()),s[3]?i?(i.p(s,f),f&8&&m(i,1)):(i=P(s),i.c(),m(i,1),i.m(e,null)):i&&(S(),_(i,1,1,()=>{i=null}),T())},i(s){u||(m(l.$$.fragment,s),m(a),m(i),u=!0)},o(s){_(l.$$.fragment,s),_(a),_(i),u=!1},d(s){s&&d(t),q(l),a&&a.d(),i&&i.d()}}}function F(o,t,e){let{title:l,subtitle:n,textBlock:r,detailsUrl:u,closeUrl:a,detailsLinkText:i="details"}=t;return o.$$set=s=>{"title"in s&&e(0,l=s.title),"subtitle"in s&&e(1,n=s.subtitle),"textBlock"in s&&e(2,r=s.textBlock),"detailsUrl"in s&&e(3,u=s.detailsUrl),"closeUrl"in s&&e(4,a=s.closeUrl),"detailsLinkText"in s&&e(5,i=s.detailsLinkText)},[l,n,r,u,a,i]}class R extends A{constructor(t){super(),G(this,t,F,Q,$,{title:0,subtitle:1,textBlock:2,detailsUrl:3,closeUrl:4,detailsLinkText:5})}}export{R as G};
