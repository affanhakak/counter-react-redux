import { useDispatch, useSelector } from "react-redux";

function Count() {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const count = useSelector((state) => state);
  return (
    <>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Count;
