"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import Card from "@/components/card";
import Navbar from "@/components/navbar";

const Home = () => {
  const [books, setBooks] = useState<Array<string>>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  return (
    <>
      <Header title="首頁" />
      <main>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 p-2">
          {books?.map((val, idx) => (
            <Card
              key={`cover-${idx}`}
              title={val}
              imageUrl={`https://source.unsplash.com/random/?Comic`}
            />
          ))}
        </div>
      </main>
      <Navbar />
    </>
  );
};

export default Home;
