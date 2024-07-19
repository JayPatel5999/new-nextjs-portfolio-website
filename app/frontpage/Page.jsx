"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PiLockThin } from "react-icons/pi";
import Status from "../status/Page";
import Image from "next/image";

const projects = [
  {
    imgLink: "/img/project-1.png",
    title: "Project 1",
    subT: "Project Description",
  },
  {
    imgLink: "/img/project-2.png",
    title: "Project 2",
    subT: "Project Description",
  },
  {
    imgLink: "/img/project-3.png",
    title: "Project 3",
    subT: "Project Description",
  },
];

let link = [
  {
    date: "Dec 2022 - Apr 2023",
    imgLink: "/img/img4.png",
    title: "Project 4",
    sub: "XYZ",
    subTitle: "Project Subtitle",
    bttn: "View Project",
  },
  {
    date: "Jul 2022 - Sep 2022",
    imgLink: "/img/img5.png",
    title: "Project 5",
    sub: "XYZ",
    subTitle: "Project Subtitle",
    bttn: "View Project",
  },
  {
    date: "Jan 2022 - Mar 2022",
    imgLink: "/img/img6.png",
    title: "Project 6",
    sub: "XYZ",
    subTitle: "Project Subtitle",
    bttn: "View Project",
  },
];
function page() {
  const [show, setShow] = useState(link[0]);
  return (
    <div className="mt-32">
      <div className="flex gap-x-4">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src="/img/IMG_4084.jpeg"
          alt="img"
        />

        <div>
          <h2 className="font-extrabold font-interblack dark:text-white text-3xl">
            Jaykumar Patel
          </h2>

          <Link href={"https://twitter.com/JayPatel5999"}>
            <span className="text-neutral-500">@JayPatel</span>
          </Link>

          <Status isAvailable />
        </div>
      </div>
    </div>
  );
}

export default page;
