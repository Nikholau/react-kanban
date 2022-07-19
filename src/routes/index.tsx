import { Home } from "../pages/Home";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;