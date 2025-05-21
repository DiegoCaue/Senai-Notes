import "./new-user.css"


function NewUser() {

    const ClickParaLogar = async () =>  {

        window.location.href = "/login"
 
    }

    return (
        <>
            <div class="caixa-do-login">
                <div class="logodoSenai"><img src="../Arquivos/Logo Wrapper.svg" alt="" /></div>

                <div class="welcome">
                    <div class="subtitulo">
                        <h2>Create Your Account</h2>
                    </div>
                    <p>Sign up to start organizing your notes and boost your productivity.</p>

                </div>

                <div class="caixa-de-logar">

                    <div class="email">
                        <p><strong>Email Address</strong></p>
                        <div class="input-email"> <input type="email" placeholder="email@example.com" /></div>
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
                                <input type="password" />
                                <img src="../SenaiNotes/assets/img/ocutarSenha.svg" alt="" />
                            </div>
                            <div class="caracteres">
                                <img src="../SenaiNotes/assets/img/info circle.svg" alt="" />

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
                        <p>Already have an account?</p>
                    </div>
                    <button class="btn-SignUp" onClick={() => ClickParaLogar()}>
                        <p>Login</p>
                    </button>
                </div>

            </div>
        </>
    )

}

export default NewUser