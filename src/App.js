import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
import OrderProvider from './contexts/OrderProvider';
import FoodDetailScreen from './screens/FoodDetailScreen';
import HomeScreen from './screens/HomeScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <Navbar />
          <Switch>
            <Route exact path="/"><HomeScreen /></Route>
            <Route exact path="/signin"><SignInScreen /></Route>
            <Route exact path="/signup"><SignUpScreen /></Route>
            <Route exact path="/foods/:title"><FoodDetailScreen /></Route>
            <Route exact path="/orders"><PlaceOrderScreen /></Route>
          </Switch>
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
