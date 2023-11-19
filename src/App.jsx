import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Service from './pages/Service'
import Booking from './pages/Booking'
import Introduce from './pages/Introduce'
import Login from './pages/Login'
import Register from './pages/Register'
import Shop from './pages/Shop'
import ShopLayout from './layouts/ShopLayout'
import ProductDetail from './components/Product/ProductDetail'
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
              <Home />
            </RootLayout>
          }
        />
        <Route
          path="/service"
          element={
            <RootLayout>
              <Service />
            </RootLayout>
          }
        />
        <Route
          path="/booking"
          element={
            <RootLayout>
              <Booking />
            </RootLayout>
          }
        />
        <Route
          path="/introduce"
          element={
            <RootLayout>
              <Introduce />
            </RootLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
  
        <Route path="/shop">
          <Route
            index
            element={
              <RootLayout>
                <ShopLayout>
                  <Shop />
                </ShopLayout>
              </RootLayout>
            }
          />
          <Route
            path=":id"
            element={
              <RootLayout>
                <ShopLayout>
                  <ProductDetail/>
                </ShopLayout>
              </RootLayout>
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
