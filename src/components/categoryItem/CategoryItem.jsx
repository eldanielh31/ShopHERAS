import { Link } from "react-router-dom";
import styled from "styled-components"
import { mobile } from "../../responsive";
import "./categoryItem.css"

const Imag = styled.img`
    ${mobile({ height: "20vh" })}
`

const CategoryItem = ({ item }) => {
    return (
        <div className="categoryItem">
            <Link to={`/products/${item.cat}`}>
                <Imag className="imgCategoryItem" src={item.img} />
                <div className="infoCategoryItem">
                    <h1 className="titleCategoryItem">{item.title}</h1>
                    <button className="buttonCategoryItem">Comprar</button>
                </div>
            </Link>
        </div>
    )
}

export default CategoryItem