import Link from "next/link";
import {Icon} from "@iconify/react";

const Logo = () => {
  return (
    <Link className="flex items-center gap-3" href={"/"}>
      <Icon height="40" icon="material-icon-theme:folder-tools-open" width="40" />

      <p className="text-xl font-bold md:text-3xl">Status Kit</p>
    </Link>
  );
};

export default Logo;
