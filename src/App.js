import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer /> 
      {/* Todo 컴포넌트를 TodosContainer로 교체 */}
    </div>
  );
}
export default App;
