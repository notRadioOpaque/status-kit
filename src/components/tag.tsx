import * as React from "react";

import {cn} from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  textColor: string;
  icon: React.ReactNode;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({className, text, textColor, icon, ...props}, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "maw-w-full mx-auto inline-flex h-[30px] w-max items-center gap-2 rounded-full bg-[#bbdefb] px-4 py-3",
          className || "",
        )}
        style={{
          color: textColor,
        }}
        {...props}
      >
        <span className="flex h-4 w-4 items-center justify-center md:h-6 md:w-6">{icon}</span>
        <span className="text-[12px] font-bold md:text-sm">{text}</span>
      </div>
    );
  },
);

Tag.displayName = "Tag";

export {Tag};
