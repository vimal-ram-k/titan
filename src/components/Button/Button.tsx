import "../Button/Button.css";

import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.png";
import line from "../../assets/Line.svg";
import React, { useState } from "react";

type buttonProps = {
  name: string;
  onCallback: (newValue: number) => void;
};
export const InputSection = (props: buttonProps) => {
  const [number, setNumber] = useState<number | null>(null);
  const [error, isError] = useState<boolean>(false);
  const handleIncrement = () => {
    isError(false);
    if (number) {
      const newValue = number + 1;
      setNumber(newValue);
      props.onCallback(newValue);
    }
  };

  const handleDecrement = () => {
    if (number) {
      if (number - 1 > 0) {
        isError(false);
        const newValue = number - 1;
        setNumber(newValue);
        props.onCallback(newValue);
      } else {
        isError(true);
      }
    }
  };

  return (
    <div className="btn">
      <h1 className="btn-name">{props.name}</h1>

      <section className="btn-in">
        <input
          type="number"
          className="btn-input"
          value={number}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNumber(Number(e.target.value));
            props.onCallback(Number(e.target.value));
          }}
        />
        <section className="btn-input-right">
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
        </section>
      </section>
      {error && <p className="btn-error">Value shouldn't go less than 0</p>}
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
