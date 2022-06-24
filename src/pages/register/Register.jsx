import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { getUserbyMail, getUserbyPhone, getUserbyUsername, register } from "../../redux/apiCalls";
import { mobile } from "../../responsive";
import "./register.css"

const Wrapper = styled.div`
  ${mobile({ width: "75%" })}
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const checkUsername = async(userna) => {
    let tempUser = await getUserbyUsername(userna);
    return !(Object.keys(tempUser).length === 0);
  };

  const checkPhone = async(phone) => {
    let tempUser = await getUserbyPhone(phone);
    return !(Object.keys(tempUser).length === 0);
  };


  const checkMail = async(mail) => {
    let tempUser = await getUserbyMail(mail);
    return !(Object.keys(tempUser).length === 0);
  };


  const handleRegister = async(e) => {
    e.preventDefault();
    if (await checkUsername(username)) {
      setError("Usuario ya reguistrado.")
    }
    else {
      if (await checkPhone(phone)) {
        setError("Teléfono ya reguistrado.")
      }
      else {
        if (await checkMail(mail)) {
          setError("Email ya reguistrado.")
        }
        else {
          const fullName = name + " " + lastName;
          console.log({username, password, name: fullName, mail, phone })
          const user = await register(dispatch, { username, password, name: fullName, mail, phone })
          console.log(user);
          setError("")
        }
      }
    }
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="containerRegister">
        <Wrapper className="wrapperRegister">
          <h1 className="titleRegister">CREAR UNA CUENTA.</h1>
          <form className="formRegister">

            <div className="group">
              <input type="text" onChange={(e) => setName(e.target.value)} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Nombre</label>
            </div>

            <div className="group">
              <input type="text" onChange={(e) => setLastName(e.target.value)} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Apellidos</label>
            </div>

            <div className="group">
              <input type="text" onChange={(e) => setUsername(e.target.value)} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Usuario</label>
            </div>

            <div className="group">
              <input type="text" onChange={(e) => setMail(e.target.value)} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email</label>
            </div>

            <div className="group">
              <input type="text" onChange={(e) => setPhone(e.target.value)} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Teléfono</label>
            </div>

            <div className="group">
              <input type="password" onChange={(e) => setPassword(e.target.value)} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Contraseña</label>
            </div>

            <span className="errorRegister">{error}</span>

            <span className="agreementRegister">
              Al crear una cuenta, doy mi consentimiento para el procesamiento de mis datos personales.
              datos de acuerdo con el  <b>PRIVACY POLICY</b>
            </span>

            <button className="button-57" onClick={handleRegister} disabled={isFetching}>
              <span className="text"> REGISTRAR </span>
              <span>OK.</span>
            </button>
          </form>
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
