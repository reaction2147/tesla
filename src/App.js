import './styles/App.css';
import Header from "./components/header"
import Model3 from "./pages/model3"
import ModelS from "./pages/modelS"

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
       <Header />
      
      <Switch>
     <Route path="/Model3" component={Model3} exact/>
     <Route path="/ModelS" component={ModelS} exact/>
     </Switch>
     
    </>
  );
}

export default App;
