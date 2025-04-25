import { useState } from "react";
import { getHour, Hour } from "./modules/hour";
import "./App.css";

function App() {
  const [hour, setHour] = useState<Hour | null>(null);
  const [moonInputValue, setMoonInputValue] = useState(0);
  const [sunInputValue, setSunInputValue] = useState(0);
  const [earthInputValue, setEarthInputValue] = useState(0);

  const handleGetHour = () => {
    const result = getHour(moonInputValue, sunInputValue, earthInputValue);
    setHour(result);
  };

  return (
    <div className="page">
      <div className="form">
        <div className="input">
          <label>Valeur cadran Lune</label>
          <input
            type="number"
            min="1"
            max="2"
            id="moon"
            onChange={(event) =>
              setMoonInputValue(parseInt(event.target.value))
            }
          />
        </div>
        <div className="input">
          <label>Valeur cadran Soleil</label>
          <input
            type="number"
            min="1"
            max="2"
            id="sun"
            onChange={(event) => setSunInputValue(parseInt(event.target.value))}
          />
        </div>
        <div className="input">
          <label>Valeur cadran Terre</label>
          <input
            type="number"
            min="1"
            max="2"
            id="earth"
            onChange={(event) =>
              setEarthInputValue(parseInt(event.target.value))
            }
          />
        </div>
        <button
          disabled={
            moonInputValue == 0 || sunInputValue == 0 || earthInputValue == 0
          }
          onClick={handleGetHour}
        >
          Calculer l'heure
        </button>
      </div>

      {hour && <span>Heure : {hour}</span>}
    </div>
  );
}

export default App;
