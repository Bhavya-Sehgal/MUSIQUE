(this.webpackJsonpmusique=this.webpackJsonpmusique||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(34),a=n.n(i),r=(n(61),n(8)),o=(n(62),n(63),encodeURIComponent("https://bhavya-sehgal.github.io/MUSIQUE/")),l=function(){return window.location.hash.substring(1).split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e}),{})};console.log(l());var j="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("8fff83ff78804c4ab477ceb760c12f89","&redirect_uri=").concat(o,"&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"),u=n.p+"static/media/musique-logo.ba593430.png",d=n(0);var b=function(){return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)("img",{src:u,alt:""}),Object(d.jsx)("a",{href:j,children:"LOGIN VIA SPOTIFY"})]})},O=n(35),p=n.n(O),f=(n(65),n(66),n(28)),y=n.n(f),h=n(101),_=Object(c.createContext)(),m=function(e){var t=e.reducer,n=e.initialState,s=e.children;return Object(d.jsx)(_.Provider,{value:Object(c.useReducer)(t,n),children:s})},x=function(){return Object(c.useContext)(_)};var v=function(){var e,t=x(),n=Object(r.a)(t,1)[0].user;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{className:"header__left",children:[Object(d.jsx)(y.a,{}),Object(d.jsx)("input",{placeholder:"Search for Artists, Songs, or Podcasts ",type:"text"})]}),Object(d.jsxs)("div",{className:"header__right",children:[Object(d.jsx)(h.a,{src:null===n||void 0===n||null===(e=n.images[0])||void 0===e?void 0:e.url,alt:null===n||void 0===n?void 0:n.display_name,sx:{width:40,height:40}}),Object(d.jsx)("h4",{children:null===n||void 0===n?void 0:n.display_name})]})]})},g=(n(72),n(39)),S=n.n(g),T=n(40),E=n.n(T),N=n(41),k=n.n(N);n(73);var I=function(e){var t=e.track,n=e.playSong;return Object(d.jsxs)("div",{className:"songRow",onClick:function(){return n(t.id)},children:[Object(d.jsx)("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),Object(d.jsxs)("div",{className:"songRow__info",children:[Object(d.jsx)("h1",{children:t.name}),Object(d.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name]})]})]})};var P=function(e){var t=e.spotify,n=x(),c=Object(r.a)(n,2),s=c[0].discover_weekly,i=c[1],a=function(e){t.play({uris:["spotify:track:".concat(e)]}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){i({type:"SET_ITEM",item:e.item}),i({type:"SET_PLAYING",playing:!0})}))}))};return Object(d.jsxs)("div",{className:"body",children:[Object(d.jsx)(v,{spotify:t}),Object(d.jsxs)("div",{className:"body__info",children:[Object(d.jsx)("img",{src:null===s||void 0===s?void 0:s.images[0].url,alt:""}),Object(d.jsxs)("div",{className:"body__infoText",children:[Object(d.jsx)("strong",{children:"PLAYLIST"}),Object(d.jsx)("h2",{children:"Discover Weekly"}),Object(d.jsx)("p",{children:null===s||void 0===s?void 0:s.description})]})]}),Object(d.jsxs)("div",{className:"body__songs",children:[Object(d.jsxs)("div",{className:"body__icons",children:[Object(d.jsx)(S.a,{className:"body__shuffle",onClick:function(){t.play({context_uri:"spotify:playlist:37i9dQZEVXcJZyENOWUFo7"}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){i({type:"SET_ITEM",item:e.item}),i({type:"SET_PLAYING",playing:!0})}))}))}}),Object(d.jsx)(E.a,{fontSize:"large"}),Object(d.jsx)(k.a,{})]}),null===s||void 0===s?void 0:s.tracks.items.map((function(e){return Object(d.jsx)(I,{playSong:a,track:e.track})}))]})]})},w=(n(74),n(45)),L=n.n(w),A=n(44),Y=n.n(A),C=n(46),M=n.n(C),R=n(43),G=n.n(R),U=n(42),W=n.n(U),z=n(47),K=n.n(z),V=n(48),F=n.n(V),q=n(49),B=n.n(q),D=n(99),J=n(98);var Z=function(e){var t=e.spotify,n=x(),s=Object(r.a)(n,2),i=s[0],a=i.item,o=i.playing,l=s[1];Object(c.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){console.log(e),l({type:"SET_PLAYING",playing:e.is_playing}),l({type:"SET_ITEM",item:e.item})}))}),[l,t]);var j=function(){o?(t.pause(),l({type:"SET_PLAYING",playing:!1})):(t.play(),l({type:"SET_PLAYING",playing:!0}))};return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsxs)("div",{className:"footer__left",children:[Object(d.jsx)("img",{className:"footer__albumLogo",src:null===a||void 0===a?void 0:a.album.images[0].url,alt:null===a||void 0===a?void 0:a.name}),a?Object(d.jsxs)("div",{className:"footer__songInfo",children:[Object(d.jsx)("h4",{children:a.name}),Object(d.jsx)("p",{children:a.artists.map((function(e){return e.name})).join(", ")})]}):Object(d.jsxs)("div",{className:"footer__songInfo",children:[Object(d.jsx)("h4",{children:"No song is playing"}),Object(d.jsx)("p",{children:"..."})]})]}),Object(d.jsxs)("div",{className:"footer__center",children:[Object(d.jsx)(W.a,{className:"footer__green"}),Object(d.jsx)(G.a,{onClick:function(){t.skipToNext(),t.getMyCurrentPlayingTrack().then((function(e){l({type:"SET_ITEM",item:e.item}),l({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),o?Object(d.jsx)(Y.a,{onClick:j,fontSize:"large",className:"footer__icon"}):Object(d.jsx)(L.a,{onClick:j,fontSize:"large",className:"footer__icon"}),Object(d.jsx)(M.a,{onClick:function(){t.skipToPrevious(),t.getMyCurrentPlayingTrack().then((function(e){l({type:"SET_ITEM",item:e.item}),l({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),Object(d.jsx)(K.a,{className:"footer__green"})]}),Object(d.jsx)("div",{className:"footer__right",children:Object(d.jsxs)(D.a,{container:!0,spacing:2,children:[Object(d.jsx)(D.a,{item:!0,children:Object(d.jsx)(F.a,{})}),Object(d.jsx)(D.a,{item:!0,children:Object(d.jsx)(B.a,{})}),Object(d.jsx)(D.a,{item:!0,xs:!0,children:Object(d.jsx)(J.a,{size:"small",defaultValue:40,"aria-labelledby":"continuous-slider"})})]})})]})};n(75),n(76);var Q=function(e){var t=e.title,n=e.Icon;return Object(d.jsxs)("div",{className:"sidebarOption",children:[n&&Object(d.jsx)(n,{className:"sidebarOption__icon"}),n?Object(d.jsx)("h4",{children:t}):Object(d.jsx)("p",{children:t})]})},X=n(50),H=n.n(X),$=n(51),ee=n.n($);var te=function(){var e,t=x(),n=Object(r.a)(t,1)[0].playlists;return Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("img",{className:"sidebar__logo",src:u,alt:""}),Object(d.jsx)(Q,{title:"Home",Icon:H.a}),Object(d.jsx)(Q,{title:"Search",Icon:y.a}),Object(d.jsx)(Q,{title:"Your Library",Icon:ee.a}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{className:"sidebar__title",children:"PLAYLISTS"}),Object(d.jsx)("hr",{}),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return Object(d.jsx)(Q,{title:e.name})}))]})};var ne=function(e){var t=e.spotify;return Object(d.jsxs)("div",{className:"player",children:[Object(d.jsxs)("div",{className:"player__body",children:[Object(d.jsx)(te,{}),Object(d.jsx)(P,{spotify:t})]}),Object(d.jsx)(Z,{spotify:t})]})},ce=new p.a;var se=function(){var e=x(),t=Object(r.a)(e,2),n=t[0],s=n.user,i=n.token,a=t[1];return Object(c.useEffect)((function(){var e=l();window.location.hash="";var t=e.access_token;t&&(ce.setAccessToken(t),a({type:"SET_TOKEN",token:t}),ce.getMe().then((function(e){a({type:"SET_USER",user:e})})),ce.getUserPlaylists().then((function(e){a({type:"SET_PLAYLISTS",playlists:e})})),ce.getPlaylist("6ehdSiG3d2TinBXr1r7ZK0").then((function(e){a({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})),ce.getMyTopArtists().then((function(e){return a({type:"SET_TOP_ARTISTS",top_artists:e})})),a({type:"SET_SPOTIFY",spotify:ce}))}),[s,i,a]),Object(d.jsx)("div",{className:"app",children:i?Object(d.jsx)(ne,{spotify:ce}):Object(d.jsx)(b,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=n(14),ae=function(e,t){switch(t.type){case"SET_USER":return Object(ie.a)(Object(ie.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(ie.a)(Object(ie.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(ie.a)(Object(ie.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(ie.a)(Object(ie.a)({},e),{},{discover_weekly:t.discover_weekly});case"SET_PLAYING":return Object(ie.a)(Object(ie.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(ie.a)(Object(ie.a)({},e),{},{item:t.item});case"SET_TOP_ARTISTS":return Object(ie.a)(Object(ie.a)({},e),{},{top_artists:t.top_artists});case"SET_SPOTIFY":return Object(ie.a)(Object(ie.a)({},e),{},{spotify:t.spotify});default:return e}};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{initialState:{user:null,playlists:[],spotify:null,discover_weekly:null,top_artists:null,playing:!1,item:null},reducer:ae,children:Object(d.jsx)(se,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[78,1,2]]]);
//# sourceMappingURL=main.09472b12.chunk.js.map