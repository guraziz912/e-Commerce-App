//Inbuilt dependencies imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Custom imports
import Layout from './components/Layout/Layout';
import HomePage from './components/Homepage/HomePage';
//Css imports
import './App.css';

function App() {
  return (
    <Router className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
