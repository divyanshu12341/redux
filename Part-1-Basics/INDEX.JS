import { legacy_createStore as createStore } from "redux";

const initialState = {
  name: "Divyanshu Jain",
  age: 25,
  count: 0,
};

function reducer(state = initialState, action) {
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

// reduxState = reducer(reduxState, { type: "increment" });
// reduxState = reducer(reduxState, { type: "increment" });
// reduxState = reducer(reduxState, { type: "decrement" });
// reduxState = reducer(reduxState, { type: "increment" });
// reduxState = reducer(reduxState, { type: "increment" });
// reduxState = reducer(reduxState, { type: "incrementBy", payload: 10 });
// reduxState = reducer(reduxState, { type: "incrementBy", payload: 10 });

const devToolsEnhancer =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__?.();
const store = createStore(reducer, devToolsEnhancer);

store.subscribe(() => {
  console.log("State changed:", store.getState());
});

console.log("Initial state:", store.getState());

store.dispatch({ type: "decrement" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "incrementBy", payload: 10 });
