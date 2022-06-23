import { Send } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import { suscription } from "../../redux/apiCalls"
import { mobile } from "../../responsive"
import "./newsletter.css"

const Description = styled.div`
    ${mobile({ textAlign: "center" })}
`

const InputContainer = styled.div`

    ${mobile({ width: "80%" })}
`

const Newsletter = () => {

    const [mail, setMail] = useState("");
    const [correMail, setCorreMail] = useState("");
    const [failMail, setFailMail] = useState("");

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
            setCorreMail("Suscripción completa")
            setFailMail("")
            try {
                suscription({mail})
            } catch (error) {
                setCorreMail("")
                setFailMail("Error al suscribir el correo")
            }
        } else {
            //Invalido
            setCorreMail("")
            setFailMail("Error al verificar el correo")
        }
    }

    return (
        <div className="newsletter">
            <h1 className="titleNesletter">Newsletter</h1>
            <Description className="descriptionNewsletter">Obtenga actualizaciones en tiempo real de tus productos favoritos</Description>
            <InputContainer className="inputContainer" onChange={(e)=> setMail(e.target.value) }>
                <input className="input" placeholder = "Tu email"/>
                <button className="button-35" onClick={handleClick}>
                    <Send/>
                </button>
            </InputContainer>
            <span className="correctNews">{correMail}</span>
            <span className="errorNews">{failMail}</span>
        </div>
    )
    }

export default Newsletter