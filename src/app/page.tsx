"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/loading";

const App = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("home");
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Loading />
    </div>
  );
};

export default App;
