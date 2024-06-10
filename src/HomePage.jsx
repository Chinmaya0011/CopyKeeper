import React from 'react'
import AddItems from './components/AddItems';
import ChangeBg from './components/ChangeBg';
import { Header } from './components/Header';
import AllItems from './components/AllItems';
const HomePage = () => {
  return (
    <div>
      <Header/>
        <AddItems/>
        <ChangeBg/>
        <AllItems/>
    </div>
  )
}

export default HomePage