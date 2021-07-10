import Home from './pages/Home'
import { Route } from 'react-router-dom'
import Appbar from './containers/Appbar/Appbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Auth from './pages/Auth';
import Show from './pages/Show';

function App() {
  return (
    <div className="App">
      <Appbar />
      <Route path="/auth"  component={Auth}/>
      <Route path="/show/:id"  component={Show}/>
      <Route path="/" exact component={Home}/>
    </div>
  );
}

export default App;
