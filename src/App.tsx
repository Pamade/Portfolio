import "./styles/base.scss";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { IsTypingInitial } from "./Context/InitialTypingContext";
import Header from "./Header/Header";
import DesktopLayout from "./Layouts/DesktopLayout/DesktopLayout";
import MobileLayout from "./Layouts/MobileLayout/MobileLayout";
import Project from "./Project/Project";
import Projects from "./ProjectsData/ProjectsData";
import { useState, useEffect } from "react";
function App() {
  const {
    state: { isInitialTyping },
  } = useContext(IsTypingInitial);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                  {screenWidth < 1200 ? <MobileLayout /> : <DesktopLayout />}
                </main>
              )}
            </>
          }
        />
        {Projects.map(({ path, ...projectProps }) => (
          <Route
            key={path}
            path={path}
            element={<Project {...projectProps} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
