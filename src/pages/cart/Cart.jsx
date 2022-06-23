import { Add, DeleteOutlineOutlined, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { mobile } from "../../responsive";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addQuantityProduct, clearCart, deleteProduct, deleteQuantityProduct } from "../../redux/cartRedux";
import "./cart.css"
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";

const Wrapper = styled.div`
  ${mobile({ padding: "10px" })}
`;

const Bottom = styled.div`
  ${mobile({ flexDirection: "column" })}
`;

const Product = styled.div`
  ${mobile({ flexDirection: "column" })}
`;

const ProductAmount = styled.div`
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  ${mobile({ marginBottom: "20px" })}
`;

const SummaryItem = styled.div`
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState("");
  const [coupons, setCoupons] = useState([]);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const getCoupons = async () => {
      try {
        const res = await publicRequest.get("/coupon");
        setCoupons(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCoupons();
  }, []);

  const handleDelete = (index) => {
    dispatch(
      deleteProduct(index)
    );
  };

  const handleBuy = () => {
    if (products) {
      dispatch(clearCart());
    }
  };

  const handleAdd = (index) => {
    dispatch(addQuantityProduct(index))
  };

  const handleRemove = (index) => {
    dispatch(deleteQuantityProduct(index))
  };

  const handleCoupon = () => {
    coupons.forEach((item)=>{
      if (item.codename === coupon) {
        setDiscount(item.discount);
      }
    });
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="containerCart">
        <Wrapper className="wrapperCart">
          <h1 className="titleCart">CARRITO.</h1>
          <Bottom className="bottomCart">
            <div className="infoCart">
              {
                products.map((product, index) => (
                  <Product key={product._id} className="productCart">
                    <div className="productDetailCart">
                      <img className="imgCart" src={product.img} alt="imagen producto" />
                      <div className="detailsCart">
                        <span>
                          <b>Producto:</b> {product.title}
                        </span>
                        <span>
                          <b>ID:</b> {product._id}
                        </span>
                        <span>
                          <b>Tamaño:</b> {product.size}
                        </span>
                      </div>
                    </div>
                    <div className="priceDetailCart">
                      <div className="productAmountContainer">

                        <Add onClick={() => { handleAdd(index) }} />

                        <ProductAmount className="productAmount">{product.quantity}</ProductAmount>

                        <Remove onClick={() => { handleRemove(index) }} />

                      </div>
                      <ProductPrice className="productPrice">₡ {product.price * product.quantity}</ProductPrice>
                    </div>
                    <div className="deleteCart">
                      <div className="iconCart">
                        <DeleteOutlineOutlined onClick={() => handleDelete(index)} />
                      </div>
                    </div>
                  </Product>
                ))
              }
              <hr className="hrCart" />
            </div>
            <div className="summaryCart">
              <h1 className="summaryTitleCart">DETALLE DE ORDEN</h1>
              <SummaryItem className="summaryItemCart">
                <span>SUBTOTAL</span>
                <span>₡ {cart.total}</span>
              </SummaryItem>
              <SummaryItem className="summaryItemCart">
                <span>ENVIO ESTIMADO</span>
                <span>₡Por determinar</span>
              </SummaryItem>
              <SummaryItem className="summaryItemCart">
                <span>DESCUENTO</span>
                <span>₡ {discount}</span>
              </SummaryItem>

              <SummaryItem className="summaryItemCart">
                <div className="groupCart">
                  <input placeholder="CUPÓN" type="text"
                    className="inputCart" onChange={(e) => { setCoupon(e.target.value) }} />
                  <span className="barCart" />
                </div>
                <button className="button-55" onClick={handleCoupon}>VERIFICAR</button>
              </SummaryItem>
              <SummaryItem className="summaryItemCart" type="total">
                <span>Total</span>
                <span>₡ {(cart.total - discount > 0) ? cart.total - discount : cart.total}</span>
              </SummaryItem>
              <button className="button-28" onClick={handleBuy}>COMPRAR</button>
            </div>
          </Bottom>
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
