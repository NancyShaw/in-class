(function(t){function e(e){for(var s,r,l=e[0],o=e[1],c=e[2],u=0,p=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);v&&v(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(s=!1)}s&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},n={app:0},i=[];function r(t){return l.p+"js/"+({about:"about",shop:"shop"}[t]||t)+"."+{about:"3ad8e7c7",shop:"972adea8"}[t]+".js"}function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=r(t);var c=new Error;i=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",c.name="ChunkLoadError",c.type=s,c.request=i,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var v=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0cf4":function(t,e,a){},"1f81":function(t,e,a){"use strict";a("0cf4")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("myNav"),a("div",{staticClass:"container"},[a("router-view")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar container is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[t._m(0),a("a",{staticClass:"navbar-burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(e){e.preventDefault(),t.isActive=!t.isActive}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/MyWall"}},[t._v("My Wall")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/Documentation"}},[t._v("Documentation")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v(" More ")]),a("div",{staticClass:"navbar-dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v(" About ")]),a("a",{staticClass:"navbar-item",attrs:{href:"jobs.html"}},[t._v(" Jobs ")]),a("a",{staticClass:"navbar-item"},[t._v(" Contact ")]),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[t._v(" Report an issue ")])],1)])],1),a("div",{staticClass:"navbar-end"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/Shop"}},[t._v("Shop")]),a("div",{staticClass:"navbar-item"},[a("login-badge")],1)],1)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-item",attrs:{href:"/"}},[a("i",{staticClass:"fab fa-instagram fa-3x fa-fw"}),t._v(" Ista-Gratitude ")])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.Session.user?a("div",[t._v(" Hello John Doe ("),a("a",{on:{click:t.logout}},[t._v(" logout ")]),t._v(") ")]):a("div",{staticClass:"buttons"},[t._m(0),a("a",{staticClass:"button is-light"},[t._v(" Log in ")])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button is-primary"},[a("strong",[t._v("Sign up")])])}],u={user:null,message:[]},v={data:function(){return{Session:u}},methods:{login:function(){this.Session.user={name:"John Doe"}},logout:function(){this.Session.user=null}}},p=v,d=a("2877"),m=Object(d["a"])(p,o,c,!1,null,null,null),f=m.exports,h={data:function(){return{isActive:!1}},components:{LoginBadge:f}},_=h,b=Object(d["a"])(_,r,l,!1,null,null,null),g=b.exports,C={components:{myNav:g}},w=C,k=Object(d["a"])(w,n,i,!1,null,null,null),y=k.exports,P=(a("d3b7"),a("8c4f")),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),s("h1",[t._v(" Hi this is new awesome code")]),s("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},x=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],O={name:"HelloWorld",props:{msg:String}},S=O,D=(a("be74"),Object(d["a"])(S,E,$,!1,null,"75d5f541",null)),A=D.exports,H={name:"Home",components:{HelloWorld:A}},L=H,M=Object(d["a"])(L,j,x,!1,null,null,null),N=M.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Doc"},[a("h1",{staticClass:"title is-1"},[t._v("Super exciting Documentation!!!")])])}],W={},z=W,J=Object(d["a"])(z,F,T,!1,null,null,null),q=J.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"my-wall"}},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-quarter"},[a("div",{staticClass:"content-item"},[a("FriendsShort")],1)]),a("div",{staticClass:"column"},[a("div",{staticClass:"content-item"},[a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addPost(e)}}},[a("div",{staticClass:"field is-horizontal"},[t._m(0),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("p",{staticClass:"control is-expanded has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.user.name,expression:"newPost.user.name"}],staticClass:"input",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.newPost.user.name},on:{input:function(e){e.target.composing||t.$set(t.newPost.user,"name",e.target.value)}}}),t._m(1)])]),a("div",{staticClass:"field"},[a("p",{staticClass:"control is-expanded has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.user.handle,expression:"newPost.user.handle"}],staticClass:"input",attrs:{type:"text",placeholder:"Socialmedia handle"},domProps:{value:t.newPost.user.handle},on:{input:function(e){e.target.composing||t.$set(t.newPost.user,"handle",e.target.value)}}}),t._m(2),t._m(3)])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(4),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.src,expression:"newPost.src"}],staticClass:"input",attrs:{type:"text",placeholder:"http://google.com"},domProps:{value:t.newPost.src},on:{input:function(e){e.target.composing||t.$set(t.newPost,"src",e.target.value)}}})]),a("p",{staticClass:"help is-danger"},[t._v(" This field is required ")])])])]),a("div",{staticClass:"field is-horizontal"},[t._m(5),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPost.caption,expression:"newPost.caption"}],staticClass:"textarea",attrs:{placeholder:"Share exciting thoughts in text form!"},domProps:{value:t.newPost.caption},on:{input:function(e){e.target.composing||t.$set(t.newPost,"caption",e.target.value)}}})])])])]),t._m(6)])])])])]),t._l(t.posts,(function(t,e){return a("div",{key:e,staticClass:"content-item"},[a("ContentCard",{attrs:{post:t}})],1)}))],2),a("div",{staticClass:"column is-one-quarter"},[a("pre",[t._v("                "),a("div",{staticClass:"content-item"},[t._v("\n                "),a("ContentCard",{attrs:{post:t.newPost}}),t._v("\n                  ")],1),t._v("\n            ")])])])])},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v("Owner")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v("Picture URL")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-normal"},[a("label",{staticClass:"label"},[t._v("Caption")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field is-horizontal"},[a("div",{staticClass:"field-label"}),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary"},[t._v(" Post ")])])])])])}],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-48x48"},[a("img",{attrs:{src:t.post.user.pic,alt:t.post.user.name}})])]),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v(t._s(t.post.user.name))]),a("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.post.user.handle))])])])]),a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:t.post.src,alt:t.post.alt}})])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[t._v(" "+t._s(t.post.caption)+" "),a("time",{attrs:{datetime:t.post.time}})])])])},V=[],B={props:{post:Object}},U=B,Y=Object(d["a"])(U,G,V,!1,null,null,null),K=Y.exports,Q={data:function(){return{newPost:{user:{}},posts:[{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder image",caption:"Make it so",time:Date(),user:{name:"Captain Picard",handle:"@johnsmith",pic:"https://bulma.io/images/placeholders/96x96.png"}},{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder image",caption:"Running test simulations on the Holodeck",time:Date(),user:{name:"Geordi LaForge",handle:"@johnsmith",pic:"https://bulma.io/images/placeholders/96x96.png"}},{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder image",caption:"Live long and prosper",time:Date(),user:{name:"Spock",handle:"@johnsmith",pic:"https://bulma.io/images/placeholders/96x96.png"}}]}},components:{ContentCard:K},methods:{addPost:function(){this.posts.unshift(this.newPost),this.newPost={user:{}}}}},X=Q,Z=(a("1f81"),Object(d["a"])(X,I,R,!1,null,null,null)),tt=Z.exports;s["a"].use(P["a"]);var et=[{path:"/",name:"Home",component:N},{path:"/documentation",name:"Doc",component:q},{path:"/mywall",name:"MyWall",component:tt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/shop",name:"Shop",component:function(){return a.e("shop").then(a.bind(null,"0fa5"))}}],at=new P["a"]({mode:"history",base:"/",routes:et}),st=at,nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"panel is-primary"},[a("p",{staticClass:"panel-heading"},[t._v(" Friends ")]),a("p",{staticClass:"panel-tabs"},[a("a",{staticClass:"is-active"},[t._v("All")]),a("a",[t._v("Public")]),a("a",[t._v("Private")]),a("a",[t._v("Sources")]),a("a",[t._v("Forks")])]),a("div",{staticClass:"panel-block"},[a("p",{staticClass:"control has-icons-left"},[a("input",{staticClass:"input is-primary",attrs:{type:"text",placeholder:"Search"}}),a("span",{staticClass:"icon is-left"},[a("i",{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}})])])]),a("a",{staticClass:"panel-block is-active"},[a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})]),t._v(" bulma ")]),a("a",{staticClass:"panel-block"},[a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})]),t._v(" marksheet ")]),a("a",{staticClass:"panel-block"},[a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})]),t._v(" minireset.css ")]),a("a",{staticClass:"panel-block"},[a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})]),t._v(" jgthms.github.io ")])])}],rt={},lt=rt,ot=Object(d["a"])(lt,nt,it,!1,null,null,null),ct=ot.exports;a("6597"),a("5abe"),a("15f5"),a("dc44");s["a"].component("FriendsShort",ct),s["a"].config.productionTip=!1,new s["a"]({router:st,render:function(t){return t(y)}}).$mount("#app")},be74:function(t,e,a){"use strict";a("edc9")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},dc44:function(t,e,a){},edc9:function(t,e,a){}});
//# sourceMappingURL=app.811c85ee.js.map