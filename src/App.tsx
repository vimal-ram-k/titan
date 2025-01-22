import { Button } from "./components/Button/Button";
import "./App.css";

import { useState } from "react";
import { getRangeValues } from "./action/action";
import { Card } from "./components/Card/Card";
import { InputSection } from "./components/Input/Input";

type Range = {
  from: number;
  to: number;
};

type Arg = {
  value: "top-From" | "bottom-From" | "top-To" | "botton-To";
};

function App() {
  const [topD, setTopD] = useState<Range | null>(null);
  const [bottomD, setBottomD] = useState<Range | null>(null);
  const [list, setList] = useState<
    | {
        top: number;
        bottom: number;
        models: string;
      }[]
    | []
  >([]);
  const [error, isError] = useState<boolean>(false);

  const handleD = (newValue: number, arg: Arg): void => {
    if (arg.value === "top-From") {
      setTopD((prev) => ({
        from: newValue,
        to: prev?.to ?? newValue,
      }));
    }

    if (arg.value === "bottom-From") {
      setBottomD((prev) => ({
        from: newValue,
        to: prev?.to ?? newValue,
      }));
    }

    if (arg.value === "botton-To") {
      setBottomD((prev) => ({
        from: prev?.from ?? newValue,
        to: newValue,
      }));
    }

    if (arg.value === "top-To") {
      setTopD((prev) => ({
        from: prev?.from ?? newValue,
        to: newValue,
      }));
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  const fetchData = () => {
    console.log(topD, bottomD);
    if (topD && bottomD) {
      const data = getRangeValues({ topD, bottomD });
      if (!data) {
        isError(true);
      } else {
        isError(false);
        setList(data);
      }
    }
  };

  return (
    <div className="app">
      <section className="btn-colletion">
        <InputSection name={"Top Diameter"} onCallback={handleD} />
        <InputSection
          name={"Bottom Diameter"}
          onCallback={handleD}
        ></InputSection>

        <section className="footer">
          <Button name="Reset" onCallback={handleReset}></Button>
          <Button name="Search" onCallback={fetchData}></Button>
        </section>
      </section>
      {error && <p className="card-error">No Items</p>}
      {!error && <Card list={list} />}
    </div>
  );
}

export default App;
