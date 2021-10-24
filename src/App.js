import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
import DeliveryProvider from './contexts/DeliveryProvider';
import OrderProvider from './contexts/OrderProvider';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import ErrorScreen from './screens/ErrorScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import HomeScreen from './screens/HomeScreen';
import OrderSuccessfulScreen from './screens/OrderSuccessfulScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <DeliveryProvider>
            <Navbar />
            <Switch>
              <Route exact path="/"><HomeScreen /></Route>
              <PublicRoute exact path="/signin"><SignInScreen /></PublicRoute>
              <PublicRoute exact path="/signup"><SignUpScreen /></PublicRoute>
              <PrivateRoute exact path="/foods/:title"><FoodDetailScreen /></PrivateRoute>
              <PrivateRoute exact path="/orders"><PlaceOrderScreen /></PrivateRoute>
              <PrivateRoute exact path="/order-successful"><OrderSuccessfulScreen /></PrivateRoute>
              <PrivateRoute exact path="/admin"><Admin /></PrivateRoute>
              <Route path="*"><ErrorScreen /></Route>
            </Switch>
          </DeliveryProvider>
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
