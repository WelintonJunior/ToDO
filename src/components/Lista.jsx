import ItemList from "./ItemList";

export default function Lista({ dados, onDelete, onEdit }) {
  return (
    <>
      {dados &&
        Array.isArray(dados[0]) &&
        dados[0].map((dado) => (
          <ItemList
            key={dado.idTodo}
            onDelete={onDelete}
            onEdit={onEdit}
            dado={dado}
          />
        ))}
    </>
  );
}
