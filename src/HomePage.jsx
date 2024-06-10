import React from 'react'
import AddItems from './components/AddItems';
import ChangeBg from './components/ChangeBg';
import { Header } from './components/Header';
const HomePage = () => {
  return (
    <div>
      <Header/>
        <AddItems/>
        <ChangeBg/>
    </div>
  )
}

export default HomePage