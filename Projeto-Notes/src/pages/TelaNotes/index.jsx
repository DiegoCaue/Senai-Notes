import "./notes.css";
import { useState } from "react";

import logo from "../../assets/imgs/senaiNotesLogo.svg";
import Home from "../../assets/imgs/Home.svg";
import Archive from "../../assets/imgs/Archive.svg";
import chevron from "../../assets/imgs/Chevron Right MD.svg";
import Tag from "../../assets/imgs/Tag.svg";
import Search from "../../assets/imgs/Search.svg";
import Setting from "../../assets/imgs/Setting.svg";
import Vector from "../../assets/imgs/Vector.svg";

function Note() {
    const [novaNotaEmEdicao, setNovaNotaEmEdicao] = useState(null);

    const novaNota = async () => {
        let nomeChat = prompt("Digite o nome do novo chat:");
        if (!nomeChat) {
            alert("Nome inválido.");
            return;
        }

        let userId = localStorage.getItem("meuId");
        if (!userId) {
            alert("Usuário não autenticado.");
            return;
        }

        let novoNotaObj = {
            id: crypto.randomUUID(),
            notaTitle: nomeChat,
            descricao: "",
            tags: [],
            userId: userId
        };

        try {
            let response = await fetch("http://localhost:3000/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("meuToken")
                },
                body: JSON.stringify(novoNotaObj)
            });

            if (response.ok) {
                alert("Nota criada com sucesso");
                setNovaNotaEmEdicao(novoNotaObj); // Exibe no painel central
            } else {
                alert("Erro ao criar a nota.");
            }
        } catch (error) {
            alert("Erro de rede.");
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovaNotaEmEdicao((prev) => ({ ...prev, [name]: value }));
    };

    const salvarNota = () => {
        alert("Nota salva com sucesso!");
        setNovaNotaEmEdicao(null); // Oculta formulário
    };

    const cancelarNota = () => {
        setNovaNotaEmEdicao(null);
    };

    return (
        <>
            <div className="container">
                <nav className="left-panel">
                    <img src={logo} alt="Senai Notes Logo" />

                    <div className="caixa-filtros">
                        <div className="width-filtros">
                            <button className="btn">
                                <img src={Home} alt="Home" />
                                <strong>All Notes</strong>
                            </button>
                            <br />
                            <button className="btn">
                                <img src={Archive} alt="Arquivo" />
                                <strong>Archived Notes</strong>
                                <div className="seta">
                                    <img src={chevron} alt="Chevron" />
                                </div>
                            </button>
                        </div>

                        <div className="espaçamento"></div>

                        <div className="center">
                            <p>Tags</p>
                        </div>

                        <div className="top-filtros">
                            {[
                                "Cooking", "Dev", "Fitness", "Health",
                                "Personal", "React", "Recipes", "Shopping",
                                "Travel", "TypeScript"
                            ].map(tag => (
                                <button key={tag}>
                                    <img src={Tag} alt={`Tag ${tag}`} />
                                    <strong>{tag}</strong>
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>

                <div className="Organanizar-Panel">
                    <header className="cabecalho">
                        <div className="TituloCabecalho"></div>
                        <div className="itens-do-cabecalho">
                            <div className="caixa-de-pesquisa">
                                <img src={Search} alt="Pesquisar" />
                                <input
                                    type="text"
                                    placeholder="Search by title, content, or tags…"
                                />
                            </div>
                            <img src={Setting} alt="Configurações" />
                            <img src={Vector} alt="Usuário" />
                        </div>
                    </header>

                    <div className="panel-central">
                        <main className="create-new-note">
                            <div className="left-create">
                                <button onClick={novaNota}>+ Create New Note</button>
                            </div>

                            <div className="central-panel">
                                {novaNotaEmEdicao ? (
                                    <div className="nota-formulario">
                                        <h2>{novaNotaEmEdicao.notaTitle}</h2>
                                        <p>
                                            <strong>Tags:</strong>{" "}
                                            {novaNotaEmEdicao.tags.join(", ") || "Nenhuma"}
                                        </p>
                                        <textarea
                                            name="descricao"
                                            placeholder="Escreva sua anotação aqui..."
                                            value={novaNotaEmEdicao.descricao}
                                            onChange={handleInputChange}
                                            rows={10}
                                            style={{ width: "100%", marginTop: "10px" }}
                                        ></textarea>
                                        <div style={{ marginTop: "10px" }}>
                                            <button onClick={salvarNota}>Save Note</button>
                                            <button
                                                onClick={cancelarNota}
                                                style={{ marginLeft: "10px" }}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <p
                                        style={{
                                            textAlign: "center",
                                            marginTop: "50px",
                                            color: "#888"
                                        }}
                                    >
                                        Nenhuma nota selecionada ou em criação.
                                    </p>
                                )}
                            </div>

                            <div className="rigth-panel">
                                <div className="buttom-rigtch">
                                    <button>Archive Note</button>
                                    <button>Delete Note</button>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                <footer></footer>
            </div>
        </>
    );
}

export default Note;