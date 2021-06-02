//Inbuilt dependencies imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Custom imports
import Layout from './components/Layout/Layout';
import HomePage from './components/Homepage/HomePage';
import MensClothing from './pages/MensClothing';
import WomensClothing from './pages/WomensClothing';
import Electronics from './pages/Electronics';
import ProductDetail from './pages/ProductDetail';

//Css imports
import './App.css';

//constants
import constants from './utils/constants';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={constants.homePath} component={HomePage} exact></Route>
          <Route
            path={constants.menClothingPath}
            component={MensClothing}
            exact
          />
          <Route
            path={constants.womenClothingPath}
            component={WomensClothing}
            exact
          />
          <Route
            path={constants.electronicsPath}
            component={Electronics}
            exact
          />
          <Route
            path={`/electronics/:itemId`}
            component={ProductDetail}
            exact
          />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
