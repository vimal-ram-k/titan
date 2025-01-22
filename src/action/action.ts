import {topDiameter , bottomDiameter , Models} from "../data/data";
import { RangeProps } from "./types";
// export const action = (topD  : number , bottomD : number) => {
//   if (!data[`${topD}-${bottomD}`]) {
//     return null;
//   }
//   return data[`${topD}-${bottomD}`];
// };




export const getRangeValues = (props : RangeProps) => {
  
  const result = [];
  for(let  i = 0 ; i < topDiameter.length ; i++){
    if(topDiameter[i] >= props.topD.from && topDiameter[i] <= props.topD.to ){
      if(bottomDiameter[i] >= props.bottomD.from && bottomDiameter[i] <= props.bottomD.to){
      result.push(Models[i])
      }
    }
  }
  return result;

}