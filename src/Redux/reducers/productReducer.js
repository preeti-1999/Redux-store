import { ActionType } from "../constants/actionType";

const intialState = {
  products: [
    {
      id: 1,
      title: "Dipesh",
      category: "programmer",
    },
    
  ],
};

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCT:
      return state;
    default:
      return state;
  }
};
