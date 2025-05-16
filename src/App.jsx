import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation} from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home'
import Vozm from './pages/Vozm'
import Us from './pages/Us'
import Footer from './components/Footer/Footer'
import GMain2 from './components/GaleryMain/GMain2'
import GMain3 from './components/GaleryMain/GMain3'
import'./i18n'
function App() {
  const [count, setCount] = useState(0) 

  return (  
    
    <Router>
      <ScrollToElement/>
      <Header/>  
      <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/vozm' element={<Vozm/>}/>
      <Route path='/us' element={<Us/>}/>
      <Route path='/video' element={<GMain2/>}/>
      <Route path='/img' element={<GMain3/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

function ScrollToElement() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Сначала прокрутка в начало
    window.scrollTo(0, 0)

    if (hash) {
      const id = hash.replace('#', '')
      // Немного задержим, чтобы DOM успел отрендериться
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, ) // 100ms — безопасное значение
    }
  }, [pathname, hash])

  return null
}
export default App
