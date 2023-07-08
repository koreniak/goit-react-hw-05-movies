"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[607],{8505:function(e,t,r){r.d(t,{Z:function(){return d}});var n,a,u=r(7689),i=r(1087),c=r(6249),o=r(168),s=r(9549),p=s.Z.ul(n||(n=(0,o.Z)(["\n  padding: 16px 16px;\n"]))),f=s.Z.li(a||(a=(0,o.Z)(["\n  margin-bottom: 8px;\n\n  &:hover {\n    color: #4D5AE5;\n  }\n"]))),v=r(184),h=function(e){var t=e.movies,r=(0,u.TH)();return(0,v.jsx)(p,{children:t&&t.map((function(e){var t=e.title,n=e.id;return(0,v.jsx)(f,{children:(0,v.jsx)(i.rU,{to:"".concat(c._.MOVIES,"/").concat(n),state:{from:r},children:t})},n)}))})},d=function(e){var t=e.movies,r=e.error,n=e.isLoading;return(0,v.jsxs)("div",{children:[r&&(0,v.jsx)("p",{children:r}),n&&(0,v.jsx)("p",{children:"Is Loading..."}),t.length>0&&(0,v.jsx)(h,{movies:t})]})}},6607:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(6795),a=r(8505),u=r(5861),i=r(9439),c=r(4687),o=r.n(c),s=r(2791),p=r(408),f=r(184),v=function(){var e=function(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2),r=t[0],n=t[1],a=(0,s.useState)(null),c=(0,i.Z)(a,2),f=c[0],v=c[1],h=(0,s.useState)(null),d=(0,i.Z)(h,2),l=d[0],m=d[1];return(0,s.useEffect)((function(){m(!0);var e=function(){var e=(0,u.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.rj)();case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v(e.t0.status_message);case 10:return e.prev=10,m(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movies:r,error:f,isLoading:l}}(),t=e.movies,r=e.error,c=e.isLoading;return(0,f.jsxs)("section",{children:[(0,f.jsx)(a.Z,{movies:t,error:r,isLoading:c}),(0,f.jsx)(n.Ix,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})}},408:function(e,t,r){r.d(t,{zv:function(){return h},TP:function(){return v},tx:function(){return d},gy:function(){return f},rj:function(){return p}});var n=r(5861),a=r(4687),u=r.n(a),i=r(1243),c=function(e){return e.results.map((function(e){var t=e.title,r=e.name;return{title:t||r,id:e.id}}))},o=function(e){var t=e.title,r=e.name,n=e.id,a=e.vote_average,u=e.overview,i=e.genres,c=e.release_date,o=e.poster_path;return{title:t||r,id:n,userScore:"".concat(Math.round(10*a),"%"),overview:u,genres:i.map((function(e){return e.name})).join(" "),releaseDate:new Date(c).getFullYear(),poster:"http://image.tmdb.org/t/p/w185".concat(o)}},s={method:"GET",baseURL:"https://api.themoviedb.org/3",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzlhODIzZTI5MmRhZDEzYTI4NWExOTMxNzJjYzJkOSIsInN1YiI6IjY0YTg0ZGUwOWM5N2JkMDBhZGU5OWNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x6wA3r3IaV30vcsiYQBrUvuHxc8ByDuquBCTZG7iu5o"}},p=function(){var e=(0,n.Z)(u().mark((function e(){var t,r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/week",s);case 2:return t=e.sent,r=t.data,n=c(r),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?query=".concat(t),s);case 2:return r=e.sent,n=r.data,a=c(n),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t),s);case 2:return r=e.sent,n=r.data,a=o(n),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits"),s);case 2:return r=e.sent,n=r.data,a=n.cast.map((function(e){var t=e.character,r=e.credit_id,n=e.name,a=e.profile_path;return{character:t,credit_id:r,name:n,photo:"http://image.tmdb.org/t/p/w45".concat(a)}})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews"),s);case 2:return r=e.sent,n=r.data,a=n.results.map((function(e){return{author:e.author,content:e.content,id:e.id}})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=607.1d824474.chunk.js.map