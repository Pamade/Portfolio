import "./styles/base.scss";

import { useContext, useEffect } from "react";
import { IsTypingInitial } from "./Context/InitialTypingContext";
import Header from "./Header/Header";
import DesktopLayout from "./Layouts/DesktopLayout/DesktopLayout";
import MobileLayout from "./Layouts/MobileLayout/MobileLayout";

function App() {
  const {
    state: { isInitialTyping },
  } = useContext(IsTypingInitial);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY * 2;
      document.documentElement.scrollTop += delta;
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

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
