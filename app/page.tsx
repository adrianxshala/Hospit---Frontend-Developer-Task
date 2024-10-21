"use client"; 
import { useEffect, useState } from "react";
import Loader from "./components/Loader"; 
import Table from "./components/Table"; 

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <div className="App">{loading ? <Loader /> : <Table />}</div>;
}