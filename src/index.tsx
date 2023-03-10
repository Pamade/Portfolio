import ReactDOM from "react-dom/client";
import App from "./App";
import { IsTypingInitialProvider } from "./Context/InitialTypingContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <IsTypingInitialProvider>
      <App />
    </IsTypingInitialProvider>
  </BrowserRouter>
);
