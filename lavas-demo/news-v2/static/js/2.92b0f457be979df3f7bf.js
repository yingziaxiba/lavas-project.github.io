webpackJsonp([2],{477:function(t,e,n){function s(t){n(515)}var i=n(32)(n(534),n(505),s,"data-v-1bb11718",null);t.exports=i.exports},479:function(t,e,n){e=t.exports=n(471)(!0),e.push([t.i,".news-item[data-v-f308632c]{display:block;font-size:16px;padding:10px;line-height:16px;border-bottom:1px solid #eee;position:relative}.news-item.item-enter-active[data-v-f308632c]{transition:all .5s}.news-item .news-content[data-v-f308632c]{display:inline-block;width:100%;overflow:hidden}.news-item .news-content .list-item-title[data-v-f308632c]{font-size:16px;line-height:24px;color:#333;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;overflow:hidden;-webkit-box-orient:vertical}.news-item .news-content .posts[data-v-f308632c]{margin-top:5px}.news-item .news-content .posts span[data-v-f308632c]{display:inline-block;margin-right:2%;max-height:111px;width:32%}.news-item .news-content .posts span img[data-v-f308632c]{width:100%;display:inline-block}.news-item .news-content .posts span[data-v-f308632c]:last-child{margin-right:0}.news-item .news-content .some-icons[data-v-f308632c]{color:#ccc;margin-right:3%;margin-top:3px;font-size:12px}.news-item .news-content .some-icons .icons[data-v-f308632c]{float:right}.news-item .img-first .right-part[data-v-f308632c]{width:66%;float:right;padding-left:10px}.news-item .img-first .posts[data-v-f308632c]{width:34%;display:inline-block}.news-item .img-first .posts span[data-v-f308632c],.news-item .img-first .posts span img[data-v-f308632c]{width:100%}","",{version:3,sources:["/Users/fake/work/lavas-project/lavas-demo-news/src/components/NewsItem.vue"],names:[],mappings:"AACA,4BACE,cAAe,AACf,eAAgB,AAChB,aAAc,AACd,iBAAkB,AAClB,6BAA8B,AAC9B,iBAAmB,CACpB,AACD,8CACE,kBAAqB,CACtB,AACD,0CACE,qBAAsB,AACtB,WAAY,AACZ,eAAiB,CAClB,AACD,2DACE,eAAgB,AAChB,iBAAkB,AAClB,WAAY,AACZ,uBAAwB,AACxB,oBAAqB,AACrB,qBAAsB,AACtB,gBAAiB,AACjB,2BAA6B,CAC9B,AACD,iDACE,cAAgB,CACjB,AACD,sDACE,qBAAsB,AACtB,gBAAiB,AACjB,iBAAkB,AAClB,SAAW,CACZ,AACD,0DACE,WAAY,AACZ,oBAAsB,CACvB,AACD,iEACE,cAAgB,CACjB,AACD,sDACE,WAAY,AACZ,gBAAiB,AACjB,eAAgB,AAChB,cAAgB,CACjB,AACD,6DACE,WAAa,CACd,AACD,mDACE,UAAW,AACX,YAAa,AACb,iBAAmB,CACpB,AACD,8CACE,UAAW,AACX,oBAAsB,CACvB,AAID,0GACE,UAAY,CACb",file:"NewsItem.vue",sourcesContent:["\n.news-item[data-v-f308632c] {\n  display: block;\n  font-size: 16px;\n  padding: 10px;\n  line-height: 16px;\n  border-bottom: 1px solid #eee;\n  position: relative;\n}\n.news-item.item-enter-active[data-v-f308632c] {\n  transition: all 0.5s;\n}\n.news-item .news-content[data-v-f308632c] {\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n}\n.news-item .news-content .list-item-title[data-v-f308632c] {\n  font-size: 16px;\n  line-height: 24px;\n  color: #333;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n}\n.news-item .news-content .posts[data-v-f308632c] {\n  margin-top: 5px;\n}\n.news-item .news-content .posts span[data-v-f308632c] {\n  display: inline-block;\n  margin-right: 2%;\n  max-height: 111px;\n  width: 32%;\n}\n.news-item .news-content .posts span img[data-v-f308632c] {\n  width: 100%;\n  display: inline-block;\n}\n.news-item .news-content .posts span[data-v-f308632c]:last-child {\n  margin-right: 0;\n}\n.news-item .news-content .some-icons[data-v-f308632c] {\n  color: #ccc;\n  margin-right: 3%;\n  margin-top: 3px;\n  font-size: 12px;\n}\n.news-item .news-content .some-icons .icons[data-v-f308632c] {\n  float: right;\n}\n.news-item .img-first .right-part[data-v-f308632c] {\n  width: 66%;\n  float: right;\n  padding-left: 10px;\n}\n.news-item .img-first .posts[data-v-f308632c] {\n  width: 34%;\n  display: inline-block;\n}\n.news-item .img-first .posts span[data-v-f308632c] {\n  width: 100%;\n}\n.news-item .img-first .posts span img[data-v-f308632c] {\n  width: 100%;\n}"],sourceRoot:""}])},480:function(t,e,n){function s(t){n(482)}var i=n(32)(n(483),n(481),s,"data-v-f308632c",null);t.exports=i.exports},481:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"news-item",attrs:{to:"/detail/"+t.newsItem.nid}},[t.newsItem.imageurls&&1===t.newsItem.imageurls.length?n("div",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"grey--text"},expression:"{class: 'grey--text'}"}],staticClass:"img-first news-content"},[t.newsItem.imageurls.length?n("div",{staticClass:"posts"},t._l(t.newsItem.imageurls,function(t){return n("span",[n("img",{attrs:{src:t.url,alt:""}})])})):t._e(),t._v(" "),n("div",{staticClass:"right-part"},[n("div",{staticClass:"list-item-title"},[t._v(t._s(t.newsItem.title))]),t._v(" "),n("div",{staticClass:"some-icons"},[n("span",{staticClass:"update-time"},[t._v(t._s(t.newsItem.show))]),t._v(" "),n("span",{staticClass:"icons"},[t._v(t._s(t.newsItem.site))])])])]):t._e(),t._v(" "),t.newsItem.imageurls&&1!==t.newsItem.imageurls.length?n("div",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"grey--text"},expression:"{class: 'grey--text'}"}],staticClass:"title-first news-content"},[n("div",{staticClass:"list-item-title"},[t._v(t._s(t.newsItem.title))]),t._v(" "),t.newsItem.imageurls.length?n("div",{staticClass:"posts"},t._l(t.newsItem.imageurls,function(t,e){return n("span",[n("img",{attrs:{src:t.url,alt:"","data-index":e}})])})):t._e(),t._v(" "),n("div",{staticClass:"some-icons"},[n("span",{staticClass:"update-time"},[t._v(t._s(t.newsItem.show))]),t._v(" "),n("span",{staticClass:"icons"},[t._v(t._s(t.newsItem.site))])])]):t._e()])},staticRenderFns:[]}},482:function(t,e,n){var s=n(479);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(472)("8891264a",s,!0)},483:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"news-item",props:["newsItem"],data:function(){return{}}}},490:function(t,e,n){e=t.exports=n(471)(!0),e.push([t.i,"header[data-v-1bb11718]{display:flex;align-items:center;height:52px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12);position:fixed;top:0;background:#fff}form[data-v-1bb11718]{flex:1}.search-input[data-v-1bb11718]{width:100%;outline:none;font-size:16px;height:50px}.search-btn[data-v-1bb11718]{color:#959595}.search-content[data-v-1bb11718]{margin-top:52px}.search-loading[data-v-1bb11718]{margin-top:30%;display:flex;justify-content:center}li[data-v-1bb11718]{list-style-type:none}","",{version:3,sources:["/Users/fake/work/lavas-project/lavas-demo-news/src/pages/Search.vue"],names:[],mappings:"AACA,wBACE,aAAc,AACd,mBAAoB,AACpB,YAAa,AACb,8FAAoG,AACpG,eAAgB,AAChB,MAAO,AACP,eAAiB,CAClB,AACD,sBACE,MAAQ,CACT,AACD,+BACE,WAAY,AACZ,aAAc,AACd,eAAgB,AAChB,WAAa,CACd,AACD,6BACE,aAAe,CAChB,AACD,iCACE,eAAiB,CAClB,AACD,iCACE,eAAgB,AAChB,aAAc,AACd,sBAAwB,CACzB,AACD,oBACE,oBAAsB,CACvB",file:"Search.vue",sourcesContent:["\nheader[data-v-1bb11718] {\n  display: flex;\n  align-items: center;\n  height: 52px;\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n  position: fixed;\n  top: 0;\n  background: #fff;\n}\nform[data-v-1bb11718] {\n  flex: 1;\n}\n.search-input[data-v-1bb11718] {\n  width: 100%;\n  outline: none;\n  font-size: 16px;\n  height: 50px;\n}\n.search-btn[data-v-1bb11718] {\n  color: #959595;\n}\n.search-content[data-v-1bb11718] {\n  margin-top: 52px;\n}\n.search-loading[data-v-1bb11718] {\n  margin-top: 30%;\n  display: flex;\n  justify-content: center;\n}\nli[data-v-1bb11718] {\n  list-style-type: none;\n}"],sourceRoot:""}])},505:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-search-page"},[n("header",[n("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){t.clearAndGo(e)}}},[n("v-icon",{staticClass:"search-icon"},[t._v("arrow_back")])],1),t._v(" "),n("form",{on:{submit:function(e){e.preventDefault(),t.search(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"input",staticClass:"search-input",attrs:{type:"search",autocomplete:"off",placeholder:"请输入搜索词",autocapitalize:"off"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t._v(" "),n("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){t.query=""}}},[n("v-icon",{staticClass:"search-icon"},[t._v("close")])],1)],1),t._v(" "),t.loading?n("div",{staticClass:"search-loading"},[n("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",size:40}})],1):t._e(),t._v(" "),t.result&&t.result.length?n("div",{staticClass:"search-content"},t._l(t.result,function(t,e){return n("news-item",{key:t.nid,attrs:{newsItem:t,"data-index":e}})})):t._e()])},staticRenderFns:[]}},515:function(t,e,n){var s=n(490);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(472)("2817bc63",s,!0)},534:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(61),i=n.n(s),a=n(60),o=n.n(a),r=n(47),A=n.n(r),c=n(46),l=n(480),p=n.n(l);e.default={name:"search",data:function(){return{query:"",loading:!1,data:[]}},components:{NewsItem:p.a},computed:A()({},n.i(c.a)({result:function(t){return t.search.result}})),methods:{search:function(){var t=this;return o()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.$refs.input.blur(),e.next=4,t.$store.dispatch("query",t.query);case 4:t.loading=!1;case 5:case"end":return e.stop()}},e,t)}))()},clearAndGo:function(){this.$router.go(-1),this.query=""}},activated:function(){this.$store.dispatch("appShell/appHeader/setAppHeader",{show:!1})}}}});
//# sourceMappingURL=2.92b0f457be979df3f7bf.js.map