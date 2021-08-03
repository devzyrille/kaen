import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dropdown from './components/Dropdown'
import Footer from './components/Footer'
import About from './components/About'
import FilterableRecipes from './components/FilterableRecipes'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/recipes' component={FilterableRecipes}></Route>
          <Route path='/about' component={About} />
          <Route path='*'></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
