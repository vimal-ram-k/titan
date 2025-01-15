import { Button, InputSection } from "./components/Button/Button";
import "./App.css";
import { useState } from "react";
import { action } from "./action/action";
import { Card } from "./components/Card/Card";

function App() {
  const [topD, setTopD] = useState<number>(0);
  const [bottomD, setBottomD] = useState<number>(0);
  const [list, setList] = useState<[]>([]);
  const [error, isError] = useState<boolean>(false);

  const handleTopD = (newValue: number): void => {
    setTopD(newValue);
  };

  const handleBottomD = (newValue: number): void => {
    setBottomD(newValue);
  };

  const handleReset = () => {
    window.location.reload();
  };

  const fetchData = () => {
    console.log(topD, bottomD);
    const data = action(topD, bottomD);
    if (!data) {
      console.log("data", data);
      isError(true);
    } else {
      isError(false);
      setList(data);
      console.log(list);
    }
  };

  return (
    <div className="app">
      <section className="btn-colletion">
        <InputSection
          name={"Top Diameter"}
          onCallback={handleTopD}
        ></InputSection>
        <InputSection
          name={"Bottom Diameter"}
          onCallback={handleBottomD}
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
