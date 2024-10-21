import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const Table = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setDatas(response.data);
      } catch (err) {
        setError("Ndodhi një gabim gjatë marrjes së të dhënave.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-4">
        Lista e Produkteve
      </h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Foto</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Kategoria
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Produkti
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Çmimi
            </th>
          </tr>
        </thead>
        <tbody>
          {datas.map((product) => (
            <tr
              key={product.id}
              className="border-b bg-gray-100 hover:bg-gray-300"
            >
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                <img src={product.image} width={30} alt={product.title} />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.category}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.price}$
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
