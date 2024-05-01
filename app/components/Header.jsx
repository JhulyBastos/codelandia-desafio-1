"use client";

import { Search } from "lucide-react";

export function Header({ setInputValue, searchButton }) {
  return (
    <header className="flex flex-col justify-center items-center gap-4 py-8 bg-dark-20">
      <h1 className="text-2xl text-brand-color">
        CODE<span className="text-dark-60">LÂNDIA</span>
      </h1>
      <div className="flex w-4/5  bg-dark-30 gap-4 border-2 border-dark-40 rounded-lg px-6 py-4">
        <Search
          color="#E07B67"
          onClick={searchButton}
          className="cursor-pointer"
        />
        <input
          type="text"
          placeholder="Pesquisar no blog"
          className="bg-transparent placeholder:text-xl w-full text-dark-60 focus:outline-none"
          onChange={(evento) => setInputValue(evento.target.value)}
        />
      </div>
    </header>
  );
}
