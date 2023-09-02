import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AntdTable from './components/AntdTable'
import AntdForm from './components/AntdForm'


const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/table' element={<AntdTable />} />
            <Route path='/form' element={<AntdForm />} />
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
