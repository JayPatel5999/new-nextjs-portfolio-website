"use client";

import React, { useState } from "react";

const Status = [
  {
    Available: {
      name: "Open for work",
      color: "lime",
    },

    Unavailable: {
      name: "Unavailable for now",
      color: "red",
    },

    Relaxing: {
      name: "Completed",
      color: "lime",
    },
  },
];

function Statuspage({ isAvailable, Relaxing, className }) {
  let [status, setStatus] = useState(
    isAvailable
      ? Status[0].Available
      : Relaxing
      ? Status[0].Relaxing
      : Status[0].Unavailable
  );

  let bgColorClass =
    status === Status[0].Available
      ? "bg-lime-450"
      : Status[0].Relaxing
      ? "bg-lime-450"
      : "bg-red-500";

  return (
    <div>
      <span
        className={`inline-flex items-center px-2 py-0 text-xs font-semibold pointer-events-auto ${className}`}>
        <span className={"mr-1.5 flex justify-center h-2 w-2 items-center"}>
          <span
            className={`absolute flex w-2 h-2 rounded-full opacity-75 animate-ping ${bgColorClass}`}></span>

          <span
            className={`relative inline-flex w-1 h-1 rounded-full ${bgColorClass}`}></span>
        </span>

        <span className="dark:text-neutral-500">{status.name}</span>
      </span>
    </div>
  );
}

export default Statuspage;
