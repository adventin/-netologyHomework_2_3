import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dropdown from './components/Dropdown'

function App() {

  const listMenu = [
    {
      id: 1,
      title: 'Profile information'
    },
    {
      id: 2,
      title: 'Change password'
    },
    {
      id: 3,
      title: 'Become PRO'
    },
    {
      id: 4,
      title: 'Help'
    },
    {
      id: 5,
      title: 'Log Out'
    }
  ];

  return (
    <div className='container'>
      <Dropdown items={listMenu} />
    </div>
  )
}

export default App
