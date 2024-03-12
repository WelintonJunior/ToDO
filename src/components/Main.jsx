import { useRef } from "react";

export default function Main({ onClick }) {
  const item = useRef();

  return (
    <>
      <input ref={item} type="text" /> <br />
      <br />
      <button onClick={() => onClick(item.current.value)}>Enviar</button>
    </>
  );
}
