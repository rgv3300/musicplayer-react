(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),r=c.n(a),i=c(11),s=c.n(i),o=c(5),l=c(9),u=c.n(l),b=c(12),p=c(3),d=c(6),j=c(4),h=function(e){var t=e.setCurrentSong,c=e.songs,r=e.currentSong,i=e.setIsPlaying,s=e.isPlaying,l=e.setSongs,h=Object(a.useRef)(null),g=function(e){var t=c.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{active:!0}):Object(p.a)(Object(p.a)({},t),{},{active:!1})}));l(t)},f=function(){var e=Object(b.a)(u.a.mark((function e(n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=c.findIndex((function(e){return e.id===r.id})),"skip-forward"!==n){e.next=5;break}return e.next=4,t(c[(a+1)%c.length]);case 4:g(c[(a+1)%c.length]);case 5:if("skip-back"!==n){e.next=12;break}if((a-1)%c.length!==-1){e.next=10;break}return t(c[c.length-1]),g(c[c.length-1]),e.abrupt("return");case 10:t(c[(a-1)%c.length]),g(c[(a-1)%c.length]);case 12:s&&h.current.play();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.target.currentTime,c=e.target.duration;y(Object(p.a)(Object(p.a)({},S),{},{currentTime:t,duration:c}))},O=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},v=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),x=Object(o.a)(v,2),S=x[0],y=x[1];return Object(n.jsxs)("div",{className:"player",children:[Object(n.jsxs)("div",{className:"time-control",children:[Object(n.jsx)("p",{children:O(S.currentTime)}),Object(n.jsx)("input",{onChange:function(e){h.current.currentTime=e.target.value,y(Object(p.a)(Object(p.a)({},S),{},{currentTime:e.target.value}))},min:0,max:S.duration||0,value:S.currentTime,type:"range"}),Object(n.jsx)("p",{children:O(S.duration)})]}),Object(n.jsxs)("div",{className:"play-control",children:[Object(n.jsx)(d.a,{className:"skip-back",size:"2x",icon:j.a,onClick:function(){return f("skip-back")}}),Object(n.jsx)(d.a,{className:"play",onClick:function(){s?(h.current.pause(),i(!s)):(h.current.play(),i(!s))},size:"2x",icon:s?j.d:j.e}),Object(n.jsx)(d.a,{className:"skip-forward",size:"2x",icon:j.b,onClick:function(){return f("skip-forward")}})]}),Object(n.jsx)("audio",{ref:h,onLoadedData:function(){s&&h.current.play()},onTimeUpdate:m,onLoadedMetadata:m,src:r.audio,onEnded:function(){return f("skip-forward")}})]})},g=function(e){var t=e.currentSong;return Object(n.jsxs)("div",{className:"song-container",children:[Object(n.jsx)("img",{src:t.cover,alt:t.name}),Object(n.jsx)("h2",{children:t.name}),Object(n.jsx)("h3",{children:t.artist})]})},f=(c(24),c(27));var m=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(f.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(f.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(f.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(f.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(f.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(f.a)(),active:!1}]},O=function(e){var t=e.song,c=e.songs,a=e.setCurrentSong,r=e.id,i=e.setSongs;return Object(n.jsxs)("div",{onClick:function(){a(t);var e=c.map((function(e){return e.id===r?Object(p.a)(Object(p.a)({},e),{},{active:!0}):Object(p.a)(Object(p.a)({},e),{},{active:!1})}));i(e)},className:"library-song ".concat(t.active?"selected":""),children:[Object(n.jsx)("img",{src:t.cover,alt:t.name}),Object(n.jsxs)("div",{className:"song-description",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("h4",{children:t.artist})]})]})},v=function(e){var t=e.songs,c=e.setCurrentSong,a=(e.id,e.setSongs),r=e.libraryStatus;return Object(n.jsxs)("div",{className:"library ".concat(r?"active-library":""),children:[Object(n.jsx)("h2",{children:"Library"}),Object(n.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(n.jsx)(O,{setSongs:a,id:e.id,songs:t,song:e,setCurrentSong:c},e.id)}))})]})},x=function(e){var t=e.libraryStatus,c=e.setLibraryStatus;return Object(n.jsxs)("nav",{children:[Object(n.jsx)("h1",{children:"Waves"}),Object(n.jsxs)("button",{onClick:function(){return c(!t)},children:["Libary",Object(n.jsx)(d.a,{icon:j.c})]})]})};var S=function(){var e=Object(a.useState)(m()),t=Object(o.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)(c[0]),s=Object(o.a)(i,2),l=s[0],u=s[1],b=Object(a.useState)(!1),p=Object(o.a)(b,2),d=p[0],j=p[1],f=Object(a.useState)(!1),O=Object(o.a)(f,2),S=O[0],y=O[1];return Object(n.jsxs)("div",{className:"App ".concat(S?"library-active":""),children:[Object(n.jsx)(x,{libraryStatus:S,setLibraryStatus:y}),Object(n.jsx)(g,{currentSong:l,isPlaying:d}),Object(n.jsx)(h,{isPlaying:d,setIsPlaying:j,currentSong:l,songs:c,setCurrentSong:u,setSongs:r}),Object(n.jsx)(v,{libraryStatus:S,songs:c,currentSong:l,setCurrentSong:u,setSongs:r})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),y()}},[[25,1,2]]]);
//# sourceMappingURL=main.e1d10215.chunk.js.map