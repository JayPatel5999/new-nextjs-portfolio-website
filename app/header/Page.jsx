"use client";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  PiHouseThin,
  PiCloudSunLight,
  PiMoonLight,
  PiGithubLogoThin,
  PiTwitterLogoThin,
} from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { HiOutlineCode } from "react-icons/hi";
import { SiStackblitz } from "react-icons/si";
import Link from "next/link";

export const generalLinks = [
  {
    href: "/",
    label: "Inicio",
    Icon: <PiHouseThin />,
  },
  {
    href: "/about",
    label: "About",
    Icon: <GoPerson />,
  },

  {
    href: "/project",
    label: "project",
    Icon: <HiOutlineCode />,
  },
  {
    href: "https://github.com/JayPatel5999",
    label: "GitHub",
    target: "_blank",
    Icon: <PiGithubLogoThin />,
  },
  {
    href: "https://twitter.com/JayPatel5999",
    label: "GitHub",
    target: "_blank",
    Icon: <PiTwitterLogoThin />,
  },
  {
    href: "/experience",
    label: "experience",
    Icon: <SiStackblitz />,
  },
];

function Headpage() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed z-50 flex items-center left-4 top-1/2 transform -translate-y-1/2">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageY)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex flex-col items-center gap-4 px-4 py-2.5 outline-0 rounded-2xl box-gen ring-1 backdrop-blur-md dark:ring-[#1a1a1a]"
      >
        {generalLinks.map((link, i) => {
          return (
            <div key={i}>
              <AppIcon
                href={link.href}
                rel={link.target === "_blank" ? "noopener noreferrer" : ""}
                target={link.target}
                aria-label={link.label}
                outline={link.outline}
                mouseX={mouseX}
                imgs={link.Icon}
              />
            </div>
          );
        })}
        <hr className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-700 border-none" />
        <ThemeToggleNav mouseX={mouseX} />
      </motion.div>
    </div>
  );
}

export default Headpage;

function AppIcon({ mouseX, imgs, href }) {
  let ref = useRef();

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };

    return val - bounds.y - bounds.height / 2;
  });

  let heightSync = useTransform(distance, [-150, 0, 150], [50, 140, 50]);
  let height = useSpring(heightSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ height }}
        className="z-30 flex items-center justify-center rounded-full border border-neutral-400/20 dark:border-neutral-700 dark:bg-neutral-900/70 cursor-pointer w-16"
      >
        <span className="text-3xl">{imgs}</span>
      </motion.div>
    </Link>
  );
}

export function ThemeToggleNav({ className, rel, mouseX, ...props }) {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = useState(false);
  let ref = useRef();

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };

    return val - bounds.y - bounds.height / 2;
  });

  let heightSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let height = useSpring(heightSync, { mass: 0.1, stiffness: 150, damping: 12 });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{ height }}
      className="z-30 flex items-center justify-center h-16 rounded-full cursor-pointer bg-neutral-200/70 dark:bg-neutral-900/70 w-10"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      onClick={() => setTheme(otherTheme)}
    >
      <PiCloudSunLight className="w-6/12 transition dark:hidden dark:stroke-neutral-300 stroke-neutral-900" />
      <PiMoonLight className="hidden w-6/12 transition dark:block dark:stroke-neutral-300 stroke-neutral-900" />
    </motion.div>
  );
}
