import "./login.css"
import logo from "../../assets/imgs/senaiNotesLogo.svg"
import ocutar from "../../assets/imgs/ocutarSenha.svg"


function Login () {
    return (
        <>
<div class="caixa-do-login">
        <div class="logodoSenai"><img src={logo} alt=""/></div>

        <div class="Welcome">
            <h2>Welcome to Note</h2>
            <p>Please log in to continue</p>
        </div>

        <div class="caixa-de-logar">

            <div class="email">
                <p><strong>Email Address</strong></p>
                <div class="input-email"> <input type="email" placeholder="email@example.com"/></div>
            </div>

            <div class="password">

                <div class="text-password">
                    <p><strong>Password</strong></p>
                    <div class="text-Forgot"><button class="btn-password">
                            <p>Forgot</p></button>
                    </div>
                </div>

                <div class="caixa-input">

                    <div class="input-password">
                        <input type="password"/>
                        <img src={ocutar} alt=""/>
                    </div>

                </div>

            </div>

            <div class="barra"></div>

            <div class="btn"><button class="btn">
                    <p>Login</p>
                </button></div>

        </div>

        <div class="Cadastrar">
            <div class="text-rigth">
                <p>No account yet?</p>
            </div>
            <button class="btn-SignUp">
                <p>Sign Up</p>
            </button>
        </div>

    </div>
        </>
    )
}

export default Login