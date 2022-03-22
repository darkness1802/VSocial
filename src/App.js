import { Fragment, useState } from 'react'
import Navigator from "./comps/Navigator/Navigator"
import GlobalStyle from "./GlobalStyles"
import Home from './Pages/Home';
import Login from './Pages/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false)

  return <BrowserRouter>
    <Fragment>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </Fragment>
  </BrowserRouter>
}

export default App;
