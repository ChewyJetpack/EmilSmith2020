(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{woOP:function(t,e,a){"use strict";a.r(e);a("pol5"),a("IjEv");var s=a("yYJ4"),i=a("lIGg"),n=a("ElpU"),o={methods:{getStrapiMedia:i.a},components:{ListingPage:s.a},metaInfo:function(){var t=this.$page.strapi.blog.seo,e=t.title,a=t.description,s=t.shareImage,o=Object(i.a)(s.url);return{title:e,meta:Object(n.a)(e,a,o)}}},r=a("KHd+"),l=null,c=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("ListingPage",{attrs:{title:this.$page.strapi.blog.title,items:this.$page.strapi.posts,type:"post"}})}),[],!1,null,"01bd104e",null);"function"==typeof l&&l(c);e.default=c.exports},yYJ4:function(t,e,a){"use strict";var s=a("1aTI"),i=a("0BeB"),n=a("G93c"),o={props:{title:{type:String},items:{type:Array},type:{type:String},backTo:{type:[String,Boolean],default:!1},backLabel:{type:String,default:"Go back"}},components:{PostCard:s.a,Content:i.a,Button:n.a}},r=a("KHd+"),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page u-top-spacer-xxxl"},[a("div",{staticClass:"wrap"},[a("h1",[t._v(t._s(t.title))]),t.backTo?a("Button",{staticClass:"back-btn u-top-spacer-m",attrs:{label:t.backLabel,href:t.backTo,icon:"arrow-left","ico-left":""}}):t._e(),t._l(t.items,(function(e,s){return a("PostCard",{key:e.id,attrs:{content:e,i:s,type:t.type,img:"large"}})}))],2)])}),[],!1,null,"60cefcf7",null);e.a=l.exports}}]);