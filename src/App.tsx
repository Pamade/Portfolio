import React, { useEffect, useState } from "react";
import ShowingTextEveryLetter from "./Components/ShowingTextEveryLetter";

import "./styles/base.scss";

function App() {
  return (
    <div className="App">
      <ShowingTextEveryLetter
        text="Fullstack Developer"
        heading="h1"
        fontSizeRem={5}
      />
    </div>
  );
}

export default App;
