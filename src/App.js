import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import { ViewportProvider } from "./hooks/useViewport";

import dotenv from "dotenv";
dotenv.config();

function App() {

  return (
    <ViewportProvider>
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Nav />
          <div className="Content">
            <Switch>
              <Route exact path="/"><About /></Route>
              <Route exact path="/contact"><Contact /></Route>
              <Route exact path="/portfolio"><Portfolio /></Route>
              <Route path="*"><NotFound /></Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </ViewportProvider>
  );
}

export default App;
