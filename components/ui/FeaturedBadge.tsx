"use client";

const FeaturedRibbon = ({ label = "Top Project" }) => {
  return (
    <div className="absolute top-[15px] right-[-25px] rotate-45 z-[70] pointer-events-none">
      <span
        className="
          px-6 py-[3px] rounded-sm shadow-md text-[10px] font-semibold tracking-wider 
          
          /* Light Theme */
          bg-gradient-to-r from-[hsl(var(--primary))] to-purple-500 
          text-[hsl(var(--primary-foreground))]

          /* Dark Theme */
          dark:bg-gradient-to-r dark:from-amber-300/90 dark:to-yellow-200/90 
          dark:text-black dark:shadow-[0_0_6px_rgba(255,255,255,0.3)]
        "
      >
        {label}
      </span>
    </div>
  );
};

export default FeaturedRibbon;
