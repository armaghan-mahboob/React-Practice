import React, { forwardRef } from "react";

const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      type="text"
      placeholder="Enter what do you want to do?"
      className={`${className} w-2/6 h-16 px-6 py-4 
        bg-white/20
        border border-white/30
        rounded-2xl
        text-white placeholder-white/80
        shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.15)]
        outline-none
        transition-all duration-300 ease-out
        focus:border-white/60 focus:bg-white/15
        focus:shadow-[0_8px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_3px_rgba(255,255,255,0.08)]
        focus:placeholder-white/20
        hover:bg-white/12 hover:border-white/40
        text-md font-light tracking-wide`}
      {...props}
      ref={ref}
    />
  );
});

export default Input;
