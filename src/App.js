import Home from './pages/Home'
import { Route, Switch } from 'react-router-dom'
import Appbar from './containers/Appbar/Appbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Auth from './pages/Auth';
import Show from './pages/Show';
import Error from './pages/Error';
import PrivateRoute from './services/routes/PrivateRoute'
import { AuthProvider } from './services/context/AuthContext';
import Wishlist from './pages/Wishlist'

function App() {
  return (
<AuthProvider>
      <div className="App">
        <Appbar />
        <Switch>
          <Route path="/auth" component={Auth} />
          <PrivateRoute path="/wishlist" component={Wishlist} />
          <Route path="/show/:id" component={Show} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={Error} />

        </Switch>
      </div>
</AuthProvider>
  );
}

export default App;
