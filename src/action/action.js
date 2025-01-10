import data from "../data/data";

export const action = (topD, bottomD) => {
  if (!data[`${topD}-${bottomD}`]) {
    return null;
  }
  return data[`${topD}-${bottomD}`];
};
