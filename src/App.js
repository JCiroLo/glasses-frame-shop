import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Catalogue from './views/Catalogue'
import TestGlasses from './views/TestGlasses'
import Management from './views/Management'
import DetailMount from './views/DetailMount'

import './assets/css/App.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const App = () => (
  <Router>
    <Navbar />
    <div className='Content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/test' component={TestGlasses} />
        <Route exact path='/management' component={Management} />
        <Route exact path='/catalogo' component={Catalogue} />
        <Route exact path='/detail/:id?' component={DetailMount} />
      </Switch>
    </div>
    <Footer />
  </Router>
)

export default App
