import { Provider, useSelector } from 'react-redux'
import { store } from './redux/store'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ContentForm from './pages/ContentForm'
import Checkout from './pages/Checkout'
import HistoryCmp from './pages/HistoryCmp'
import Cart from './pages/Cart'
import OcrReader from './pages/OcrReader'
import ViewDashboard from './pages/ViewDashboard'

const App = () => {
  let userDetails = useSelector((state) => {
    console.log(state, "statestatestate")
    return state.auth
  })

  let loadGame = useSelector((state) => {
    console.log(state, "statestatestate")
    return state.common.loader
  })


  return <>
    {
      <div class={`w-[100vw] h-[100vh]`}>
        {loadGame == true && <div class={`w-[100%] h-[100%] absolute bg-gray-400 opacity-80 z-50 ${loadGame == true && "bg-gray-400"}`}> <span class={`loader`}></span> </div>}
        <>
          <BrowserRouter>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path="*" element={<NotFound />} />
              {
                userDetails.userLogin && <>
                  <Route path="/dashboard" element={<Layout child={<Dashboard />} />} />
                  <Route path="/ocrreader" element={<Layout child={<OcrReader />} />} />
                  <Route path="/ViewDashboard/:uid" element={<Layout child={<ViewDashboard />} />} />
                  {/* <Route path="/listMyContent" element={<Dashboard />} />
              <Route path="/contentForm" element={<ContentForm />} />
              <Route path="/history" element={<HistoryCmp />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} /> */}
                </>
              }
            </Routes>
          </BrowserRouter>
        </>
      </div>
    }
  </>
}

export default App
