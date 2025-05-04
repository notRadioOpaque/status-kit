const CommandGuide = () => {
  return (
    <div className={`mt-24 inline-flex rounded-lg bg-[#a5a4a4] p-1`}>
      <div className="relative mr-1 flex h-14 min-w-24 items-center rounded bg-[#171717] text-white">
        <span className="absolute top-1 left-2 mr-1 text-xs">⌘</span>
        <span className="absolute bottom-1 left-2 text-sm font-bold">command</span>
      </div>
      <div className="flex h-14 min-w-14 items-center justify-center rounded bg-[#171717] px-2 text-white">
        <span className="text-lg font-bold">K</span>
      </div>
    </div>
  );
};

export default CommandGuide;
