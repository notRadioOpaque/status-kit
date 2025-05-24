const CommandGuide = () => {
  return (
    <div className={`mt-10 inline-flex rounded-lg bg-[#a5a4a4] p-1`}>
      <div className="text-primary-text relative mr-1 flex h-14 min-w-24 items-center rounded bg-white dark:bg-[#171717] dark:text-white">
        <span className="absolute top-1 left-2 mr-1 text-xs">⌘</span>
        <span className="absolute bottom-1 left-2 text-sm font-bold">command</span>
      </div>
      <div className="text-primary-text flex h-14 min-w-14 items-center justify-center rounded bg-white px-2 dark:bg-[#171717] dark:text-white">
        <span className="text-lg font-bold">K</span>
      </div>
    </div>
  );
};

export default CommandGuide;
