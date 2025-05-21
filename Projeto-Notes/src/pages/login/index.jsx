import "./login.css"
import logo from "../../assets/imgs/senaiNotesLogo.svg"
import { useState } from "react"


function Login() {

    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState ("")
    

    const  ClickParaLogar = async () => {
        if (email == "Diego@teste.com" && password == "123456") {

            let token = "meuToken"
            let userId = "meuID"

            localStorage.setItem("meuToken", token)
            localStorage.setItem("meuId", userId )

        alert ("Login Realizado com sucesso")    

        window.location.href = "/TelaNotes"
    }
     
    else {
        alert ("Credenciais incorretas"); 
        return;
    }

    }  

    const ClickParaCadastrar = async () => {
        window.location.href = "/new-user"

    }

    return (
        <>
            <div className="caixa-do-login">
                <div className="logodoSenai"><img src={logo} alt="" /></div>

                <div className="Welcome">
                    <h2>Welcome to Note</h2>
                    <p>Please log in to continue</p>
                </div>

                <div className="caixa-de-logar">

                    <div className="email">
                        <p><strong>Email Address</strong></p>
                        <div className="input-email"> 
                            <input type="email" 
                            placeholder="email@example.com" 
                            value={email} 
                            onChange={event => SetEmail(event.target.value)}
                                           
                        /></div>
                    </div>

                    <div className="password">

                        <div className="text-password">
                            <p><strong>Password</strong></p>
                            <div className="text-Forgot"><button className="btn-password">
                                <p>Forgot</p></button>
                            </div>
                        </div>

                        <div className="caixa-input">

                            <div className="input-password">
                                <input type="password" 
                                value={password} 
                                onChange={event => SetPassword(event.target.value)}
                                
                                />

                            </div>

                        </div>

                    </div>

                    <div className="barra"></div>

                    <div className="btn"><button className="btn" onClick={() =>ClickParaLogar()}>
                        <p>Login</p>
                    </button></div>

                </div>

                <div className="Cadastrar">
                    <div className="text-rigth">
                        <p>No account yet?</p>
                    </div>
                    <button className="btn-SignUp" onClick={() =>ClickParaCadastrar()}>
                        <p>Sign Up</p>
                    </button>
                </div>

            </div>
        </>
    )
}

export default Login