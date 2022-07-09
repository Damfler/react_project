import Articles from "./components/Articles/Articles";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// React query
// React router dom
// COMPLETE

const App = () => {
  return (
    <div style={{ padding: "20px 40px" }}>
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Articles />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
