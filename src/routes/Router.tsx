import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Navigation from '../components/Navigation'
import { routes } from './routes'
import ProtectedRoutes from '../components/ProtectedRoutes'
import Product from '../pages/Product'
import UINavigation from '../components/UINavigation'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Router:React.FC = () => {
  return (
    <>
        <Routes>
            {/* <Route path='/' element={<Navigation routes={routes} vertical={false}/>}> */}
            <Route path='/' element={<UINavigation routes={routes}/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='contact' element={<Contact/>}/>
            </Route>

            <Route>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Route>

            <Route path='/product' element={<ProtectedRoutes/>}>
                <Route index element={<Product/>}/>
            </Route>
            
        </Routes>
    </>
  )
}

export default Router