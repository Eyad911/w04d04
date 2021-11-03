
import './App.css';
import { Route } from "react-router-dom";
import {Nav} from './components/Nav';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Cards } from './components/Cards';
import { Card } from './components/Card';


function App() {
  return (
    <div className="App">
      <Nav />
      < Route exact path="/" component={Home} />
      < Route exact path="/about" component={About} />
      < Route exact path="/contact" component={Contact} />
      < Route exact path="/cards" component={Cards} />
      <Route exact path="/card/:id" component= {Card}/>

      
    </div>
  );
}

export default App;
