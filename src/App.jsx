import AddProduct from "./pages/Admin/AddProduct"
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
const role = localStorage.getItem('role')
function App() {

  return(
    <>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/auth/signup" element={<SignUp/>}/>
        <Route path = "/auth/login" element={<Login/>}/>
        {
          (role=='ADMIN')?<Route path = "/admin" element={<AddProduct/>}/>:<Route path = "*" element={<NotFound/>}/>
        }
        
        <Route path = "*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
