var p=Object.defineProperty;var d=(n,t,e)=>t in n?p(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var s=(n,t,e)=>(d(n,typeof t!="symbol"?t+"":t,e),e);import{s as a,d as m}from"./index.7b63dad7.js";import{d as f,g as y,e as g}from"./attachments.e5102eba.js";import{d as _}from"./helpers.a2b0759e.js";function h(){return new Worker(""+window.__aioseoDynamicImportPreload__("main.4a527a0d.js"))}class A{constructor(){s(this,"postId",null);s(this,"postTitle",null);s(this,"postParsedTitle",null);s(this,"postParsedDescription",null);s(this,"postDescription",null);s(this,"keyphrases",null);s(this,"postContent",null);s(this,"postSlug",null);s(this,"isAnalyzing",!1);s(this,"worker",null)}async runAnalysis({postId:t,postData:e={...a.state.currentPost},content:o=y(),slug:c=g()}){if(!a.state.options.advanced||!a.state.options.advanced.truSeo||!a.state.currentPost.page_analysis||this.isAnalyzing)return;this.worker&&this.worker.terminate();const u={separator:_(window.aioseo.options.searchAppearance.global.separator)},r={postId:t,postData:e,content:o,slug:c,postEditedTitle:f(),aioseo:window.aioseo,aioseoGlobals:u};let i=[];this.worker=new h,this.worker.addEventListener("message",l=>{l.data.event==="tru-seo-analysis-complete"&&(i=l.data.analysis,this.dispatchActions(i,r),this.worker.terminate())}),this.worker.postMessage({event:"tru-seo-analysis",analysisData:r})}setSidebarButtonScore(t){const e=document.getElementById("aioseo-post-settings-sidebar-button"),o=document.getElementById("aioseo-post-score");!e||!o||(e.className=80<t?"score-green":50<t?"score-orange":"score-red",m()||(e.classList.add("aioseo-score-button","classic-editor"),t=`${t}/100`),o.textContent=t)}dispatchActions(t,e){t.forEach(o=>{o.action==="updateState"&&window.aioseo.currentPost.postType!=="attachment"&&e.postEditedTitle&&this.setSidebarButtonScore(o.data.seo_score),a.dispatch(o.action,o.data)})}}export{A as T};
