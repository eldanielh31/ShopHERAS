import { Send } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import { suscription } from "../redux/apiCalls"
import { mobile } from "../responsive"
import { Alert } from "@material-ui/lab"


const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-style: 70px;
    margin-bottom: 20px;
`

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`


const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color:white;
    cursor: pointer;
`

const Newsletter = () => {

    const [mail, setMail] = useState("");
    const [correMail, setCorreMail] = useState();
    const [failMail, setFailMail] = useState();

    const correctMail = (mail)=>{
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(mail)) {
            //Valido
            return true
        } else {
            //Invalido
            return false
        }
    }

    const handleClick = (e)=>{
        if (correctMail(mail)) {
            //Valido
            setCorreMail(true)
            setFailMail(false)
            suscription({mail})
        } else {
            //Invalido
            setCorreMail(false)
            setFailMail(true)
        }
    }

    return (
        <Container>
            <Title>Suscripción</Title>
            <Description>Obtenga actualizaciones en tiempo real de tus productos favoritos</Description>
            <InputContainer onChange={(e)=> setMail(e.target.value) }>
                <Input placeholder = "Tu email"/>
                <Button onClick={handleClick}>
                    <Send/>
                </Button>
            </InputContainer>
            {correMail ? <Alert severity="success">Su correo se suscribió con exito!</Alert> : null}
            {failMail ? <Alert severity="error">Error al suscribir el correo.</Alert> : null}
        </Container>
    )
    }

export default Newsletter