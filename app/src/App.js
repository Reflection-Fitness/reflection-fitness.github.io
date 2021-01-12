import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { DevWarning } from './components/DevWarning/DevWarning';
import { HomePage } from './pages/PageNotFound/HomePage/HomePage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <DevWarning />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
