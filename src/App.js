import React, { Fragment } from "react";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";

function App() {
  return (
    <Fragment>
      <Route path="/" exact component={Main} />
      <Route path="/home" exact component={Main} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    </Fragment>
  );
}

export default App;
