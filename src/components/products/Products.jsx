import { useEffect, useState } from "react"
import Product from "../product/Product"
import axios from "axios"
import "./products.css"

const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    //filtro categoria
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/products?category=${cat}`
                        : "http://localhost:5000/api/products");
                setProducts(res.data);
            } catch (err) {
            }
        };
        getProducts();
    }, [cat]);

    //filtro categoria, color y tamanno
    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            ))
        )
    }, [products, cat, filters]);

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
        <div className="productsContainer">
            {cat
                ? filteredProducts.map((item) => (
                    <Product key={item.id} item={item} />
                ))
                : products
                    .slice(0, 8)
                    .map((item) => (
                        <Product key={item.id} item={item} />
                    ))
            }
        </div>
    )
}

export default Products