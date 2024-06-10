import React from 'react'
import HomePage from './HomePage'
import { ItemProvider } from './context/ItemContext.jsx'
const App = () => {
  return (
    <ItemProvider>
    <div>
<HomePage/>
    </div>
 </ItemProvider> )
}

export default App