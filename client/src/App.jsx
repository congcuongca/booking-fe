import { useState } from 'react'
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
    //<Items imageUrl={'#'} title={"hehe"}/>
    <Reservation/>
  )
}

export default App
