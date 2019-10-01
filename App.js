import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Film from './components/Film';
import Home from './components/Home';

const AppNavigator = createStackNavigator(
{
  Home: Home,
  Film: Film
},
{
  initialRouteName: 'Home',
}
);

const App = createAppContainer(AppNavigator);

export default App;