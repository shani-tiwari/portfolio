"use client";
import BorderLines from "./components/BorderLines";
import MotionText from "./components/Header";

export default function Home() {
  return (
   <> 
    <main className="bg-background relative max-w-2xl w-full h-screen p-4 mx-auto overflow-visible flex justify-center items-center"> 
      <BorderLines/>

      <div className="overflow-hidden px-4">
        <MotionText/>
      </div>

    </main>
   </>
  );
}; 


