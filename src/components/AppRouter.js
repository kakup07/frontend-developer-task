import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />}  />
        <Route path='/dashboard' element={<Dashboard />}  />
      </Routes>
    </Router>
  )
}

export default AppRouter


