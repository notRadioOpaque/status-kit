import {Icon} from "@iconify/react";

const InitialSearch = () => {
  return (
    <div className="mt-6 flex h-[280px] flex-col items-center gap-4 rounded-2xl bg-[#262628] bg-radial py-10 shadow-2xl">
      <div className="text-muted-foreground py-6 text-center">
        <div className="mb-8 flex justify-center">
          <Icon className="text-gray-500" height={48} icon="iconamoon:search-light" width={48} />
        </div>
        <p className="text-2xl font-medium text-white">Start typing to explore HTTP status codes</p>
        <p className="mt-2 text-gray-400">
          Try things like <span className="text-blue-400">404</span>{" "}
          <span className="text-blue-400">Redirect</span>, or{" "}
          <span className="text-blue-400">Server error</span>
        </p>
      </div>
    </div>
  );
};

export default InitialSearch;
