import './styles/App.css';
import Header from "./components/header"
import Hero from "./components/hero"
import Model3 from "./pages/model3"
import Footer from "./components/footer"
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
       <Header />
      <Hero />
      <Switch>
     <Route path="/Model3" component={Model3} exact/>
     <Route path="/ModelS" component={Model3} exact/>
     </Switch>
     <Footer />
    </>
  );
}

export default App;
