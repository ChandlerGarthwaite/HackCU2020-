import  {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import login from './login'
import menu from './assassin'

const screens = {
  login: {
    screen: login
  },
  menu: {
    screen: menu
  }
}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);