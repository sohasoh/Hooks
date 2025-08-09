import React, {useState} from 'react';


function App()  {
  const [count, setCount] = useState(2);
  const increment = () => setCount(count *2);
  const decrement= () => setCount(count / 2);
  return (
    <div>
      Him: I want to know your body count ?
      <br />
      Her: my body count is {count}
      <br/>
      <button onClick={increment}>I think</button>
      <button onClick={decrement}>I doubt</button>
    </div>
  )
}

export default App
