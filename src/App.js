import logo from "./logo.svg";
import "./App.css";
import Tuiter from "./tuiter";
import Labs from "./labs";
import {
  BrowserRouter,
  HashRouter,
  Link,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Lab3 from "./labs/lab3";
import Lab4 from "./labs/lab4";

import store from "./store";
import { Provider } from "react-redux";
import Canvas from "./canvas";
import Project from "./project";

function App() {
  const show = "labs";
  return (
    <Provider store={store}>
      <div className="container">
        <HashRouter>
          <Link to="hello">Hello World</Link> | <Link to="labs">Labs</Link> |
          <Link to="tuiter">Tuiter</Link> | <Link to="canvas">Canvas</Link> |
          <Link to="project">Project</Link>
          <Routes>
            <Route path="/" element={<Navigate to={"/labs"} />} />
            <Route path="/hello" element={<h1>Hello World</h1>} />
            <Route path="/labs/*" element={<Labs />} />
            <Route path="/tuiter/*" element={<Tuiter />} />
            <Route path="/canvas/*" element={<Canvas />} />
            <Route path="/project/*" element={<Project />} />
          </Routes>
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
