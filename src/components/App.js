
import React, { useState } from "react";
import './../styles/App.css';
// import Child from "./Child";
import Parent from "./Parent";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
        {/* Do not remove the main div */}
        <Parent/>
    </div>
  )
}

export default App
