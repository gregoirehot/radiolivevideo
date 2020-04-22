import React from "react";
import { getRandom } from "../utils";

export const AppContext = React.createContext({});

export const initialState = {
  indexRadio: 0,
};

const getRandomIndex = (indexRadio) => {
  const random = getRandom();
  let randomIndex = 0;
  if (indexRadio !== random) {
    randomIndex = random;
  } else {
    randomIndex = getRandom();
  }
  return randomIndex;
};

const recordIndex = (indexRadio) => {
  window.localStorage.setItem("indexRadio", indexRadio);
  return indexRadio;
};

export function reducer(state, action) {
  switch (action.type) {
    case "PREVIEW_INDEX_RADIO":
      return {
        ...state,
        indexRadio: recordIndex(state.indexRadio - 1),
      };
    case "RANDOM_INDEX_RADIO":
      return {
        ...state,
        indexRadio: recordIndex(getRandomIndex(state.indexRadio)),
      };
    case "NEXT_INDEX_RADIO":
      return {
        ...state,
        indexRadio: recordIndex(state.indexRadio + 1),
      };
    case "UPDATE_INDEX_RADIO":
      return {
        ...state,
        indexRadio: recordIndex(action.payload),
      };
    default:
      return state;
  }
}
