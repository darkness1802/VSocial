import { Fragment, useState } from 'react'
import Navigator from "./comps/Navigator/Navigator"
import GlobalStyle from "./GlobalStyles"
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false)

  return <Fragment>
    <GlobalStyle />
    <Login />

  </Fragment>
}

export default App;
