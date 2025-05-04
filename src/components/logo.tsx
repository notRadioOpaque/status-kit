import Link from "next/link";
import {Icon} from "@iconify/react";

const Logo = () => {
  return (
    <Link className="flex items-center gap-3" href={"/"}>
      <Icon height="48" icon="material-icon-theme:folder-tools-open" width="48" />

      <p className="text-3xl font-bold">Status Kit</p>
    </Link>
  );
};

export default Logo;
