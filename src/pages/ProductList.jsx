import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  let location = useLocation();
  let cat = location.pathname.split("/")[2];
  let catTitle;
  if(cat === "sweaterheras"){
    catTitle = "Sweater Heras"
  }
  else if(cat === "t-shirtstep1"){
    catTitle = "T-Shirt Step1"
  }
  else{
    catTitle = "T-Shirt Heras"
  }
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("nuevo");
  
  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name] : value,
    })
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{catTitle}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Productos:</FilterText>
          <Select name= "color" onChange = {handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option value="white">Blanco</Option>
            <Option value="black">Negro</Option>
            <Option value="red">Rojo</Option>
            <Option value="blue">Azul</Option>
            <Option value="yellow">Amarrillo</Option>
            <Option value="green">Verde</Option>
          </Select>
          <Select name= "size" onChange = {handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option value = "XS">XS</Option>
            <Option value = "S">S</Option>
            <Option value = "M">M</Option>
            <Option value = "L">L</Option>
            <Option value = "XS">XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ordenar Productos:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value = "nuevo">Nuevo</Option>
            <Option value = "asc">Precio (asc)</Option>
            <Option value = "desc">Precio (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;