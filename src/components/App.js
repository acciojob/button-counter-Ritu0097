
import React from "react";
import './../styles/App.css';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Button clicked {count} times.</p>
    </div>
  );
};


export default App
