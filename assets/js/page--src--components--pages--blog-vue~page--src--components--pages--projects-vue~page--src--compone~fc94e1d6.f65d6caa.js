(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/KJm":function(t,e,s){"use strict";var n=s("lMML");s.n(n).a},"0BeB":function(t,e,s){"use strict";s("DswY"),s("391k");var n=s("Pf3K"),a={props:["data","i"],mounted:function(){this.$refs.richtext.querySelectorAll("img").forEach((function(t){t.addEventListener("click",(function(){n.a.$emit("lightbox:open",{src:t.attributes.src.value})}))}))}},o=(s("zmVg"),s("KHd+")),r=Object(o.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],ref:"richtext",staticClass:"richtext ck-content u-bottom-spacer-xxxl u-top-spacer-s",domProps:{innerHTML:this._s(this.data)}})])}),[],!1,null,"12e103e2",null).exports,i={props:["data"],methods:{lightBox:function(){n.a.$emit("lightbox:open",{src:this.data.media.url})}}},l=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.data.media.mime.startsWith("image")?s("g-image",{staticClass:"u-bottom-spacer-xxl",attrs:{alt:t.data.description,src:t.data.media.url},on:{click:t.lightBox}}):t._e(),s("p",{staticClass:"text-center text-lg italic mt-2"},[t._v(t._s(t.data.description))])],1)}),[],!1,null,null,null).exports,c={props:{url:{type:String}}},u=(s("Ib0R"),Object(o.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("iframe",{staticClass:"video u-bottom-spacer-xxxl",attrs:{type:"text/html",src:this.url,frameborder:"0"}})}),[],!1,null,null,null).exports),p={props:["data"],methods:{lightBox:function(){n.a.$emit("lightbox:open",{gallery:this.data.images})}}},g=(s("SX3k"),{props:["content"],components:{RichText:r,LargeMedia:l,Slider:Object(o.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slider"},[s("div",{staticClass:"slider__gallery"},t._l(t.data.images,(function(e){return s("div",{key:e.id,staticClass:"slider__img",style:"background: url("+e.url+") center center / cover no-repeat",on:{click:t.lightBox}})})),0)])}),[],!1,null,"2d72da04",null).exports,VideoEmbed:u}}),m=Object(o.a)(g,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},t._l(t.content,(function(e,n){return s("div",{key:e.__typename+e.id},["strapiTypes_ComponentSectionsRichText"===e.__typename?s("div",[s("RichText",{attrs:{data:e.content,i:n}})],1):t._e(),"strapiTypes_ComponentSectionsLargeMedia"===e.__typename?s("div",[s("LargeMedia",{attrs:{data:e}})],1):t._e(),"strapiTypes_ComponentSectionsImagesSlider"===e.__typename?s("div",[s("Slider",{attrs:{data:e}})],1):t._e(),"strapiTypes_ComponentSectionsVideoEmbed"===e.__typename?s("div",[s("VideoEmbed",{attrs:{url:e.url}})],1):t._e()])})),0)}),[],!1,null,null,null);e.a=m.exports},"1aTI":function(t,e,s){"use strict";s("DswY"),s("AgY1"),s("391k");var n=s("0BeB"),a=s("+D4n"),o=s("x5Ec"),r=s("Lzg5"),i=s("7fLu"),l=s("u9z2"),c={props:{url:{type:String},title:{type:String}},components:{FacebookButton:a.a,TwitterButton:o.a,RedditButton:r.a,WhatsAppButton:i.a,LinkedInButton:l.a}},u=(s("e7h8"),s("KHd+")),p=Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social u-top-spacer-s"},[e("span",{staticClass:"u-right-spacer-xs"},[this._v("Share:")]),e("facebook-button",{staticClass:"share-btn u-right-spacer-xxs",attrs:{description:this.title,btnText:""}}),e("twitter-button",{staticClass:"share-btn u-right-spacer-xxs",attrs:{description:this.title,btnText:""}}),e("reddit-button",{staticClass:"share-btn u-right-spacer-xxs",attrs:{description:this.title,btnText:""}}),e("linked-in-button",{staticClass:"share-btn u-right-spacer-xxs",attrs:{description:this.title,btnText:""}}),e("whats-app-button",{staticClass:"share-btn u-right-spacer-xxs",attrs:{description:this.title,btnText:""}})],1)}),[],!1,null,"646a5c62",null).exports,g=s("G93c"),m={name:"tags",props:{tags:{type:Array},fullPost:{type:Boolean}}},d=(s("GapL"),Object(u.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tags"},[t.fullPost?s("span",{staticClass:"u-right-spacer-s"},[t._v("Tags:")]):t._e(),t._l(t.tags,(function(e){return s("span",{key:e.id,staticClass:"u-right-spacer-xs u-bottom-spacer-xs"},[s("g-link",{staticClass:"tags__tag",attrs:{to:"/blog/tags/"+e.slug}},[t._v("\n      "+t._s(e.name)+"\n    ")])],1)}))],2)}),[],!1,null,"020b3cf6",null).exports),f={props:{fullPost:{type:Boolean},date:{type:String},postType:{type:String},readingTime:{type:String},tags:{type:Array}},components:{Tags:d}},_=Object(u.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post__meta"},[s("span",{staticClass:"post__date u-right-spacer-m u-top-spacer-s"},[s("font-awesome",{staticClass:"u-right-spacer-xxs",attrs:{icon:"post"==t.postType?["far","calendar"]:"history"}}),"post"==t.postType?s("span",[t._v(t._s(t._f("moment")(t.date,"MMM Do, YYYY")))]):s("span",[t._v("From: "+t._s(t._f("moment")(t.date,"YYYY")))])],1),s("span",{staticClass:"post_read-time u-right-spacer-m u-top-spacer-s"},[s("font-awesome",{staticClass:"u-right-spacer-xxs",attrs:{icon:"hourglass-half"}}),t._v("\n    "+t._s(t.readingTime)+"\n  ")],1),t.fullPost||"post"!=t.postType?t._e():s("Tags",{class:["u-top-spacer-s",{"u-top-spacer-xxl":t.fullPost}],attrs:{tags:t.tags,fullPost:t.fullPost}})],1)}),[],!1,null,null,null).exports,h={props:{content:{type:Object},type:{type:String},i:{type:Number},fullPost:{type:Boolean}},components:{Content:n.a,Share:p,Button:g.a,PostMeta:_},data:function(){return{hoverToggle:!1,accents:"",currentUrl:""}},mounted:function(){this.currentUrl=window.location.pathname},methods:{hoverAll:function(){this.hoverToggle=!0},leaveAll:function(){this.hoverToggle=!1},totalContent:function(){var t="";return this.content.content.forEach((function(e){t+=e.content})),t},imgFormat:function(){var t=this.content.coverImage;return t.formats.large||t.formats.medium?t.formats.large.url:t.url}}},v=(s("/KJm"),Object(u.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{class:["post","u-top-spacer-xxxl",{"post--full":t.fullPost,"post--project":"project"==t.type}]},[t.fullPost?s("div",{staticClass:"post__full-img u-bottom-spacer-m",style:"background:url("+t.content.coverImage.url+") center center / cover no-repeat;"}):t._e(),s("div",{class:t.fullPost?"wrap wrap--slim":"post__info"},[s(t.fullPost?"h1":"h2",{tag:"component",class:["post__heading",{"u-bottom-spacer-s":t.fullPost,"u-bottom-spacer-s":!t.fullPost}]},[t.fullPost?s("span",[t._v("\n          "+t._s(t.content.title)+"\n        ")]):s("g-link",{ref:"h-_ink",class:{hovered:t.hoverToggle},attrs:{to:"post"===t.type?"blog/"+t.content.slug:"projects/"+t.content.slug},nativeOn:{mouseover:function(e){return t.hoverAll(e)},mouseleave:function(e){return t.leaveAll(e)}}},[t._v("\n          "+t._s(t.content.title)+"\n        ")])],1),t.fullPost?t._e():s("p",{staticClass:"post__description"},[t._v("\n        "+t._s(t._f("truncate")(t.content.description,150))+"\n      ")]),t.content.date?s("PostMeta",{attrs:{"reading-time":t.$readingTime(t.totalContent()).text,"full-Post":t.fullPost,"post-type":t.type,date:t.content.date,tags:t.content.tags}}):t._e(),t.fullPost?t._e():s("Button",{ref:"cta_link",class:["post__link u-top-spacer-xs",{hovered:t.hoverToggle}],attrs:{label:"post"==t.type?"Read post":"View project",href:t.content.slug,icon:"arrow-right"},nativeOn:{mouseover:function(e){return t.hoverAll(e)},mouseleave:function(e){return t.leaveAll(e)}}}),t.fullPost?s("Content",{staticClass:"post__content-area u-top-spacer-xxl",attrs:{content:t.content.content}}):t._e()],1),t.fullPost?t._e():s("g-link",{ref:"img_link",class:[{hovered:t.hoverToggle},"post__img grid__e-f"],style:"background: url("+t.imgFormat()+") center center / cover no-repeat",attrs:{to:"post"===t.type?"blog/"+t.content.slug:"projects/"+t.content.slug},nativeOn:{mouseover:function(e){return t.hoverAll(e)},mouseleave:function(e){return t.leaveAll(e)}}})],1)}),[],!1,null,"99d2aaa0",null));e.a=v.exports},"40qj":function(t,e,s){},BRJv:function(t,e,s){},ElpU:function(t,e,s){"use strict";function n(t,e,s){return[{key:"twitter:card",name:"twitter:card",content:"summary_large_image"},{key:"og:title",property:"og:title",content:t},{key:"twitter:title",name:"twitter:title",content:t},{key:"og:description",property:"og:description",content:e},{key:"twitter:description",name:"twitter:description",content:e},{key:"og:image",property:"og:image",content:s},{key:"twitter:image",name:"twitter:image",content:s}]}s.d(e,"a",(function(){return n}))},GapL:function(t,e,s){"use strict";var n=s("suEM");s.n(n).a},Ib0R:function(t,e,s){"use strict";var n=s("QuVb");s.n(n).a},QuVb:function(t,e,s){},SX3k:function(t,e,s){"use strict";var n=s("xtzY");s.n(n).a},e7h8:function(t,e,s){"use strict";var n=s("BRJv");s.n(n).a},lMML:function(t,e,s){},suEM:function(t,e,s){},xtzY:function(t,e,s){},zmVg:function(t,e,s){"use strict";var n=s("40qj");s.n(n).a}}]);