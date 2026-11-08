
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);





export default function MotionText() {
  const size = 52;

  const containerRef = useRef<HTMLDivElement>(null);
  const avatarOuterRef = useRef<HTMLDivElement>(null);
  const avatarInnerRef = useRef<HTMLDivElement>(null);
  const shaniRef = useRef<HTMLSpanElement>(null);
  const tiwariRef = useRef<HTMLSpanElement>(null);
  const mrCoolRef = useRef<HTMLSpanElement>(null);
  const professionRef = useRef<HTMLSpanElement>(null);

  // useGSAP(() => {
  //   gsap.set(avatarOuterRef.current, { width: 0 });
  //   gsap.set(avatarInnerRef.current, { scale: 0 });

  //   gsap.set(shaniRef.current, {
  //     x: 0,
  //     y: 0,
  //     rotate: -10,
  //     filter: "blur(0.5px)",
  //   });

  //   gsap.set(tiwariRef.current, {
  //     x: 60,
  //     opacity: 0,
  //     rotate: 40,
  //   });

  //   gsap.set(mrCoolRef.current, {
  //     opacity: 0,
  //     filter: "blur(4px)",
  //   });

  //   gsap.set(professionRef.current, {
  //     opacity: 0,
  //     filter: "blur(4px)",
  //   });

  //   const tl = gsap.timeline();

  //   // Shani
  //   tl.to(shaniRef.current, {
  //       rotate: 0,
  //       filter: "blur(0px)",
  //       duration: 0.5,
  //       ease: "back.out",
  //     },
  //     0
  //   );

  //   tl.to(shaniRef.current, {
  //       keyframes: [
  //         { x: 18, y: -5, duration: 0.25, ease: "back.out" },
  //         { x: 0, y: 0, duration: 0.25, ease: "back.out" },
  //       ],
  //     },
  //     0
  //   );

  //   // Tiwari
  //   tl.to(tiwariRef.current, {
  //       x: 6,
  //       opacity: 1,
  //       rotate: 0,
  //       duration: 0.35,
  //       ease: "back.out",
  //     },
  //     0.05
  //   );

  //   // Avatar outer
  //   tl.to(avatarOuterRef.current, {
  //       width: size,
  //       duration: 0.45,
  //       ease: "back.out",
  //     },
  //     0.5
  //   );

  //   // Avatar inner
  //   tl.to(avatarInnerRef.current,
  //     {
  //       keyframes: [
  //         { scale: 1.1, duration: 0.225, ease: "back.out" },
  //         { scale: 1, duration: 0.225, ease: "back.out" },
  //       ],
  //     },
  //     0.6
  //   );

  //   // Mr Cool
  //   tl.to(mrCoolRef.current, {
  //       opacity: 1, 
  //       filter: "blur(0px)", 
  //       duration: 0.45, 
  //       ease: "power1.out",
  //     }, 1
  //   );

  //   // Profession
  //   tl.to(professionRef.current,
  //     {
  //       opacity: 1,
  //       filter: "blur(0px)",
  //       duration: 0.35,
  //       ease: "power1.out",
  //     },
  //     1.25
  //   );

  //   tl.fromTo(containerRef.current, {
  //       y: 250,
  //       scale: 1.05,
  //       duration: 0.5,
  //       ease: "power1.out",
  //   }, {
  //       y: 4, scale: 1
  //   });

  // }, { scope: containerRef });


  // function selectElementText(el) {
  //   if (window.getSelection && document.createRange) {
  //     const selection = window.getSelection();
  //     const range = document.createRange();
  //     range.selectNodeContents(el);
  //     selection.removeAllRanges();
  //     selection.addRange(range);
  //   }
  // };

  return (
    <div ref={containerRef}
      className="flex flex-col gap-4 md:flex-row md:items-center items-start justify-between w-full pr-4"
    >
      <div className="flex gap-2 items-center justify-center overflow-visible w-fit">
        {/* Avatar */}
        <div ref={avatarOuterRef}
          className="flex justify-center shrink-0"
        >
          <div ref={avatarInnerRef}
            style={{ width: size, height: size }}
            className="squiracle relative overflow-hidden"
          >
            <Image
              src="/me.jpg"
              alt="avatar"
              fill
              sizes="52px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          {/* Name */}
          <div>
            <span ref={shaniRef} className="inline-block text-2xl overflow-visible">
              Shani
            </span>

            <span ref={tiwariRef} className="inline-block text-2xl">
              <span> Tiwari</span>

              <span ref={mrCoolRef} className="inline-block text-base">
                /mr cool
              </span>
            </span>
          </div>

          {/* Profession */}
          <span ref={professionRef} className="inline-block">
            <span className="text-sm font-sans">
              Design Engineer/Developer
            </span>
          </span>
        </div>
      </div>

      {/* email */}
      <div>
        <p className="text-xs"> Email:</p> 
        <p className="text-sm select-all">shanitiwari2021@gmail.com</p>
      </div>

    </div>
  );
}
