"use client";
import BorderLines from "./components/BorderLines";
import {motion} from 'motion/react';

export default function Home() {
  return (
   <> 
    <main className="relative max-w-2xl w-full h-screen p-4 mx-auto overflow-visible bg-background flex justify-center items-center"> 
      <BorderLines/>

      <div className=" bg-black/3 overflow-hidden py-2">
        <MotionText/>
      </div>

    </main>
   </>
  );
}; 


function MotionText(){
  const size = 56;

  return (
    <div className="flex gap-2 items-center justify-center overflow-visible font-serif  w-fit">
  
      {/* avatar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: size }}
        transition={{ duration: 0.45, ease: "backOut", delay: 0.5 }}
        className="flex justify-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.45, ease: "backOut", delay: 0.6 }}
          style={{
            width: size,
            height: size,
          }}
          className="squiracle relative bg-black"
        >
        </motion.div>
      </motion.div>

      <div className="">

        {/* name */}
        <div>
          <motion.span 
            className="inline-block text-3xl overflow-visible"
            initial={{ y: 60, x: 0, rotate: -10, filter: 'blur(0.5px)' }}
            animate={{ x: [0, 18, 0],  y: [0, -5, 0], rotate: 0, filter: 'blur(0px)' }}  // y: [0, -4, 0]
            transition={{ duration: 0.5, times: [0, 0.5, 1], ease:'backOut' }}  // anticipate 
          >
            Shani 
          </motion.span>
          <motion.span 
            className="inline-block text-3xl"
            initial={{ x: 60,  opacity: 0, rotate: 40 }}
            animate={{ x: 0,  opacity: 1, rotate: 0 }}
            transition={{ duration: 0.35, ease: 'backOut', delay: 0.05 }} 
          >
            <span> Tiwari </span>
            <motion.span className="span"
            initial={{opacity: 0, filter: 'blur(4px)'}} animate={{opacity: 1, filter: 'blur(0px)'}} transition={{delay: 1, duration: 0.45}}
            >
              <span className="text-xs italic">aka </span>
              <span className="text-base">mr cool</span>
            </motion.span>
          </motion.span>
        </div>
        {/* profession */}
        <motion.span className="span"
            initial={{opacity: 0, filter: 'blur(4px)'}} animate={{opacity: 1, filter: 'blur(0px)'}} transition={{delay: 1.25, duration: 0.35}}
            >
              <span className="text-sm font-sans">Design Engineer & Developer </span>
        </motion.span>
      </div>

    </div>
  )
}



