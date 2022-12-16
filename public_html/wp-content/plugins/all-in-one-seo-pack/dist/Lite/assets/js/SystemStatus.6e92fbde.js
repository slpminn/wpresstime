import{m as l}from"./vuex.esm.19624049.js";import{C as m}from"./Card.efd2e18e.js";import{G as c,a as u}from"./Row.2d17f2cd.js";import{S as d}from"./Checkmark.cdcd77fe.js";import{e as p}from"./index.81e35b24.js";import{S as _}from"./Download.0ab25052.js";import{T as f,a as h}from"./Row.733aef3c.js";import{n as y}from"./vueComponentNormalizer.67c9b86e.js";import"./Tooltip.d723c3c3.js";import"./_commonjsHelpers.10c44588.js";import"./Caret.eeb84d06.js";import"./Slide.9538a421.js";import"./client.90beecd8.js";import"./translations.3bc9d58c.js";import"./default-i18n.0e73c33c.js";import"./index.7b63dad7.js";import"./isArrayLikeObject.5268a676.js";import"./helpers.a2b0759e.js";import"./constants.8bff9f56.js";import"./portal-vue.esm.18ed59c3.js";var v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-tools-system-status-info"},[s("core-card",{attrs:{slug:"systemStatusInfo","header-text":t.strings.systemStatusInfo}},[s("div",{staticClass:"actions"},[s("grid-row",[s("grid-column",{staticClass:"left",attrs:{sm:"6"}},[s("base-button",{attrs:{type:"blue",size:"medium"},on:{click:t.downloadSystemStatusInfo}},[s("svg-download"),t._v(" "+t._s(t.strings.downloadSystemInfoFile)+" ")],1),s("base-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.copySystemStatusInfo,expression:"copySystemStatusInfo",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{type:"blue",size:"medium"}},[t.copied?t._e():[s("svg-copy"),t._v(" "+t._s(t.strings.copyToClipboard)+" ")],t.copied?[s("svg-checkmark"),t._v(" "+t._s(t.strings.copied)+" ")]:t._e()],2)],1),s("grid-column",{staticClass:"right",attrs:{sm:"6"}},[s("base-input",{class:{"aioseo-error":t.emailError},attrs:{size:"medium",placeholder:t.strings.emailDebugInformation},model:{value:t.emailAddress,callback:function(o){t.emailAddress=o},expression:"emailAddress"}}),s("base-button",{attrs:{type:"blue",size:"medium",loading:t.sendingEmail},on:{click:t.processEmailDebugInfo}},[t._v(" "+t._s(t.strings.submit)+" ")])],1)],1)],1),s("div",{staticClass:"aioseo-settings-row"},[t._l(t.$aioseo.data.status,function(o,n){return[o.results.length?s("div",{key:n,staticClass:"settings-group"},[s("div",{staticClass:"settings-name"},[s("div",{staticClass:"name"},[t._v(t._s(o.label))])]),s("div",{staticClass:"settings-content"},[s("div",{staticClass:"system-status-table"},t._l(o.results,function(i,a){return s("table-row",{key:a,class:{even:a%2===0}},[s("table-column",{staticClass:"system-status-header"},[t._v(" "+t._s(i.header)+" ")]),s("table-column",[t._v(" "+t._s(i.value)+" ")])],1)}),1)])]):t._e()]})],2)])],1)},g=[];const b={components:{CoreCard:m,GridColumn:c,GridRow:u,SvgCheckmark:d,SvgCopy:p,SvgDownload:_,TableColumn:f,TableRow:h},data(){return{copied:!1,emailError:null,emailAddress:null,sendingEmail:!1,strings:{systemStatusInfo:this.$t.__("System Status Info",this.$td),downloadSystemInfoFile:this.$t.__("Download System Info File",this.$td),copyToClipboard:this.$t.__("Copy to Clipboard",this.$td),emailDebugInformation:this.$t.__("Email Debug Information",this.$td),submit:this.$t.__("Submit",this.$td),wordPress:this.$t.__("WordPress",this.$td),serverInfo:this.$t.__("Server Info",this.$td),activeTheme:this.$t.__("Active Theme",this.$td),muPlugins:this.$t.__("Must-Use Plugins",this.$td),activePlugins:this.$t.__("Active Plugins",this.$td),inactivePlugins:this.$t.__("Inactive Plugins",this.$td),copied:this.$t.__("Copied!",this.$td)}}},computed:{copySystemStatusInfo(){return JSON.stringify(this.$aioseo.data.status)}},methods:{...l(["emailDebugInfo"]),onCopy(){this.copied=!0,setTimeout(()=>{this.copied=!1},2e3)},onError(){},downloadSystemStatusInfo(){const t=new Blob([JSON.stringify(this.$aioseo.data.status)],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(t),e.download=`aioseo-system-status-${this.$dateTime.now().toFormat("yyyy-MM-dd")}.json`,e.click(),URL.revokeObjectURL(e.href)},processEmailDebugInfo(){if(this.emailError=!1,!this.emailAddress||!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.emailAddress)){this.emailError=!0;return}this.sendingEmail=!0,this.emailDebugInfo(this.emailAddress).then(()=>{this.emailAddress=null,this.sendingEmail=!1})}}},r={};var S=y(b,v,g,!1,$,null,null,null);function $(t){for(let e in r)this[e]=r[e]}const J=function(){return S.exports}();export{J as default};
