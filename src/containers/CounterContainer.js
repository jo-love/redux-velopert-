import React from "react";
import { connect } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter"; //액션함수 불러오기
import Counter from "../components/Counter"; // 연결할 ui 코드 부분 가져오기

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

// 1. // mapStateToProps, mapDispatchToProps 미리 선언해서 쓰는 방법
// const mapStateToProps = (state) => ({ number: state.counter.number });
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase()); //액션함수 불러오기
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });
// connect(mapStateToProps: 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위한 함수, mapDispatchToProps:액션생성함수를 컴포넌트의 props로 넘겨주기 위한 함수)(연결할 컴포넌트)
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 2.mapStateToProps, mapDispatchToProps없이 익명 함수 사용해서 connect 함수 만들기
export default connect((state) => ({ number: state.counter }), {
  increaseAsync,
  decreaseAsync,
})(CounterContainer);
