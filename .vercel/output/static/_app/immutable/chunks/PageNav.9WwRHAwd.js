import{s as V,a as N,u as C,g as P,b as S,c as T}from"./scheduler.B1XGPk8y.js";import{S as q,i as D,e as k,c as E,a as I,d,q as g,g as p,w as U,n as c,o as _,k as h,l as v,m as b,p as z,s as G,f as H}from"./index.Dql_17GW.js";import{p as A}from"./stores.CiT0mqS3.js";import{f as j,m as w}from"./stores.C7vTeUd2.js";import"./entry.UxVCFaJS.js";import{P as B}from"./PaneNavigation.DEIuv5zT.js";import{C as F,S as J}from"./SectionWrapper.B9uG607o.js";function K(i){let t,a,e,o,n;const l=i[3].default,m=N(l,i,i[2],null);return{c(){t=k("nav"),m&&m.c(),this.h()},l(s){t=E(s,"NAV",{class:!0});var r=I(t);m&&m.l(r),r.forEach(d),this.h()},h(){g(t,"class",a="pointer-events-auto relative border-t md:border-t-0 md:border-r border-bprimary/80 "+(i[0]?"order-first self-end h-fit md:border-b md:self-start w-full md:w-1/2":"order-1 flex-1 h-1/2 md:h-screen w-full md:max-w-fit"))},m(s,r){p(s,t,r),m&&m.m(t,null),e=!0,o||(n=U(t,"mouseleave",i[1]),o=!0)},p(s,[r]){m&&m.p&&(!e||r&4)&&C(m,l,s,s[2],e?S(l,s[2],r,null):P(s[2]),null),(!e||r&1&&a!==(a="pointer-events-auto relative border-t md:border-t-0 md:border-r border-bprimary/80 "+(s[0]?"order-first self-end h-fit md:border-b md:self-start w-full md:w-1/2":"order-1 flex-1 h-1/2 md:h-screen w-full md:max-w-fit")))&&g(t,"class",a)},i(s){e||(c(m,s),e=!0)},o(s){_(m,s),e=!1},d(s){s&&d(t),m&&m.d(s),o=!1,n()}}}function M(i,t,a){let e;T(i,j,s=>a(4,e=s));let{$$slots:o={},$$scope:n}=t,{minimized:l}=t;const m=()=>e.cancelNavHover();return i.$$set=s=>{"minimized"in s&&a(0,l=s.minimized),"$$scope"in s&&a(2,n=s.$$scope)},[l,m,n,o]}class O extends q{constructor(t){super(),D(this,t,M,K,V,{minimized:0})}}const Q=i=>({}),L=i=>({onClick:i[4]});function R(i){let t,a,e,o;const n=i[7].default,l=N(n,i,i[8],L),m=i[7].default,s=N(m,i,i[8],null);return{c(){t=k("div"),l&&l.c(),a=G(),e=k("div"),s&&s.c(),this.h()},l(r){t=E(r,"DIV",{class:!0});var f=I(t);l&&l.l(f),f.forEach(d),a=H(r),e=E(r,"DIV",{class:!0});var $=I(e);s&&s.l($),$.forEach(d),this.h()},h(){g(t,"class","md:hidden"),g(e,"class","hidden md:block")},m(r,f){p(r,t,f),l&&l.m(t,null),p(r,a,f),p(r,e,f),s&&s.m(e,null),o=!0},p(r,f){l&&l.p&&(!o||f&256)&&C(l,n,r,r[8],o?S(n,r[8],f,Q):P(r[8]),L),s&&s.p&&(!o||f&256)&&C(s,m,r,r[8],o?S(m,r[8],f,null):P(r[8]),null)},i(r){o||(c(l,r),c(s,r),o=!0)},o(r){_(l,r),_(s,r),o=!1},d(r){r&&(d(t),d(a),d(e)),l&&l.d(r),s&&s.d(r)}}}function W(i){let t,a,e,o;return t=new B({props:{minimize:i[4],show:i[3],minimized:i[2],closeUrl:!i[1]&&"/",minimizedLabelText:i[0],minimizedIconText:"nav"}}),e=new J({props:{show:i[3],minimized:i[2],$$slots:{default:[R]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment),a=G(),h(e.$$.fragment)},l(n){v(t.$$.fragment,n),a=H(n),v(e.$$.fragment,n)},m(n,l){b(t,n,l),p(n,a,l),b(e,n,l),o=!0},p(n,l){const m={};l&4&&(m.minimized=n[2]),l&2&&(m.closeUrl=!n[1]&&"/"),l&1&&(m.minimizedLabelText=n[0]),t.$set(m);const s={};l&4&&(s.minimized=n[2]),l&256&&(s.$$scope={dirty:l,ctx:n}),e.$set(s)},i(n){o||(c(t.$$.fragment,n),c(e.$$.fragment,n),o=!0)},o(n){_(t.$$.fragment,n),_(e.$$.fragment,n),o=!1},d(n){n&&d(a),z(t,n),z(e,n)}}}function X(i){let t,a;return t=new F({props:{width:"md:w-96",minimized:i[2],$$slots:{default:[W]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,o){b(t,e,o),a=!0},p(e,o){const n={};o&4&&(n.minimized=e[2]),o&263&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){a||(c(t.$$.fragment,e),a=!0)},o(e){_(t.$$.fragment,e),a=!1},d(e){z(t,e)}}}function Y(i){let t,a;return t=new O({props:{minimized:i[2],$$slots:{default:[X]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,o){b(t,e,o),a=!0},p(e,[o]){const n={};o&4&&(n.minimized=e[2]),o&263&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){a||(c(t.$$.fragment,e),a=!0)},o(e){_(t.$$.fragment,e),a=!1},d(e){z(t,e)}}}function Z(i,t,a){let e,o,n,l;T(i,A,u=>a(6,n=u)),T(i,w,u=>a(2,l=u));let{$$slots:m={},$$scope:s}=t,{route:r}=t;const f=()=>w.set(!1),$=()=>w.set(!0);return i.$$set=u=>{"route"in u&&a(5,r=u.route),"$$scope"in u&&a(8,s=u.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&a(1,e=n.params.slug),i.$$.dirty&32&&a(0,o=r)},[o,e,l,f,$,r,n,m,s]}class re extends q{constructor(t){super(),D(this,t,Z,Y,V,{route:5})}}export{re as P};