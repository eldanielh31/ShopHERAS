import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Products from "../../components/products/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { mobile } from "../../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./productList.css"

const Filter = styled.div`
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  ${mobile({ margin: "10px 0px" })}
`;

const ProductList = () => {
    let location = useLocation();
    let cat = location.pathname.split("/")[2];
    let catTitle;
    if (cat === "sweaterheras") {
        catTitle = "Sweater Heras"
    }
    else if (cat === "t-shirtstep1") {
        catTitle = "T-Shirt Step1"
    }
    else if (cat === "t-shirtheras") {
        catTitle = "T-Shirt Heras"
    } else {
        catTitle = "Productos"
    }
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("nuevo");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }

    return (
        <div>
            <Announcement />
            <Navbar />
            <div>
                <h1 className="titleProductList">{catTitle}</h1>
                <div className="filterContainerProductList">
                    <Filter className="filterProductList">
                        <FilterText className="filterTextProductList">Filtrar Productos:</FilterText>
                        <Select className="selectProductList" name="color" onChange={handleFilters}>
                            <option disabled>
                                Color
                            </option>
                            <option value="white">Blanco</option>
                            <option value="black">Negro</option>
                            <option value="red">Rojo</option>
                            <option value="blue">Azul</option>
                            <option value="yellow">Amarrillo</option>
                            <option value="green">Verde</option>
                        </Select>
                        <Select className="selectProductList" name="size" onChange={handleFilters}>
                            <option disabled>
                                Size
                            </option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XS">XL</option>
                        </Select>
                    </Filter>
                    <Filter className="filterProductList">
                        <FilterText className="filterTextProductList">Ordenar Productos:</FilterText>
                        <Select className="selectProductList" onChange={(e) => setSort(e.target.value)}>
                            <option value="nuevo">Nuevo</option>
                            <option value="asc">Precio (asc)</option>
                            <option value="desc">Precio (desc)</option>
                        </Select>
                    </Filter>
                </div>
                <Products cat={cat} filters={filters} sort={sort} />
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default ProductList;