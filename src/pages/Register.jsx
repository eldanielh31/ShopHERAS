import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/PmJNhy7/Register2.png")
      right;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREAR UNA CUENTA.</Title>
        <Form>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellidos" />
          <Input placeholder="Usuario" />
          <Input placeholder="Correo Electronico" />
          <Input placeholder="Contraseña" />
          <Input placeholder="Confirmar contraseña" />
          <Agreement>
            Al crear una cuenta, doy mi consentimiento para el procesamiento de mis datos personales.
            datos de acuerdo con el  <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREAR</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
