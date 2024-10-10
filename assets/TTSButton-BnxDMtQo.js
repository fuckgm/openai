import{G as c,u as z,r as l,n as w,j as v,B as M}from"./index-CcjdykQ_.js";function B(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 6h12v12H6z"},child:[]}]})(t)}function V(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"},child:[]}]})(t)}function x(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(t)}function y(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"},child:[]}]})(t)}function W(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"},child:[]}]})(t)}const p={ja:{male:["ja-JP-Standard-C","ja-JP-Wavenet-C"],female:["ja-JP-Standard-A","ja-JP-Wavenet-A"]},"zh-CN":{male:["zh-CN-Standard-B","zh-CN-Wavenet-B"],female:["zh-CN-Standard-A","zh-CN-Wavenet-A"]},"zh-TW":{male:["zh-TW-Standard-B","zh-TW-Wavenet-B"],female:["zh-TW-Standard-A","zh-TW-Wavenet-A"]},en:{male:["en-US-Standard-B","en-GB-Standard-B"],female:["en-US-Standard-C","en-GB-Standard-A"]},ko:{male:["ko-KR-Standard-B","ko-KR-Wavenet-B"],female:["ko-KR-Standard-A","ko-KR-Wavenet-A"]}};function H(t){const{language:o,text:f,gender:r,...m}=t,{t:i}=z(),[n,h]=l.useState(!1),e=l.useMemo(()=>new SpeechSynthesisUtterance,[]);l.useEffect(()=>{e.lang=o==="wyw"?"zh-TW":o,e.volume=1,e.rate=1,e.text=f;const g=window.speechSynthesis.getVoices();let a;if(p[e.lang]){const s=p[e.lang][r];a=g.find(d=>s.includes(d.name))}if(!a){const s=r==="male"?["male","man","男"]:["female","woman","女"];a=g.find(d=>d.lang.startsWith(e.lang)&&s.some(S=>d.name.toLowerCase().includes(S)))}a||(a=g.find(s=>s.lang.startsWith(e.lang))),a?(e.voice=a,console.log(`Selected voice: ${a.name}`)):console.warn(`No matching voice found for ${o} and ${r}. Using default voice.`),e.onend=()=>{h(!1),window.speechSynthesis.cancel()},e.onerror=()=>{w.error(i("Something went wrong, please try again later.")),h(!1),window.speechSynthesis.cancel()},e.onstart=()=>{h(!0)}},[o,i,f,e,r]);const u=l.useCallback(()=>{n?(window.speechSynthesis.pause(),window.speechSynthesis.cancel()):(window.speechSynthesis.cancel(),window.speechSynthesis.speak(e))},[n,e]);return m.type="button",v.jsx(M,{shape:"circle",color:n?"error":"ghost",size:"sm",title:i(n?"Stop reading":"Start reading"),onClick:u,...m,children:n?v.jsx(B,{size:"16"}):v.jsx(W,{size:"16"})})}export{B as M,H as T,y as a,x as b,V as c};
