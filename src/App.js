import { BrowserRouter as Router, Switch } from "react-router-dom";
import { BrowseScreen, HomeScreen, LoginScreen, SignupScreen } from "./screens";
import useAuthListener from "./hooks/useAuthListner";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

const App = () => {
  // const user = {};
  // const user = null;
  // const user = { name: 'username' };
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedinpath="/browse"
          exact
          path="/">
          <HomeScreen />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedinpath="/browse"
          exact
          path="/login">
          <LoginScreen />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedinpath="/browse"
          exact
          path="/signup">
          <SignupScreen />
        </IsUserRedirect>
        <ProtectedRoute user={user} exact path="/browse">
          <BrowseScreen />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;
