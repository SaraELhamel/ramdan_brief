import React, {useState} from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Home from './app/screens/Home'
import Login from './app/screens/Login'
import SingUp from './app/screens/SingUp'
import Aide from './app/screens/add_aide'
import Place from './app/screens/add_place'


 function HomeScreen() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/singUp' component={SingUp} />
        <Route exact path='/aide' component={Aide} />
        <Route exact path='/place' component={Place} />

      </Switch>
    </NativeRouter>
  );
}
export default HomeScreen
