import { BrowserRouter, Route, Routes } from "react-router-dom"

import Signin from "./pages/Auth/Signin"
import Signup from "./pages/Auth/Signup"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Orders from "./pages/Orders"
import Carts from "./pages/Carts"
import Home from "./pages/Home"
import Auth from "./pages/Auth/Auth"
import Dashboard from "./pages/Dashboard"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth">
            <Route index element={<Auth />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/orders" element={<Orders />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
