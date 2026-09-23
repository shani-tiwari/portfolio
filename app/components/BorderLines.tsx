import { cn } from "@/utils/lib";

export default function BorderLines(){
  return (
      <div>
        <HorizontalScale className="absolute inset-x-0 top-0 z-99"/>
        <HorizontalScale className="absolute inset-x-0 bottom-0 z-99"/>
        <VerticalScale className="absolute inset-y-0 left-0 z-99"/>
        <VerticalScale className="absolute inset-y-0 right-0 z-99"/>
      </div>
    )
};

const HorizontalScale = ({ className }: { className: string }) => (
  <div
    className={cn("h-4 w-[calc(100%-2rem)] mx-auto border-y border-line-pattern/60 bg-size-[12px_12px] bg-fixed",
      "bg-[repeating-linear-gradient(315deg,var(--line-pattern),var(--line-pattern)_0.1px,transparent_1px,transparent_50%)]",
      className
    )}
  />)

const VerticalScale = ({ className }: {className: string}) => {
    return (
      <div 
        className={cn("w-4 h-full border-x border-line-pattern/60 bg-size-[12px_12px] bg-fixed",
          "bg-[repeating-linear-gradient(315deg,var(--line-pattern),var(--line-pattern)_0.1px,transparent_1px,transparent_50%)]",
          className
        )}
      />          
        
    )
};

