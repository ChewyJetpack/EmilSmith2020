(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{DFu2:function(t,e,a){"use strict";a.r(e);a("pol5"),a("IjEv");var i=a("yYJ4"),n=a("lIGg"),r=a("ElpU"),s={methods:{getStrapiMedia:n.a},components:{ListingPage:i.a},metaInfo:function(){var t=this.$page.strapi.portfolio.seo,e=t.title,a=t.description,i=t.shareImage,s=Object(n.a)(i.url);return{title:e,meta:Object(r.a)(e,a,s)}}},o=a("KHd+"),c=null,l=Object(o.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("ListingPage",{attrs:{title:this.$page.strapi.portfolio.title,items:this.$page.strapi.projects,type:"project"}})}),[],!1,null,"62c23493",null);"function"==typeof c&&c(l);e.default=l.exports},yYJ4:function(t,e,a){"use strict";var i=a("1aTI"),n=a("0BeB"),r=a("G93c"),s={props:{title:{type:String},items:{type:Array},type:{type:String},backTo:{type:[String,Boolean],default:!1},backLabel:{type:String,default:"Go back"}},components:{PostCard:i.a,Content:n.a,Button:r.a}},o=a("KHd+"),c=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page u-top-spacer-xxxl"},[a("div",{staticClass:"wrap"},[a("h1",[t._v(t._s(t.title))]),t.backTo?a("Button",{staticClass:"back-btn u-top-spacer-m",attrs:{label:t.backLabel,href:t.backTo,icon:"arrow-left","ico-left":""}}):t._e(),t._l(t.items,(function(e,i){return a("PostCard",{key:e.id,attrs:{content:e,i:i,type:t.type,img:"large"}})}))],2)])}),[],!1,null,"60cefcf7",null);e.a=c.exports}}]);