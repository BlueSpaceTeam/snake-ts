!function(){"use strict";var e={950:function(e,t,o){var i=o(81),s=o.n(i),n=o(645),r=o.n(n)()(s());r.push([e.id,'body,dl,dd,ul,ol,h1,h2,h3,h4,h5,h6,pre,form,input,textarea,p,hr,thead,tbody,tfoot,th,td{margin:0;padding:0}ul,ol{list-style:none}html{-ms-text-size-adjust:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none}body{line-height:1.5;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}body,button,input,select,textarea{font-family:"PingFang SC","microsoft yahei"}.bold,b,strong{font-weight:bold}i,em{font-style:normal}table{border-collapse:collapse;border-spacing:0}table th,table td{border:1px solid #ddd;padding:5px}table th{font-weight:inherit;border-bottom-width:2px;border-bottom-color:#ccc}img{border:none;width:auto\\9 ;max-width:100%;vertical-align:top;display:block}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;vertical-align:baseline}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input:focus{outline:none}select[size],select[multiple],select[size][multiple]{border:1px solid #aaa;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video,progress{display:inline-block}input::-webkit-input-speech-button{display:none}button,input,textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}button{padding:0}button{background:rgba(0,0,0,0)}input{border:none;background:rgba(0,0,0,0)}a{text-decoration:none;outline:none;background:rgba(0,0,0,0)}a:link,a:visited,a:active,a:focus,a.active{outline:none;text-decoration:none}a.line{text-decoration:underline}.word-break{display:block;word-break:break-all}.word-wrap{display:block;word-wrap:break-word}.ellipsis{display:block;overflow:hidden;text-overflow:ellipsis;-o-text-overflow:ellipsis;-webkit-text-overflow:ellipsis;-moz-text-overflow:ellipsis;white-space:nowrap}.ellipsis-2{display:-webkit-box;overflow:hidden;word-break:break-all;-webkit-box-orient:vertical;-webkit-line-clamp:2}.clear:after{content:"";display:block;clear:both}.clear{zoom:1}',""]),t.Z=r},996:function(e,t,o){var i=o(81),s=o.n(i),n=o(645),r=o.n(n)()(s());r.push([e.id,".modal{display:none;pointer-events:none;background-color:rgba(0,0,0,0)}.modal .mask{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(33,33,33,.5);opacity:0;-webkit-transition:all .2s;transition:all .2s}.modal .mask.trans-show{opacity:1}.modal .main{overflow:hidden;position:absolute;top:50%;left:50%;width:300px;opacity:0;-webkit-transition:all .2s;transition:all .2s;border-radius:4px;background:#fff;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.modal .main.trans-show{opacity:1}.modal.show{z-index:999;display:block;position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:auto}.modal #title{-webkit-box-sizing:content-box;box-sizing:content-box;padding-top:10px;height:40px;line-height:40px;font-size:17px;text-align:center}.modal #content,.modal #sub-content{padding:0 20px;color:#757575}.modal #content{margin-top:12px;font-size:15px}.modal #sub-content{margin-top:12px;font-size:13px}.modal .operation{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:12px;border-top:1px solid #f4f5f6}.modal .btn{-webkit-box-flex:1;-ms-flex:1;flex:1;height:44px;border:none;background-color:#fff}.modal .btn-replay{color:#4c97f4}.modal .btn-reset{color:#b2b2b2}",""]),t.Z=r},212:function(e,t,o){var i=o(81),s=o.n(i),n=o(645),r=o.n(n)()(s());r.push([e.id,'body{overflow-x:hidden;overflow-y:hidden}.wrapper{margin:20px auto;padding:20px 20px 0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border:6px solid #000;background-color:#abcb9b;border-radius:20px}.wrapper header{margin:0 0 10px 0;text-align:center}.score-board{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:16px 0 24px;font-size:15px;font-family:"Pangolin","Comic Sans MS"}.score-board .row{-ms-flex-preferred-size:100%;flex-basis:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.score-board .row .item{max-width:48%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.score-board .row .item#timer{width:48%;text-align:right}#stage{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 auto;border:3px solid #000;position:relative}.section{position:absolute;padding:1px}.section .bone{-webkit-box-sizing:border-box;box-sizing:border-box;width:8px;height:8px;border:1px solid #000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.section .bone::before{content:"";width:4px;height:4px;background-color:#000}#snake,#food{position:absolute}#snake .section:first-child{-webkit-transform:rotate(90deg);transform:rotate(90deg)}#snake .section:first-child .bone{-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}#snake .section:first-child .bone::before,#snake .section:first-child .bone::after{content:"";width:2px;height:2px;background-color:#000}',""]),t.Z=r},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",i=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),i&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),i&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,i,s,n){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(r[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);i&&r[c[0]]||(void 0!==n&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=n),o&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=o):c[2]=o),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),t.push(c))}},t}},81:function(e){e.exports=function(e){return e[1]}},379:function(e){var t=[];function o(e){for(var o=-1,i=0;i<t.length;i++)if(t[i].identifier===e){o=i;break}return o}function i(e,i){for(var n={},r=[],a=0;a<e.length;a++){var l=e[a],d=i.base?l[0]+i.base:l[0],c=n[d]||0,h="".concat(d," ").concat(c);n[d]=c+1;var p=o(h),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var b=s(u,i);i.byIndex=a,t.splice(a,0,{identifier:h,updater:b,references:1})}r.push(h)}return r}function s(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,s){var n=i(e=e||[],s=s||{});return function(e){e=e||[];for(var r=0;r<n.length;r++){var a=o(n[r]);t[a].references--}for(var l=i(e,s),d=0;d<n.length;d++){var c=o(n[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}n=l}}},569:function(e){var t={};e.exports=function(e,o){var i=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(o)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,o){e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var i="";o.supports&&(i+="@supports (".concat(o.supports,") {")),o.media&&(i+="@media ".concat(o.media," {"));var s=void 0!==o.layer;s&&(i+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),i+=o.css,s&&(i+="}"),o.media&&(i+="}"),o.supports&&(i+="}");var n=o.sourceMap;n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(i){var s=t[i];if(void 0!==s)return s.exports;var n=t[i]={id:i,exports:{}};return e[i](n,n.exports,o),n.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){class e{constructor(){this.change=e=>{let t=10*Math.floor(320*Math.random()/10),o=10*Math.floor(320*Math.random()/10);for(let i=0;i<e.length;i++){let s=e[i];this.X===s.offsetLeft&&this.Y===s.offsetTop&&(t=10*Math.floor(320*Math.random()/10),o=10*Math.floor(320*Math.random()/10))}this.el.style.left=t+"px",this.el.style.top=o+"px"},this.el=document.getElementById("food")}get X(){return this.el.offsetLeft}get Y(){return this.el.offsetTop}}class t{constructor(){this.addBody=()=>{this.el.insertAdjacentHTML("beforeend",'<div class="section"><div class="bone"></div></div>')},this.moveBody=()=>{for(let e=this.bodies.length-1;e>0;e--){let t=this.bodies[e-1].offsetLeft,o=this.bodies[e-1].offsetTop;this.bodies[e].style.left=t+"px",this.bodies[e].style.top=o+"px"}},this.checkCollide=()=>{for(let e=1;e<this.bodies.length;e++){let t=this.bodies[e];if(this.X===t.offsetLeft&&this.Y===t.offsetTop)throw new Error("You bumped yourself!")}},this.el=document.getElementById("snake"),this.head=document.querySelector("#snake > div"),this.bodies=this.el.getElementsByClassName("section")}get X(){return this.head.offsetLeft}get Y(){return this.head.offsetTop}set X(e){if(this.X!==e){if(e<0||e>=320)throw new Error("You bumped the wall!");this.moveBody(),this.head.style.left=e+"px",this.checkCollide()}}set Y(e){if(this.Y!==e){if(e<0||e>=320)throw new Error("You bumped the wall!");this.moveBody(),this.head.style.top=e+"px",this.checkCollide()}}}class i{constructor(e=1,t=10){this._totalScore=0,this._level=0,this.elScore=document.getElementById("score"),this.elLevel=document.getElementById("level"),this.elBest=document.getElementById("best"),this.elTime=document.getElementById("timer"),this.timerHandler=()=>{this.second++,this.second>=60&&(this.second=0,this.minute++),this.minute>=60&&(this.minute=0,this.hour++),this.elTime.innerText=this.hour.toString().padStart(2,"0")+":"+this.minute.toString().padStart(2,"0")+":"+this.second.toString().padStart(2,"0")},this.timerStart=()=>{this.timer=window.setInterval(this.timerHandler,1e3)},this.timerStop=()=>{window.clearInterval(this.timer)},this.timerReset=()=>{window.clearInterval(this.timer),this.hour=this.minute=this.second=0,this.elTime.innerText="00:00:00"},this._maxLevel=t,this._speed=e,this.elTime.innerText="00:00:00",this.second=0,this.minute=0,this.hour=0,this.timer=0}get totalScore(){return this._totalScore}set totalScore(e){this._totalScore=e,this.elScore.innerText=e+"",this.handleLevelMap(e)}get level(){return this._level}set level(e){this.elLevel.innerText=e+"",this._level=e}get best(){return null===localStorage.getItem("best")?0:Number(localStorage.getItem("best"))}set best(e){localStorage.setItem("best",e+""),this.elBest.innerText=e+""}get time(){return null===localStorage.getItem("best")?0:Number(localStorage.getItem("best"))}set time(e){localStorage.setItem("best",e+""),this.elBest.innerText=e+""}handleLevelMap(e=0){const{_speed:t,_maxLevel:o}=this;for(let i=1;i<=o;i++)if(e<=i*t){this.level=i;break}}}class s{constructor(){this._show=!1,this.successFn=()=>{},this.elTitle=document.getElementById("title"),this.elContent=document.getElementById("content"),this.elSubContent=document.getElementById("sub-content"),this.elCancelBtn=document.getElementById("btn-cancel"),this.elReplayBtn=document.getElementById("btn-replay"),this.elModal=document.getElementById("modal"),this.elMask=document.getElementById("mask"),this.elMain=document.getElementById("main")}get show(){return this._show}set show(e){this._show=e,this.elModal.classList[e?"add":"remove"]("show"),this.elMask.classList[e?"add":"remove"]("trans-show"),this.elMain.classList[e?"add":"remove"]("trans-show")}showModal({title:e="",content:t="",subContent:o="",success:i=(e=>{}),fail:s=(e=>{})}={}){try{this.elTitle.innerText=e,this.elContent.innerText=t,this.elSubContent.innerText=o,this.successFn=e=>{this.hideModal(),i.call(this,e)},this.elCancelBtn.onclick=this.successFn.bind(this,"cancel"),this.elReplayBtn.onclick=this.successFn.bind(this,"replay"),this.show=!0}catch(e){s(e)}}hideModal(){this.show=!1}}var n=o(379),r=o.n(n),a=o(795),l=o.n(a),d=o(569),c=o.n(d),h=o(565),p=o.n(h),u=o(216),b=o.n(u),f=o(589),m=o.n(f),g=o(950),w={};w.styleTagTransform=m(),w.setAttributes=p(),w.insert=c().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=b(),r()(g.Z,w),g.Z&&g.Z.locals&&g.Z.locals;var x=o(212),y={};y.styleTagTransform=m(),y.setAttributes=p(),y.insert=c().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=b(),r()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals;var k=o(996),v={};v.styleTagTransform=m(),v.setAttributes=p(),v.insert=c().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=b(),r()(k.Z,v),k.Z&&k.Z.locals&&k.Z.locals,new class{constructor(){this.direction="ArrowRight",this.isGameOver=!1,this.init=()=>{const e=document.getElementById("stage");e.style.width="320px",e.style.height="320px",this.scoreBoard.elBest.innerText=this.scoreBoard.best+"",this.food.change(this.snake.bodies),document.addEventListener("keydown",this.keyboardHandler.bind(this)),this.startGame(),this.scoreBoard.timerStart()},this.keyboardHandler=e=>{if("ArrowUp"!==e.key&&"ArrowDown"!==e.key&&"ArrowLeft"!==e.key&&"ArrowRight"!==e.key)return;let t=!0;if(this.snake.bodies[1])switch(this.direction){case"ArrowUp":t="ArrowDown"!==e.key;break;case"ArrowDown":t="ArrowUp"!==e.key;break;case"ArrowLeft":t="ArrowRight"!==e.key;break;case"ArrowRight":t="ArrowLeft"!==e.key}!this.isGameOver&&t&&(this.direction=e.key,this.move())},this.move=()=>{let e=this.snake.X,t=this.snake.Y;switch(this.direction){case"ArrowUp":t-=10,this.snake.head.style.transform="rotate(0deg)";break;case"ArrowDown":t+=10,this.snake.head.style.transform="rotate(180deg)";break;case"ArrowLeft":e-=10,this.snake.head.style.transform="rotate(-90deg)";break;case"ArrowRight":e+=10,this.snake.head.style.transform="rotate(90deg)"}this.checkEat(e,t);try{this.snake.X=e,this.snake.Y=t}catch(e){this.isGameOver=!0,this.scoreBoard.timerStop(),this.modal.showModal({title:"[GAME OVER]",content:e.message,success:(e="")=>{"replay"===e&&this.replayHandler()},fail:e=>{console.error(e)}})}},this.startGame=()=>{this.move(),this.isGameOver?(window.clearTimeout(this.start),this.start=0):this.start=window.setTimeout(this.startGame.bind(this),500-50*(this.scoreBoard.level-1))},this.checkEat=(e,t)=>{e===this.food.X&&t===this.food.Y&&(this.food.change(this.snake.bodies),this.scoreBoard.totalScore++,this.snake.addBody(),this.scoreBoard.totalScore>this.scoreBoard.best&&(this.scoreBoard.best=this.scoreBoard.totalScore))},this.replayHandler=()=>{document.removeEventListener("keydown",this.keyboardHandler.bind(this)),window.clearTimeout(this.start),this.start=0,this.scoreBoard.timerReset(),this.snake.el.innerHTML='<div class="section"><div class="bone"></div></div>',this.direction="ArrowRight",this.snake.X=0,this.snake.Y=0,this.snake.head.style.transform="rotate(90deg)",this.isGameOver=!1,this.food=new e,this.snake=new t,this.scoreBoard.totalScore=0,this.scoreBoard.level=1,this.food.change(this.snake.bodies),document.addEventListener("keydown",this.keyboardHandler.bind(this)),this.startGame(),this.scoreBoard.timerStart()},this.food=new e,this.snake=new t,this.scoreBoard=new i,this.modal=new s,this.start=0,this.init()}}}()}();