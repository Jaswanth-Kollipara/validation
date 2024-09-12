import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/page2" component={Page2} />
    <Route exact path="/page3" component={Page3} />
    <Route exact path="/page4" component={Page4} />
    <Route component={NotFound} />
  </Switch>
)

export default App