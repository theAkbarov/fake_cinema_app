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
import Account from './pages/Account'
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Footer from './containers/Footer/Footer';
import Collections from './pages/Collections';

function App() {

  return (
<AuthProvider>
      <div className="App">
        <Appbar />
        <Switch>
          <Route path="/auth" component={Auth} />
          <PrivateRoute path="/wishlist" component={Wishlist} />
          <PrivateRoute path="/profile" component={Account} />
          <PrivateRoute path="/movies" component={Movies} />
          <Route path="/show/:id" component={Show} />
          <Route path="/tv-show" component={TvShows} />
          <Route path="/collection" component={Collections} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={Error} />

        </Switch>
        <Footer />
      </div>
</AuthProvider>
  );
}

export default App;
