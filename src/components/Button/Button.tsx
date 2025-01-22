import "../Button/Button.css";
// import plus from "../../assets/plus.svg";
// import minus from "../../assets/minus.png";
// import line from "../../assets/Line.svg";
import React, { useState } from "react";

type Range = {
  from: number;
  to: number;
};

type Arg = {
  value: "topD-From" | "topD-To" | "BotD-From" | "BotD-To";
};

type buttonProps = {
  name: string;
  onCallback: (newValue: Range, arg: Arg) => void;
};
export const InputSection = (props: buttonProps) => {
  const [number, setNumber] = useState("");
  const [toNumber, setToNumber] = useState("");

  // const [error, isError] = useState<boolean>(false);
  // const handleIncrement = () => {
  //   isError(false);
  //   if (number) {
  //     const newValue = number + 1;
  //     setNumber(newValue);
  //     props.onCallback(newValue);
  //   }
  // };

  // const handleDecrement = () => {
  //   if (number) {
  //     if (number - 1 > 0) {
  //       isError(false);
  //       const newValue = number - 1;
  //       setNumber(newValue);
  //       props.onCallback(newValue);
  //     } else {
  //       isError(true);
  //     }
  //   }
  // };

  return (
    <div className="btn">
      <h1 className="btn-name">{props.name}</h1>

      <section className="btn-in">
        <label htmlFor="btn-input">From</label>
        <input
          className="btn-input"
          value={number}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNumber(e.target.value);
            props.onCallback(
              { from: Number(e.target.value), to: 0 },
              {
                value:
                  `${props.name}` === "Top Diameter"
                    ? "topD-From"
                    : "BotD-From",
              }
            );
          }}
        />

        <label htmlFor="btn-input">To</label>
        <input
          className="btn-input"
          value={toNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setToNumber(e.target.value);
            props.onCallback(
              { from: 0, to: Number(e.target.value) },
              {
                value:
                  `${props.name}` === "Top Diameter" ? "topD-To" : "BotD-To",
              }
            );
          }}
        />
        {/* <section className="btn-input-right">
          <img
            src={plus}
            className="btn-in-icon plus"
            alt=""
            onClick={handleIncrement}
          />
          <img src={line} className=" line" alt="" />
          <img
            src={minus}
            className="btn-in-icon minus"
            alt=""
            onClick={handleDecrement}
          />
        </section> */}
      </section>
      {/* {error && <p className="btn-error">Value shouldn't go less than 0</p>} */}
    </div>
  );
};

export const Button = (props: { name: string; onCallback: () => void }) => {
  return (
    <button className={`btn-key ${props.name}`} onClick={props.onCallback}>
      {props.name}
    </button>
  );
};
