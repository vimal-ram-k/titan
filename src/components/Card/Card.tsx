import "./Card.css";

import watch1 from "../../assets/watches/watch1.jpg";
import watch2 from "../../assets/watches/watch2.jpg";
import watch3 from "../../assets/watches/watch3.jpg";
import watch4 from "../../assets/watches/watch4.jpg";
import watch5 from "../../assets/watches/watch5.jpg";

type propsCards = {
  list:
    | {
        top: number;
        bottom: number;
        models: string;
      }[]
    | [];
};

const images = [
  watch1,
  watch2,
  watch3,
  watch4,
  watch5,
  watch1,
  watch2,
  watch3,
  watch4,
  watch5,
  watch1,
  watch2,
  watch3,
  watch4,
  watch5,
  watch1,
  watch2,
  watch3,
  watch4,
  watch5,
];

export const Card = (props: propsCards) => {
  console.log(props.list);
  return (
    <div>
      <ul className="card-list">
        {props.list.map((item, index) => {
          return (
            <li key={item.models + index}>
              <CardUI
                image={images[index]}
                models={item.models}
                top={item.top}
                bottom={item.bottom}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

type cardprops = {
  image: string;
  top: number;
  bottom: number;
  models: string;
};

export const CardUI = (props: cardprops) => {
  return (
    <div className="cardui">
      <img src={props.image} alt="" className="cardimage" />
      <h1 className="cardui-model">Top : {props.top}</h1>
      <h1 className="cardui-model">Bottom : {props.bottom}</h1>
      <h1 className="cardui-model">{props.models}</h1>
    </div>
  );
};
