import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter"; //액션함수 불러오기
import Counter from "../components/Counter"; // 연결할 ui 코드 부분 가져오기

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = (state) => ({ number: state.counter.number });
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
// connect(mapStateToProps: 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위한 함수, mapDispatchToProps:액션생성함수를 컴포넌트의 props로 넘겨주기 위한 함수)(연결할 컴포넌트)
