import{N as $,r as n,K as j,_ as U,P as m,R as z,S as s,V as r,U as o,Q as w,X as c,ag as G,ah as V,ai as N,$ as u,W as O,a0 as y,a2 as A,a1 as R,Y as Q}from"./index-C1sPD5Ox.js";import{Q as J}from"./QInput-BVVwhR4c.js";import{Q as q,b as F,a as B,c as L}from"./QLinearProgress-CPJeHMKq.js";import{u as M,Q as K,a as I}from"./use-quasar-pbyuiNw4.js";import{Q as D}from"./QCard-CxrKSodt.js";import{Q as W}from"./QImg-DGBV1iVe.js";import{Q as X}from"./QCardSection-DCdMt8N5.js";import{Q as Y}from"./QDialog-CTDNW1cQ.js";import{Q as H}from"./QPage-D4NaaSt9.js";import"./use-file-dom-props-C6FpTJSB.js";import"./use-id-D4t4WBx2.js";import"./use-dark-Z-sk9dab.js";import"./focus-manager-BJWzFvJg.js";import"./QChip-Bp8VAXZB.js";import"./position-engine-D5uRK9wr.js";import"./selection-DyZ2cvo3.js";import"./use-timeout-9gQprrbN.js";import"./format-CJebrXOQ.js";const Z=$({name:"StoryPageBackend",setup(){const a=M(),t=n(!1),g=j({childName:"",ageGroup:"",storyType:""}),f=n(!1),d=n("正在生成故事..."),h=n(null),e=n([]),i=n([]),v=n([]),S=n(null),C=n(null);return{formData:g,loading:t,showProgress:f,progressMessage:d,generatedStory:h,storyParagraphs:e,paragraphImages:i,translatedParagraphs:v,audioPlayer:S,storySection:C,generateStory:async()=>{try{t.value=!0,f.value=!0,e.value=[],i.value=[],v.value=[],h.value=null,d.value="正在創作故事...";const p=await fetch("https://zh-en-backend.alearn13994229.workers.dev/StoryGeneration",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({childName:g.childName,ageGroup:g.ageGroup,storyType:g.storyType,step:1})});if(!p.ok)throw new Error("故事生成失敗");const b=await p.json();if(!b.success)throw new Error(b.error||"故事生成失敗");e.value=b.content.split(`

`).filter(l=>l.trim());for(let l=0;l<e.value.length;l++){d.value=`正在翻譯...${l+1}/${e.value.length}`;const _=e.value[l],k=await(await fetch("https://zh-en-backend.alearn13994229.workers.dev/translate-zh-to-en",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:_})})).text();v.value.push(k)}for(let l=0;l<e.value.length;l++){const _=e.value[l];d.value=`正在生成配圖...${l+1}/${e.value.length}`;const P=await fetch("https://zh-en-backend.alearn13994229.workers.dev/generate-image-by-single-paragraph",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({storyParagraph:_})});if(!P.ok)throw new Error("圖片生成失敗");const k=await P.json();i.value.push(k.image)}d.value="正在生成語音...";const T=await fetch("https://zh-en-backend.alearn13994229.workers.dev/StoryGeneration",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({step:3,content:v.value.join()})});if(!T.ok)throw new Error("語音生成失敗");const E=await T.json();if(!E.success)throw new Error(E.error||"語音生成失敗");h.value={content:b.content,audioUrl:E.audioUrl},setTimeout(()=>{S.value&&S.value.play(),C.value?.scrollIntoView({behavior:"smooth",block:"start"})},1e3),a.notify({type:"positive",message:"故事生成完成！",position:"top"})}catch(p){a.notify({type:"negative",message:`發生錯誤：${p instanceof Error?p.message:"請稍後重試"}`,position:"top"}),console.error("生成故事時發生錯誤：",p)}finally{t.value=!1,f.value=!1}},audioEnded:()=>{console.log("音頻播放結束")},ageOptions:[{label:"2-4歲 (學前)",value:"2-4",description:"簡單有趣的故事，適合幼兒園前的寶寶"},{label:"5-7歲 (幼兒園)",value:"5-7",description:"包含基礎生活詞彙的故事"},{label:"8-10歲 (小學)",value:"8-10",description:"較長的故事，豐富的詞彙和情節"},{label:"10+歲 (小學高年級以上)",value:"10+",description:"更長的故事，更豐富的詞彙和情節"}],storyTypeOptions:[{label:"冒險故事",value:"adventure",description:"充滿刺激和挑戰的冒險故事"},{label:"童話故事",value:"fairy_tale",description:"充滿魔法和想像力的奇幻故事"},{label:"教育故事",value:"educational",description:"包含生活教育意義的啟發性故事"},{label:"動物故事",value:"animal",description:"以可愛動物為主角的溫馨故事"},{label:"科幻故事",value:"sci_fi",description:"激發想像力的科學幻想故事"}]}}}),x={class:"story-container"},ee={class:"hero-title"},ae={class:"input-group"},oe={class:"input-group"},te={class:"input-group"},se={class:"row justify-center q-mt-lg"},re={key:0,ref:"storySection",class:"story-section q-mt-xl"},le={class:"story-title q-mb-lg"},ne={class:"story-content col-12 col-md-7"},ie={class:"text-body1"},ue={class:"text-body1"},de={key:0,class:"story-image col-12 col-md-5"},pe={key:0,class:"audio-player"},me=["src"],ce={class:"row justify-end q-mt-md"},ge={class:"q-ml-sm"};function ye(a,t,g,f,d,h){return m(),z(H,{class:"story-page"},{default:s(()=>[r("div",x,[r("h2",ee,[o(w,{name:"auto_stories",size:"md",color:"primary",class:"q-mr-sm"}),t[5]||(t[5]=c(" Create your own ")),t[6]||(t[6]=r("span",{class:"highlight"},"Bedtime Stories",-1)),t[7]||(t[7]=r("div",{class:"subtitle"},"為您的孩子創造獨特的睡前故事",-1))]),o(D,{class:"form-card q-pa-xl"},{default:s(()=>[o(K,{onSubmit:G(a.generateStory,["prevent"]),class:"q-gutter-md"},{default:s(()=>[r("div",ae,[o(J,{modelValue:a.formData.childName,"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.childName=e),outlined:"",label:"孩子的名字",rules:[e=>!!e||"請輸入名字",e=>e.length<=20||"名字不能超過20個字符"]},{prepend:s(()=>[o(w,{name:"person"})]),hint:s(()=>t[8]||(t[8]=[c(" 可以輸入中文或英文名字 ")])),_:1},8,["modelValue","rules"])]),r("div",oe,[o(I,{modelValue:a.formData.ageGroup,"onUpdate:modelValue":t[1]||(t[1]=e=>a.formData.ageGroup=e),options:a.ageOptions,outlined:"",label:"年齡段","emit-value":"","map-options":"",rules:[e=>!!e||"請選擇年齡段"]},{prepend:s(()=>[o(w,{name:"child_care"})]),option:s(e=>[o(q,V(N(e.itemProps)),{default:s(()=>[o(F,null,{default:s(()=>[o(B,null,{default:s(()=>[c(u(e.opt.label),1)]),_:2},1024),o(B,{caption:""},{default:s(()=>[c(u(e.opt.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","rules"])]),r("div",te,[o(I,{modelValue:a.formData.storyType,"onUpdate:modelValue":t[2]||(t[2]=e=>a.formData.storyType=e),options:a.storyTypeOptions,outlined:"",label:"故事類型","emit-value":"","map-options":"",rules:[e=>!!e||"請選擇故事類型"]},{prepend:s(()=>[o(w,{name:"auto_stories"})]),option:s(e=>[o(q,V(N(e.itemProps)),{default:s(()=>[o(F,null,{default:s(()=>[o(B,null,{default:s(()=>[c(u(e.opt.label),1)]),_:2},1024),o(B,{caption:""},{default:s(()=>[c(u(e.opt.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","rules"])]),r("div",se,[o(O,{type:"submit",color:"primary",label:"開始創建故事",loading:a.loading,class:"submit-btn",icon:"magic_button"},null,8,["loading"])])]),_:1},8,["onSubmit"])]),_:1})]),a.generatedStory?(m(),y("div",re,[o(D,{class:"story-card q-pa-lg"},{default:s(()=>[r("h3",le,u(a.formData.childName)+" 的故事",1),(m(!0),y(A,null,R(a.storyParagraphs,(e,i)=>(m(),y("div",{key:i,class:"paragraph-section q-mb-xl row items-start q-col-gutter-lg"},[r("div",ne,[r("p",ie,u(a.translatedParagraphs[i]),1),r("p",ue,u(e),1)]),a.paragraphImages[i]?(m(),y("div",de,[o(W,{src:a.paragraphImages[i],"spinner-color":"primary",style:{"border-radius":"12px","box-shadow":"0 4px 12px rgba(0, 0, 0, 0.1)"}},null,8,["src"])])):Q("",!0)]))),128)),a.generatedStory.audioUrl?(m(),y("div",pe,[r("audio",{ref:"audioPlayer",src:a.generatedStory.audioUrl,controls:"",class:"full-width",onEnded:t[3]||(t[3]=(...e)=>a.audioEnded&&a.audioEnded(...e))},null,40,me)])):Q("",!0),r("div",ce,[o(O,{flat:"",color:"primary",label:"重新生成",disable:a.loading,onClick:a.generateStory,icon:"refresh"},null,8,["disable","onClick"])])]),_:1})],512)):Q("",!0),o(Y,{modelValue:a.showProgress,"onUpdate:modelValue":t[4]||(t[4]=e=>a.showProgress=e),persistent:""},{default:s(()=>[o(D,{style:{"min-width":"300px"}},{default:s(()=>[o(X,{class:"row items-center"},{default:s(()=>[r("span",ge,u(a.progressMessage),1),o(L,{indeterminate:"",class:"q-mt-md",color:"primary"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const je=U(Z,[["render",ye],["__scopeId","data-v-b5e75c7b"],["__file","StoryPage_backend.vue"]]);export{je as default};
