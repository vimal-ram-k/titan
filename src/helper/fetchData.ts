import {  Range } from "../components/Input/InputType";
import { getRangeValues } from "../action/action";

export const DataFetch = (topD : Range | null , bottomD : Range | null) => {
  if (topD && bottomD) {
    const data = getRangeValues({ topD, bottomD });
    return data
    }
    return []
  }

