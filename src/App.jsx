import AddProduct from "./pages/Admin/AddProduct"
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Search from "./pages/Search/Search"
import ProductDetails from "./pages/Products/ProductDetails"
import Cart from "./pages/Cart/Cart"
import Profile from "./pages/Account/Profile"
import AccountSettings from "./pages/Account/AccountSettings"
import ManageAddress from "./pages/Account/ManageAddress"
const role = localStorage.getItem('role')
function App() {

  return(
    <>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/auth/signup" element={<SignUp/>}/>
        <Route path = "/auth/login" element={<Login/>}/>
        <Route path = "/search-pizzas" element={<Search/>}/>
        <Route path = "/product/:productId" element = {<ProductDetails/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        {
          (role=='ADMIN')?<Route path = "/admin" element={<AddProduct/>}/>:<Route path = "*" element={<NotFound/>}/>
        }
        <Route path = "/profile" element={<Profile/>}>
            <Route path="/profile/account-settings" element={<AccountSettings/>}/>
            <Route path="/profile/manage-address" element={<ManageAddress/>}/>
        </Route>
        <Route path = "*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
