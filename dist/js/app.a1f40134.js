(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-10763b8a":"b9711e7c","chunk-41df2c18":"015eb0e1","chunk-58909010":"20e60c6c","chunk-6dbe410a":"84468610","chunk-79685d62":"1598234b","chunk-7e93d050":"8cc5e0bb","chunk-9dfcdd52":"2490bec6","chunk-ccd02512":"9dfceda7","chunk-f2362a18":"4e814cc9"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-10763b8a":1,"chunk-41df2c18":1,"chunk-58909010":1,"chunk-6dbe410a":1,"chunk-79685d62":1,"chunk-7e93d050":1,"chunk-9dfcdd52":1,"chunk-ccd02512":1,"chunk-f2362a18":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-10763b8a":"4a088e06","chunk-41df2c18":"0acdce09","chunk-58909010":"fdece3f2","chunk-6dbe410a":"458217af","chunk-79685d62":"0b61a220","chunk-7e93d050":"4f6be24e","chunk-9dfcdd52":"9baaf477","chunk-ccd02512":"1c39a1c2","chunk-f2362a18":"2c8b2e3c"}[e]+".css",i=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}i[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"14ff":function(e,t,n){"use strict";var r=n("f02e"),a=n.n(r);a.a},2925:function(e,t,n){e.exports=n.p+"img/site_logo2.2e3ed501.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("4160"),n("d3b7"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("div",{staticClass:"left-section"},[r("router-link",{attrs:{to:{name:"main"}}},[r("img",{staticClass:"logo",attrs:{src:n("2925"),alt:"Site Logo"}})]),r("router-link",{attrs:{to:{name:"about"}}},[e._v("About")]),r("router-link",{attrs:{to:{name:"search"}}},[e._v("Search")]),e.isLoggedIn?r("router-link",{attrs:{to:{name:"createRecipe"}}},[e._v("Create Recipe")]):e._e(),e.isLoggedIn?r("div",{staticClass:"dropdown"},[r("button",{staticClass:"dropbtn"},[e._v("Personal ▼")]),r("div",{staticClass:"dropdown-content"},[r("router-link",{attrs:{to:{name:"favorites"}}},[e._v("Favorites")]),r("router-link",{attrs:{to:{name:"myRecipes"}}},[e._v("My Recipes")]),r("router-link",{attrs:{to:{name:"myFamilyRecipes"}}},[e._v("My Family Recipes")])],1)]):e._e()],1),r("div",{staticClass:"right-section"},[e.$root.store.username?r("span",[r("div",{staticClass:"dropdown"},[r("button",{staticClass:"dropbtn",on:{click:e.toggleDropdown}},[e._v(e._s(e.$root.store.username)+" ▼")]),e.showDropdown?r("div",{staticClass:"dropdown-content"},[r("span",{staticClass:"logout",on:{click:e.logout}},[e._v("Logout")])]):e._e()])]):r("span",[e._v(" Hello Guest: "),r("router-link",{attrs:{to:{name:"register"}}},[e._v("Register")]),r("router-link",{attrs:{to:{name:"login"}}},[e._v("Login")])],1)])]),r("router-view")],1)},i=[],o={name:"App",data:function(){return{showDropdown:!1}},computed:{isLoggedIn:function(){return Boolean(this.$root.store.username)}},methods:{toggleDropdown:function(){this.showDropdown=!this.showDropdown},logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},s=o,c=(n("5c0b"),n("2877")),u=Object(c["a"])(s,a,i,!1,null,null,null),l=u.exports,p=n("a7fe"),d=n.n(p),f=n("bc3a"),h=n.n(f),v=n("2b27"),m=n.n(v),g=n("5f5b"),b=n("b1e0"),k=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._m(0),r("div",{staticClass:"content"},[r("div",{staticClass:"row-item center-text"},[r("h2",{staticClass:"title"},[e._v("Take A Look ->")]),r("div",{staticClass:"reload"},[r("img",{staticClass:"reload-image",attrs:{src:n("7086"),alt:"Reload"},on:{click:e.showMoreRandomRecipes}})])]),r("div",{staticClass:"row"},[r("div",{staticClass:"row-item center-text"},[r("RecipePreviewList",{ref:"recipePreviewList",staticClass:"RandomRecipes",attrs:{title:"Random Recipes",serverPath:"/recipes/random"}})],1)]),e.isLoggedIn?r("div",[e._m(1),r("div",{staticClass:"row"},[r("div",{staticClass:"row-item center-text"},[r("RecipePreviewList",{class:{RandomRecipes:!0,blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",serverPath:"/recipes/lastWatched",disabled:""}})],1)])]):r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"row-item center-text"},[r("div",{staticClass:"sign-in-section"},[r("h2",[e._v("SIGN IN TO YOUR ACCOUNT:")]),r("router-link",{attrs:{to:{name:"login"}}},[e._v("SIGN IN")])],1),r("div",{staticClass:"sign-up-section"},[r("h2",[e._v("DON'T HAVE AN ACCOUNT YET?")]),r("router-link",{attrs:{to:{name:"register"}}},[e._v("SIGN UP")])],1)])])])])])}),w=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cover-image"},[r("img",{staticClass:"background-image",attrs:{src:n("c3c1"),alt:"Cooking Image"}}),r("div",{staticClass:"image-text-wrapper"},[r("h1",{staticClass:"image-text"},[e._v("COOK IT")]),r("div",{staticClass:"text-line-wrapper"},[r("p",{staticClass:"text-line"},[e._v("Explore Tasty and")]),r("p",{staticClass:"text-line"},[e._v("Easy Recipes")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row-item center-text"},[n("h2",[e._v("Recently Viewed:")])])}],_=(n("96cf"),n("1da1")),y=n("99d8"),C={components:{RecipePreviewList:y["a"]},computed:{isLoggedIn:function(){return Boolean(this.$root.store.username)}},methods:{showMoreRandomRecipes:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("clicked"),t.next=3,e.$refs.recipePreviewList.updateRecipes();case 3:case"end":return t.stop()}}),t)})))()}}},R=C,x=(n("14ff"),Object(c["a"])(R,k,w,!1,null,"5f2c93fa",null)),O=x.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Four Oh Four you didn't")]),n("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},P=[],j={},E=Object(c["a"])(j,I,P,!1,null,null,null),L=E.exports,$=[{path:"/",name:"main",component:O},{path:"/register",name:"register",component:function(){return n.e("chunk-7e93d050").then(n.bind(null,"eaff"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-ccd02512").then(n.bind(null,"62cc"))}},{path:"/search",name:"search",component:function(){return n.e("chunk-f2362a18").then(n.bind(null,"37906"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-9dfcdd52").then(n.bind(null,"478b"))}},{path:"/recipes/:recipeId",name:"recipe",component:function(){return n.e("chunk-41df2c18").then(n.bind(null,"6619"))}},{path:"/users/favorites",name:"favorites",component:function(){return n.e("chunk-6dbe410a").then(n.bind(null,"6ab5"))}},{path:"/users/myRecipes",name:"myRecipes",component:function(){return n.e("chunk-79685d62").then(n.bind(null,"fda7"))}},{path:"/users/myFamilyRecipes",name:"myFamilyRecipes",component:function(){return n.e("chunk-10763b8a").then(n.bind(null,"9d71"))}},{path:"/users/createRecipe",name:"createRecipe",component:function(){return n.e("chunk-58909010").then(n.bind(null,"3e91"))}},{path:"*",name:"notFound",component:L}],S=$,T=n("8c4f"),N=n("1dce"),F=n.n(N),A=n("1073"),M=n("cbd0"),D=n("b1fc"),V=n("7049"),G=n("a7e2"),U=n("f9bc"),q=n("44d4"),B=n("cca8"),H=n("51c2"),J=n("498a");r["default"].use(m.a),r["default"].use(g["a"]),r["default"].use(b["a"]),r["default"].use(T["a"]);var K=new T["a"]({routes:S});[A["a"],M["a"],D["a"],V["a"],G["a"],U["a"],q["a"],B["a"],H["a"],J["a"]].forEach((function(e){return r["default"].use(e)})),r["default"].use(F.a),h.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),h.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].use(d.a,h.a),r["default"].config.productionTip=!1,h.a.defaults.withCredentials=!0;var W={server_domain:"https://eden-raz.cs.bgu.ac.il",username:localStorage.username,login:function(e){localStorage.setItem("user_id",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("user_id"),this.username=void 0}};console.log(W),new r["default"]({router:K,data:function(){return{store:W}},methods:{toast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:n,solid:!0,appendToast:r,autoHideDelay:3e3})}},render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"6f30":function(e,t,n){e.exports=n.p+"img/glutenFree.e647fb92.png"},7086:function(e,t,n){e.exports=n.p+"img/reload.b18152f6.png"},"73ba":function(e,t,n){"use strict";var r=n("a949"),a=n.n(r);a.a},"74be":function(e,t,n){"use strict";var r=n("90fd"),a=n.n(r);a.a},"7bea":function(e,t,n){e.exports=n.p+"img/vegan.c370fe78.png"},"8dde":function(e,t,n){e.exports=n.p+"img/vegeterian.06a67a84.png"},"90fd":function(e,t,n){},"99d8":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-row",e._l(e.recipes,(function(t,r){return n("b-col",{key:t.id,attrs:{cols:"4"}},[n("RecipePreview",{staticClass:"recipe-preview",attrs:{recipe:t}}),(r+1)%3===0?n("br"):e._e()],1)})),1)],1)},a=[],i=(n("4e82"),n("2909")),o=(n("96cf"),n("1da1")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[n("div",{class:{"recipe-body":!0,watched:e.recipe.Watched}},[n("div",{staticClass:"image-container"},[n("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}}),n("span",{staticClass:"heart-icon",style:{opacity:e.recipe.is_favorite?1:.6},on:{click:function(t){return t.preventDefault(),e.toggleFavorite(t)}}})]),n("div",{staticClass:"recipe-content"},[n("h3",{staticClass:"recipe-title"},[e._v(e._s(e.recipe.title))]),n("ul",{staticClass:"recipe-info"},[n("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),n("li",[e._v(e._s(e.recipe.popularity)+" likes")]),n("li",[n("div",{staticClass:"icon-row"},[e.recipe.vegan?n("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:"Vegan",expression:"'Vegan'",modifiers:{hover:!0}}],staticClass:"icon",attrs:{src:e.veganIcon,alt:"Vegan"}}):e._e(),e.recipe.vegetarian?n("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:"Vegetarian",expression:"'Vegetarian'",modifiers:{hover:!0}}],staticClass:"icon",attrs:{src:e.vegetarianIcon,alt:"Vegetarian"}}):e._e(),e.recipe.glutenFree?n("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:"Gluten-free",expression:"'Gluten-free'",modifiers:{hover:!0}}],staticClass:"icon",attrs:{src:e.glutenFreeIcon,alt:"Gluten-free"}}):e._e()])])])])])])},c=[],u=n("7bea"),l=n.n(u),p=n("8dde"),d=n.n(p),f=n("6f30"),h=n.n(f),v={data:function(){return{veganIcon:l.a,vegetarianIcon:d.a,glutenFreeIcon:h.a}},props:{recipe:{type:Object,required:!0}},methods:{toggleFavorite:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.recipe.is_favorite){t.next=13;break}return t.prev=1,e.recipe.is_favorite=!0,n={recipeId:e.recipe.id},t.next=6,e.axios.post("".concat(e.$root.store.server_domain,"/users/favorites"),n);case 6:r=t.sent,console.log(r),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()}}},m=v,g=(n("73ba"),n("2877")),b=Object(g["a"])(m,s,c,!1,null,"4439f736",null),k=b.exports,w={name:"RecipePreviewList",components:{RecipePreview:k},props:{title:{type:String,required:!0},serverPath:{type:String,required:!0},sortOption:{type:String,default:""}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},watch:{serverPath:{immediate:!0,handler:function(){this.updateRecipes()}},sortOption:{immediate:!0,handler:function(){this.recipes.length>0&&this.sortRecipes()}}},methods:{updateRecipes:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+e.serverPath);case 3:r=t.sent,console.log(r),a=r.data,e.recipes=[],(n=e.recipes).push.apply(n,Object(i["a"])(a)),e.sortOption&&e.sortRecipes(),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},sortRecipes:function(){"readyInMinutes"===this.sortOption?this.recipes.sort((function(e,t){return e.readyInMinutes-t.readyInMinutes})):"popularity"===this.sortOption&&this.recipes.sort((function(e,t){return t.popularity-e.popularity}))}}},_=w,y=(n("74be"),Object(g["a"])(_,r,a,!1,null,"1c99b3ef",null));t["a"]=y.exports},"9c0c":function(e,t,n){},a949:function(e,t,n){},c3c1:function(e,t,n){e.exports=n.p+"img/cooking.24bf6956.jpg"},f02e:function(e,t,n){}});
//# sourceMappingURL=app.a1f40134.js.map