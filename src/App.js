import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler() {
    setCount(count+1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="bg-slate-700 w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10">
      <div
      className="text-blue-500 font-medium text-2xl "
      >Increment & Decrement</div>
      <div
      className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]"
      >
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >-</button>
        <div className="font-bold text-5xl gap-12">{count}</div>
        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >+</button>
      </div>
      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"
      >Reset</button>
    </div>
  );
}

export default App;
