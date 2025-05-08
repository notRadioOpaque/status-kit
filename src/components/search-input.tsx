import {Icon} from "@iconify/react";
import {useEffect, useRef} from "react";

interface Props {
  searchInput: string;
  action: (e: any) => void;
}

function SearchInput({searchInput, action}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-6 text-2xl dark:bg-[#262628] dark:text-white">
      <Icon height={24} icon="iconamoon:search-light" />
      <input
        ref={inputRef}
        className="w-full bg-transparent text-lg outline-none"
        placeholder="Type a status code..."
        type="text"
        value={searchInput}
        onInput={(e) => action(e.currentTarget.value)}
      />
    </div>
  );
}

export default SearchInput;
