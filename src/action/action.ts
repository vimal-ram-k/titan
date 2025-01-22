import {topDiameter , bottomDiameter , Models} from "../data/data";
import { RangeProps } from "./types";


export const getRangeValues = (props : RangeProps) => {
  
  const result = [];
  for(let  i = 0 ; i < topDiameter.length ; i++){
    if(topDiameter[i] >= props.topD.from && topDiameter[i] <= props.topD.to ){
      if(bottomDiameter[i] >= props.bottomD.from && bottomDiameter[i] <= props.bottomD.to){
      result.push({top : topDiameter[i] , bottom : bottomDiameter[i] , models :  Models[i]})
      }
    }
  }
  return result;

}