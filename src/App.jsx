import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/FooterFolder/Footer';
import NavBar from './Components/NavBarFolder/NavBar';
import TrendPage from './Components/TrendPageFolder/TrendPage';
import HomePage from './Components/HomePageFolder/HomePage';
import AboutUs from './Components/AboutUsFolder/AboutUs';
import ContactUS from './Components/ContactUsFolder/ContactUS';
import ProductsDetails from './Components/ProductDetailsFolder/ProductsDetails';
import { Cart } from './Components/cart/cart';
import { CartItem } from './Components/cart/cart-item';
import { ProductDetails } from './Components/productDetails/productDetails';
import { Product } from './Components/shop/product';
import { Shop } from './Components/shop/shop';
import { ShopContextProvider } from './context/shop-context';
import SignUp from './Components/SignFolder/SignUp';
import SignIn from './Components/SignFolder/SignIn';
import PaymentMethod from './Components/PaymentFolder/Payment';
// import PayPalPAyment from './Components/PaymentFolder/PayPalPayment';
import CartIcon from './Components/CartFolder/Cart';
import ScrollToTop from './Components/ScrollToTopFolder/ScrollToTop';
// import Cart from './Components/CartFolder/Cart';





function App() {



  return (
  <>
<ScrollToTop>
  <ShopContextProvider>
            <NavBar/>

            <Routes> 
                    <Route path='*' element={ <HomePage/>}/>
                    <Route path='home' element={ <HomePage/>}/>
                    <Route path='trend' element={ <TrendPage/>}/>   
                    <Route path='aboutUs' element={ <AboutUs/>}/>   
                    <Route path='contactUS' element={ <ContactUS/>}/>   
                    <Route path='productDetailes' element={ <ProductsDetails/>}/>
                    <Route path='register' element={ <SignUp/>}/>
                    <Route path='login' element={ <SignIn/>}/>
                    <Route path='cartIcon' element={ <CartIcon/>}/>
                    <Route path='shop' element={ <Shop/>}/>
                    <Route path='cart' element={ <Cart/>}/>
                    <Route path='cartItem' element={ <CartItem/>}/>
                    <Route path='/product/:id' element={ <ProductDetails/>}/>     
                    <Route path='product' element={ <Product/>}/>
                    {/* <Route path='payment' element={ <PayPalPAyment/>}/>      */}
                    <Route path='payment' element={ <PaymentMethod/>}/>       
            </Routes>
          
            <Footer/>
            </ShopContextProvider>
        </ScrollToTop>
  </>
  );
}

export default App;
