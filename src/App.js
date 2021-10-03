import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About/About';
import ContatcUs from './components/ContacUs/ContatcUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MoreItems from './components/MoreItems/MoreItems';

function App() {
  return (
    <div className="App">
       <Router>
         <Header></Header>
         <Switch>
           <Route path="/home">
              <Home></Home>
           </Route>

           <Route path="more">
             <MoreItems></MoreItems>
           </Route>

           <Route path="/about">
              <About></About>
           </Route>
           
           <Route path="/contact">
              <ContatcUs></ContatcUs>
           </Route>

         </Switch>
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
