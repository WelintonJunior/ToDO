import { forwardRef } from "react";

const Main = forwardRef(function Main({ onClick }, ref) {
  return (
    <>
      <input
        ref={ref}
        placeholder="Write here..."
        className="inputMain"
        type="text"
      />{" "}
      <br />
      <br />
      <button onClick={() => onClick(ref.current.value)}>Send</button>
    </>
  );
});

export default Main;
