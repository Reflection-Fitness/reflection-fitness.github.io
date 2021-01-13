import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { HomePage } from './pages/HomePage/HomePage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { ServicesPage } from './pages/ServicesPage/ServicesPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='/contact' component={ContactPage}/>
        <Route exact path='/services' component={ServicesPage}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
