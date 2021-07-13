import { createAction, handleActions } from "redux-actions";
//1.액션 타입 정의하기
// const INCREASE = "counter/INCREASE";
// const DECREASE = "counter/DECREASE";

//2.액션 생성 함수 만들기
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

//3.초기상태 및 리듀서 함수 만들기
// const initialState = {
//   number: 0,
// };

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// export default counter;

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0;

const counter = handleActions(
  { [INCREASE]: (state) => state + 1, [DECREASE]: (state) => state - 1 },
  initialState,
);

export default counter;
