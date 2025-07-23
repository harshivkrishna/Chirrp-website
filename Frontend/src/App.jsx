import React from 'react'
import Hero from './Components/Hero/Hero'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions'

const App = () => {
  return (
    <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
                <Route path='/termsandconditions' element={<TermsAndConditions/>}/>
            </Routes>
    </div>
  )
}

export default App
