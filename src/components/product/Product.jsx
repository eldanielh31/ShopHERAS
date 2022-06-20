import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom";
import "./product.css"

const Product = ({ key, item }) => {
    return (
        <div className="productContainer">
            <div className="circleProduct" />
            <img className="imgProduct" src={item.img} alt="imagen del producto" />
            <div className="infoProduct">
                <div className="iconProduct">
                    <ShoppingCartOutlined />
                </div>
                <div className="iconProduct">
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined />
                    </Link>
                </div>
                <div className="iconProduct">
                    <FavoriteBorderOutlined />
                </div>
            </div>
        </div>
    )
}

export default Product