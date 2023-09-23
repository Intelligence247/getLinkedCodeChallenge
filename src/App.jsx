import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import ContactPage from './Pages/ContactPage/ContactPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import ConfirmationPage from './Pages/ConfirmationPage/ConfirmationPage'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  const baseUrl = "https://backend.getlinked.ai"
const url = `${{baseUrl}}/hackathon/categories-list`
  
axios.get(url).then((response)=>{
  console.log(response)
}).catch((error)=>{
  console.log(error)
})
  return (
    <div className='App'>
<Router>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/confirmation' element={<ConfirmationPage/>}/>
  </Routes>
</Router>
    </div>
  )
}

export default App
