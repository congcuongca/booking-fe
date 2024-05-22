import { useState } from 'react'
import { Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Items from './components/Items'
import Footer from './components/Footer'
import Slideshow from './components/Slideshow'
import Infopersonal from './components/Infopersonal'
import HistoryTiket from './components/HistoryTiket'
import Fare from './components/Fare'
import News from './components/News'
import Promotion from './components/Promotion'
import Introduce from './components/Introduce'
import Reservation from './components/Reservations'

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Route exact path='/'>
        <div className='app'>
          <Header/>
          <div className=''>

          </div>
        </div>
      </Route>
    </BrowserRouter>
  )
}

export default App
