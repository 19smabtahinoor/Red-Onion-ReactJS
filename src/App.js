import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route exact path="/"><HomeScreen /></Route>
        <Route exact path="/signin"><SignInScreen /></Route>
        <Route exact path="/signup"><SignUpScreen /></Route>
      </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
