(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1817425f"],{37906:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Search Page")]),r("div",{staticClass:"search-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"text",placeholder:"Enter your search query"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),r("button",{on:{click:e.search}},[e._v("Search")])]),r("div",{staticClass:"options"},[r("label",{attrs:{for:"results-num"}},[e._v("Number of Results:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.results_num,expression:"results_num"}],attrs:{id:"results-num"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.results_num=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"5"}},[e._v("5")]),r("option",{attrs:{value:"10"}},[e._v("10")]),r("option",{attrs:{value:"15"}},[e._v("15")])]),r("label",{attrs:{for:"cuisine"}},[e._v("Cuisine:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.cuisine,expression:"cuisine"}],attrs:{id:"cuisine"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.cuisine=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[e._v("All")]),e._l(e.cuisines,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2),r("label",{attrs:{for:"diet"}},[e._v("Diet:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.diet,expression:"diet"}],attrs:{id:"diet"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.diet=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[e._v("All")]),e._l(e.diets,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2),r("label",{attrs:{for:"intolerance"}},[e._v("Intolerance:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.intolerance,expression:"intolerance"}],attrs:{id:"intolerance"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.intolerance=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[e._v("None")]),e._l(e.intolerances,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]),e.showResults?r("RecipePreviewList",{staticClass:"result-list",attrs:{title:e.searchQuery,serverPath:e.serverPath}}):e._e()],1)},a=[],i=(r("99af"),r("99d8")),s={components:{RecipePreviewList:i["a"]},data:function(){return{searchQuery:"",showResults:!1,serverPath:"",results_num:"",cuisine:"",diet:"",intolerance:"",cuisines:["Italian","Mexican","Chinese","Indian","French"],diets:["Vegan","Vegetarian","Paleo","Ketogenic"],intolerances:["Dairy","Gluten","Peanut","Soy"]}},methods:{search:function(){this.serverPath="",this.serverPath="/recipes/search?query="+this.searchQuery;var e={cuisine:this.cuisine,diet:this.diet,intolerance:this.intolerance,results_num:this.results_num};for(var t in e)e[t]&&(this.serverPath+="&".concat(t,"=").concat(e[t]));this.showResults=!0,this.searchQuery="",this.cuisine="",this.diet="",this.intolerance="",this.results_num=""}}},o=s,l=r("2877"),u=Object(l["a"])(o,n,a,!1,null,null,null);t["default"]=u.exports},"99af":function(e,t,r){"use strict";var n=r("23e7"),a=r("d039"),i=r("e8b5"),s=r("861d"),o=r("7b0b"),l=r("50c4"),u=r("8418"),c=r("65f0"),v=r("1dde"),d=r("b622"),p=r("2d00"),h=d("isConcatSpreadable"),m=9007199254740991,f="Maximum allowed index exceeded",_=p>=51||!a((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),y=v("concat"),g=function(e){if(!s(e))return!1;var t=e[h];return void 0!==t?!!t:i(e)},w=!_||!y;n({target:"Array",proto:!0,forced:w},{concat:function(e){var t,r,n,a,i,s=o(this),v=c(s,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(i=-1===t?s:arguments[t],g(i)){if(a=l(i.length),d+a>m)throw TypeError(f);for(r=0;r<a;r++,d++)r in i&&u(v,d,i[r])}else{if(d>=m)throw TypeError(f);u(v,d++,i)}return v.length=d,v}})}}]);
//# sourceMappingURL=chunk-1817425f.982cb4cf.js.map