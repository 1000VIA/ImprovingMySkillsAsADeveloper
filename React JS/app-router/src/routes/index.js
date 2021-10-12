import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FourOFour from '../views/404';
import Home from '../views/Home';
import PokeDetail from '../views/PokeDetail';
import ScrollToTop from '../components/ScrollToTop'

const Routes = () => {
    return ( 
       <Router>
           <ScrollToTop/>
           <Switch>
               <Route path='/' exact> 
                    <Home/>
                </Route>
                <Route path='/pokemon/:id'>
                    <PokeDetail/>
                </Route>
                <Route>
                    <FourOFour/>
                </Route>
           </Switch>
       </Router>
     );
}
 
export default Routes;