import { useState } from "react";

function App() {


  let [x, setX] = useState(25);
  let test = () => {

    setX((val) => {

      return val * 2;
    });


    console.log(x);

  }


  return (
    <div>
      <p>Ce mai {x} faci</p>
      <button onClick={test}>click</button>
    </div>
  );
}

export default App;
