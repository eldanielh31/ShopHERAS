import { Add, DeleteOutlineOutlined, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/announcement/Announcement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { mobile } from "../responsive";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/cartRedux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Delete = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease; 
    &:hover{
        background-color: #fc6d49;
        transform: scale(1.1);
        }
`;


const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector(state=>state.cart);
  const products = useSelector(state=>state.cart.products);
  const dispatch = useDispatch();

  const handleDelete=(index)=>{
    dispatch(
      deleteProduct(index)
    )
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>CARRITO.</Title>
        <Bottom>
          <Info>
            {
            products.map((product, index)=>(
              <Product>
              <ProductDetail>
                <Image src={product.img}/>
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add onClick = {()=>{}} />

                  <ProductAmount>{product.quantity}</ProductAmount>

                  <Remove onClick={() => {}} />

                </ProductAmountContainer>
                <ProductPrice>₡ {product.price * product.quantity}</ProductPrice>
              </PriceDetail>
              <Delete>
                <Icon>
                   <DeleteOutlineOutlined onClick={()=>handleDelete(index)} />
                </Icon>
              </Delete>
              </Product>
            ))
            }
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>DETALLE DE ORDEN</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₡ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>ENVIO ESTIMADO</SummaryItemText>
              <SummaryItemPrice>₡ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>DESCUENTO</SummaryItemText>
              <SummaryItemPrice>₡ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₡ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button>TERMINAR COMPRA</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
