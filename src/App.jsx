import {useState} from 'react';import {motion,AnimatePresence} from 'framer-motion';
import {FX,Floaters,burst} from './components/Effects.jsx';import Cake from './components/Cake.jsx';import MusicPlayer from './components/Music.jsx';
import {Hero,Age,Letter,Gallery,Reasons,Gift,Finale} from './components/Sections.jsx';
export default function App(){
 const [open,setOpen]=useState(false);
 const go=()=>{burst({n:120,kind:'sparkle'});burst({n:100});setTimeout(()=>setOpen(true),700)};
 return <>
  <Floaters/><FX/>
  <AnimatePresence mode="wait">
   {!open?<motion.div key="w" className="welcome" exit={{opacity:0,scale:1.15,filter:'blur(14px)'}} transition={{duration:.9}}>
     <motion.h1 className="script big" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1.4}}>Something magical is waiting for you...</motion.h1>
     <motion.button className="btn pulse" onClick={go} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}} whileHover={{scale:1.07}} whileTap={{scale:.95}}>Open Your Birthday Surprise 💗</motion.button></motion.div>
   :<motion.main key="m" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.2}}>
     <MusicPlayer/><Hero/><Age/><Letter/>
     <section><h2>Make a Wish</h2><Cake/></section>
     <Gallery/><Reasons/><Gift/><Finale/></motion.main>}
  </AnimatePresence></>;
}
