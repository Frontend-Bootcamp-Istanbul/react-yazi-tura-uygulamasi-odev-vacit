(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(t,e,n){t.exports=n.p+"static/media/1-lira-tura.7c42669a.png"},function(t,e,n){t.exports=n.p+"static/media/1-lira-yazi.9b70882e.png"},,,function(t,e,n){t.exports=n(19)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(2),r=n.n(i),c=(n(15),n(16),n(3)),s=n(4),u=n(8),l=n(5),m=n(9),d=(n(17),n(6)),C=n.n(d),h=n(7),p=n.n(h),f=function(t){return o.a.createElement("div",{className:"Coin-container"},o.a.createElement("div",{className:"Coin ".concat(t.donuyor?"Coin-rotate":"")},o.a.createElement("img",{src:C.a,className:"yazi"===t.side?"Coin-back":"Coin-front"}),o.a.createElement("img",{src:p.a,className:"yazi"===t.side?"Coin-front":"Coin-back"})))},y=(n(18),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).handleClick=function(){var t=n.state,e=t.yaziCount,a=t.turaCount,o=t.totalCount;n.setState({totalCount:o+1}),console.log(o),n.setState({donuyor:!0}),Math.random()>.5?n.setState({side:"yazi",yaziCount:e+1}):n.setState({side:"tura",turaCount:a+1}),setTimeout(function(){return n.setState({donuyor:!1})},1e3)},n.state={side:"tura",donuyor:!1,totalCount:0,turaCount:0,yaziCount:0},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"CoinFlipper"},o.a.createElement("h1",null,"Yaz\u0131 m\u0131 Tura m\u0131?"),o.a.createElement(f,{side:this.state.side,donuyor:this.state.donuyor}),o.a.createElement("button",{onClick:this.handleClick},"At!"),o.a.createElement("p",null,"Toplam",o.a.createElement("strong",null," ",this.state.totalCount," "),"at\u0131\u015ftan",o.a.createElement("strong",null," ",this.state.turaCount," "),"\xfc tura",o.a.createElement("strong",null," ",this.state.yaziCount," "),"si yaz\u0131 geldi."))}}]),e}(a.Component));var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.473e52c8.chunk.js.map