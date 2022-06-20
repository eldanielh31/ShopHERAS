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
                <Imag className="img" src={item.img} />
                <div className="info">
                    <h1 className="title">{item.title}</h1>
                    <button className="button">Comprar</button>
                </div>
            </Link>
        </div>
    )
}

export default CategoryItem