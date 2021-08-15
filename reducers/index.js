import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  bill: "",
  tip: "",
  people: "",
};

const RootReducer = createReducer(initialState, {
  SET_VALUE: (state, action) => {
    state[action.attribute] = parseFloat(action.value);
  },
  SET_TIP: (state, action) => {
    state.tip = parseFloat(action.value);
  },
  RESET_CALCULATOR: (state) => {
    state.bill = "";
    state.tip = "";
    state.people = "";
  },
});

export default RootReducer;
