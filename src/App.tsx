import "./styles/base.scss";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { IsTypingInitial } from "./Context/InitialTypingContext";
import Header from "./Header/Header";
import DesktopLayout from "./Layouts/DesktopLayout/DesktopLayout";
import MobileLayout from "./Layouts/MobileLayout/MobileLayout";
import Project from "./Project/Project";
import Projects from "./ProjectsData/ProjectsData";

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
