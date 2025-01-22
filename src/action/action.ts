import {topDiameter , bottomDiameter , Models} from "../data/data";
import { RangeProps } from "./types";


export const getRangeValues = (props : RangeProps) => {
  
  const result = [];
  for(let  i = 0 ; i < topDiameter.length ; i++){
    if(topDiameter[i] >= Math.floor( props.topD.from) && topDiameter[i] <= Math.floor(props.topD.from) +1 ){
      if(bottomDiameter[i] >= Math.floor(props.bottomD.from) && bottomDiameter[i] <= Math.floor(props.bottomD.from)+1){
      result.push({top : topDiameter[i] , bottom : bottomDiameter[i] , models :  Models[i]})
      }
    }
  }
  return result;

}