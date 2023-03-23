"use client";

import Link from "next/link";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function Header() {
  const pathname = usePathname();

  const pages = [
    {
      title: "Página inicial",
      path: "/",
    },
    {
      title: "Currículo",
      path: "/curriculo",
    },
  ];

  return (
    <header className="h-14 flex items-center px-4 md:px-6 lg:px-8 justify-between bg-primary">
      <div>
        <h2 className="text-lg md:text-xl font-medium"> Francisco Zhou </h2>
      </div>

      <nav>
        <div className="flex md:hidden">
          <Menu />
        </div>

        <ul className="hidden md:flex space-x-4">
          {pages.map(({ path, title }) => (
            <li
              key={Math.random()}
              className={classNames({
                "font-bold": path === pathname,
              })}
            >
              <Link href={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
