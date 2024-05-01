"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

export function NewsCard({ data, title, description }) {
  const [clicou, setClicou] = useState(false);

  function toggleHeartButton() {
    setClicou(!clicou);
  }

  return (
    <div className="w-4/5 flex flex-col p-6 gap-4 border rounded-lg border-dark-40 hover:border-brand-color delay-100">
      <div className="flex justify-between">
        <p className="text-base text-brand-color">{data}</p>
        <Heart
          color="#E07B67"
          width={28}
          height={24}
          fill={clicou ? "#E07B67" : ""}
          onClick={toggleHeartButton}
          className="cursor-pointer transition-colors delay-150"
        />
      </div>
      <p className="text-2xl text-dark-60">{title}</p>
      <p className="text-xl text-dark-50">{description}</p>
    </div>
  );
}
