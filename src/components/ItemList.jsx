import img from "../assets/lixeirapng.png";
import { useState, useRef } from "react";

export default function ItemList({ dado, onDelete, onEdit }) {
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
    <div className="dadoLi" key={dado.idTodo}>
      <span>{dado.idTodo}. </span>
      {!isEditing && dado ? (
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
        <button onClick={() => handleEdit(dado.idTodo)} className="floatR">
          {!isEditing && dado ? "Edit" : "Save"}
        </button>
      </div>
    </div>
  );
}
