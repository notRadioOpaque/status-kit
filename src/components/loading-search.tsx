const LoadingSearch = () => {
  const skeletons = Array(3).fill(0);

  return (
    <div className="mt-6 flex h-[280px] flex-col justify-center gap-4 rounded-2xl bg-[#262628]">
      <div className="mx-6 my-4 flex flex-col gap-4">
        {skeletons.map((_, idx) => (
          <div key={idx} className="h-[56px] w-full animate-pulse rounded-lg bg-[#333337]" />
        ))}
      </div>
    </div>
  );
};

export default LoadingSearch;
