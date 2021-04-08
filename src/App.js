import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowseScreen, HomeScreen, LoginScreen, SignupScreen } from "./screens";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/signup" component={SignupScreen} />
        <Route exact path="/browse" component={BrowseScreen} />
      </Switch>
    </Router>
  );
};

export default App;
