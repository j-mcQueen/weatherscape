import { useState } from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from './components/main/Main';

function App() {
  const [data, setData] = useState();
  const [temp, setTemp] = useState("C");

  return (
    <div className="App">
      <Header 
        data={data}
        setData={setData}
      />
      {
        data // display main only if a user has searched for a location
        ?
        <Main
          weather={data}
          temp={temp}
          setTemp={setTemp}
        />
        :
        <></>
      }
    </div>
  );
}

export default App;
