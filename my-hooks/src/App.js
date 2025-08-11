import React, {useState, useContext, createContext} from 'react';
import "./App.css";


function App()  {
  const themeContext = createContext();
  const [theme, setTheme] = useState("light")
  const [count, setCount] = useState(1);
  const increment = () => setCount(count + 1);
  const decrement= () => setCount(count - 1);
   const toggletheme = () => {
    setTheme((prevtheme)=> (prevtheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
        <themeContext.Provider value={theme}>
          <div>
              <h1>Current Theme: {theme}</h1>
              <button onClick={toggletheme}>Toggle Theme</button>
              <themeDisplay />
          </div>
        </themeContext.Provider>
      Him: DO you think you can count ?
      <br />
      Her: yes i think {count}
      <br/>
      <button onClick={increment}>I think</button>
      <button onClick={decrement} disabled={count === 0}>I doubt</button>
    </div>
  )
}



export default App
