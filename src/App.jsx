import AddProduct from "./pages/Admin/AddProduct"
import LoginPresentation from "./pages/Auth/LoginPresentation"
import SignUpPresentation from "./pages/Auth/SignUpPresentation"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
function App() {

  return(
    <>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/auth/signup" element={<SignUpPresentation/>}/>
        <Route path = "/auth/login" element={<LoginPresentation/>}/>
        <Route path = "/admin" element={<AddProduct/>}/>
      </Routes>
    </>
  )
}

export default App
