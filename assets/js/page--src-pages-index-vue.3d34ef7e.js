(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{JTJg:function(t,e,r){"use strict";var o=r("I+eb"),s=r("WjRb"),n=r("HYAF");o({target:"String",proto:!0,forced:!r("qxPZ")("includes")},{includes:function(t){return!!~String(n(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},T63A:function(t,e,r){var o=r("I+eb"),s=r("b1O7").entries;o({target:"Object",stat:!0},{entries:function(t){return s(t)}})},TeQF:function(t,e,r){"use strict";var o=r("I+eb"),s=r("tycR").filter,n=r("Hd5f"),i=r("rkAj"),a=n("filter"),c=i("filter");o({target:"Array",proto:!0,forced:!a||!c},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},ToJy:function(t,e,r){"use strict";var o=r("I+eb"),s=r("HAuM"),n=r("ewvW"),i=r("0Dky"),a=r("pkCn"),c=[],l=c.sort,u=i((function(){c.sort(void 0)})),d=i((function(){c.sort(null)})),f=a("sort");o({target:"Array",proto:!0,forced:u||!d||!f},{sort:function(t){return void 0===t?l.call(n(this)):l.call(n(this),s(t))}})},aK7f:function(t,e,r){},b1O7:function(t,e,r){var o=r("g6v/"),s=r("33Wh"),n=r("/GqU"),i=r("0eef").f,a=function(t){return function(e){for(var r,a=n(e),c=s(a),l=c.length,u=0,d=[];l>u;)r=c[u++],o&&!i.call(a,r)||d.push(t?[r,a[r]]:a[r]);return d}};t.exports={entries:a(!0),values:a(!1)}},gEGz:function(t,e,r){"use strict";var o=r("aK7f");r.n(o).a},iyQ6:function(t,e,r){"use strict";r.r(e);r("TeQF"),r("yq1k"),r("2B1R"),r("ToJy"),r("T63A"),r("rB9j"),r("JTJg"),r("hByQ"),r("LKBx");var o=r("ODXe"),s={mixins:[r("x9sl").mixin],metaInfo:{title:"Home"},methods:{fetchData:function(){var t=this;this.$page.songs.edges.map((function(e){var r=e.node;r.videos.length>0?r.hasVideo=!0:r.hasVideo=!1,r.recordings.length>0?(r.recordingtype="Demos",r.recordings.map((function(t){t.multitrack&&(r.recordingtype="Recordings")}))):0==r.recordings.length&&0==r.hasVideo&&(r.recordingtype="Drafts"),t.songData.push(r),t.songData.sort((function(t,e){return t.title.localeCompare(e.title)}))}))},clearSearch:function(){this.search=""},resetData:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.fetchData(),this.mounted=!0},dropdown_closed:function(){this.dropdown_open=!1},getUrlQuery:function(){var t={search:this.search,type:this.filters.recordingtype};this.getFiltersFromUrl(t),this.search!==t.search&&(this.search=t.search);["All Songs","Recordings","Demos","Drafts","Videos"].includes(t.type)&&this.filters.recordingtype!==t.type&&(this.filters.recordingtype=t.type)}},data:function(){return{songData:[],filterData:[],filters:{recordingtype:"All Songs"},search:"",dropdown_open:!1,mobile_open:!1,mounted:!1}},created:function(){this.fetchData()},mounted:function(){this.mounted=!0,""==this.$route.hash?(sessionStorage.search&&(this.search=sessionStorage.search),sessionStorage.filters&&(this.filters=JSON.parse(sessionStorage.filters))):this.getUrlQuery()},watch:{search:function(t){sessionStorage.search=t},filters:{handler:function(t){sessionStorage.filters=JSON.stringify(t)},deep:!0},"$route.hash":function(){this.getUrlQuery()}},computed:{createFilter:function(){var t=this;if(this.mounted){for(var e=this.songData,r=function(){var t=Object(o.a)(n[s],2),r=t[0],i=t[1];if(i.startsWith("All"))return"break";e="Videos"==i?e.filter((function(t){return 1==t.hasVideo})):e.filter((function(t){return t[r]==i}))},s=0,n=Object.entries(this.filters);s<n.length;s++){if("break"===r())break}e=e.filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())}));var i=1;e.map((function(t){t.count=i,i+=1}));var a={search:this.search,type:this.filters.recordingtype};return this.updateUrlHash(a),this.filterData=e,this.filterData}}}},n=(r("gEGz"),r("KHd+")),i=null,a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{bind:t.createFilter}},[r("h1",{staticClass:"mb-1 tracking-wider font-semibold"},[t._v("Strange People in Pain")]),r("h3",{staticClass:"mb-2 font-semibold text-blue-600 tracking-wider"},[t._v("Rock and Metal Songwriting")]),r("p",{staticClass:"font-semibold"},[t._v("By Victor Fisher")]),r("div",[r("div",{staticClass:"block md:inline"},[r("button",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.dropdown_closed,expression:"dropdown_closed"}],staticClass:"text-left px-4 py-2 text-sm font-semibold w-full md:w-auto rounded-sm hover:bg-gray-300 focus:bg-gray-200 bg-gray-200 block md:inline mb-2 md:mb-0 md:mr-4",attrs:{type:"button"},on:{click:function(e){t.dropdown_open=!t.dropdown_open}}},[r("span",[t._v(t._s(t.filters.recordingtype))]),r("svg",{staticClass:"inline w-4 h-4 ml-1 transition-transform duration-200 transform -mt-1",class:{"rotate-180":t.dropdown_open,"rotate-0":!t.dropdown_open},attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),r("transition",{attrs:{"enter-active-class":"transition duration-100 ease-out","leave-active-class":"transition duration-75 ease-in","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[t.dropdown_open?r("div",{staticClass:"md:w-auto relative md:absolute md:mt-2 mb-5 origin-top-right rounded-md shadow-lg z-40"},[r("div",{staticClass:"px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800"},[r("button",{staticClass:"w-full text-left block px-4 py-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="All Songs",t.dropdown_open=!1}}},[t._v("All Songs")]),r("button",{staticClass:"w-full text-left block px-4 py-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="Recordings",t.dropdown_open=!1}}},[t._v("Recordings")]),r("button",{staticClass:"w-full text-left block px-4 py-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="Demos",t.dropdown_open=!1}}},[t._v("Demos")]),r("button",{staticClass:"w-full text-left block px-4 py-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="Drafts",t.dropdown_open=!1}}},[t._v("Drafts")]),r("button",{staticClass:"w-full text-left block px-4 py-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer",attrs:{type:"button"},on:{click:function(e){t.filters.recordingtype="Videos",t.dropdown_open=!1}}},[t._v("Videos")])])]):t._e()])],1),r("button",{staticClass:"text-left px-4 py-2 text-sm font-semibold w-full md:w-auto rounded-sm hover:bg-gray-300 focus:bg-gray-200 bg-gray-200 block md:inline mt-4 md:mt-0",attrs:{type:"button"},on:{click:t.resetData}},[t._v("Refresh")])]),r("div",{staticClass:"mb-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"border-2 rounded border-gray-400 px-2 py-2 mt-4",attrs:{id:"search",placeholder:"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t.filterData.length>0?r("h3",[t._v("Results: "+t._s(t.filterData.length))]):r("h3",[t._v("No results.")]),t._l(t.filterData,(function(e,o){return r("div",{key:o},[r("h2",[r("span",[t._v(t._s(e.count)+". ")]),r("g-link",{staticClass:"no-underline hover:underline",attrs:{to:"/"+e.slug}},[t._v("\n      "+t._s(e.title)+"\n      ")])],1)])}))],2)}),[],!1,null,null,null);"function"==typeof i&&i(a);e.default=a.exports},yq1k:function(t,e,r){"use strict";var o=r("I+eb"),s=r("TWQb").includes,n=r("RNIs");o({target:"Array",proto:!0,forced:!r("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")}}]);