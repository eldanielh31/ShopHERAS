import { useEffect, useState } from "react"
import styled from "styled-components"
//import { popularProducts } from "../data"
import Product from "./Product"
import axios from "axios"

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //filtro categoria
  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res= await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}` 
            : "http://localhost:5000/api/products");
        setProducts(res.data);
      }catch(err){
      }
    };
    getProducts();
  }, [cat]);

//filtro categoria, color y tamanno
  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
      ))
    )
  },[products, cat, filters]);

//filtro tiempo
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ?filteredProducts.map((item)=>(
            <Product key={item.id} item={item}/>
        )) 
        : products
          .slice(0, 8)
          .map((item)=>(
          <Product key={item.id} item={item}/>
        ))
      }
    </Container>
  )
}

export default Products