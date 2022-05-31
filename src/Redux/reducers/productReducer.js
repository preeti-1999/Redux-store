import { ActionType } from "../constants/actionType";

const intialState = {
  products: [
    {
      id: 1,
      title: "Dipesh",
      category: "programmer",
    },
    {
      id: 2,
      title: "Preeti",
      category: "Intern",
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
