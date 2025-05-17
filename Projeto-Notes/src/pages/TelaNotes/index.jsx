import "./notes.css"
import logo from  "../../assets/imgs/senaiNotesLogo.svg"
import Home from "../../assets/imgs/Home.svg"
import Archive from "../../assets/imgs/Archive.svg"
import chevron from "../../assets/imgs/Chevron Right MD.svg"
import Tag from "../../assets/imgs/Tag.svg"
import Search from "../../assets/imgs/Search.svg"
import Setting from "../../assets/imgs/Setting.svg"
import Vector from "../../assets/imgs/Vector.svg"

function Note () {

    return (
        <>
        <div class="container">

        <nav class="left-panel">
            <img src={logo} alt=""/>

            <div class="caixa-filtros">

                <div class="width-filtros">

                    <button class="btn"> <img src={Home} alt=""/> <strong>All
                            Notes</strong></button><br/>
                    <button class="btn"> <img src= {Archive} alt="icone"/>
                        <strong>Archived Notes</strong>
                        <div class="seta"><img src={chevron} alt=""/></div>
                    </button>

                </div>

                <div class="espaçamento"></div>

                <div class="center">
                    <p>Tags</p>
                </div>

                <div class="top-filtros">
                    <button> <img src={Tag}
                            alt=""/><strong>Cooking</strong></button><br/>
                    <button> <img src={Tag} alt=""/><strong>Dev</strong></button><br/>
                    <button> <img src={Tag} alt=""/>
                        <strong>Fitness</strong></button><br/>
                    <button><img src={Tag} alt=""/><strong>Health</strong></button><br/>
                    <button><img src={Tag}
                            alt=""/><strong>Personal</strong></button><br/>
                    <button><img src={Tag} alt=""/><strong>React</strong></button><br/>
                    <button><img src={Tag}
                            alt=""/><strong>Recipes</strong></button><br/>
                    <button><img src={Tag}
                            alt=""/><strong>Shopping</strong></button><br/>
                    <button><img src={Tag} alt=""/><strong>Travel</strong></button><br/>
                    <button><img src={Tag} alt=""/><strong>TypeScript</strong></button>
                </div>

            </div>

        </nav>

        <div class="Organanizar-Panel">
            <header class="cabecalho">

                <div class="itens-do-cabecalho">
                    <div class="caixa-de-pesquisa">
                        <img src={Search} alt=""/>
                        <input type="text" placeholder="Search by title, content, or tags…"/>
                    </div>
                    <img src={Setting} alt=""/>
                    <img src={Vector} alt=""/>
                </div>

            </header>

            <div class="panel-central">
                <main class="create-new-note">
                    <div class="left-create">
                        <button>+ Create New Note</button>

                        
                    </div>

                    <div class="central-panel">

                    </div>

                    <div class="rigth-panel">

                    </div>
                </main>
            </div>
        </div>

        <footer></footer>

    </div>
        </>
    )

}

export default Note