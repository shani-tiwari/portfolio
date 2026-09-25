"use client";
import { cn } from "@/utils/lib";
import BorderLines from "./components/BorderLines";
import {motion} from 'motion/react';

export default function Home() {
  return (
   <> 
    <main className="relative max-w-2xl w-full h-screen p-4 mx-auto overflow-visible bg-background flex justify-center items-center"> 
      <BorderLines/>

      <div className=" overflow-hidden p-8  bg-black/10">
        <MotionText/>
      </div>

    </main>
   </>
  );
}; 


function MotionText(){
  const size = 48;

  return (
    <div className="flex gap-2 items-center justify-center overflow-visible font-serif  w-66">
      <motion.span 
        className="inline-block text-3xl overflow-visible"
        initial={{ y: 60, x: 0, rotate: -10, filter: 'blur(0.5px)' }}
        animate={{ x: [0, 18, 0],  y: [0, -5, 0], rotate: 0, filter: 'blur(0px)' }}  // y: [0, -4, 0]
        transition={{ duration: 0.5, times: [0, 0.5, 1], ease:'backOut' }}  // anticipate 
      >
        <span className="overflow-visible"> Shani </span>
      </motion.span>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: size }}
        transition={{ duration: 0.45, ease: "backOut", delay: 0.5 }}
        className="flex justify-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ duration: 0.45, ease: "backOut", delay: 0.6 }}
          style={{
            width: size,
            height: size,
          }}
          className="relative bg-black rounded-full"
        >
          {/* svg */}
            <svg className="absolute inset-0 -top-2" style={{scale: 4}} width="48" height="48" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id='track' d="M159.5 37C91 39.5 109 17.4711 99.7132 8.4939C94.0871 3.05535 86.4565 5.80675e-07 78.5 0C70.5435 -5.80675e-07 66.5 2.22371 58.9134 6.5C41.5 24.5 68.5 39 0 38H12H24.5L49 37C54.5 39.5 53.7187 15.0878 58.9134 10.0663C64.1081 5.04477 71.1536 2.22371 78.5 2.22371C85.8464 2.22371 92.8919 5.04478 98.0866 10.0663C103.281 15.0878 102.5 37 109 37H159.5Z" 
              fill="#fff"/>
            </svg>
          {/* svg */}
        </motion.div>
      </motion.div>




      <motion.span 
        className="inline-block text-3xl"
        initial={{ x: 60,  opacity: 0, rotate: 40 }}
        animate={{ x: 0,  opacity: 1, rotate: 0 }}
        transition={{ duration: 0.35, ease: 'backOut', delay: 0.05 }} 
      >
        <span className="text-shadow-xs text-shadow-black/20">
          Tiwari
        </span>
      </motion.span>
    </div>
  )
}



