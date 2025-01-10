import "./Card.css";

import watch1 from "../../assets/watches/watch1.jpg";
import watch2 from "../../assets/watches/watch2.jpg";
import watch3 from "../../assets/watches/watch3.jpg";
import watch4 from "../../assets/watches/watch4.jpg";
import watch5 from "../../assets/watches/watch5.jpg";

type propsCards = {
  list: [];
};

const images = [watch1, watch2, watch3, watch4, watch5];

export const Card = (props: propsCards) => {
  console.log(props.list);
  return (
    <div>
      <ul className="card-list">
        {props.list.map((item, index) => {
          return (
            <li key={item + index}>
              <CardUI image={images[index]} model={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

type cardprops = {
  image: string;
  model: string;
};

export const CardUI = (props: cardprops) => {
  return (
    <div className="cardui">
      <img src={props.image} alt="" className="cardimage" />
      <h1 className="cardui-model">{props.model}</h1>
    </div>
  );
};
