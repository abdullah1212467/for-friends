import {useRef,useState} from 'react';import {Music,Pause} from 'lucide-react';
export default function MusicPlayer(){
 const a=useRef(),[on,setOn]=useState(false),[err,setErr]=useState(false);
 const toggle=async()=>{try{if(on){a.current.pause();setOn(false)}else{await a.current.play();setOn(true);setErr(false)}}catch{setErr(true)}};
 return <div className="music"><audio ref={a} src="/birthday-music.mp3" loop preload="none"/>
  <button onClick={toggle} aria-label="Toggle music" title={err?'Add public/birthday-music.mp3':'Music'}>{on?<Pause size={20}/>:<Music size={20}/>}</button>
  {err&&<small>Add public/birthday-music.mp3</small>}</div>;
}
