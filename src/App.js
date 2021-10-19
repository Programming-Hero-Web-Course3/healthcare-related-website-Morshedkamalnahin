import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Services from './components/Services/Services';

function App() {
  return (

    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/Services">
          <Services></Services>
        </Route>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route path="/Login">
          <Login></Login>
        </Route>
        <Route path="/About">
          <About></About>
        </Route>
        <Route path="/Contact">
          <Contact></Contact>
        </Route>

      </Switch>
      <Footer></Footer>
    </Router>

  );
}

export default App;
