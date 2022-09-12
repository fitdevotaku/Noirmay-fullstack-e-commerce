import { useState, useEffect } from "react";
import styled from "styled-components";
import { currentSales } from "../data";
import CurrentProduct from "./CurrentProduct";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const CurrentProducts = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?categories=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) => {
          return Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          });
        })
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => (
            <CurrentProduct item={item} key={item.id} />
          ))
        : currentSales
            .slice(0, 3)
            .map((item) => <CurrentProduct item={item} key={item.id} />)}
    </Container>
  );
};

export default CurrentProducts;
