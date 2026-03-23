import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import DefaultLayout from './layouts/DefaultLayout'
import SingoliProdotti from './pages/SingoliProdotti'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path='/' element={<Home />} />
            <Route path='/ChiSiamo' element={<ChiSiamo />} />
            <Route path='/Prodotti' element={<Prodotti />} />
            <Route path='/Prodotti/:id' element={<SingoliProdotti />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
