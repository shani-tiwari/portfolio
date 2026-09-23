"use client";
import BorderLines from "./components/BorderLines";
import {motion} from 'motion/react';

export default function Home() {
  return (
   <> 
    <main className="relative max-w-2xl w-full h-screen p-4 mx-auto bg-background flex justify-center items-center"> 
      <BorderLines/>

      <div className="size-fit overflow-hidden p-2">
        <MotionText/>
      </div>

    </main>
   </>
  );
}; 


function MotionText(){

  return (
    <div className="size-fit flex gap-2 items-center overflow-visible">
      <motion.span 
        className="inline-block text-3xl"
        initial={{ y: 60, x: -10 }}
        animate={{ x: [-14, 14, 0],  y: 0 }}
        transition={{ duration: 0.45, times: [0, 0.5, 1], ease:'backOut' }}  // anticipate 
      >
        <span className="text-shadow-xs text-shadow-black/20">
          Shani
        </span>
      </motion.span>

      <motion.span 
        className="inline-block text-3xl"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'backOut', delay: 0.05 }} 
      >  
        <span className="text-shadow-xs text-shadow-black/20">
          Tiwari
        </span>
      </motion.span>
    </div>
  )
}



