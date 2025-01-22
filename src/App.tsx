import { Button } from "./components/Button/Button";
import "./App.css";
import { handleReset } from "./helper/refresher";

import { useState } from "react";
import { Card } from "./components/Card/Card";
import { InputSection } from "./components/Input/Input";
import { Range, Arg, Datalist } from "./components/Input/InputType";
import { DataFetch } from "./helper/fetchData";

function App() {
  const [topD, setTopD] = useState<Range | null>(null);
  const [bottomD, setBottomD] = useState<Range | null>(null);
  const [list, setList] = useState<Datalist["list"]>([]);

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

  const fetchData = () => {
    const data = DataFetch(topD, bottomD);
    setList(data);
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
      <Card list={list} />
    </div>
  );
}

export default App;
