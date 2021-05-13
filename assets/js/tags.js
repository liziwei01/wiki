/*! Wiki.js - wiki.js.org - Licensed under AGPL */
(this.webpackJsonp=this.webpackJsonp||[]).push([["tags"],{"./client/components/common/page-convert.vue":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{"max-width":"550",persistent:"","overlay-color":"blue-grey darken-4","overlay-opacity":".7"},model:{value:e.isShown,callback:function(t){e.isShown=t},expression:"isShown"}},[s("v-card",[s("div",{staticClass:"dialog-header is-short is-dark"},[s("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[e._v("mdi-lightning-bolt")]),s("span",[e._v(e._s(e.$t("common:page.convert")))])],1),s("v-card-text",{staticClass:"pt-5"},[s("i18next",{staticClass:"body-2",attrs:{path:"common:page.convertTitle",tag:"div"}},[s("span",{staticClass:"blue-grey--text text--darken-2",attrs:{place:"title"}},[e._v(e._s(e.pageTitle))])]),s("v-select",{staticClass:"mt-5",attrs:{items:[{value:"markdown",text:"Markdown"},{value:"ckeditor",text:"Visual Editor"},{value:"code",text:"Raw HTML"}],outlined:"",dense:"","hide-details":""},model:{value:e.newEditor,callback:function(t){e.newEditor=t},expression:"newEditor"}}),s("div",{staticClass:"caption mt-5"},[e._v(e._s(e.$t("common:page.convertSubtitle")))])],1),s("v-card-chin",[s("v-spacer"),s("v-btn",{attrs:{text:"",disabled:e.loading},on:{click:e.discard}},[e._v(e._s(e.$t("common:actions.cancel")))]),s("v-btn",{staticClass:"px-4 white--text",attrs:{color:"grey darken-3",loading:e.loading},on:{click:e.convertPage}},[e._v(e._s(e.$t("common:actions.convert")))])],1)],1)],1)};i._withStripped=!0;var o=s("./node_modules/lodash/get.js"),n=s.n(o),a=s("./node_modules/vuex-pathify/dist/vuex-pathify.js"),l={props:{value:{type:Boolean,default:!1}},data:()=>({loading:!1,newEditor:""}),computed:{isShown:{get(){return this.value},set(e){this.$emit("input",e)}},pageTitle:Object(a.get)("page/title"),pagePath:Object(a.get)("page/path"),pageLocale:Object(a.get)("page/locale"),pageId:Object(a.get)("page/id"),pageEditor:Object(a.get)("page/editor")},mounted(){this.newEditor=this.pageEditor},methods:{discard(){this.isShown=!1},async convertPage(){this.loading=!0,this.$store.commit("loadingStart","page-convert"),this.$nextTick(async()=>{try{const e=await this.$apollo.mutate({mutation:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"editor"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"convert"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"editor"},value:{kind:"Variable",name:{kind:"Name",value:"editor"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"responseResult"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"succeeded"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errorCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:514,source:{body:"\n              mutation (\n                $id: Int!\n                $editor: String!\n                ) {\n                  pages {\n                    convert(\n                      id: $id\n                      editor: $editor\n                    ) {\n                      responseResult {\n                        succeeded\n                        errorCode\n                        slug\n                        message\n                      }\n                    }\n                  }\n              }\n            ",name:"GraphQL request",locationOffset:{line:1,column:1}}}},variables:{id:this.pageId,editor:this.newEditor}});if(!n()(e,"data.pages.convert.responseResult.succeeded",!1))throw new Error(n()(e,"data.pages.convert.responseResult.message",this.$t("common:error.unexpected")));this.isShown=!1,window.location.assign(`/e/${this.pageLocale}/${this.pagePath}`)}catch(e){this.$store.commit("pushGraphError",e)}this.$store.commit("loadingStop","page-convert"),this.loading=!1})}}},d=s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),r=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),c=s.n(r),u=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),m=s("./node_modules/vuetify/lib/components/VCard/VCard.js"),v=s("./node_modules/vuetify/lib/components/VCard/index.js"),p=s("./node_modules/vuetify/lib/components/VDialog/VDialog.js"),g=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),h=s("./node_modules/vuetify/lib/components/VSelect/VSelect.js"),_=s("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),f=Object(d.a)(l,i,[],!1,null,null,null);c()(f,{VBtn:u.a,VCard:m.a,VCardText:v.b,VDialog:p.a,VIcon:g.a,VSelect:h.a,VSpacer:_.a}),f.options.__file="client/components/common/page-convert.vue";t.default=f.exports},"./client/components/editor/editor-code.vue":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"editor-code"},[s("div",{staticClass:"editor-code-main"},[s("div",{staticClass:"editor-code-sidebar"},[s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-btn",e._g({staticClass:"animated fadeInLeft mx-0",attrs:{icon:"",tile:"",dark:"",disabled:""}},i),[s("v-icon",[e._v("mdi-link-plus")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertLink")))])]),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p1s mx-0",attrs:{icon:"",tile:"",dark:""},on:{click:function(t){return e.toggleModal("editorModalMedia")}}},i),[s("v-icon",{attrs:{color:"editorModalMedia"===e.activeModal?"teal":""}},[e._v("mdi-folder-multiple-image")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertAssets")))])]),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p2s mx-0",attrs:{icon:"",tile:"",dark:"",disabled:""},on:{click:function(t){return e.toggleModal("editorModalBlocks")}}},i),[s("v-icon",{attrs:{color:"editorModalBlocks"===e.activeModal?"teal":""}},[e._v("mdi-view-dashboard-outline")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertBlock")))])]),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p3s mx-0",attrs:{icon:"",tile:"",dark:"",disabled:""}},i),[s("v-icon",[e._v("mdi-code-braces")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertCodeBlock")))])]),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p4s mx-0",attrs:{icon:"",tile:"",dark:"",disabled:""}},i),[s("v-icon",[e._v("mdi-library-video")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertVideoAudio")))])]),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p5s mx-0",attrs:{icon:"",tile:"",dark:"",disabled:""}},i),[s("v-icon",[e._v("mdi-chart-multiline")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertDiagram")))])]),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p6s mx-0",attrs:{icon:"",tile:"",dark:"",disabled:""}},i),[s("v-icon",[e._v("mdi-function-variant")])],1)]}}])},[s("span",[e._v(e._s(e.$t("editor:markup.insertMathExpression")))])]),e.$vuetify.breakpoint.mdAndUp?[s("v-spacer"),s("v-tooltip",{attrs:{right:"",color:"teal"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-btn",e._g({staticClass:"mt-3 animated fadeInLeft wait-p8s mx-0",attrs:{icon:"",tile:"",dark:""},on:{click:e.toggleFullscreen}},i),[s("v-icon",[e._v("mdi-arrow-expand-all")])],1)]}}],null,!1,3552248366)},[s("span",[e._v(e._s(e.$t("editor:markup.distractionFreeMode")))])])]:e._e()],2),s("div",{staticClass:"editor-code-editor"},[s("textarea",{ref:"cm"})])]),s("v-system-bar",{staticClass:"editor-code-sysbar",attrs:{dark:"",status:"",color:"grey darken-3"}},[s("div",{staticClass:"caption editor-code-sysbar-locale"},[e._v(e._s(e.locale.toUpperCase()))]),s("div",{staticClass:"caption px-3"},[e._v("/"+e._s(e.path))]),e.$vuetify.breakpoint.mdAndUp?[s("v-spacer"),s("div",{staticClass:"caption"},[e._v("Code")]),s("v-spacer"),s("div",{staticClass:"caption"},[e._v("Ln "+e._s(e.cursorPos.line+1)+", Col "+e._s(e.cursorPos.ch+1))])]:e._e()],2)],1)};i._withStripped=!0;var o=s("./node_modules/lodash/last.js"),n=s.n(o),a=s("./node_modules/lodash/startsWith.js"),l=s.n(a),d=s("./node_modules/lodash/times.js"),r=s.n(d),c=s("./node_modules/lodash/flatten.js"),u=s.n(c),m=s("./node_modules/vuex-pathify/dist/vuex-pathify.js"),v=s("./node_modules/codemirror/lib/codemirror.js"),p=s.n(v),g=(s("./node_modules/codemirror/lib/codemirror.css"),s("./node_modules/codemirror/mode/htmlmixed/htmlmixed.js"),s("./node_modules/codemirror/addon/selection/active-line.js"),s("./node_modules/codemirror/addon/display/fullscreen.js"),s("./node_modules/codemirror/addon/display/fullscreen.css"),s("./node_modules/codemirror/addon/selection/mark-selection.js"),s("./node_modules/codemirror/addon/search/searchcursor.js"),{data:()=>({cm:null,cursorPos:{ch:0,line:1}}),computed:{isMobile(){return this.$vuetify.breakpoint.smAndDown},locale:Object(m.get)("page/locale"),path:Object(m.get)("page/path"),mode:Object(m.get)("editor/mode"),activeModal:Object(m.sync)("editor/activeModal")},methods:{toggleModal(e){this.activeModal=this.activeModal===e?"":e,this.helpShown=!1},closeAllModal(){this.activeModal="",this.helpShown=!1},insertAtCursor({content:e}){const t=this.cm.doc.getCursor("head");this.cm.doc.replaceRange(e,t)},insertAfter({content:e,newLine:t}){const s=this.cm.doc.getCursor("to").line,i=this.cm.doc.getLine(s).length;this.cm.doc.replaceRange(t?`\n${e}\n`:e,{line:s,ch:i+1})},insertBeforeEachLine({content:e,after:t}){let s=[];if(this.cm.doc.somethingSelected()?s=u()(this.cm.doc.listSelections().map(e=>{const t=Math.abs(e.anchor.line-e.head.line)+1,s=e.anchor.line>e.head.line?e.head.line:e.anchor.line;return r()(t,e=>e+s)})):s.push(this.cm.doc.getCursor("head").line),s.forEach(t=>{let s=this.cm.doc.getLine(t);const i=s.length;l()(s,e)&&(s=s.substring(e.length)),this.cm.doc.replaceRange(e+s,{line:t,ch:0},{line:t,ch:i})}),t){const e=n()(s);this.cm.doc.replaceRange(`\n${t}\n`,{line:e,ch:this.cm.doc.getLine(e).length+1})}},positionSync(e){this.cursorPos=e.getCursor("head")},toggleFullscreen(){this.cm.setOption("fullScreen",!0)},refresh(){this.$nextTick(()=>{this.cm.refresh()})}},mounted(){this.$store.set("editor/editorKey","code"),"create"===this.mode&&this.$store.set("editor/content","<h1>Title</h1>\n\n<p>Some text here</p>"),this.cm=p.a.fromTextArea(this.$refs.cm,{tabSize:2,mode:"text/html",theme:"wikijs-dark",lineNumbers:!0,lineWrapping:!0,line:!0,styleActiveLine:!0,highlightSelectionMatches:{annotateScrollbar:!0},viewportMargin:50,inputStyle:"contenteditable",allowDropFileTypes:["image/jpg","image/png","image/svg","image/jpeg","image/gif"]}),this.cm.setValue(this.$store.get("editor/content")),this.cm.on("change",e=>{this.$store.set("editor/content",e.getValue())}),this.$vuetify.breakpoint.mdAndUp?this.cm.setSize(null,"calc(100vh - 64px - 24px)"):this.cm.setSize(null,"calc(100vh - 56px - 16px)");const e={F11(e){e.setOption("fullScreen",!e.getOption("fullScreen"))},Esc(e){e.getOption("fullScreen")&&e.setOption("fullScreen",!1)}};this.cm.setOption("extraKeys",e),this.cm.on("cursorActivity",e=>{this.positionSync(e)}),this.$root.$on("editorInsert",e=>{switch(e.kind){case"IMAGE":let t=`<img src="${e.path}" alt="${e.text}"`;e.align&&""!==e.align&&(t+=` class="align-${e.align}"`),t+=" />",this.insertAtCursor({content:t});break;case"BINARY":this.insertAtCursor({content:`<a href="${e.path}" title="${e.text}">${e.text}</a>`})}}),this.$root.$on("saveConflict",()=>{this.toggleModal("editorModalConflict")}),this.$root.$on("overwriteEditorContent",()=>{this.cm.setValue(this.$store.get("editor/content"))})},beforeDestroy(){this.$root.$off("editorInsert")}}),h=(s("./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),_=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),f=s.n(_),y=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),b=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),k=s("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),j=s("./node_modules/vuetify/lib/components/VSystemBar/VSystemBar.js"),x=s("./node_modules/vuetify/lib/components/VTooltip/VTooltip.js"),V=Object(h.a)(g,i,[],!1,null,null,null);f()(V,{VBtn:y.a,VIcon:b.a,VSpacer:k.a,VSystemBar:j.a,VTooltip:x.a}),V.options.__file="client/components/editor/editor-code.vue";t.default=V.exports},"./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){"use strict";s("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&")},"./client/components/not-found.vue":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("div",{staticClass:"notfound"},[s("div",{staticClass:"notfound-content"},[s("img",{staticClass:"animated fadeIn",attrs:{src:"/_assets/svg/icon-delete-file.svg",alt:"Not Found"}}),s("div",{staticClass:"headline"},[e._v(e._s(e.$t("notfound.title")))]),s("div",{staticClass:"subheading mt-3"},[e._v(e._s(e.$t("notfound.subtitle")))]),s("v-btn",{staticClass:"mt-5",attrs:{color:"red lighten-4",href:"/",large:"",outlined:""}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-home")]),s("span",[e._v(e._s(e.$t("notfound.gohome")))])],1)],1)])])};i._withStripped=!0;var o={data:()=>({})},n=s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),l=s.n(a),d=s("./node_modules/vuetify/lib/components/VApp/VApp.js"),r=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),u=Object(n.a)(o,i,[],!1,null,null,null);l()(u,{VApp:d.a,VBtn:r.a,VIcon:c.a}),u.options.__file="client/components/not-found.vue";t.default=u.exports},"./client/components/tags.vue":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{staticClass:"tags",attrs:{dark:e.$vuetify.theme.dark}},[s("nav-header"),s("v-navigation-drawer",{staticClass:"pb-0 elevation-1",attrs:{app:"",fixed:"",clipped:"",right:e.$vuetify.rtl,permanent:"",width:"300"}},[s("vue-scroll",{attrs:{ops:e.scrollStyle}},[s("v-list",{attrs:{dense:"",nav:""}},[s("v-list-item",{attrs:{href:"/"}},[s("v-list-item-icon",[s("v-icon",[e._v("mdi-home")])],1),s("v-list-item-title",[e._v(e._s(e.$t("common:header.home")))])],1),e._l(e.tagsGrouped,(function(t,i){return[s("v-divider",{staticClass:"my-2"}),s("v-subheader",{key:"tagGroup-"+i,staticClass:"pl-4"},[e._v(e._s(i))]),e._l(t,(function(t){return s("v-list-item",{key:"tag-"+t.tag,on:{click:function(s){return e.toggleTag(t.tag)}}},[s("v-list-item-icon",[e.isSelected(t.tag)?s("v-icon",{attrs:{color:"primary"}},[e._v("mdi-checkbox-intermediate")]):s("v-icon",[e._v("mdi-checkbox-blank-outline")])],1),s("v-list-item-title",[e._v(e._s(t.title))])],1)}))]}))],2)],1)],1),s("v-content",{staticClass:"grey",class:e.$vuetify.theme.dark?"darken-4-d5":"lighten-3"},[s("v-toolbar",{attrs:{color:"primary",dark:"",flat:"",height:"58"}},[e.selection.length>0?[s("div",{staticClass:"overline mr-3 animated fadeInLeft"},[e._v(e._s(e.$t("tags:currentSelection")))]),e._l(e.tagsSelected,(function(t){return s("v-chip",{key:"tagSelected-"+t.tag,staticClass:"mr-3 primary--text",attrs:{color:"white",close:""},on:{"click:close":function(s){return e.toggleTag(t.tag)}}},[e._v(e._s(t.title))])})),s("v-spacer"),s("v-btn",{staticClass:"animated fadeIn",attrs:{small:"",outlined:"",color:"blue lighten-4",rounded:""},on:{click:function(t){e.selection=[]}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-close")]),s("span",[e._v(e._s(e.$t("tags:clearSelection")))])],1)]:[s("v-icon",{staticClass:"mr-3 animated fadeInRight"},[e._v("mdi-arrow-left")]),s("div",{staticClass:"overline animated fadeInRight"},[e._v(e._s(e.$t("tags:selectOneMoreTags")))])]],2),s("v-toolbar",{attrs:{color:e.$vuetify.theme.dark?"grey darken-4-l5":"grey lighten-4",flat:"",height:"58"}},[s("v-text-field",{staticClass:"tags-search",attrs:{label:e.$t("tags:searchWithinResultsPlaceholder"),solo:"","hide-details":"",flat:"",rounded:"","single-line":"",height:"40","prepend-icon":"mdi-text-box-search-outline","append-icon":"mdi-arrow-right",clearable:""},model:{value:e.innerSearch,callback:function(t){e.innerSearch=t},expression:"innerSearch"}}),e.locales.length>1?[s("v-divider",{staticClass:"mx-3",attrs:{vertical:""}}),s("div",{staticClass:"overline"},[e._v(e._s(e.$t("tags:locale")))]),s("v-select",{staticClass:"ml-2",staticStyle:{"max-width":"170px"},attrs:{items:e.locales,"background-color":e.$vuetify.theme.dark?"grey darken-3":"white","hide-details":"",label:e.$t("tags:locale"),"item-text":"name","item-value":"code",rounded:"","single-line":"",dense:"",height:"40"},model:{value:e.locale,callback:function(t){e.locale=t},expression:"locale"}})]:e._e(),s("v-divider",{staticClass:"mx-3",attrs:{vertical:""}}),s("div",{staticClass:"overline"},[e._v(e._s(e.$t("tags:orderBy")))]),s("v-select",{staticClass:"ml-2",staticStyle:{"max-width":"250px"},attrs:{items:e.orderByItems,"background-color":e.$vuetify.theme.dark?"grey darken-3":"white","hide-details":"",label:e.$t("tags:orderBy"),rounded:"","single-line":"",dense:"",height:"40"},model:{value:e.orderBy,callback:function(t){e.orderBy=t},expression:"orderBy"}}),s("v-btn-toggle",{staticClass:"ml-2",attrs:{rounded:"",mandatory:""},model:{value:e.orderByDirection,callback:function(t){e.orderByDirection=t},expression:"orderByDirection"}},[s("v-btn",{attrs:{text:"",height:"40"}},[s("v-icon",{attrs:{size:"20"}},[e._v("mdi-chevron-double-up")])],1),s("v-btn",{attrs:{text:"",height:"40"}},[s("v-icon",{attrs:{size:"20"}},[e._v("mdi-chevron-double-down")])],1)],1)],2),s("v-divider"),e.selection.length<1?s("div",{staticClass:"text-center pt-10"},[s("img",{attrs:{src:"/_assets/svg/icon-price-tag.svg"}}),s("div",{staticClass:"subtitle-2 grey--text"},[e._v(e._s(e.$t("tags:selectOneMoreTagsHint")))])]):s("div",{staticClass:"px-5 py-2"},[s("v-data-iterator",{ref:"dude",attrs:{items:e.pages,"items-per-page":4,search:e.innerSearch,loading:e.isLoading,options:e.pagination,"hide-default-footer":""},on:{"update:options":function(t){e.pagination=t}},scopedSlots:e._u([{key:"loading",fn:function(){return[s("div",{staticClass:"text-center pt-10"},[s("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:"96",width:"2"}}),s("div",{staticClass:"subtitle-2 grey--text mt-5"},[e._v(e._s(e.$t("tags:retrievingResultsLoading")))])],1)]},proxy:!0},{key:"no-data",fn:function(){return[s("div",{staticClass:"text-center pt-10"},[s("img",{attrs:{src:"/_assets/svg/icon-info.svg"}}),s("div",{staticClass:"subtitle-2 grey--text"},[e._v(e._s(e.$t("tags:noResults")))])])]},proxy:!0},{key:"no-results",fn:function(){return[s("div",{staticClass:"text-center pt-10"},[s("img",{attrs:{src:"/_assets/svg/icon-info.svg"}}),s("div",{staticClass:"subtitle-2 grey--text"},[e._v(e._s(e.$t("tags:noResultsWithFilter")))])])]},proxy:!0},{key:"default",fn:function(t){return[s("v-row",{attrs:{align:"stretch"}},e._l(t.items,(function(t){return s("v-col",{key:"page-"+t.id,attrs:{cols:"12",lg:"6"}},[s("v-card",{staticClass:"radius-7",class:e.$vuetify.theme.dark?"grey darken-4":"",staticStyle:{height:"100%"},on:{click:function(s){return e.goTo(t)}}},[s("v-card-text",[s("div",{staticClass:"d-flex flex-row align-center"},[s("div",{staticClass:"body-1"},[s("strong",{staticClass:"primary--text"},[e._v(e._s(t.title))])]),s("v-spacer"),s("i18next",{staticClass:"caption",attrs:{tag:"div",path:"tags:pageLastUpdated"}},[s("span",{attrs:{place:"date"}},[e._v(e._s(e._f("moment")(t.updatedAt,"from")))])])],1),s("div",{staticClass:"body-2 grey--text"},[e._v(e._s(t.description||"---"))]),s("v-divider",{staticClass:"my-2"}),s("div",{staticClass:"d-flex flex-row align-center"},[s("v-chip",{staticClass:"overline",attrs:{small:"",label:"",color:e.$vuetify.theme.dark?"grey darken-3-l5":"grey lighten-4"}},[e._v(e._s(t.locale))]),s("div",{staticClass:"caption ml-1"},[e._v("/ "+e._s(t.path))])],1)],1)],1)],1)})),1)]}}])}),this.pageTotal>1?s("div",{staticClass:"text-center py-2 animated fadeInDown"},[s("v-pagination",{attrs:{length:e.pageTotal},model:{value:e.pagination.page,callback:function(t){e.$set(e.pagination,"page",t)},expression:"pagination.page"}})],1):e._e()],1)],1),s("nav-footer"),s("notify"),s("search-results")],1)};i._withStripped=!0;var o=s("./node_modules/lodash/cloneDeep.js"),n=s.n(o),a=s("./node_modules/lodash/set.js"),l=s.n(a),d=s("./node_modules/lodash/without.js"),r=s.n(d),c=s("./node_modules/lodash/concat.js"),u=s.n(c),m=s("./node_modules/lodash/compact.js"),v=s.n(m),p=s("./node_modules/lodash/includes.js"),g=s.n(p),h=s("./node_modules/lodash/filter.js"),_=s.n(h),f=s("./node_modules/lodash/groupBy.js"),y=s.n(f),b=s("./node_modules/vue-router/dist/vue-router.common.js"),k=s.n(b),j=s("./client/graph/common/common-pages-query-tags.gql"),x=s.n(j),V=s("./client/graph/common/common-pages-query-list.gql"),S=s.n(V);var C={i18nOptions:{namespaces:"tags"},data(){return{tags:[],selection:[],innerSearch:"",locale:"any",locales:[],orderBy:"title",orderByDirection:0,pagination:{page:1,itemsPerPage:12,mustSort:!0,sortBy:["title"],sortDesc:[!1]},pages:[],isLoading:!0,scrollStyle:{vuescroll:{},scrollPanel:{initialScrollY:0,initialScrollX:0,scrollingX:!1,easing:"easeOutQuad",speed:1e3,verticalNativeBarPos:this.$vuetify.rtl?"left":"right"},rail:{gutterOfEnds:"2px"},bar:{onlyShowBarOnScroll:!1,background:"#CCC",hoverStyle:{background:"#999"}}}}},computed:{tagsGrouped(){return y()(this.tags,e=>e.title.charAt(0).toUpperCase())},tagsSelected(){return _()(this.tags,e=>g()(this.selection,e.tag))},pageTotal(){return Math.ceil(this.pages.length/this.pagination.itemsPerPage)},orderByItems(){return[{text:this.$t("tags:orderByField.creationDate"),value:"createdAt"},{text:this.$t("tags:orderByField.ID"),value:"id"},{text:this.$t("tags:orderByField.lastModified"),value:"updatedAt"},{text:this.$t("tags:orderByField.path"),value:"path"},{text:this.$t("tags:orderByField.title"),value:"title"}]}},watch:{locale(e,t){this.rebuildURL()},orderBy(e,t){this.rebuildURL(),this.pagination.sortBy=[e]},orderByDirection(e,t){this.rebuildURL(),this.pagination.sortDesc=[1===e]}},router:new k.a({mode:"history",base:"/t"}),created(){this.$store.commit("page/SET_MODE","tags"),this.selection=v()(decodeURI(this.$route.path).split("/"))},mounted(){this.locales=u()([{name:this.$t("tags:localeAny"),code:"any"}],siteLangs.length>0?siteLangs:[])},methods:{toggleTag(e){g()(this.selection,e)?this.selection=r()(this.selection,e):this.selection.push(e),this.rebuildURL()},isSelected(e){return g()(this.selection,e)},rebuildURL(){let e={path:"/"+this.selection.join("/")};"any"!==this.locale&&l()(e,"query.lang",this.locale),"TITLE"!==this.orderBy&&l()(e,"query.sort",this.orderBy.toLowerCase()),0!==this.orderByDirection&&l()(e,"query.dir",0===this.orderByDirection?"asc":"desc"),this.$router.push(e)},goTo(e){window.location.assign(`/${e.locale}/${e.path}`)}},apollo:{tags:{query:x.a,fetchPolicy:"cache-and-network",update:e=>n()(e.pages.tags),watchLoading(e){this.$store.commit("loading"+(e?"Start":"Stop"),"tags-refresh")}},pages:{query:S.a,fetchPolicy:"cache-and-network",update:e=>n()(e.pages.list),watchLoading(e){this.isLoading=e,this.$store.commit("loading"+(e?"Start":"Stop"),"pages-refresh")},variables(){return{locale:"any"===this.locale?null:this.locale,tags:this.selection}},skip(){return this.selection.length<1}}}},$=(s("./client/components/tags.vue?vue&type=style&index=0&lang=scss&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),w=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),N=s.n(w),B=s("./node_modules/vuetify/lib/components/VApp/VApp.js"),I=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),D=s("./node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js"),L=s("./node_modules/vuetify/lib/components/VCard/VCard.js"),T=s("./node_modules/vuetify/lib/components/VCard/index.js"),A=s("./node_modules/vuetify/lib/components/VChip/VChip.js"),F=s("./node_modules/vuetify/lib/components/VGrid/VCol.js"),M=s("./node_modules/vuetify/lib/components/VContent/VContent.js"),O=s("./node_modules/vuetify/lib/components/VDataIterator/VDataIterator.js"),P=s("./node_modules/vuetify/lib/components/VDivider/VDivider.js"),E=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),R=s("./node_modules/vuetify/lib/components/VList/VList.js"),q=s("./node_modules/vuetify/lib/components/VList/VListItem.js"),U=s("./node_modules/vuetify/lib/components/VList/VListItemIcon.js"),G=s("./node_modules/vuetify/lib/components/VList/index.js"),z=s("./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js"),W=s("./node_modules/vuetify/lib/components/VPagination/VPagination.js"),Q=s("./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js"),H=s("./node_modules/vuetify/lib/components/VGrid/VRow.js"),J=s("./node_modules/vuetify/lib/components/VSelect/VSelect.js"),K=s("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),X=s("./node_modules/vuetify/lib/components/VSubheader/VSubheader.js"),Y=s("./node_modules/vuetify/lib/components/VTextField/VTextField.js"),Z=s("./node_modules/vuetify/lib/components/VToolbar/VToolbar.js"),ee=Object($.a)(C,i,[],!1,null,null,null);N()(ee,{VApp:B.a,VBtn:I.a,VBtnToggle:D.a,VCard:L.a,VCardText:T.b,VChip:A.a,VCol:F.a,VContent:M.a,VDataIterator:O.a,VDivider:P.a,VIcon:E.a,VList:R.a,VListItem:q.a,VListItemIcon:U.a,VListItemTitle:G.d,VNavigationDrawer:z.a,VPagination:W.a,VProgressCircular:Q.a,VRow:H.a,VSelect:J.a,VSpacer:K.a,VSubheader:X.a,VTextField:Y.a,VToolbar:Z.a}),ee.options.__file="client/components/tags.vue";t.default=ee.exports},"./client/components/tags.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){"use strict";s("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/tags.vue?vue&type=style&index=0&lang=scss&")},"./client/components/welcome.vue":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("div",{staticClass:"onboarding"},[s("div",{staticClass:"onboarding-content"},[s("img",{staticClass:"animated fadeIn",attrs:{src:"/_assets/svg/logo-wikijs.svg",alt:"Wiki.js"}}),s("div",{staticClass:"headline animated fadeInUp"},[e._v(e._s(e.$t("welcome.title")))]),s("div",{staticClass:"subtitle-1 mt-3 animated fadeInUp wait-p1s"},[e._v(e._s(e.$t("welcome.subtitle")))]),s("v-btn",{staticClass:"mt-5 animated fadeInUp wait-p2s",attrs:{color:"primary",href:"/e/"+e.locale+"/home","x-large":""}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),s("span",[e._v(e._s(e.$t("welcome.createhome")))])],1)],1)])])};i._withStripped=!0;var o={props:{locale:{type:String,default:"en"}},data:()=>({})},n=s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),l=s.n(a),d=s("./node_modules/vuetify/lib/components/VApp/VApp.js"),r=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),c=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),u=Object(n.a)(o,i,[],!1,null,null,null);l()(u,{VApp:d.a,VBtn:r.a,VIcon:c.a}),u.options.__file="client/components/welcome.vue";t.default=u.exports},"./client/graph/common/common-pages-query-list.gql":function(e,t){var s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderBy"}},type:{kind:"NamedType",name:{kind:"Name",value:"PageOrderBy"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderByDirection"}},type:{kind:"NamedType",name:{kind:"Name",value:"PageOrderByDirection"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"tags"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locale"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"list"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"Variable",name:{kind:"Name",value:"orderBy"}}},{kind:"Argument",name:{kind:"Name",value:"orderByDirection"},value:{kind:"Variable",name:{kind:"Name",value:"orderByDirection"}}},{kind:"Argument",name:{kind:"Name",value:"tags"},value:{kind:"Variable",name:{kind:"Name",value:"tags"}}},{kind:"Argument",name:{kind:"Name",value:"locale"},value:{kind:"Variable",name:{kind:"Name",value:"locale"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"locale"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:361}};s.loc.source={body:"query ($limit: Int, $orderBy: PageOrderBy, $orderByDirection: PageOrderByDirection, $tags: [String!], $locale: String) {\n  pages {\n    list(limit: $limit, orderBy: $orderBy, orderByDirection: $orderByDirection, tags: $tags, locale: $locale) {\n      id\n      locale\n      path\n      title\n      description\n      createdAt\n      updatedAt\n      tags\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};s.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,s){if("FragmentSpread"===t.kind)s.add(t.name.value);else if("VariableDefinition"===t.kind){var i=t.type;"NamedType"===i.kind&&s.add(i.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,s)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,s)})),t.definitions&&t.definitions.forEach((function(t){e(t,s)}))}(e,t),i[e.name.value]=t}})),e.exports=s,s.documentId="5db946a34be6c4a3835406633027b45736d8b08f0cfcbfd05e9bef8b6d07ae6c"},"./client/graph/common/common-pages-query-tags.gql":function(e,t){var s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tag"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:63}};s.loc.source={body:"query {\n  pages {\n    tags {\n      tag\n      title\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};s.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,s){if("FragmentSpread"===t.kind)s.add(t.name.value);else if("VariableDefinition"===t.kind){var i=t.type;"NamedType"===i.kind&&s.add(i.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,s)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,s)})),t.definitions&&t.definitions.forEach((function(t){e(t,s)}))}(e,t),i[e.name.value]=t}})),e.exports=s,s.documentId="dc48b88fd6012ab26ef813012cc4fee084cf3fdbd76921bdf43dfc9a3a4a4b05"},"./client/scss/fonts/arabic.scss":function(e,t,s){var i=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./client/scss/fonts/arabic.scss");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},"./client/scss/fonts/default.scss":function(e,t,s){var i=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./client/scss/fonts/default.scss");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){var i=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/tags.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){var i=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/tags.vue?vue&type=style&index=0&lang=scss&");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./client/scss/fonts/arabic.scss":function(e,t,s){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./client/scss/fonts/default.scss":function(e,t,s){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/tags.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){}}]);