import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => {
  return (
  <HashRouter basename='/'>
    <PortfolioContainer />;
  </HashRouter>
  )
}
export default App;
