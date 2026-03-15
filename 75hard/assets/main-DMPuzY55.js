import{a as e,i as t,n,o as r,r as i,t as a}from"./browser-B77OIPgF.js";var o=e(),s=r(),c=t(),l=[`Greatness awaits.`,`Forge yourself anew.`,`Evolve every day.`,`Redefine your limits.`,`Shape your future.`,`Construct a legend.`,`Become the outlier.`,`You are the upgrade.`,`Rewrite your story.`,`Shed your skin.`,`Ignite the change.`,`Craft your character.`,`Beyond your best.`],u=17,d=5;(0,o.createRoot)(document.getElementById(`root`)).render((0,c.jsx)(s.StrictMode,{children:(0,c.jsx)(()=>{let[e,t]=(0,s.useState)(!1),[r,o]=(0,s.useState)(``),[f,p]=(0,s.useState)(d);(0,s.useEffect)(()=>{let e=l[Math.floor(Math.random()*l.length)];o(e),p(d*(u/e.length)),n(async e=>{await a(e)}).then(()=>{t(!0)})},[]);let m=(0,s.useMemo)(()=>({background:{color:{value:`#FFFFFF`}},fpsLimit:120,interactivity:{events:{onHover:{enable:!0,mode:`repulse`}},modes:{repulse:{distance:100,duration:.4}}},particles:{color:{value:[`#DCC0A8`,`#C2B2D6`,`#B8C6AC`]},links:{color:`#000000`,distance:50,enable:!0,opacity:.05,width:1},move:{direction:`none`,enable:!0,outModes:{default:`out`},random:!0,speed:1,straight:!1,vibrate:!1,warp:!1},number:{density:{enable:!0},value:180},opacity:{value:{min:.2,max:.7}},shape:{type:`circle`},size:{value:{min:2,max:4}}},detectRetina:!0}),[]);return(0,c.jsxs)(`div`,{id:`root`,children:[e&&(0,c.jsx)(`div`,{className:`particles-wrapper`,children:(0,c.jsx)(i,{id:`tsparticles`,options:m})}),(0,c.jsxs)(`div`,{className:`landing-container`,children:[(0,c.jsx)(`div`,{className:`top-text`,children:`75 hard`}),(0,c.jsx)(`h1`,{className:`main-headline`,style:{fontSize:`${f}rem`},children:r}),(0,c.jsxs)(`div`,{className:`button-group`,children:[(0,c.jsx)(`a`,{href:`tanav.html`,className:`pill-button button-tanav`,children:`Tanav`}),(0,c.jsx)(`a`,{href:`venya.html`,className:`pill-button button-venya`,children:`Venya`})]})]}),(0,c.jsx)(`style`,{children:`
          @keyframes globalOscillation {
            0%, 100% {
              transform: translateX(-5%);
            }
            50% {
              transform: translateX(5%);
            }
          }
          .particles-wrapper {
            width: 110%; /* Slightly wider to accommodate shift */
            left: -5%;
            animation: globalOscillation 10s ease-in-out infinite;
          }
        `})]})},{})}));