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
import GnrxList from "./generx/list";
import GnrxEdit from "./generx/edit";

function App() {
  const show = "labs";
  return (
    <Provider store={store}>
      <div className="container-fluid">
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
            <Route
              path="/movies"
              element={
                <GnrxList
                  collection="movies"
                  label={(obj) => obj.title}
                  baseUrl="http://localhost:4000/api"
                />
              }
            />
            <Route
              path="/movies/:id"
              element={
                <GnrxEdit
                  collection="movies"
                  baseUrl="http://localhost:4000/api"
                  form={{
                    title: {
                      label: "Title",
                    },
                  }}
                />
              }
            />

            <Route
              path="/actors"
              element={
                <GnrxList
                  collection="actors"
                  label={(obj) => `${obj.firstName} ${obj.lastName}`}
                  baseUrl="http://localhost:4000/api"
                />
              }
            />
            <Route
              path="/actors/:id/movies"
              element={
                <GnrxList
                  collection="movies"
                  one="actors"
                  many="movies"
                  label={(obj) => `${obj.title}`}
                  baseUrl="http://localhost:4000/api"
                />
              }
            />
            <Route
              path="/actors/:id"
              element={
                <GnrxEdit
                  collection="actors"
                  baseUrl="http://localhost:4000/api"
                  form={{
                    firstName: {
                      label: "First Name",
                    },
                    lastName: {
                      label: "Last Name",
                    },
                  }}
                  many="movies"
                />
              }
            />
          </Routes>
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
