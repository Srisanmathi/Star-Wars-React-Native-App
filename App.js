import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Film from './components/Film';
import Home from './components/Home';
import People from './components/People';
import Planet from './components/Planet';

const AppNavigator = createStackNavigator(
{
  Home: Home,
  Film: Film,
  People: People,
  Planet: Planet
},
{
  initialRouteName: 'Home',
}
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
 
    render() {
    return <AppContainer />;
  }
}  
