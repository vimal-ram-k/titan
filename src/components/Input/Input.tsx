import "../Button/Button.css";
import { InputElementSection } from "./InputSection";
import { InputProps } from "./InputType";
import { useState } from "react";

export const InputSection = (props: InputProps) => {
  const [number, setNumber] = useState("");
  const [toNumber, setToNumber] = useState("");

  return (
    <div className="btn">
      <h1 className="btn-name">{props.name}</h1>

      <section className="btn-in">
        <label htmlFor="btn-input">From</label>
        <InputElementSection
          name={props.name}
          onCallback={props.onCallback}
          setValue={setNumber}
          value={number}
          diameter={
            `${props.name}` === "Top Diameter" ? "top-From" : "bottom-From"
          }
        />

        <label htmlFor="btn-input">To</label>

        <InputElementSection
          name={props.name}
          onCallback={props.onCallback}
          setValue={setToNumber}
          value={toNumber}
          diameter={`${props.name}` === "Top Diameter" ? "top-To" : "bottom-To"}
        />
      </section>
    </div>
  );
};
