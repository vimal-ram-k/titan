type Range = {
  from: number;
  to: number;
};

type Arg = {
  value: "top-From" | "bottom-From" | "top-To" | "botton-To";
};



type InputProps = {
      name: string;
      onCallback: (newValue : number , arg : Arg) => void;
}
type ButtonProps = {
  name: string;
  setValue : (value:string) => void;
  value : string;
  onCallback: (newValue: number, arg: Arg) => void;
  diameter : string
};


export {Range , Arg , ButtonProps , InputProps}