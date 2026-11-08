"use client";
import BorderLines from "./components/BorderLines";
import Footer from "./components/Footer";
import MotionText from "./components/Header";
import Work from "./components/Work";

export default function Home() {
  return (
   <> 
    <main className="bg-background relative max-w-3xl w-full h-fit p-2 md:p-4 mx-auto overflow-visible flex justify-center"> 
      <BorderLines/>

      <div className="overflow-hidden p-4 flex flex-col gap-4">
        <MotionText/>
        <Work/>
        <Footer/>
      </div>

    </main>
   </>
  );
}; 


