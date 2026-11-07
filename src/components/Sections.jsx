import {useEffect,useRef,useState} from 'react';import {motion,useInView,AnimatePresence} from 'framer-motion';
import {Smile,Flower2,Heart,Sun,Sparkles,PartyPopper} from 'lucide-react';
import {burst} from './Effects.jsx';import {photos,placeholder} from '../photos.js';
const fade={initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:true,margin:'-80px'},transition:{duration:.8}};
export const Hero=()=><section><motion.h1 className="script big" initial={{opacity:0,scale:.7}} animate={{opacity:1,scale:1}} transition={{duration:1.2}}>Happy Birthday, Tuba Iman! 🎀</motion.h1>
 <motion.p className="sub" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2,duration:1}}>Today, the world celebrates someone truly special.</motion.p>
 <motion.span className="chev" animate={{y:[0,10,0]}} transition={{repeat:Infinity,duration:1.6}}>⌄</motion.span></section>;
export function Age(){
 const r=useRef(),v=useInView(r,{amount:.5});useEffect(()=>{if(v)burst({y:innerHeight*.4,n:90})},[v]);
 return <section ref={r}><motion.h2 {...fade}>20 Years of Being Wonderful</motion.h2>
  <motion.div className="twenty" initial={{scale:.3,opacity:0}} whileInView={{scale:1,opacity:1}} viewport={{once:true}} transition={{type:'spring',stiffness:80,damping:10}}>20
   {['⭐','✨','⭐','✨'].map((s,i)=><span key={i} className={'orb o'+i}>{s}</span>)}</motion.div>
  <motion.p className="sub" {...fade}>1 December</motion.p></section>;
}
const LETTER=`Dear Tuba Iman,

Today is all about you. A beautiful soul deserves a beautiful celebration.

May your smile always shine, your dreams become reality, and your life be filled with endless happiness, love, success, and unforgettable memories.

You are truly special, and I hope your 20th birthday brings you everything your heart wishes for.

Keep smiling, keep shining, and never stop being the wonderful person you are.

Happy 20th Birthday, Tuba! 💗`;
export function Letter(){
 const [open,setOpen]=useState(false),[n,setN]=useState(0);
 useEffect(()=>{if(!open)return;const t=setTimeout(()=>{const i=setInterval(()=>setN(c=>c>=LETTER.length?(clearInterval(i),c):c+1),22)},900);return()=>clearTimeout(t)},[open]);
 return <section><motion.h2 {...fade}>A Letter For You</motion.h2>
  {!open?<motion.button className="env" onClick={()=>{setOpen(true);burst({n:40,kind:'sparkle'})}} whileHover={{scale:1.06,rotate:-2}} whileTap={{scale:.95}} animate={{y:[0,-8,0]}} transition={{repeat:Infinity,duration:3}}>
    <span className="flap"/><span className="heartseal">💗</span><small>Tap to open</small></motion.button>
  :<motion.div className="letter glass" initial={{opacity:0,scale:.6,rotateX:70}} animate={{opacity:1,scale:1,rotateX:0}} transition={{duration:1}}>
    <p>{LETTER.slice(0,n)}<i className="caret"/></p>{n<LETTER.length&&<button className="skip" onClick={()=>setN(LETTER.length)}>skip</button>}</motion.div>}
 </section>;
}
export const Gallery=()=><section><motion.h2 {...fade}>Little Moments, Beautiful Memories</motion.h2>
 <div className="grid">{photos.map((p,i)=><motion.figure key={i} className="polaroid" style={{'--r':((i%3)-1)*4+'deg'}} initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(i%3)*.15}} whileHover={{scale:1.08,rotate:0,zIndex:5}}>
  <div className="float" style={{animationDelay:i*.4+'s'}}><img src={p.src||placeholder(i)} alt={p.caption} loading="lazy"/><figcaption className="script">{p.caption}</figcaption></div></motion.figure>)}</div></section>;
const R=[[Smile,'Your beautiful smile'],[Flower2,'Your lovely personality'],[Heart,'Your kindness'],[Sun,'Your positive energy'],[Sparkles,'Your uniqueness'],[PartyPopper,'The happiness you bring to others']];
export const Reasons=()=><section><motion.h2 {...fade}>Reasons You Are Special</motion.h2>
 <div className="grid r">{R.map(([I,t],i)=><motion.div key={t} className="glass card" initial={{opacity:0,y:60,scale:.9}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true}} transition={{delay:i*.12,duration:.7}} whileHover={{y:-8}}>
  <I size={34} color="#e0709a"/><p>{t}</p></motion.div>)}</div></section>;
export function Gift(){
 const [o,setO]=useState(false),ref=useRef();
 const go=()=>{if(o)return;setO(true);const r=ref.current.getBoundingClientRect();const p={x:r.left+r.width/2,y:r.top+30};burst({...p,n:150});burst({...p,n:60,kind:'sparkle'})};
 return <section><motion.h2 {...fade}>One More Surprise For You 🎁</motion.h2>
  <div ref={ref} className={'gift'+(o?' open':'')} onClick={go} role="button" tabIndex={0} onKeyDown={e=>e.key==='Enter'&&go()}>
   <div className="glow"/><div className="lid"><i className="bow"/></div><div className="box"><i className="rib"/></div></div>
  {!o&&<p className="sub">Tap the gift</p>}
  <AnimatePresence>{o&&<motion.p className="glass reveal" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:.5}}>May your 20th year be filled with beautiful surprises, endless happiness, and dreams coming true!</motion.p>}</AnimatePresence></section>;
}
export function Finale(){
 const r=useRef(),v=useInView(r,{amount:.4});
 useEffect(()=>{if(!v)return;burst({n:200,y:innerHeight*.3});const a=setInterval(()=>burst({kind:'rain',n:6}),250);
  const b=setInterval(()=>burst({x:Math.random()*innerWidth,y:Math.random()*innerHeight*.5,n:40,kind:'sparkle'}),900);return()=>{clearInterval(a);clearInterval(b)}},[v]);
 const B=['#ff8fb8','#c9b3ff','#ffd3b0','#ffc2d9','#b9a3ff','#ffb3cf'];
 return <section ref={r} className="finale">{B.map((c,i)=><span key={i} className="balloon" style={{left:6+i*17+'%',background:c,animationDelay:i*.7+'s'}}/>)}
  <motion.h1 className="script big glowtext" {...fade}>Happy 20th Birthday, Tuba Iman! 💗</motion.h1>
  <motion.p className="sub" {...fade}>Stay beautiful. Stay happy. Keep shining!</motion.p>
  <button className="btn" onClick={()=>{burst({n:250});burst({n:80,kind:'sparkle'})}}>Celebrate Again 🎉</button></section>;
}
