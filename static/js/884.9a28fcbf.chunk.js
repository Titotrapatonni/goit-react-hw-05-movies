"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,n,t){t.r(n);var r=t(439),c=t(791),i=t(689),o=t(87),a=t(221),u=t(184);n.default=function(){var e,n,t=(0,i.UO)().movieId,s=(0,c.useState)({}),d=(0,r.Z)(s,2),l=d[0],h=d[1],f=null!==(e=null===(n=(0,i.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,c.useEffect)((function(){(0,a.IM)(t).then((function(e){return h(e)}))}),[t]),(0,u.jsxs)("div",{children:[(0,u.jsx)(o.rU,{to:f,children:"Back to collection"}),l.poster_path&&(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(l.poster_path),alt:"movie poster",width:"240"}),(0,u.jsx)("h2",{children:l.title}),(0,u.jsxs)("p",{children:["User Score: ",l.vote_average]}),(0,u.jsx)("h3",{children:"Overview:"}),(0,u.jsx)("p",{children:l.overview}),(0,u.jsx)("h3",{children:"Genres: "}),l.genres&&(0,u.jsx)("p",{children:l.genres.map((function(e){return e.name})).join(", ")}),(0,u.jsx)("h3",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(o.OL,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.OL,{to:"reviews",children:"Reviews"})}),(0,u.jsx)(i.j3,{})]})]})}},221:function(e,n,t){t.d(n,{Df:function(){return o},IM:function(){return a},gH:function(){return d},tx:function(){return s},zv:function(){return u}});var r=t(243),c="cf74a053caf2f13dcb273d105945eeb6",i="https://api.themoviedb.org/3",o=function(){return(0,r.Z)("".concat(i,"/trending/movie/day?api_key=").concat(c)).then((function(e){return e.data.results}))},a=function(e){return(0,r.Z)("".concat(i,"/movie/").concat(e,"?api_key=").concat(c)).then((function(e){return e.data}))},u=function(e){return(0,r.Z)("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(c)).then((function(e){return e.data.cast}))},s=function(e){return(0,r.Z)("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(c)).then((function(e){return e.data.results}))},d=function(e){return(0,r.Z)("".concat(i,"/search/movie?api_key=").concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false")).then((function(e){return e.data.results}))}}}]);
//# sourceMappingURL=884.9a28fcbf.chunk.js.map