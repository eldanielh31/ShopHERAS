import styled from "styled-components";
import { mobile } from "../../responsive";
import { useState } from "react"
import { login } from "../../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux";
import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import "./login.css"
import Footer from "../../components/footer/Footer";

const Wrapper = styled.div`
  
  ${mobile({ width: "75%" })}
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password });
  };
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="containerLogin">
        <Wrapper className="wrapperLogin">
          <h1 className="titleLogin">INICIAR SESIÓN</h1>
          <form className="formLogin">

            <div className="group">
              <input type="text" onChange={(e) => setUsername(e.target.value)} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Usuario</label>
            </div>

            <div className="group">
              <input type="password" onChange={(e) => setPassword(e.target.value)} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Contraseña</label>
            </div>

            <button className="button-57" onClick={handleClick} disabled={isFetching}>
              <span className="text"> INICIAR SESIÓN</span>
              <span>OK.</span>
            </button>

            {error && <span className="errorLogin">Algo salió mal , intente de nuevo.</span>}
            <a href="/" className="linkLogin">OLVIDÓ LA CONTRASEÑA?</a>
            <a href="/register" className="linkLogin">CREAR CUENTA</a>

          </form>
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
