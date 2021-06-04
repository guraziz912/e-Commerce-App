//Inbuilt dependencies imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Custom imports
import Layout from './components/Layout/Layout';
import HomePage from './components/Homepage/HomePage';
import Products from './components/Products/Products';
import ProductDetail from './components/Products/ProductDetail';
import Cart from './components/Cart/Cart';

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
            path={'/products/:productCategory'}
            component={Products}
            exact
          />
          <Route
            path={`/products/:productCategory/:itemId`}
            component={ProductDetail}
            exact
          />
          <Route path={`/cart`} component={Cart} exact />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
