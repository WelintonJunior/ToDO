import { useState, useEffect, useRef } from "react";

//Components
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Lista from "./components/Lista.jsx";

//Functions
import {
  cadastrar,
  pesquisar,
  deletar,
  editar,
} from "./functions/functions.js";

function App() {
  const [dados, setDados] = useState([]);
  const input = useRef();

  function clear() {
    input.current.value = "";
  }

  useEffect(() => {
    PesquisarDados();
  }, []);

  //pesquisar

  const PesquisarDados = async () => {
    const data = await pesquisar();
    setDados(data);
  };

  //cadastrar

  async function handleEnviar(item) {
    cadastrar(item);
    setTimeout(() => {
      PesquisarDados();
      clear();
    }, 100);
  }

  //deletar

  async function handleDelete(item) {
    deletar(item);
    setTimeout(() => {
      PesquisarDados();
    }, 100);
  }

  //editar

  async function handleEdit(item, idTodo) {
    editar(item, idTodo);
    setTimeout(() => {
      PesquisarDados();
    }, 100);
  }

  return (
    <>
      <div className="box">
        <Header />
        <Main onClick={handleEnviar} ref={input} />
      </div>
      <div className="list">
        <Lista dados={dados} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </>
  );
}
export default App;
