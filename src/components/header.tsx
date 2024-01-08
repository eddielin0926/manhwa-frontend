import {
  MagnifyingGlassIcon,
  Bars3CenterLeftIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

type ButtonType = "search" | "return" | "menu" | "setting";

type HeaderProps = {
  title: string;
  left?: ButtonType;
  right?: ButtonType;
} & React.ComponentProps<"header">;

const Header: React.FC<HeaderProps> = ({
  title,
  left = "search",
  right = "menu",
}) => {
  const Button = (btn: ButtonType) => {
    switch (btn) {
      case "search":
        return (
          <Link href="search">
            <MagnifyingGlassIcon className="w-7 h-7" />
          </Link>
        );
      case "return":
        return (
          <Link href="..">
            <ArrowLongLeftIcon className="w-7 h-7" />
          </Link>
        );
      case "menu":
        return (
          <Link href="menu">
            <Bars3CenterLeftIcon className="w-7 h-7" />
          </Link>
        );
      case "setting":
        return (
          <Link href="setting">
            <Cog6ToothIcon className="w-7 h-7" />
          </Link>
        );
      default:
        return <div />;
    }
  };

  return (
    <header className="sticky top-0">
      <div className="flex justify-between items-center p-2 h-16">
        {Button(left)}
        <div className="font-semibold text-xl">{title}</div>
        {Button(right)}
      </div>
    </header>
  );
};

export default Header;
