import { createStore } from "redux";
let state = {
  count: 0,
};
let prevState = state;
function increment() {
  //Mutating state

  state.count = state.count + 1;

  //Not mutating state
  state = {
    count: state.count + 1,
  };
}

let reduxState = {
  name: "Divyanshu Jain",
  age: 25,
  count: 0,
};
function reducer(state, action) {
  if (action.type == "increment") {
    return { ...state, count: state.count + 1 };
  } else if (action.type == "decrement") {
    return {
      ...state,
      count: state.count - 1,
    };
  } else if (action.type == "incrementBy") {
    return {
      ...state,
      count: state.count + action.payload,
    };
  }
  return state;
}

reduxState = reducer(reduxState, { type: "increment" });
reduxState = reducer(reduxState, { type: "increment" });
reduxState = reducer(reduxState, { type: "decrement" });
reduxState = reducer(reduxState, { type: "increment" });
reduxState = reducer(reduxState, { type: "increment" });
reduxState = reducer(reduxState, { type: "incrementBy", payload: 10 });
reduxState = reducer(reduxState, { type: "incrementBy", payload: 10 });
