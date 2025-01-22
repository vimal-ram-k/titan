import { Button, InputSection } from "./components/Button/Button";
import "./App.css";
import { useState } from "react";
import { getRangeValues } from "./action/action";
import { Card } from "./components/Card/Card";

type Range = {
  from: number;
  to: number;
};

type Arg = {
  value: "topD-From" | "topD-To" | "BotD-From" | "BotD-To";
};

function App() {
  const [topD, setTopD] = useState<Range | null>(null);
  const [bottomD, setBottomD] = useState<Range | null>(null);
  const [list, setList] = useState<
    | [
        {
          top: number;
          bottom: number;
          models: string;
        }
      ]
    | []
  >([]);
  const [error, isError] = useState<boolean>(false);

  const handleD = (newValue: Range, arg: Arg): void => {
    if (arg.value === "topD-From") {
      setTopD(() => ({
        from: newValue.from,
        to: newValue.from,
      }));
    }

    if (arg.value === "topD-To") {
      setTopD((prev) => ({
        from: prev?.from ?? newValue.from,
        to: newValue.to,
      }));
    }

    if (arg.value === "BotD-From") {
      setBottomD(() => ({
        from: newValue.from,
        to: newValue.from,
      }));
    }

    if (arg.value === "BotD-To") {
      setBottomD((prev) => ({
        from: prev?.from ?? newValue.from,
        to: newValue.to,
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
        <InputSection name={"Top Diameter"} onCallback={handleD}></InputSection>
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
