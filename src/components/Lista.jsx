import { useState, useRef } from "react";
import img from "../assets/lixeirapng.png";

export default function Lista({ dados, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const input = useRef();

  function handleEdit(idTodo) {
    setIsEditing((prevIsEditing) => !prevIsEditing);

    if (!isEditing) {
      return;
    } else {
      onEdit(input.current.value, idTodo);
    }
  }

  return (
    <>
      {dados &&
        Array.isArray(dados[0]) &&
        dados[0].map((dado) => (
          <div className="dadoLi" key={dado.idTodo}>
            <span>{dado.idTodo}. </span>
            {!isEditing ? (
              <span className="inputDado">{dado.item}</span>
            ) : (
              <input
                ref={input}
                className="inputDado"
                defaultValue={dado.item}
              ></input>
            )}
            <div className="botoes">
              <div className="imgBox">
                <img onClick={() => onDelete(dado.idTodo)} src={img} alt="" />
              </div>
              <button
                onClick={() => handleEdit(dado.idTodo)}
                className="floatR"
              >
                {!isEditing ? "Edit" : "Save"}
              </button>
            </div>
          </div>
        ))}
    </>
  );
}
