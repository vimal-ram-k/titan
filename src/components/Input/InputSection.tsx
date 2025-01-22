import { ButtonProps } from "./InputType";
import React from "react";

export const InputElementSection = (props: ButtonProps) => {
  return (
    <input
      className="btn-input"
      value={props.value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.target.value);
        props.onCallback(Number(e.target.value), {
          value:
            props.diameter === "top-From"
              ? "top-From"
              : props.diameter === "top-To"
              ? "top-To"
              : props.diameter === "bottom-From"
              ? "bottom-From"
              : "botton-To",
        });
      }}
    />
  );
};
