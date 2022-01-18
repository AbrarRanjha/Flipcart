import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Box } from "@material-ui/core";
import Cart from "./components/Cart/Cart";
import TemplateProvider from "./components/templates/TemplateProvider";
import ContextProvider from "./components/context/ContextProvider";
import DetailView from "./components/ItemDetails/DetailView";
function App() {
  return (
    <div className="App">
      <TemplateProvider>
        <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Switch>
              <Route exact path= '/' component={Home} />
              <Route exact path= '/cart' component={Cart} />
              <Route exact path= '/product/:id' component={DetailView} />
             
            </Switch>
          </Box>
        </BrowserRouter>
        </ContextProvider>
      
      </TemplateProvider>

    
    </div>
  );
}

export default App;
