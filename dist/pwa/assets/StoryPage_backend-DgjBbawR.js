import{N as $,r as u,K as j,_ as I,P as h,R as A,S as s,V as r,U as a,Q as S,X as v,ag as R,ah as N,ai as O,$ as p,W as E,a0 as w,a2 as z,a1 as G,Y as _}from"./index-Bt9X-gmK.js";import{Q as L}from"./QInput-BLJCt-hP.js";import{Q as U,b as q,a as k,c as J}from"./QLinearProgress-Pc-TwvVw.js";import{u as M,Q as K,a as F}from"./use-quasar-DcvbMg8J.js";import{Q as T}from"./QCard-BRE4H3LM.js";import{Q as W}from"./QImg-DQOXaRlM.js";import{Q as X}from"./QCardSection-E9rmP5Lu.js";import{Q as Y}from"./QDialog-8rmp6e8Z.js";import{Q as H}from"./QPage-sE7QvzH2.js";import"./use-file-dom-props-D1Fl40RY.js";import"./use-id-zAMntinC.js";import"./use-dark-CKW0ss_3.js";import"./focus-manager-BJWzFvJg.js";import"./QChip-B2wuV6QM.js";import"./position-engine-BMuxjozn.js";import"./selection-o9jSdWhA.js";import"./use-timeout-DtYtcHt7.js";import"./format-CJebrXOQ.js";const Z=$({name:"StoryPageBackend",setup(){const e=M(),t=u(!1),y=j({childName:"",ageGroup:"",storyType:""}),B=u(!1),g=u("正在生成故事..."),c=u(null),o=u([]),d=u([]),m=u([]),P=u(null),V=u(null);return{formData:y,loading:t,showProgress:B,progressMessage:g,generatedStory:c,storyParagraphs:o,paragraphImages:d,translatedParagraphs:m,audioPlayer:P,storySection:V,printStory:()=>{console.log("列印故事"),c.value?window.print():e.notify({type:"negative",message:"故事尚未生成"})},generateStory:async()=>{try{t.value=!0,B.value=!0,o.value=[],d.value=[],m.value=[],c.value=null,g.value="正在創作故事...";const l=await fetch("https://zh-en-backend.alearn13994229.workers.dev/StoryGeneration",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({childName:y.childName,ageGroup:y.ageGroup,storyType:y.storyType,step:1})});if(!l.ok)throw new Error("故事生成失敗");const f=await l.json();if(!f.success)throw new Error(f.error||"故事生成失敗");o.value=f.content.split(`

`).filter(n=>n.trim());for(let n=0;n<o.value.length;n++){g.value=`正在翻譯...${n+1}/${o.value.length}`;const C=o.value[n],D=await(await fetch("https://zh-en-backend.alearn13994229.workers.dev/translate-zh-to-en",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:C})})).text();m.value.push(D)}for(let n=0;n<m.value.length;n++){const C=m.value[n];g.value=`正在生成配圖...${n+1}/${m.value.length}`;const Q=await fetch("https://zh-en-backend.alearn13994229.workers.dev/generate-image-by-single-paragraph",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({storyParagraph:C})});if(!Q.ok)throw new Error("圖片生成失敗");const D=await Q.json();d.value.push(D.image)}g.value="正在生成語音...";const b=await fetch("https://zh-en-backend.alearn13994229.workers.dev/StoryGeneration",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({step:3,content:m.value.join()})});if(!b.ok)throw new Error("語音生成失敗");const i=await b.json();if(!i.success)throw new Error(i.error||"語音生成失敗");c.value={content:f.content,audioUrl:i.audioUrl},setTimeout(()=>{P.value&&P.value.play(),V.value?.scrollIntoView({behavior:"smooth",block:"start"})},1e3),e.notify({type:"positive",message:"故事生成完成！",position:"top"})}catch(l){e.notify({type:"negative",message:`發生錯誤：${l instanceof Error?l.message:"請稍後重試"}`,position:"top"}),console.error("生成故事時發生錯誤：",l)}finally{t.value=!1,B.value=!1}},audioEnded:()=>{console.log("音頻播放結束")},downloadAudio:async()=>{try{if(!c.value?.audioUrl)throw new Error("找不到音頻檔案");const f=await(await fetch(c.value.audioUrl)).blob(),b=window.URL.createObjectURL(f),i=document.createElement("a");i.href=b,i.download=`${y.childName}的故事.mp3`,document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(b),document.body.removeChild(i),e.notify({type:"positive",message:"音頻檔案下載成功！",position:"top"})}catch(l){e.notify({type:"negative",message:`下載失敗：${l instanceof Error?l.message:"請稍後重試"}`,position:"top"}),console.error("下載音頻時發生錯誤：",l)}},ageOptions:[{label:"2-4歲 (學前)",value:"2-4",description:"簡單有趣的故事，適合幼兒園前的寶寶"},{label:"5-7歲 (幼兒園)",value:"5-7",description:"包含基礎生活詞彙的故事"},{label:"8-10歲 (小學)",value:"8-10",description:"較長的故事，豐富的詞彙和情節"},{label:"10+歲 (小學高年級以上)",value:"10+",description:"更長的故事，更豐富的詞彙和情節"}],storyTypeOptions:[{label:"冒險故事",value:"adventure",description:"充滿刺激和挑戰的冒險故事"},{label:"童話故事",value:"fairy_tale",description:"充滿魔法和想像力的奇幻故事"},{label:"教育故事",value:"educational",description:"包含生活教育意義的啟發性故事"},{label:"動物故事",value:"animal",description:"以可愛動物為主角的溫馨故事"},{label:"科幻故事",value:"sci_fi",description:"激發想像力的科學幻想故事"}]}}}),x={class:"story-container"},ee={class:"hero-title"},oe={class:"input-group"},ae={class:"input-group"},te={class:"input-group"},se={class:"row justify-center q-mt-lg"},re={key:0,ref:"storySection",class:"story-section q-mt-xl"},le={class:"story-title q-mb-lg"},ne={class:"story-content col-12 col-md-7"},ie={class:"text-body1"},ue={class:"text-body1"},de={key:0,class:"story-image col-12 col-md-5"},pe={key:0,class:"audio-player"},ce=["src"],me={class:"row justify-end q-mt-md"},ye={class:"q-ml-sm"};function ge(e,t,y,B,g,c){return h(),A(H,{class:"story-page"},{default:s(()=>[r("div",x,[r("h2",ee,[a(S,{name:"auto_stories",size:"md",color:"primary",class:"q-mr-sm"}),t[5]||(t[5]=v(" Create your own ")),t[6]||(t[6]=r("span",{class:"highlight"},"Bedtime Stories",-1)),t[7]||(t[7]=r("div",{class:"subtitle"},"為您的孩子創造獨特的睡前故事",-1))]),a(T,{class:"form-card q-pa-xl"},{default:s(()=>[a(K,{onSubmit:R(e.generateStory,["prevent"]),class:"q-gutter-md"},{default:s(()=>[r("div",oe,[a(L,{modelValue:e.formData.childName,"onUpdate:modelValue":t[0]||(t[0]=o=>e.formData.childName=o),outlined:"",label:"孩子的名字",rules:[o=>!!o||"請輸入名字",o=>o.length<=20||"名字不能超過20個字符"]},{prepend:s(()=>[a(S,{name:"person"})]),hint:s(()=>t[8]||(t[8]=[v(" 可以輸入中文或英文名字 ")])),_:1},8,["modelValue","rules"])]),r("div",ae,[a(F,{modelValue:e.formData.ageGroup,"onUpdate:modelValue":t[1]||(t[1]=o=>e.formData.ageGroup=o),options:e.ageOptions,outlined:"",label:"年齡段","emit-value":"","map-options":"",rules:[o=>!!o||"請選擇年齡段"]},{prepend:s(()=>[a(S,{name:"child_care"})]),option:s(o=>[a(U,N(O(o.itemProps)),{default:s(()=>[a(q,null,{default:s(()=>[a(k,null,{default:s(()=>[v(p(o.opt.label),1)]),_:2},1024),a(k,{caption:""},{default:s(()=>[v(p(o.opt.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","rules"])]),r("div",te,[a(F,{modelValue:e.formData.storyType,"onUpdate:modelValue":t[2]||(t[2]=o=>e.formData.storyType=o),options:e.storyTypeOptions,outlined:"",label:"故事類型","emit-value":"","map-options":"",rules:[o=>!!o||"請選擇故事類型"]},{prepend:s(()=>[a(S,{name:"auto_stories"})]),option:s(o=>[a(U,N(O(o.itemProps)),{default:s(()=>[a(q,null,{default:s(()=>[a(k,null,{default:s(()=>[v(p(o.opt.label),1)]),_:2},1024),a(k,{caption:""},{default:s(()=>[v(p(o.opt.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","rules"])]),r("div",se,[a(E,{type:"submit",color:"primary",label:"開始創建故事",loading:e.loading,class:"submit-btn"},null,8,["loading"])])]),_:1},8,["onSubmit"])]),_:1})]),e.generatedStory?(h(),w("div",re,[a(T,{class:"story-card q-pa-lg"},{default:s(()=>[r("h3",le,p(e.formData.childName)+" 的故事",1),(h(!0),w(z,null,G(e.storyParagraphs,(o,d)=>(h(),w("div",{key:d,class:"paragraph-section q-mb-xl row items-start q-col-gutter-lg"},[r("div",ne,[r("p",ie,p(e.translatedParagraphs[d]),1),r("p",ue,p(o),1)]),e.paragraphImages[d]?(h(),w("div",de,[a(W,{src:e.paragraphImages[d],"spinner-color":"primary",style:{"border-radius":"12px","box-shadow":"0 4px 12px rgba(0, 0, 0, 0.1)"}},null,8,["src"])])):_("",!0)]))),128)),e.generatedStory.audioUrl?(h(),w("div",pe,[r("audio",{ref:"audioPlayer",src:e.generatedStory.audioUrl,controls:"",class:"full-width",onEnded:t[3]||(t[3]=(...o)=>e.audioEnded&&e.audioEnded(...o))},null,40,ce)])):_("",!0),r("div",me,[a(E,{flat:"",color:"primary",label:"下載語音",disable:e.loading||!e.generatedStory?.audioUrl,onClick:e.downloadAudio,icon:"download"},null,8,["disable","onClick"]),a(E,{flat:"",color:"primary",label:"列印故事",disable:e.loading,onClick:e.printStory,icon:"print"},null,8,["disable","onClick"]),a(E,{flat:"",color:"primary",label:"重新生成",disable:e.loading,onClick:e.generateStory,icon:"refresh"},null,8,["disable","onClick"])])]),_:1})],512)):_("",!0),a(Y,{modelValue:e.showProgress,"onUpdate:modelValue":t[4]||(t[4]=o=>e.showProgress=o),persistent:""},{default:s(()=>[a(T,{style:{"min-width":"300px"}},{default:s(()=>[a(X,{class:"row items-center"},{default:s(()=>[r("span",ye,p(e.progressMessage),1),a(J,{indeterminate:"",class:"q-mt-md",color:"primary"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const Ae=I(Z,[["render",ge],["__scopeId","data-v-b6dd776f"],["__file","StoryPage_backend.vue"]]);export{Ae as default};
