import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

let name = "sweta";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)

    }, 2000)

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert("Dark mode has been enabled", "success");
      document.title = "TestUtils DarkMode"

    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been enabled", "success");
      document.title = "TestUtils LightMode"
    }


  }
  return (
    <>
     <Router>
      <Navbar title="TestUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3" >
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>

          <Route  exact path="/" element={<TextForm showalert={showalert} heading="Enter The Text" mode={mode} />}>
            
          </Route>

        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
