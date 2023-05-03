import { useState } from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from './components/main/Main';

function App() {
  const [data, setData] = useState();
  const [unit, setUnit] = useState("metric");
  const [cycle, setCycle] = useState(0);

  return (
    <div className="App">
      <Header
        data={data}
        setData={setData}
        unit={unit}
        setUnit={setUnit}
      />
      {
        data // display main only if a user has searched for a location
        ?
        <Main
          weather={data}
          unit={unit}
          setUnit={setUnit}
          cycle={cycle}
          setCycle={setCycle}
        />
        :
        <></>
      }
    </div>
  );
}

export default App;
