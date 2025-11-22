'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "HOME", icon: "home" },
  { href: "/reading", label: "READING", icon: "reading" },
  { href: "/report", label: "REPORT", icon: "report" },
  { href: "/profile", label: "Achievements", icon: "status" },
];

const iconSrcMap: Record<string, string> = {
  home: "/icon_home.png",
  reading: "/icon_reading.png",
  report: "/icon_report.png",
  status: "/icon_status.png",
};

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`bottom-nav__item ${isActive ? "is-active" : ""}`}
          >
            <span className="bottom-nav__icon">
              <Image
                src={iconSrcMap[item.icon]}
                alt={`${item.label} icon`}
                width={24}
                height={24}
                sizes="24px"
              />
            </span>
            <span className="bottom-nav__label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
