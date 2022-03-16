import { Fragment } from 'react'
import Navigator from "./comps/Navigator/Navigator"
import GlobalStyle from "./GlobalStyles"
import Home from './Pages/Home';

function App() {
  return <Fragment>
    <GlobalStyle />
    <Navigator />
    <Home />
  </Fragment>
}

export default App;
