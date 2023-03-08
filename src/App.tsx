import "./styles/base.scss";
import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { IsTypingInitial } from "./Context/InitialTypingContext";
import Header from "./Header/Header";
import DesktopLayout from "./Layouts/DesktopLayout/DesktopLayout";
import MobileLayout from "./Layouts/MobileLayout/MobileLayout";
import ujccap from "./images/ujccap.JPG";
import brainQuest from "./images/brainQuest.JPG";
import gameFinder from "./images/gameFinder.JPG";

import Project from "./Project/Project";
function App() {
  const {
    state: { isInitialTyping },
  } = useContext(IsTypingInitial);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              {!isInitialTyping && (
                <main id="main">
                  <MobileLayout />
                  <DesktopLayout />
                </main>
              )}
            </>
          }
        />
        <Route
          path="/ujccap"
          element={<Project name="Ujccap" backgroundImg={ujccap} />}
        />
        <Route
          path="/game-finder"
          element={<Project name="Game Finder" backgroundImg={gameFinder} />}
        />
        <Route
          path="/brain-quest"
          element={<Project name="Brain Quest" backgroundImg={brainQuest} />}
        />
      </Routes>
    </div>
  );
}

export default App;
