(()=>{let e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();e=o+"-"+n+"-"+t;let d=0;const c=document.querySelector("#projectName"),r=document.querySelector("#projectMessage"),a=document.querySelector("#projectDate"),l=document.querySelector("#submit"),i=document.querySelector("#form"),u=document.querySelector(".show");let s=[],m=new Set,f=[];const p=document.querySelector("#today"),v=document.querySelector("#inbox"),y=document.querySelector("#project"),S=document.querySelector(".projectShow"),h=document.querySelector("#todoForm"),L=document.querySelector("#projectForm"),E=document.querySelector("#projectChangeName"),g=document.querySelector("#projectSubmit"),q=document.querySelector("#projectCancel"),C=document.querySelector("#todoSubmit"),k=document.querySelector("#todoCancel"),j=document.querySelector("#todoChangeName"),b=document.querySelector("#todoChangeText"),x=document.querySelector("#todoChangeDate");let D;function M(e,t,n){return null==t&&(t=""),null!=n&&""!=n||(n="n/a"),M.name=e,M.message=t,M.date=n,M.identifier=d,d++,{name:e,message:t,date:n,identifier:d}}function w(e){u.innerHTML="";for(let t=0;t<e.length;t++)u.append(H(e[t]))}function T(e){S.innerHTML="";for(let t=0;t<e.length;t++)S.append(B(e[t]))}function N(e,t){for(let n=0;n<t.length;n++)e.identifier==t[n].identifier&&t.splice(n,1);return t}function F(e){let t=new Set(e);return Array.from(t)}function H(e){const t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div");return t.classList.add("todoContainer"),n.classList.add("todoMessage"),o.classList.add("todoDelete"),d.classList.add("todoDate"),c.classList.add("todoName"),r.classList.add("todoIdentify"),a.classList.add("todoEdit"),c.textContent=e.name,r.textContent=e.identifier,n.textContent=e.message,d.textContent=e.date,t.append(c,n,d,r,o,a),o.addEventListener("click",(()=>{s=N(e,s),w(s)})),a.addEventListener("click",(()=>{h.style.display="block",j.value=e.name,D=e.name,b.value=e.message,x.value=e.date,console.log(e.identifier)})),h.onsubmit=function(){},C.addEventListener("click",(()=>!1)),k.addEventListener("click",(()=>{h.style.display="block"})),t}function B(e){const t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("div"),d=document.createElement("div");return t.classList.add("projectContainer"),n.classList.add("projectTitle"),o.classList.add("projectDelete"),d.classList.add("projectEdit"),n.textContent=e,t.append(n,o,d),t.addEventListener("click",(()=>{w(s)})),o.addEventListener("click",(()=>{m=function(e,t,n,o){for(let n=0;n<t.length;n++)t[n].name==e&&(N(t[n],t),n--);return n=function(e,t,n){for(let o=0;o<t.length;o++)e==t[o]&&(t.splice(o,1),n.has(e)&&n.delete(e));return n}(e,n,o),o}(e,s,f,m),w(s),T(f)})),d.addEventListener("click",(()=>{L.style.display="block",E.value=e})),L.onsubmit=function(){return!1},g.addEventListener("click",(()=>(e=function(e,t,n,o,d){if(o==d)return n;t.has(o)||t.add(o),t.delete(d);for(let t=0;t<e.length;t++)e[t]==d&&(e[t]=o);for(let e=0;e<n.length;e++)n[e].name==d&&(n[e].name=o);return o}(f,m,s,E.value,e),f=F(f),T(f),w(s),E.value=e,L.style.display="none",!1))),q.addEventListener("click",(()=>{L.style.dispaly="none"})),t}i.onsubmit=function(){const e=M(c.value,r.value,a.value);return s.unshift(e),""==!e.name&&(0==f.length?f.push(e.name):(f.unshift(e.name),f=F(f)),0==m.has(e.name)&&(S.firstChild?S.insertBefore(B(e.name),S.firstChild):S.append(B(e.name))),m.add(e.name)),u.firstChild?u.insertBefore(H(e),u.firstChild):u.append(H(e)),c.value="",r.value="",a.value="",!1},l.addEventListener("click",(()=>!1)),v.addEventListener("click",(()=>{w(s)})),p.addEventListener("click",(()=>{u.innerHTML="";for(let t=0;t<s.length;t++)s[t].date==e&&u.append(H(s[t]))})),y.addEventListener("click",(()=>{}))})();