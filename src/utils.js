import { radios, maxIndex } from "./datas";

export const getRadio = (index) => {
  return radios[index];
};

export const getRadioByShareCode = (shareCode) => {
  return radios
    ? radios?.find((radio) => radio?.shareCode === shareCode)
    : 0;
};

export const getRandom = () => {
  return Math.round(Math.random() * maxIndex);
};
