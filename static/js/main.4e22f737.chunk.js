(this.webpackJsonpmusique=this.webpackJsonpmusique||[]).push([[0],{67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(39),i=s.n(n),a=s(57),r=(s(67),s(8)),o=(s(68),s(69),function(){return window.location.hash.substring(1).split("&").reduce((function(e,t){var s=t.split("=");return e[s[0]]=decodeURIComponent(s[1]),e}),{})});console.log(o());var l="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("8fff83ff78804c4ab477ceb760c12f89","&redirect_uri=").concat("https://bhavya-sehgal.github.io/MUSIQUE/#/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"),j=s(0);var u=function(){return Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("img",{src:"/musique-logo.png",alt:""}),Object(j.jsx)("a",{href:l,children:"LOGIN VIA SPOTIFY"})]})},d=s(40),b=s.n(d),O=(s(71),s(72),s(29)),f=s.n(O),h=s(108),p=Object(c.createContext)(),_=function(e){var t=e.initialState,s=e.reducer,n=e.children;return Object(j.jsx)(p.Provider,{value:Object(c.useReducer)(s,t),children:n})},m=function(){return Object(c.useContext)(p)};var x=function(){var e,t=m(),s=Object(r.a)(t,1)[0].user;return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"header__left",children:[Object(j.jsx)(f.a,{}),Object(j.jsx)("input",{placeholder:"Search for Artists, Songs, or Podcasts ",type:"text"})]}),Object(j.jsxs)("div",{className:"header__right",children:[Object(j.jsx)(h.a,{src:null===s||void 0===s||null===(e=s.images[0])||void 0===e?void 0:e.url,alt:null===s||void 0===s?void 0:s.display_name,sx:{width:40,height:40}}),Object(j.jsx)("h4",{children:null===s||void 0===s?void 0:s.display_name})]})]})},y=(s(77),s(43)),v=s.n(y),g=s(44),S=s.n(g),T=s(45),N=s.n(T);s(78);var E=function(e){var t=e.track;return Object(j.jsxs)("div",{className:"songRow",children:[Object(j.jsx)("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),Object(j.jsxs)("div",{className:"songRow__info",children:[Object(j.jsx)("h1",{children:t.name}),Object(j.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name]})]})]})};var k=function(e){var t=e.spotify,s=m(),c=Object(r.a)(s,1)[0].discover_weekly;return Object(j.jsxs)("div",{className:"body",children:[Object(j.jsx)(x,{spotify:t}),Object(j.jsxs)("div",{className:"body__info",children:[Object(j.jsx)("img",{src:null===c||void 0===c?void 0:c.images[0].url,alt:""}),Object(j.jsxs)("div",{className:"body__infoText",children:[Object(j.jsx)("strong",{children:"PLAYLIST"}),Object(j.jsx)("h2",{children:"Discover Weekly"}),Object(j.jsx)("p",{children:null===c||void 0===c?void 0:c.description})]})]}),Object(j.jsxs)("div",{className:"body__songs",children:[Object(j.jsxs)("div",{className:"body__icons",children:[Object(j.jsx)(v.a,{className:"body__shuffle"}),Object(j.jsx)(S.a,{fontSize:"large"}),Object(j.jsx)(N.a,{})]}),null===c||void 0===c?void 0:c.tracks.items.map((function(e){return Object(j.jsx)(E,{track:e.track})}))]})]})},I=(s(79),s(49)),w=s.n(I),P=s(48),L=s.n(P),A=s(50),Y=s.n(A),C=s(47),R=s.n(C),M=s(46),G=s.n(M),U=s(51),z=s.n(U),K=s(52),W=s.n(K),q=s(53),V=s.n(q),B=s(106),D=s(105);var F=function(e){var t=e.spotify,s=m(),n=Object(r.a)(s,2),i=n[0],a=i.item,o=i.playing,l=n[1];Object(c.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){console.log(e),l({type:"SET_PLAYING",playing:e.is_playing}),l({type:"SET_ITEM",item:e.item})}))}),[t]);var u=function(){o?(t.pause(),l({type:"SET_PLAYING",playing:!1})):(t.play(),l({type:"SET_PLAYING",playing:!0}))};return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsxs)("div",{className:"footer__left",children:[Object(j.jsx)("img",{className:"footer__albumLogo",src:null===a||void 0===a?void 0:a.album.images[0].url,alt:null===a||void 0===a?void 0:a.name}),a?Object(j.jsxs)("div",{className:"footer__songInfo",children:[Object(j.jsx)("h4",{children:a.name}),Object(j.jsx)("p",{children:a.artists.map((function(e){return e.name})).join(", ")})]}):Object(j.jsxs)("div",{className:"footer__songInfo",children:[Object(j.jsx)("h4",{children:"No song is playing"}),Object(j.jsx)("p",{children:"..."})]})]}),Object(j.jsxs)("div",{className:"footer__center",children:[Object(j.jsx)(G.a,{className:"footer__green"}),Object(j.jsx)(R.a,{onClick:function(){t.skipToNext(),t.getMyCurrentPlayingTrack().then((function(e){l({type:"SET_ITEM",item:e.item}),l({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),o?Object(j.jsx)(L.a,{onClick:u,fontSize:"large",className:"footer__icon"}):Object(j.jsx)(w.a,{onClick:u,fontSize:"large",className:"footer__icon"}),Object(j.jsx)(Y.a,{onClick:function(){t.skipToPrevious(),t.getMyCurrentPlayingTrack().then((function(e){l({type:"SET_ITEM",item:e.item}),l({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),Object(j.jsx)(z.a,{className:"footer__green"})]}),Object(j.jsx)("div",{className:"footer__right",children:Object(j.jsxs)(B.a,{container:!0,spacing:2,children:[Object(j.jsx)(B.a,{item:!0,children:Object(j.jsx)(W.a,{})}),Object(j.jsx)(B.a,{item:!0,children:Object(j.jsx)(V.a,{})}),Object(j.jsx)(B.a,{item:!0,xs:!0,children:Object(j.jsx)(D.a,{size:"small",defaultValue:40,"aria-labelledby":"continuous-slider"})})]})})]})};s(80),s(81);var J=function(e){var t=e.title,s=e.Icon;return Object(j.jsxs)("div",{className:"sidebarOption",children:[s&&Object(j.jsx)(s,{className:"sidebarOption__icon"}),s?Object(j.jsx)("h4",{children:t}):Object(j.jsx)("p",{children:t})]})},H=s(54),Q=s.n(H),X=s(55),Z=s.n(X);var $=function(){var e,t=m(),s=Object(r.a)(t,1)[0].playlists;return Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsx)("img",{className:"sidebar__logo",src:"/musique-logo.png",alt:""}),Object(j.jsx)(J,{title:"Home",Icon:Q.a}),Object(j.jsx)(J,{title:"Search",Icon:f.a}),Object(j.jsx)(J,{title:"Your Library",Icon:Z.a}),Object(j.jsx)("br",{}),Object(j.jsx)("strong",{className:"sidebar__title",children:"PLAYLISTS"}),Object(j.jsx)("hr",{}),null===s||void 0===s||null===(e=s.items)||void 0===e?void 0:e.map((function(e){return Object(j.jsx)(J,{title:e.name})}))]})};var ee=function(e){var t=e.spotify;return Object(j.jsxs)("div",{className:"player",children:[Object(j.jsxs)("div",{className:"player__body",children:[Object(j.jsx)($,{}),Object(j.jsx)(k,{spotify:t})]}),Object(j.jsx)(F,{spotify:t})]})},te=new b.a;var se=function(){var e=m(),t=Object(r.a)(e,2),s=t[0],n=s.user,i=s.token,a=t[1];return Object(c.useEffect)((function(){var e=o();window.location.hash="";var t=e.access_token;t&&(te.setAccessToken(t),a({type:"SET_TOKEN",token:t}),te.getMe().then((function(e){a({type:"SET_USER",user:e})})),te.getUserPlaylists().then((function(e){a({type:"SET_PLAYLISTS",playlists:e})})),te.getPlaylist("6ehdSiG3d2TinBXr1r7ZK0").then((function(e){a({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})),te.getMyTopArtists().then((function(e){return a({type:"SET_TOP_ARTISTS",top_artists:e})})),a({type:"SET_SPOTIFY",spotify:te}))}),[n,i,a]),Object(j.jsx)("div",{className:"app",children:i?Object(j.jsx)(ee,{spotify:te}):Object(j.jsx)(u,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=s(14),ne=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(ce.a)(Object(ce.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(ce.a)(Object(ce.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(ce.a)(Object(ce.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(ce.a)(Object(ce.a)({},e),{},{discover_weekly:t.discover_weekly});case"SET_PLAYING":return Object(ce.a)(Object(ce.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(ce.a)(Object(ce.a)({},e),{},{item:t.item});case"SET_TOP_ARTISTS":return Object(ce.a)(Object(ce.a)({},e),{},{top_artists:t.top_artists});case"SET_SPOTIFY":return Object(ce.a)(Object(ce.a)({},e),{},{spotify:t.spotify});default:return e}};i.a.render(Object(j.jsx)(a.a,{children:Object(j.jsx)(_,{initialState:{user:null,playlists:[],spotify:null,discover_weekly:null,top_artists:null,playing:!1,item:null},reducer:ne,children:Object(j.jsx)(se,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[85,1,2]]]);
//# sourceMappingURL=main.4e22f737.chunk.js.map