import {
  decrement,
  increment,
  incrementWithPayload,
} from "./redux/features/counterSlice/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/features/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex bg-slate-200 px-10 py-10">
          <button
            onClick={() => dispatch(incrementWithPayload(5))}
            className="text-xl bg-green-700 px-3 py-2 rounded-md mr-3 text-white"
          >
            Increment 5
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="text-xl bg-green-700 px-3 py-2 rounded-md text-white"
          >
            Increment
          </button>
          <h2 className="text-3xl mx-3">{count}</h2>
          <button
            onClick={() => dispatch(decrement())}
            className="text-xl bg-red-700 px-3 py-2 rounded-md text-white"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
