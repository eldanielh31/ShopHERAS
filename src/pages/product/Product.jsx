import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import { addProduct } from "../../redux/cartRedux";
import { publicRequest } from "../../requestMethods";
import { mobile } from "../../responsive";
import { useDispatch } from "react-redux";
import "./product.css"

const Wrapper = styled.div`
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const Image = styled.img`
  
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  
  ${mobile({ padding: "10px" })}
`;

const FilterContainer = styled.div`
  
  ${mobile({ width: "100%" })}
`;


const AddContainer = styled.div`
  
  ${mobile({ width: "100%" })}
`;



const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("XS");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data);
      } catch {

      }
    }
    getProduct()
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "-") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, size })
    );
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <div>
        <Wrapper className="wrapperProduct">
          <div className="imgContainerProduct">
            <Image src={product.img} className="imgProductPage" />
          </div>
          <InfoContainer className="infoContainerProduct">
            <h1 className="titleProduct">{product.title}</h1>
            <p className="descProduct">
              {product.desc}
            </p>
            <span className="priceProduct">₡{product.price}</span>
            <FilterContainer className="filterContainerProduct">
              <div className="filterProduct">
                <span className="filterTitleProduct">Tamaño</span>
                <select className="filterSizeProduct" onChange={(e) => setSize(e.target.value)}>
                  {product.size?.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </FilterContainer>
            <AddContainer>
              <div className="amountContainerProduct">
                <Remove onClick={() => handleQuantity("-")} />
                <span className="amountProduct">{quantity}</span>
                <Add onClick={() => handleQuantity("+")} />
              </div>
              <button className="button-57" onClick={handleClick}>
                <span>AÑADIR AL CARRITO</span>
                <span>COMPRAR</span>
              </button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
