(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[99961],{198462:(e,t,n)=>{n.d(t,{cA:()=>B,fM:()=>N,N5:()=>O});var r=n(667294),o=n(991067),i=n(435851),a=n(172071),c=n(31062),s=n(383434),u=n(938085);const d=(0,s.XV)("LayoutShiftDebugger"),l=e=>e instanceof HTMLElement&&e.dataset&&(e.dataset.layoutShiftBoundaryId||e.dataset.testId)||e.parentNode&&l(e.parentNode)||null,p=e=>Math.round(1e3*e);let f=[];const m=({staticContext:e,getCurrentRoute:t,getLastNavigationTime:n})=>{const r=(0,c.Jx)({annotateMarks:["initialAppLoad","RenderReactContainer"],name:"cumulative_layout_shift",pwtStaticContext:e});let o=0;const s=e=>{o=e.timeStamp};window.addEventListener("scroll",s),window.addEventListener("beforeunload",(()=>{window.removeEventListener("scroll",s)}));const m=`${(0,i.Z)(e)}.CLS`,h=()=>(e=>{let t=Object.freeze({}),n=0;f.forEach((({value:e,shift:{sources:r},route:o,params:i,hadRecentNavigation:a,hadRecentScroll:c,isAuth:s})=>{if(n+=e,!r||!r.length)return;const u=e/r.length;r.forEach((({node:e})=>{const n=e?l(e)||"ROOT":"NODE_REMOVED",r=i&&i.scope?i.scope:"none",d={route:o,searchScope:r,boundaryId:n,hadRecentNavigation:a,hadRecentScroll:c,isAuth:s},p=JSON.stringify(d);t={...t,[p]:{score:((t[p]||{}).score||0)+u,tags:d}}}))})),Object.keys(t).forEach((n=>{const{score:r,tags:o}=t[n];a.Z.count(`${e}.shifts`,p(r),1,{...o})})),d("Debug CLS boundaries",n,t,f),f=[]})(m);let v,g=0,w=0,E=0;(0,u.kz)((({entries:r,value:i})=>{if(E=i||0,r.length){const{path:a,params:c}=t();v=n();const s=r[0].startTime,u=g!==s,d=u?r:r.slice(w);u&&(g=s),f=f.concat(d.map((t=>({value:i,shift:t,route:a,params:c,hadRecentNavigation:v>0&&v+500>t.startTime,hadRecentScroll:o>0&&o+500>t.startTime,isAuth:e.isAuthenticated})))),w=r.length}}),!0);const y=setInterval((()=>{if(f.length){h();const t=(e=E)<=.1?"good":e<=.25?"adequate":"poor";a.Z.count(`${m}.${t}`,1,1),r.stop(p(E))}var e}),1e3);window.addEventListener("beforeunload",(()=>{clearInterval(y),0===E&&r.abort("no_shifts_detected")}))};var h=n(311560),v=n(69028);var g=n(361115),w=n(156381);const E=e=>Number(e.toFixed(2)),y={pin_closeup:{LCP:"pin_closeup_lcp",FID:"pin_closeup_fid"},board:{LCP:"board_lcp",FID:"board_fid"},other_profile:{LCP:"other_profile_lcp",FID:"other_profile_fid"},topic:{LCP:"topic_lcp",FID:"topic_fid"}},S=["CA","GB","DE","FR","AU","JP","BR","MX"],_=({surface:e,pwtStaticContext:t})=>{const n=t.isAuthenticated?"web_bypass_sw_auth":"web_bypass_sw_unauth";switch(e){case"pin_closeup":return[(0,g.U)({isDesktop:"desktop"===t.deviceType,viewerType:(t.isBot?"bot":t.isAuthenticated&&"auth")||"unauth"}),n];default:return[n]}},C=({pwtStaticContext:e,surface:t})=>{const n="pin_closeup"===t||"board"===t||"other_profile"===t||"topic"===t?(({pwtStaticContext:e,surface:t})=>{const n=(0,c.Jx)({annotateExperiments:_({surface:t,pwtStaticContext:e}),annotateResourceTimingForSurface:t,annotateMarks:["initialAppLoad","RenderReactContainer",...e.isAuthenticated?[]:["firstClientRenderUnauthPageWrapper","mountUnauthPageWrapper"],..."pin_closeup"===t?["firstClientRenderCloseupPage","firstClientRenderCloseupImage"]:[]],name:y[t].LCP,pwtStaticContext:e}),r=(0,c.Jx)({name:y[t].FID,pwtStaticContext:e});return(e,t)=>{"LCP"===e?n.stop(t):"FID"===e&&r.stop(t)}})({pwtStaticContext:e,surface:t}):null,{isAuthenticated:r,isBot:o,isSocialBot:s,deviceType:d,country:l,fullPath:p,browserName:f,osName:m}=e,g={},C=(c,u,w)=>{if(!g[c]){g[c]=!0;const E=(0,i.Z)(e),y=`${E}.${t}.${c}`,_=`${E}.tags.${t}.${c}`;let C;if(C="iOS"===m&&"Chrome"===f?"iOS_Chrome":"CrUX","LCPCount"===c)a.Z.count(`${y}.sum`,u,1),a.Z.increment(`${y}.size`,1);else{const e=(0,h.Z)(l),i=(0,v.Z)(p);"FID"===c||"FIDStartTime"===c?(a.Z.timing(`${y}`,u,1),a.Z.timing(`${_}`,u,1,{timingBucket:null==w?void 0:w.timingBucket,isAuth:r,CrUXSegment:C,region:e,..."pin_closeup"===t&&("feedback"===i||"sent"===i||"default"===i)&&{pinType:i}})):(a.Z.timing(`${y}`,u,1),a.Z.timing(`${_}`,u,1,{isAuth:r,CrUXSegment:C,region:e,..."pin_closeup"===t&&("feedback"===i||"sent"===i||"default"===i)&&{pinType:i}})),!r&&S.includes(l)&&(({botType:e,deviceType:t,isChrome:n,region:r})=>{const o=`pwtlogger.${e}.${t}`,i=["all",...r?[r.toLowerCase()]:[]],a=["all",...n?["chrome"]:[]],c=[];return i.forEach((e=>{a.forEach((t=>{c.push(`${o}.region_${e}.browser_${t}`)}))})),c})({botType:(s?"socialBot":o&&"bot")||"nonbot",deviceType:d,isChrome:!0,region:e}).forEach((e=>{a.Z.timing(`${e}.tags.growthSEO.${t}_${c}`,u,1,{country:l})})),n&&n(c,u)}}};(0,u.Tx)((({value:e})=>{const t=(0,w.Af)();let n;n=e<=100?"Good":e>100&&e<=300?"Needs Improvement":"Poor",C("FID",E(e),{timingBucket:n}),t&&C("FIDStartTime",E(t),{timingBucket:n})})),(0,u.Tb)((({value:e})=>{C("LCPCount",(0,w.Kj)()),C("LCP",(e=>10*Math.round(e/10))(e))})),(0,u.Y)((({value:e})=>C("FCP",e)))};var T=n(790348);let b=null;const A=e=>{switch(e){case"/":return"homefeed";case"/pin/:id":case"/pin/:id/sent":return"pin_closeup";case"/pin/:id/visual-search":return"flashlight";case"/:username/:slug":return"board";case"/:username":return"other_profile";case"/search/:scope":return"search";case"/ideas/:interest/:id":return"topic";default:return null}};var L=n(969853),I=n(543059),x=n(7789),R=n(22773),k=n(616550),$=n(785893);const P=(0,r.createContext)(null),D=(0,r.createContext)(null);function B({children:e,immutableLocation:t,resourceTimingCacheSize:n,routerHistoryAction:i,staticContext:a}){const s=(0,r.useRef)(null),u=(0,r.useRef)(null),d=(0,r.useRef)(t),l=(0,r.useRef)(!0),{path:p,params:f}=(0,k.useRouteMatch)(),h=(0,r.useRef)(p),v=(0,r.useRef)(f),g=!a.isCachedRender&&(0,o.Z)(a.deviceType);(0,r.useEffect)((()=>{h.current=p}),[p]),(0,r.useEffect)((()=>{v.current=f}),[f]),(0,r.useEffect)((()=>{if((0,R.X_)({size:n||1e3}),(0,w.UQ)(),(0,T.A9)("totalSessionVolume"),window.performance?["clearMarks","clearMeasures","clearResourceTimings","getEntries","getEntriesByName","getEntriesByType","mark","measure","now","setResourceTimingBufferSize"].forEach((e=>{window.performance[e]||(0,T.A9)(`not_supported.window.performance.${e}`)})):(0,T.A9)("not_supported.window.performance"),window.PerformanceObserver||(0,T.A9)("not_supported.window.PerformanceObserer"),(0,L.v)()||(0,T.A9)("not_supported.grid_profiler"),l.current=!1,g&&!x.is){if(((e,t)=>{let n,r=0,o=0,i=null,a=null,s=null,u=null,d=[];const l=()=>{o+=1,s=window.requestAnimationFrame(l)},p=()=>{if(u){const n=d.some((e=>null!==i&&i-e>0&&i-e<=500)),o=t(),{isAuthenticated:s}=e;if(n){const t=(0,c.Jx)({name:"scroll_session",pwtStaticContext:e});if(!t)return;const n={surface:o,isAuthenticated:s};if(null===i||null===a||0===r)if(null===i&&null===a)t.error("no_duration",n);else if(null==i)b=a,t.error("no_start",n);else if(null==a){let e;e=b&&i-b<750?"no_end.outside_window":"no_end.single_event",t.error(e,n)}else t.error("no_frames",n);else{b=a;const e=a-i,c=e/r;0===c?t.error("zero_value",n):c<0?t.error("negative_value",n):(t.addBinaryAnnotation("surface",o,"STRING"),t.addBinaryAnnotation("isAuthenticated",s,"BOOL"),t.addBinaryAnnotation("duration_ms",e,"I32"),t.addBinaryAnnotation("total_frames_rendered",r,"I16"),t.stop(c))}}else(0,T.A9)("WARN.scroll_session.not_user",{tags:{isAuthenticated:s,surface:o}})}window.cancelAnimationFrame(s),r=0,o=0,d=[],a=null,i=null,u=null},f=({timeStamp:e})=>{n&&clearTimeout(n),n=setTimeout(p,500),null===u?(u=100*Math.random()<10,u&&(s=window.requestAnimationFrame(l),i=e)):u&&(a=e,r+=o,o=0)},m=({timeStamp:e})=>{d.push(e)};["wheel","pointerdown","keydown"].forEach((e=>{window.addEventListener(e,m,{passive:!0,capture:!0})})),window.addEventListener("scroll",f,{passive:!0}),window.addEventListener("pagehide",(()=>{window.removeEventListener("scroll",f),["wheel","pointerdown","keydown"].forEach((e=>{window.removeEventListener(e,m)}))}))})(a,(()=>A(h.current)?A(h.current)||"UNKNOWN_SURFACE":h.current||"UNKNOWN_SURFACE")),"Chrome"===a.browserName){m({staticContext:a,getCurrentRoute:()=>({path:h.current,params:v.current}),getLastNavigationTime:()=>u.current||0});const e=A(h.current);e&&C({pwtStaticContext:a,surface:e})}}}),[]);var E,y;if(E=t.pathname,["/advertiser/"].reduce(((e,t)=>E.includes(t)||e),!1)?d.current.pathname!==t.pathname:d.current!==t){d.current=t,u.current=null!==(y=window.performance)&&void 0!==y&&y.now?window.performance.now():null;const{current:e}=u;if(!l.current){const t=!s.current;(0,T.A9)("routeStart",{tags:{action:i}}),(0,R.Eg)(t),(0,w.Ux)(t),(0,w.on)(),(0,I.tl)();const{customBufferSize:n,defaultBufferSize:r}=(0,R.LH)();e&&((0,T.A9)("routeStart.customBufferSize",{count:n}),(0,T.A9)("routeStart.defaultBufferSize",{count:r}),s.current={time:e,action:i})}}return(0,$.jsx)(P.Provider,{value:g?a:null,children:(0,$.jsx)(D.Provider,{value:s.current,children:e})})}const N=()=>(0,r.useContext)(D),O=()=>(0,r.useContext)(P)},607150:(e,t,n)=>{n.d(t,{D3:()=>i,Hd:()=>s,jh:()=>c,rX:()=>a});var r=n(672115),o=n(156381);const i=e=>({...(0,r.Z)(e),domComplete:e.domComplete||0,domContentLoadedEventEnd:e.domContentLoadedEventEnd||0,domContentLoadedEventStart:e.domContentLoadedEventStart||0,domInteractive:e.domInteractive||0,loadEventEnd:e.loadEventEnd||0,loadEventStart:e.loadEventStart||0}),a=()=>{const{firstInputDelay:e,largestContentfulPaint:t}=(0,o.v2)();return{firstInputDelayStart:(null==e?void 0:e.startTime)||0,firstInputDelayEnd:(null==e?void 0:e.endTime)||0,largestContentfulPaint:t||0}},c=(e,t)=>Object.keys(t).reduce(((n,r)=>({...n,[`${e}${r}`]:t[r]})),{}),s=(e,t)=>Object.keys(e).reduce(((n,r)=>t.includes(r)?{...n,[r]:e[r]}:n),Object.freeze({}))},672115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>({connectEnd:e.connectEnd||0,connectStart:e.connectStart||0,domainLookupEnd:e.domainLookupEnd||0,domainLookupStart:e.domainLookupStart||0,fetchStart:e.fetchStart||0,requestStart:e.requestStart||0,redirectEnd:e.redirectEnd||0,redirectStart:e.redirectStart||0,responseEnd:e.responseEnd||0,responseStart:e.responseStart||0,secureConnectionStart:e.secureConnectionStart||0,startTime:e.startTime||0,workerStart:e.workerStart||0,unloadEventStart:e.unloadEventStart||0,unloadEventEnd:e.unloadEventEnd||0})},505771:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(358864),o=n(672115),i=n(528961);const a=({category:e,isDeferred:t,isExternal:n})=>[e].concat(t?["deferred"]:[]).concat(n?["external"]:[]).join("_");function c(e,t){const{category:n,timing:c,isDeferred:s,isExternal:u,isVisuallyCompleteRequired:d}=e;return c.responseEnd&&("image"!==n||d)?{name:a(e),id:(0,r.Z)(),parentId:t,startTime:c.startTime,endTime:c.responseEnd,annotationMap:(0,o.Z)(c),binaryAnnotationMap:{category:(0,i.sk)(n),decodedBodySize:(0,i.cC)(c.decodedBodySize||0),initiatorType:(0,i.sk)(c.initiatorType),isDeferred:(0,i.qr)(s),isExternal:(0,i.qr)(u),name:(0,i.sk)(c.name),nextHopProtocol:(0,i.sk)(c.nextHopProtocol),transferSize:(0,i.cC)(c.transferSize||0)}}:null}},31062:(e,t,n)=>{n.d(t,{ku:()=>b,Jx:()=>_,PY:()=>T});var r=n(860273),o=n(156381);const i=()=>(0,o.PJ)().reduce(((e,{identifier:t,loadTime:n,renderTime:r})=>e[`${t}_loadTime`]?e[`${t}_dupe_loadTime`]?{...e,[`${t}_dupe_loadTime`]:n,[`${t}_dupe_renderTime`]:r}:e:{...e,[`${t}_loadTime`]:n,[`${t}_renderTime`]:r}),Object.freeze({}));var a=n(672115),c=n(607150),s=n(22773),u=n(464609);const d=e=>{switch(e){case"pin_closeup":{const e=(0,u.Z)();return(e=>{const t=(0,s.y0)();return e.reduce(((e,{name:n,match:r})=>t.filter((e=>r(e))).slice(0,2).reduce(((e,t,r)=>({...e,...(0,c.jh)(`${n}${r?"_dupe1":""}_`,(0,a.Z)(t))})),e)),Object.freeze({}))})([{name:"mainImage",match:({name:t})=>t===e},{name:"PinResource",match:({name:e})=>e.includes("PinResource")}])}default:return{}}};var l=n(169213),p=n(358864),f=n(558775),m=n(505771),h=n(383434),v=n(543059),g=n(453821),w=n(638089),E=n(790348);const y=(0,h.XV)("LightStopwatch"),S={},_=({annotateExperiments:e,annotateMarks:t,annotateResourceTimingForSurface:n,name:o,pwtStaticContext:a})=>{const s=(()=>{let e=[],t=null;if(window.PerformanceObserver){const n=1e3;t=(0,l.Z)({entryTypes:["resource"]},(t=>{e=e.concat(t.getEntries()),e.length>n&&(e=e.slice(-n))}))}return{get:()=>e,disconnect:()=>{t&&t.disconnect()}}})();let u=!0,h={};(0,E.A9)(`TIMING.${o}`,{tags:{isAuth:a.isAuthenticated}});const _={type:"stopwatch",name:o,navigationType:"initial_app_load"},C={abort:e=>{u?(u=!1,(0,f.Z)({metricId:_,pwtStaticContext:a,result:{type:"ABORT",reason:e}})):(0,E.H)("duplicate_abort_action",{action:o})},error:(e,t)=>{const n={...t,action:o};u?(e&&(0,E.H)(e,n),s&&s.disconnect(),u=!1):(0,E.H)("duplicate_error_action",n)},stop:l=>{if(!u)return void(0,E.H)("duplicate_stop_action",{action:o});u=!1,s.disconnect();const y=(0,p.Z)(),S=(0,r.Z)(),C=s.get(),T={type:"COMPLETE",traceId:(0,p.Z)(),startTime:0,endTime:l,spans:[{name:"network_resources",id:y,startTime:0,endTime:l,annotationMap:{},binaryAnnotationMap:{},parentId:null},...C.map((e=>(0,m.Z)((0,g.p)(e,[]),y))).filter(Boolean)],annotationMap:{...(0,c.jh)("resource_",n?d(n):{}),...(0,c.jh)("element_",i()),...(0,c.jh)("mark_",t&&t.length?(0,c.Hd)((0,v.gQ)(),t):{}),...(0,c.jh)("browser_",S?(0,c.D3)(S):{})},binaryAnnotationMap:(0,w.ng)({annotateExperiments:e,metricId:_,pwtStaticContext:a,performanceResourceTimings:C,binaryAnnotations:h})};(0,f.Z)({metricId:_,pwtStaticContext:a,result:T,isAuth:a.isAuthenticated})},addBinaryAnnotation:(e,t,n)=>{y(`adding binary annotation {${e}: ${String(t)}}`),h={...h,[e]:{value:t,type:n}}}};return S[o]=C,C},C=e=>S[e],T=e=>!!C(e),b=({stopwatchName:e,binaryAnnotationName:t,value:n,annotationType:r})=>{const o=C(e);o&&o.addBinaryAnnotation(t,n,r)}},435851:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>{const{deviceType:t,isBot:n,isSocialBot:r}=e;return`coreWebVitalsLite.v1.${(r?"socialBot":n&&"bot")||"nonbot"}.${t}`}},69028:(e,t,n)=>{function r(e){return e.split("/")[3]||"default"}n.d(t,{Z:()=>r})},464609:(e,t,n)=>{n.d(t,{Z:()=>o,f:()=>r});const r="closeupImage",o=()=>{if(!document.querySelector)return null;const e=document.querySelector('head>link[rel="preload"][as="image"][href^="https://i.pinimg.com/"]');return e instanceof HTMLLinkElement?e.href:null}},938085:(e,t,n)=>{n.d(t,{Fu:()=>P,NO:()=>X,Tb:()=>X,Tx:()=>P,Y:()=>b,Yn:()=>q,a4:()=>b,kz:()=>A,mw:()=>A});var r,o,i,a,c,s=-1,u=function(e){addEventListener("pageshow",(function(t){t.persisted&&(s=t.timeStamp,e(t))}),!0)},d=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},l=function(){var e=d();return e&&e.activationStart||0},p=function(e,t){var n=d(),r="navigate";return s>=0?r="back-forward-cache":n&&(r=document.prerendering||l()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},f=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},m=function(e,t,n,r){var o,i;return function(a){t.value>=0&&(a||r)&&((i=t.value-(o||0))||void 0===o)&&(o=t.value,t.delta=i,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},h=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},v=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},g=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},w=-1,E=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(e){"hidden"===document.visibilityState&&w>-1&&(w="visibilitychange"===e.type?e.timeStamp:0,_())},S=function(){addEventListener("visibilitychange",y,!0),addEventListener("prerenderingchange",y,!0)},_=function(){removeEventListener("visibilitychange",y,!0),removeEventListener("prerenderingchange",y,!0)},C=function(){return w<0&&(w=E(),S(),u((function(){setTimeout((function(){w=E(),S()}),0)}))),{get firstHiddenTime(){return w}}},T=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},b=function(e,t){t=t||{},T((function(){var n,r=[1800,3e3],o=C(),i=p("FCP"),a=f("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(a.disconnect(),e.startTime<o.firstHiddenTime&&(i.value=Math.max(e.startTime-l(),0),i.entries.push(e),n(!0)))}))}));a&&(n=m(e,i,r,t.reportAllChanges),u((function(o){i=p("FCP"),n=m(e,i,r,t.reportAllChanges),h((function(){i.value=performance.now()-o.timeStamp,n(!0)}))})))}))},A=function(e,t){t=t||{},b(g((function(){var n,r=[.1,.25],o=p("CLS",0),i=0,a=[],c=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=a[0],n=a[a.length-1];i&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(i+=e.value,a.push(e)):(i=e.value,a=[e])}})),i>o.value&&(o.value=i,o.entries=a,n())},s=f("layout-shift",c);s&&(n=m(e,o,r,t.reportAllChanges),v((function(){c(s.takeRecords()),n(!0)})),u((function(){i=0,o=p("CLS",0),n=m(e,o,r,t.reportAllChanges),h((function(){return n()}))})),setTimeout(n,0))})))},L={passive:!0,capture:!0},I=new Date,x=function(e,t){r||(r=t,o=e,i=new Date,$(removeEventListener),R())},R=function(){if(o>=0&&o<i-I){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+o};a.forEach((function(t){t(e)})),a=[]}},k=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){x(e,t),o()},r=function(){o()},o=function(){removeEventListener("pointerup",n,L),removeEventListener("pointercancel",r,L)};addEventListener("pointerup",n,L),addEventListener("pointercancel",r,L)}(t,e):x(t,e)}},$=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,k,L)}))},P=function(e,t){t=t||{},T((function(){var n,i=[100,300],c=C(),s=p("FID"),d=function(e){e.startTime<c.firstHiddenTime&&(s.value=e.processingStart-e.startTime,s.entries.push(e),n(!0))},l=function(e){e.forEach(d)},h=f("first-input",l);n=m(e,s,i,t.reportAllChanges),h&&v(g((function(){l(h.takeRecords()),h.disconnect()}))),h&&u((function(){var c;s=p("FID"),n=m(e,s,i,t.reportAllChanges),a=[],o=-1,r=null,$(addEventListener),c=d,a.push(c),R()}))}))},D=0,B=1/0,N=0,O=function(e){e.forEach((function(e){e.interactionId&&(B=Math.min(B,e.interactionId),N=Math.max(N,e.interactionId),D=N?(N-B)/7+1:0)}))},M=function(){return c?D:performance.interactionCount||0},Z=function(){"interactionCount"in performance||c||(c=f("event",O,{type:"event",buffered:!0,durationThreshold:0}))},F=0,z=function(){return M()-F},j=[],H={},U=function(e){var t=j[j.length-1],n=H[e.interactionId];if(n||j.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};H[r.id]=r,j.push(r)}j.sort((function(e,t){return t.latency-e.latency})),j.splice(10).forEach((function(e){delete H[e.id]}))}},q=function(e,t){t=t||{},T((function(){var n=[200,500];Z();var r,o=p("INP"),i=function(e){e.forEach((function(e){e.interactionId&&U(e),"first-input"===e.entryType&&!j.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&U(e)}));var t,n=(t=Math.min(j.length-1,Math.floor(z()/50)),j[t]);n&&n.latency!==o.value&&(o.value=n.latency,o.entries=n.entries,r())},a=f("event",i,{durationThreshold:t.durationThreshold||40});r=m(e,o,n,t.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),v((function(){i(a.takeRecords()),o.value<0&&z()>0&&(o.value=0,o.entries=[]),r(!0)})),u((function(){j=[],F=M(),o=p("INP"),r=m(e,o,n,t.reportAllChanges)})))}))},J={},X=function(e,t){t=t||{},T((function(){var n,r=[2500,4e3],o=C(),i=p("LCP"),a=function(e){var t=e[e.length-1];if(t){var r=Math.max(t.startTime-l(),0);r<o.firstHiddenTime&&(i.value=r,i.entries=[t],n())}},c=f("largest-contentful-paint",a);if(c){n=m(e,i,r,t.reportAllChanges);var s=g((function(){J[i.id]||(a(c.takeRecords()),c.disconnect(),J[i.id]=!0,n(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,s,!0)})),v(s),u((function(o){i=p("LCP"),n=m(e,i,r,t.reportAllChanges),h((function(){i.value=performance.now()-o.timeStamp,J[i.id]=!0,n(!0)}))}))}}))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/99961-b5fb8e4154e58a6c.mjs.map