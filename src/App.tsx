import "./styles/base.scss";

import { useContext } from "react";
import { IsTypingInitial } from "./Context/InitialTypingContext";
import Header from "./Header/Header";
import DesktopLayout from "./Layouts/DesktopLayout/DesktopLayout";
import MobileLayout from "./Layouts/MobileLayout/MobileLayout";

function App() {
  const {
    state: { isInitialTyping },
  } = useContext(IsTypingInitial);
  return (
    <div className="App">
      <Header />
      {!isInitialTyping && (
        <main id="main">
          <MobileLayout />
          <DesktopLayout />
        </main>
      )}
    </div>
  );
}

export default App;
