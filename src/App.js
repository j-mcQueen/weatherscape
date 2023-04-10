import { useState } from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from './components/main/Main';

function App() {
  const [location, setLocation] = useState("");
  return (
    <div className="App">
      <Header
        location={location}
        setLocation={setLocation}
      />
      <Main
        location={location}      
      />
    </div>
  );
}

export default App;
