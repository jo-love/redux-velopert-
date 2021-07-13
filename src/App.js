import React from "react";
import { Provider } from "react-redux";
// import CounterContainer from "./containers/CounterContainer";
// import TodosContainer from "./containers/TodosContainer";
// import SampleContainer from "./containers/SampleContainer";
import Comments from "./example/comments/Comments";
import store from "./example/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <SampleContainer /> */}
        <Comments />
        {/* <CounterContainer />
      <hr />
      <TodosContainer /> */}
        {/* Todo 컴포넌트를 TodosContainer로 교체 */}
      </div>
    </Provider>
  );
}
export default App;
