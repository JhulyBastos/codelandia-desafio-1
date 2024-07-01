"use client";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { NewsCard } from "./components/NewsCard";
import { data } from "./constants/data";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(data);

  function handleSearch() {
    if (inputValue.length === 0) {
      setItems(data);
      return;
    }

    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    setItems(filteredItems);
  }

  useEffect(() => {
    handleSearch();
  }, [inputValue]);

  return (
    <div className="w-full h-screen bg-dark-10">
      <Header setInputValue={setInputValue} searchButton={handleSearch} />
      <div className="flex flex-col justify-center items-center gap-8 mt-16 pb-20">
        {items.length > 0
          ? items.map((news, index) => (
              <NewsCard
                key={index}
                data={news.date}
                title={news.title}
                description={news.description}
              />
            ))
          : null}
      </div>
    </div>
  );
}
